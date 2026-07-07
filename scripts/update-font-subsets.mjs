import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const fontDirectory = path.join(root, 'app', 'fonts')
const licenseDirectory = path.join(fontDirectory, 'licenses')
const sourceDirectories = ['app', 'components', 'lib'].map((directory) => path.join(root, directory))
const sourceExtensions = new Set(['.css', '.ts', '.tsx'])
const requiredCharacters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ÁÉÍÓÖŐÚÜŰáéíóöőúüű€–—„”’‘…•✦✓⚖▼←→↑↓'
const browserUserAgent =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'

async function collectSourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const absolutePath = path.join(directory, entry.name)
      if (entry.isDirectory()) return collectSourceFiles(absolutePath)
      return sourceExtensions.has(path.extname(entry.name)) ? [absolutePath] : []
    }),
  )
  return files.flat()
}

async function getGlyphSet() {
  const files = (await Promise.all(sourceDirectories.map(collectSourceFiles))).flat()
  const contents = await Promise.all(files.map((file) => readFile(file, 'utf8')))
  return [...new Set(`${contents.join('')}${requiredCharacters}`)]
    .filter((character) => !/[\u0000-\u001f\u007f]/.test(character))
    .sort()
    .join('')
}

async function fetchText(url) {
  const response = await fetch(url, { headers: { 'User-Agent': browserUserAgent } })
  if (!response.ok) throw new Error(`Request failed (${response.status}): ${url}`)
  return response.text()
}

async function fetchBytes(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Request failed (${response.status}): ${url}`)
  return Buffer.from(await response.arrayBuffer())
}

async function getFontFaces(family, glyphs) {
  const query = new URLSearchParams({ family, text: glyphs, display: 'swap' })
  const css = await fetchText(`https://fonts.googleapis.com/css2?${query}`)
  return [...css.matchAll(/@font-face\s*\{([\s\S]*?)\}/g)].map((match) => {
    const block = match[1]
    const style = block.match(/font-style:\s*([^;]+)/)?.[1]
    const url = block.match(/url\((https:\/\/[^)]+)\)/)?.[1]
    if (!style || !url) throw new Error(`Unexpected Google Fonts response for ${family}`)
    return { style, url }
  })
}

async function writeFont(filename, face) {
  await writeFile(path.join(fontDirectory, filename), await fetchBytes(face.url))
}

await mkdir(licenseDirectory, { recursive: true })
const glyphs = await getGlyphSet()
const [interFaces, monoFaces, playfairFaces] = await Promise.all([
  getFontFaces('Inter:wght@300..700', glyphs),
  getFontFaces('JetBrains Mono:wght@400..700', glyphs),
  getFontFaces('Playfair Display:ital,wght@0,400..700;1,400..700', glyphs),
])

if (interFaces.length !== 1 || monoFaces.length !== 1 || playfairFaces.length !== 2) {
  throw new Error('Unexpected number of generated font faces')
}

const playfairNormal = playfairFaces.find((face) => face.style === 'normal')
const playfairItalic = playfairFaces.find((face) => face.style === 'italic')
if (!playfairNormal || !playfairItalic) throw new Error('Playfair styles are incomplete')

await Promise.all([
  writeFont('inter-subset.woff2', interFaces[0]),
  writeFont('jetbrains-mono-subset.woff2', monoFaces[0]),
  writeFont('playfair-display-normal-subset.woff2', playfairNormal),
  writeFont('playfair-display-italic-subset.woff2', playfairItalic),
  writeFile(
    path.join(licenseDirectory, 'Inter-OFL.txt'),
    await fetchText('https://raw.githubusercontent.com/google/fonts/main/ofl/inter/OFL.txt'),
  ),
  writeFile(
    path.join(licenseDirectory, 'JetBrains-Mono-OFL.txt'),
    await fetchText('https://raw.githubusercontent.com/google/fonts/main/ofl/jetbrainsmono/OFL.txt'),
  ),
  writeFile(
    path.join(licenseDirectory, 'Playfair-Display-OFL.txt'),
    await fetchText('https://raw.githubusercontent.com/google/fonts/main/ofl/playfairdisplay/OFL.txt'),
  ),
])

console.log(`Updated four local font subsets with ${[...glyphs].length} glyphs.`)

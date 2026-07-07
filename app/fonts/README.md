# Local font subsets

These files preserve the site's Inter, JetBrains Mono, and Playfair Display typography while limiting the payload to glyphs used by the Hungarian and English site.

Run `pnpm fonts:subset` after adding new copy or special characters. The script downloads the matching variable-font subsets from Google Fonts and refreshes the bundled OFL license files.

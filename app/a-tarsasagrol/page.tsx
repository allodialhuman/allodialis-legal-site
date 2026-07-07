import { cookies } from 'next/headers'
import { ScrollProgress } from '@/components/scroll-progress'
import { FadeUpObserver } from '@/components/fade-up-observer'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const lang = cookieStore.get('lang')?.value || 'hu'

  return {
    title: lang === 'en' ? 'About the Association — Allodial Civil Rights Association' : 'A Társaságról — Allódiális Polgárjogi Társaság',
    description: lang === 'en'
      ? 'The Allodial Civil Rights Association is a human rights defense organization. Learn about the guiding human rights and humanitarian conventions.'
      : 'Az Allodiális Polgárjogi Társaság emberi jogi jogvédő tevékenységet ellátó szervezet. Ismerje meg az irányadó emberi jogi és humanitárius egyezményeket.',
  }
}

export default async function AboutPage() {
  const cookieStore = await cookies()
  const lang = cookieStore.get('lang')?.value || 'hu'

  const isEn = lang === 'en'

  const humanRightsDocs = [
    {
      title: isEn ? "Universal Declaration of Human Rights" : "Az Emberi Jogok Egyetemes Nyilatkozata",
      info: isEn ? "UN, 1948" : "ENSZ, 1948",
    },
    {
      title: isEn ? "International Covenant on Civil and Political Rights" : "A Polgári és Politikai Jogok Nemzetközi Egyezségokmánya",
      info: isEn ? "UN, 1966 – promulgated in Hungary by Decree-Law No. 8 of 1976" : "ENSZ, 1966 – Magyarországon kihirdette az 1976. évi 8. tvr.",
    },
    {
      title: isEn ? "International Covenant on Economic, Social and Cultural Rights" : "A Gazdasági, Szociális és Kulturális Jogok Nemzetközi Egyezségokmánya",
      info: isEn ? "UN, 1966 – promulgated by Decree-Law No. 9 of 1976" : "ENSZ, 1966 – kihirdette az 1976. évi 9. tvr.",
    },
    {
      title: isEn ? "Convention on the Rights of the Child" : "A Gyermek jogairól szóló egyezmény",
      info: isEn ? "UN, 1989 – promulgated by Act LXIV of 1991" : "ENSZ, 1989 – kihirdette az 1991. évi LXIV. törvény",
    },
    {
      title: isEn ? "Convention against Torture and Other Cruel, Inhuman or Degrading Treatment or Punishment" : "A kínzás és más kegyetlen, embertelen vagy megalázó büntetések vagy bánásmód elleni egyezmény",
      info: isEn ? "UN, 1984 – promulgated by Decree-Law No. 3 of 1988" : "ENSZ, 1984 – kihirdette az 1988. évi 3. tvr.",
    },
    {
      title: isEn ? "Convention for the Protection of Human Rights and Fundamental Freedoms" : "Az emberi jogok és alapvető szabadságok védelméről szóló európai egyezmény",
      info: isEn ? "European Convention on Human Rights, Rome, 1950 – promulgated by Act XXXI of 1993" : "Emberi Jogok Európai Egyezménye, Róma, 1950 – kihirdette az 1993. évi XXXI. törvény",
    },
    {
      title: isEn ? "Charter of Fundamental Rights of the European Union" : "Az Európai Unió Alapjogi Chartája",
      info: "2000/2009",
    },
    {
      title: isEn ? "Fundamental Law of Hungary - 'Freedom and Responsibility' chapter" : "Magyarország Alaptörvényének Szabadság és Felelősség fejezete",
      info: isEn ? "The fundamental rights set out within." : "Az abban rögzített alapvető jogok.",
    },
  ]

  const humanitarianLawDocs = [
    {
      title: isEn ? "The four Geneva Conventions of 1949 for the protection of war victims" : "Az 1949. évi négy genfi egyezmény a háború áldozatainak védelmére",
      desc: isEn 
        ? "On the condition of the wounded and sick in armed forces in the field; on the condition of wounded, sick and shipwrecked members of armed forces at sea; on the treatment of prisoners of war; and on the protection of civilian persons in time of war."
        : "A hadrakelt fegyveres erők sebesültjeinek és betegeinek helyzetéről; a tengeri haderők sebesültjeinek, betegeinek és hajótörötteinek helyzetéről; a hadifoglyokkal való bánásmódról; valamint a polgári lakosság háború idején való védelméről.",
      info: isEn ? "Promulgated in Hungary by Decree-Law No. 32 of 1954" : "Magyarországon kihirdette az 1954. évi 32. tvr.",
    },
    {
      title: isEn ? "Protocols I and II of 1977 Additional to the Geneva Conventions" : "A genfi egyezmények 1977. évi I. és II. kiegészítő jegyzőkönyve",
      desc: isEn 
        ? "Relating to the protection of victims of international and non-international armed conflicts."
        : "A nemzetközi és a nem nemzetközi fegyveres összeütközések áldozatainak védelméről.",
      info: isEn ? "Promulgated by Decree-Law No. 20 of 1989" : "Kihirdette az 1989. évi 20. tvr.",
    },
    {
      title: isEn ? "The Hague Conventions of 1899 and 1907" : "Az 1899. és 1907. évi hágai egyezmények",
      desc: isEn ? "On the laws and customs of war on land." : "A szárazföldi háború törvényeiről és szokásairól.",
      info: isEn ? "Promulgated by Act XLIII of 1913" : "Kihirdette az 1913. évi XLIII. törvénycikk",
    },
    {
      title: isEn ? "Convention on the Prevention and Punishment of the Crime of Genocide" : "A népirtás bűntettének megelőzéséről és megbüntetéséről szóló egyezmény",
      info: isEn ? "UN, 1948 – promulgated by Decree-Law No. 16 of 1955" : "ENSZ, 1948 – kihirdette az 1955. évi 16. tvr.",
    },
  ]

  return (
    <>
      {/* Scroll progress */}
      <ScrollProgress />

      {/* NAVBAR */}
      <SiteHeader />

      {/* Fade-up IntersectionObserver */}
      <FadeUpObserver />

      <main className="w-full min-w-0 overflow-x-clip pt-24 bg-obsidian text-ivory">
        {/* Hero Banner */}
        <section className="relative py-20 md:py-28 overflow-hidden section-obsidian border-b border-gold/10">
          {/* Gold dot texture */}
          <div className="absolute inset-0 gold-dots opacity-[0.02] pointer-events-none" />
          <div className="absolute inset-0 gold-grid opacity-30 pointer-events-none" />

          {/* Subtle glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(201,167,94,0.06) 0%, transparent 70%)' }}
          />

          <div className="site-container site-container--4xl text-center relative z-10 space-y-6">
            <div className="fade-up inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/20 bg-deep-navy/40 backdrop-blur-md shadow-[0_0_20px_-6px_rgba(201,167,94,0.25)]">
              <span className="font-mono-data text-[10px] uppercase tracking-[0.2em] text-gold-light">
                {isEn ? 'Introduction' : 'Bemutatkozás'}
              </span>
            </div>

            <h1 className="fade-up font-serif-display text-4xl sm:text-5xl font-bold tracking-tight text-ivory leading-tight">
              {isEn ? 'About the ' : 'A '}
              <span className="gold-gradient-text italic">
                {isEn ? 'Association' : 'Társaságról'}
              </span>
            </h1>

            <div className="fade-up ornament-divider">
              <span className="text-gold/60 text-xs">✦</span>
            </div>

            <p className="fade-up text-cream/70 text-sm sm:text-base font-mono-data tracking-wide uppercase">
              {isEn ? 'ALLODIAL CIVIL RIGHTS ASSOCIATION' : 'ALLÓDIÁLIS POLGÁRJOGI TÁRSASÁG'}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 relative">
          {/* Subtle floating background glows */}
          <div
            className="absolute top-1/4 left-10 w-[400px] h-[400px] rounded-full pointer-events-none opacity-40"
            style={{ background: 'radial-gradient(circle, rgba(201,167,94,0.04) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-1/4 right-10 w-[400px] h-[400px] rounded-full pointer-events-none opacity-40"
            style={{ background: 'radial-gradient(circle, rgba(60,90,160,0.05) 0%, transparent 70%)' }}
          />

          <div className="site-container site-container--4xl space-y-16 relative z-10">

            {/* Intro text */}
            <div className="fade-up premium-card p-8 sm:p-10 ornate-frame rounded-sm">
              <div className="corner-tr" />
              <div className="corner-bl" />

              <div className="space-y-6 text-cream/90 leading-relaxed font-light text-base md:text-lg">
                <p>
                  {isEn ? (
                    <>
                      The <strong>Allodial Civil Rights Association</strong> is an organization performing human rights advocacy and protection.
                    </>
                  ) : (
                    <>
                      Az <strong>Allodiális Polgárjogi Társaság</strong> emberi jogi jogvédő tevékenységet ellátó szervezet.
                    </>
                  )}
                </p>
                <p>
                  {isEn ? (
                    <>
                      The Association carries out its duties in accordance with the Declaration on Human Rights Defenders (<em>Declaration on Human Rights Defenders, A/RES/53/144</em>) adopted by the UN General Assembly on December 9, 1998, which recognizes the right of every person, individually and in association with others, to promote and to strive for the protection and realization of human rights and fundamental freedoms at the national and international levels.
                    </>
                  ) : (
                    <>
                      A Társaság a feladatát az ENSZ Közgyűlése által 1998. december 9-én elfogadott, az emberi jogok védelmezőiről szóló nyilatkozattal (<em>Declaration on Human Rights Defenders, A/RES/53/144</em>) összhangban látja el, amely elismeri minden személy jogát arra, hogy – egyénileg vagy másokkal együtt – előmozdítsa az emberi jogok és alapvető szabadságok védelmét és érvényesülését nemzeti és nemzetközi szinten.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* List 1: Human Rights Documents */}
            <div className="fade-up space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gold/40" />
                <h2 className="font-serif-display text-xl sm:text-2xl font-semibold tracking-wide text-gold">
                  {isEn ? 'Human Rights Documents and Standards' : 'Emberi Jogi Dokumentumok és Normák'}
                </h2>
              </div>
              <p className="text-cream/70 text-sm font-light leading-relaxed max-w-2xl">
                {isEn 
                  ? "During its activities, the Association acts in accordance with the principles and standards contained in the following international human rights documents:"
                  : "A Társaság tevékenysége során az alábbi nemzetközi emberi jogi dokumentumokban foglalt elvek és normák szerint jár el:"
                }
              </p>

              <div className="grid gap-4">
                {humanRightsDocs.map((doc, idx) => (
                  <div
                    key={idx}
                    className="premium-card p-5 rounded-sm flex items-start gap-4 transition-all duration-300 hover:border-gold/30"
                  >
                    <div className="w-6 h-6 rounded-full bg-gold/5 border border-gold/30 flex items-center justify-center text-gold text-xs font-mono-data shrink-0 mt-0.5 shadow-[0_0_10px_rgba(201,167,94,0.15)]">
                      ✦
                    </div>
                    <div>
                      <h3 className="text-ivory font-semibold text-sm sm:text-base leading-snug">
                        {doc.title}
                      </h3>
                      <p className="text-xs text-gold-light/60 mt-1 font-light tracking-wide">
                        {doc.info}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* List 2: Humanitarian Law */}
            <div className="fade-up space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gold/40" />
                <h2 className="font-serif-display text-xl sm:text-2xl font-semibold tracking-wide text-gold">
                  {isEn ? 'International Humanitarian Law (The Law of Armed Conflict)' : 'Nemzetközi Humanitárius Jog (A fegyveres konfliktusok joga)'}
                </h2>
              </div>
              <p className="text-cream/70 text-sm font-light leading-relaxed max-w-2xl">
                {isEn
                  ? "The Association also considers guided in its principles by the fundamental conventions of international humanitarian law, which protect the victims of war – the wounded, prisoners of war, and the civilian population – and establish the humanitarian rules of warfare:"
                  : "A Társaság elveiben irányadónak tekinti továbbá a nemzetközi humanitárius jog (a fegyveres konfliktusok joga) alapvető egyezményeit is, amelyek a háború áldozatainak – a sebesülteknek, a hadifoglyoknak és a polgári lakosságnak – a védelmét, valamint a hadviselés emberiességi szabályait rögzítik:"
                }
              </p>

              <div className="grid gap-4">
                {humanitarianLawDocs.map((doc, idx) => (
                  <div
                    key={idx}
                    className="premium-card p-5 rounded-sm flex items-start gap-4 transition-all duration-300 hover:border-gold/30"
                  >
                    <div className="w-6 h-6 rounded-full bg-gold/5 border border-gold/30 flex items-center justify-center text-gold text-xs font-mono-data shrink-0 mt-0.5 shadow-[0_0_10px_rgba(201,167,94,0.15)]">
                      ✦
                    </div>
                    <div>
                      <h3 className="text-ivory font-semibold text-sm sm:text-base leading-snug">
                        {doc.title}
                      </h3>
                      {doc.desc && (
                        <p className="text-xs text-cream/60 mt-1 leading-relaxed font-light font-sans">
                          {doc.desc}
                        </p>
                      )}
                      <p className="text-xs text-gold-light/60 mt-1.5 font-light tracking-wide">
                        {doc.info}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing statement */}
            <div className="fade-up border border-gold/25 bg-gold/5 rounded-sm p-8 sm:p-10 text-center space-y-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient(circle, rgba(201,167,94,0.03) 0%, transparent 70%) pointer-events-none" />

              <div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center border border-gold/30 bg-gold/10 text-gold text-lg shadow-[0_0_15px_-3px_rgba(201,167,94,0.4)]">
                ⚖
              </div>

              <p className="text-cream/90 leading-relaxed font-serif-display text-lg sm:text-xl italic max-w-3xl mx-auto">
                {isEn 
                  ? "“In the spirit of these documents, the Association assists persons who turn to it in understanding and enforcing their rights through peaceful and lawful means.”"
                  : "„A Társaság e dokumentumok szellemében, békés és jogszerű eszközökkel segíti a hozzá forduló személyeket jogaik megismerésében és érvényesítésében.”"
                }
              </p>

              <div className="pt-4">
                <a
                  href="/#kapcsolat"
                  className="btn-sovereign btn-gold inline-block px-8 py-3.5 text-obsidian font-bold uppercase tracking-[0.18em] text-xs rounded-sm"
                >
                  {isEn ? 'Contact Us' : 'Kapcsolatfelvétel'}
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

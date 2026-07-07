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
    title: lang === 'en' ? 'Privacy Notice — Allodial Civil Rights Association' : 'Adatvédelmi Tájékoztató — Allódiális Polgárjogi Társaság',
    description: lang === 'en'
      ? 'Privacy and data processing policy of the Allodial Civil Rights Association. Learn about our data processing rules, purposes, and your rights.'
      : 'Az Allodiális Polgárjogi Társaság adatvédelmi és adatkezelési tájékoztatója. Ismerje meg az adatkezelési irányelveinket, céljait és az Önt megillető jogokat.',
  }
}

export default async function PrivacyPolicyPage() {
  const cookieStore = await cookies()
  const lang = cookieStore.get('lang')?.value || 'hu'

  const isEn = lang === 'en'

  const definitions = [
    {
      term: isEn ? "Personal data" : "Személyes adat",
      def: isEn 
        ? "Any information relating to an identified or identifiable natural person ('data subject') (e.g., name, email address, telephone number, IP address)."
        : "Azonosított vagy azonosítható természetes személyre („érintett”) vonatkozó bármely információ (pl. név, e-mail cím, telefonszám, IP-cím).",
    },
    {
      term: isEn ? "Special categories of data" : "Különleges adat",
      def: isEn 
        ? "Data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, genetic and biometric data, health data or data concerning a natural person's sex life or sexual orientation."
        : "A faji vagy etnikai származásra, politikai véleményre, vallási vagy világnézeti meggyőződésre, szakszervezeti tagságra, egészségügyi állapotra, szexuális életre vagy irányultságra utaló, valamint genetikai és biometrikus adat.",
    },
    {
      term: isEn ? "Processing" : "Adatkezelés",
      def: isEn 
        ? "Any operation or set of operations performed on personal data (collection, recording, storage, use, transmission, erasure, etc.)."
        : "A személyes adatokon végzett bármely művelet (gyűjtés, rögzítés, tárolás, felhasználás, továbbítás, törlés stb.).",
    },
    {
      term: isEn ? "Controller" : "Adatkezelő",
      def: isEn 
        ? "Who determines the purposes and means of the processing of personal data."
        : "Aki az adatkezelés céljait és eszközeit meghatározza.",
    },
    {
      term: isEn ? "Processor" : "Adatfeldolgozó",
      def: isEn 
        ? "Who processes personal data on behalf of the controller (e.g., hosting provider)."
        : "Aki az adatkezelő nevében személyes adatokat kezel (pl. tárhelyszolgáltató).",
    },
    {
      term: isEn ? "Consent of the data subject" : "Érintett hozzájárulása",
      def: isEn 
        ? "Any freely given, specific, informed and unambiguous indication of the data subject's wishes."
        : "Az érintett akaratának önkéntes, konkrét, megfelelő tájékoztatáson alapuló és egyértelmű kinyilvánítása.",
    },
  ]

  const rights = [
    {
      letter: "a",
      title: isEn ? "Right to information and access" : "Tájékoztatáshoz és hozzáféréshez való jog",
      ref: "GDPR 15. cikk",
      desc: isEn 
        ? "The data subject has the right to obtain confirmation as to whether or not personal data concerning them are being processed, and access to a copy of the processed data."
        : "Az érintett visszajelzést kérhet arról, hogy személyes adatainak kezelése folyamatban van-e, és jogosult a kezelt adatairól másolatot kérni.",
    },
    {
      letter: "b",
      title: isEn ? "Right to rectification" : "Helyesbítéshez való jog",
      ref: "GDPR 16. cikk",
      desc: isEn 
        ? "The data subject has the right to obtain the rectification of inaccurate personal data, and to have incomplete personal data completed."
        : "Az érintett kérheti pontatlan adatainak helyesbítését, illetve hiányos adatainak kiegészítését.",
    },
    {
      letter: "c",
      title: isEn ? "Right to erasure ('right to be forgotten')" : "Törléshez való jog („az elfeledtetéshez való jog”)",
      ref: "GDPR 17. cikk",
      desc: isEn 
        ? "The data subject has the right to obtain the erasure of personal data concerning them if the purpose of processing has ceased, consent is withdrawn, or processing is unlawful. (Not applicable if processing is necessary for compliance with a legal obligation or for the establishment of legal claims)."
        : "Az érintett kérheti adatainak törlését, ha az adatkezelés célja megszűnt, ha hozzájárulását visszavonta, vagy ha az adatkezelés jogellenes. (Nem alkalmazható jogi kötelezettség vagy jogi igények érvényesítése esetén).",
    },
    {
      letter: "d",
      title: isEn ? "Right to restriction of processing" : "Az adatkezelés korlátozásához való jog",
      ref: "GDPR 18. cikk",
      desc: isEn 
        ? "The data subject has the right to obtain restriction of processing, for example, if they contest the accuracy of the personal data, or if processing is unlawful but they oppose erasure."
        : "Az érintett kérheti az adatkezelés korlátozását, például ha vitatja az adatok pontosságát, vagy ha a jogellenes adatkezelés ellenére nem törlést kér.",
    },
    {
      letter: "e",
      title: isEn ? "Right to data portability" : "Adathordozhatósághoz való jog",
      ref: "GDPR 20. cikk",
      desc: isEn 
        ? "The data subject has the right to receive the personal data concerning them, which they have provided, in a structured, commonly used and machine-readable format."
        : "Az érintett jogosult a hozzájárulás vagy szerződés alapján, automatizált módon kezelt adatait tagolt, széles körben használt, géppel olvasható formátumban megkapni.",
    },
    {
      letter: "f",
      title: isEn ? "Right to object" : "Tiltakozáshoz való jog",
      ref: "GDPR 21. cikk",
      desc: isEn 
        ? "The data subject has the right to object, on grounds relating to their particular situation, at any time to processing of personal data concerning them based on legitimate interests."
        : "Az érintett saját helyzetével kapcsolatos okokból bármikor tiltakozhat a jogos érdeken alapuló adatkezelés ellen.",
    },
    {
      letter: "g",
      title: isEn ? "Right to withdraw consent" : "Hozzájárulás visszavonásának joga",
      ref: "GDPR 7. cikk (3)",
      desc: isEn 
        ? "The data subject has the right to withdraw their consent at any time; the withdrawal of consent does not affect the lawfulness of processing based on consent before its withdrawal."
        : "Az érintett hozzájárulását bármikor visszavonhatja; a visszavonás nem érinti a visszavonás előtti adatkezelés jogszerűségét.",
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
                {isEn ? 'Legal Notices' : 'Jogi nyilatkozatok'}
              </span>
            </div>

            <h1 className="fade-up font-serif-display text-4xl sm:text-5xl font-bold tracking-tight text-ivory leading-tight uppercase">
              {isEn ? 'Privacy ' : 'Adatvédelmi '}
              <span className="gold-gradient-text italic">
                {isEn ? 'Notice' : 'Tájékoztató'}
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

            {/* 1. Bevezetés */}
            <div className="fade-up space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gold/40" />
                <h2 className="font-serif-display text-xl sm:text-2xl font-semibold tracking-wide text-gold">
                  {isEn ? '1. Introduction' : '1. Bevezetés'}
                </h2>
              </div>
              
              <div className="premium-card p-6 sm:p-8 rounded-sm space-y-4 text-cream/80 leading-relaxed font-light font-sans text-sm">
                <p>
                  {isEn ? (
                    <>
                      The <strong>Allodial Civil Rights Association</strong> (hereinafter: Controller or Association) is an organization performing human rights advocacy and protection. The Association is committed to protecting the personal data of its clients, website visitors, supporters, and partners, and considers the respect for the data subjects' right to information self-determination as highly important.
                    </>
                  ) : (
                    <>
                      Az <strong>Allodiális Polgárjogi Társaság</strong> (a továbbiakban: Adatkezelő vagy Társaság) emberi jogi jogvédő tevékenységet ellátó szervezet. A Társaság elkötelezett a hozzá forduló személyes, a honlap látogatói, támogatói és partnerei személyes adatainak védelme iránt, és kiemelten fontosnak tartja az érintettek információs önrendelkezési jogának tiszteletben tartását.
                    </>
                  )}
                </p>
                <p>
                  {isEn ? (
                    <>
                      The purpose of this notice is to ensure that data subjects receive clear, comprehensible, and detailed information prior to the commencement of data processing regarding what personal data the Association processes, for what purposes, on what legal bases, and for how long, as well as what rights they have in connection with the data processing.
                    </>
                  ) : (
                    <>
                      Jelen tájékoztató célja, hogy az érintettek még az adatkezelés megkezdése előtt világos, közérthető és részletes tájékoztatást kapjanak arról, hogy a Társaság milyen személyes adatokat, milyen célból, milyen jogalapon és meddig kezel, valamint milyen jogok illetik meg őket az adatkezeléssel összefüggésben.
                    </>
                  )}
                </p>
                <p className="text-xs text-gold-light/80 pt-2 border-t border-gold/10 font-mono-data uppercase tracking-wider">
                  {isEn ? 'The Controller processes personal data in accordance with the following regulations:' : 'Az Adatkezelő a személyes adatokat az alábbi jogszabályokkal összhangban kezeli:'}
                </p>
                <ul className="space-y-2 text-sm text-cream/70 font-light pl-1">
                  <li className="flex items-start gap-3">
                    <span className="text-gold shrink-0 mt-1">✦</span>
                    <span>
                      {isEn 
                        ? "Regulation (EU) 2016/679 of the European Parliament and of the Council on the protection of natural persons with regard to the processing of personal data and on the free movement of such data (GDPR – General Data Protection Regulation);"
                        : "az Európai Parlament és a Tanács (EU) 2016/679 rendelete a természetes személyeknek a személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok szabad áramlásáról (GDPR – általános adatvédelmi rendelet);"
                      }
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold shrink-0 mt-1">✦</span>
                    <span>
                      {isEn 
                        ? "Act CXII of 2011 on the Right to Information Self-Determination and on Freedom of Information (Infotv.);"
                        : "az információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény (Infotv.);"
                      }
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold shrink-0 mt-1">✦</span>
                    <span>
                      {isEn 
                        ? "Act V of 2013 on the Civil Code of Hungary (Ptk.);"
                        : "a Polgári Törvénykönyvről szóló 2013. évi V. törvény (Ptk.);"
                      }
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold shrink-0 mt-1">✦</span>
                    <span>
                      {isEn 
                        ? "Act CVIII of 2001 on certain issues of electronic commerce services and information society services (Ekertv.)."
                        : "az elektronikus kereskedelmi szolgáltatások, valamint az információs társadalommal összefüggő szolgáltatások egyes kérdéseiről szóló 2001. évi CVIII. törvény (Ekertv.)."
                      }
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Az Adatkezelő adatai */}
            <div className="fade-up space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gold/40" />
                <h2 className="font-serif-display text-xl sm:text-2xl font-semibold tracking-wide text-gold">
                  {isEn ? '2. Data of the Controller' : '2. Az Adatkezelő adatai'}
                </h2>
              </div>

              <div className="overflow-x-auto border border-gold/20 rounded-sm">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-gold/25 bg-gold/5 font-serif-display text-gold tracking-wide">
                      <th className="p-4 font-semibold">{isEn ? 'Description' : 'Megnevezés'}</th>
                      <th className="p-4 font-semibold">{isEn ? 'Data' : 'Adat'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gold/10 font-light text-cream/80">
                    <tr className="hover:bg-gold/5 transition-colors duration-200">
                      <td className="p-4 font-medium text-ivory">{isEn ? 'Name of Controller' : 'Adatkezelő neve'}</td>
                      <td className="p-4">{isEn ? 'Allodial Civil Rights Association' : 'Allodiális Polgárjogi Társaság'}</td>
                    </tr>
                    <tr className="hover:bg-gold/5 transition-colors duration-200">
                      <td className="p-4 font-medium text-ivory">{isEn ? 'Representative' : 'Képviselő'}</td>
                      <td className="p-4">{isEn ? 'Bálint Fodor – administrator' : 'Fodor Bálint – adminisztrátor'}</td>
                    </tr>
                    <tr className="hover:bg-gold/5 transition-colors duration-200">
                      <td className="p-4 font-medium text-ivory">{isEn ? 'Email address' : 'E-mail cím'}</td>
                      <td className="p-4">
                        <a
                          href="mailto:allodialhumanrights@protonmail.com"
                          className="text-gold hover:text-gold-light underline transition-colors"
                        >
                          allodialhumanrights@protonmail.com
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. Fogalommeghatározások */}
            <div className="fade-up space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gold/40" />
                <h2 className="font-serif-display text-xl sm:text-2xl font-semibold tracking-wide text-gold">
                  {isEn ? '3. Definitions' : '3. Fogalommeghatározások'}
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {definitions.map((item, idx) => (
                  <div key={idx} className="premium-card p-5 rounded-sm flex flex-col justify-between hover:border-gold/30">
                    <h3 className="font-serif-display text-base font-semibold text-gold tracking-wide mb-3">
                      {item.term}
                    </h3>
                    <p className="text-xs text-cream/70 leading-relaxed font-light">
                      {item.def}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Az egyes adatkezelések */}
            <div className="fade-up space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gold/40" />
                <h2 className="font-serif-display text-xl sm:text-2xl font-semibold tracking-wide text-gold">
                  {isEn ? '4. Specific Data Processing Operations' : '4. Az egyes adatkezelések'}
                </h2>
              </div>

              <div className="space-y-6">
                {/* 4.1 */}
                <div className="premium-card p-6 sm:p-8 rounded-sm space-y-6">
                  <h3 className="font-serif-display text-lg font-bold text-gold flex items-center gap-3">
                    <span className="text-[11px] font-mono-data px-2 py-0.5 rounded border border-gold/30 bg-gold/5 text-gold-light">4.1</span>
                    {isEn ? 'Handling Advocacy and Legal Aid Inquiries' : 'Jogvédelmi, jogsegély jellegű megkeresések kezelése'}
                  </h3>
                  <p className="text-sm font-light text-cream/70 leading-relaxed">
                    {isEn
                      ? "As part of its human rights defense activities, the Association accepts inquiries from persons who have suffered rights violations or seek legal assistance."
                      : "A Társaság emberi jogi jogvédő tevékenysége körében fogadja a jogsérelmet szenvedett vagy jogi segítséget kérő személyek megkereséseit."
                    }
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2 text-xs font-light text-cream/80 pt-4 border-t border-gold/10 font-sans">
                    <div className="space-y-1">
                      <span className="font-mono-data uppercase tracking-wider text-[10px] text-gold-light/60 block">
                        {isEn ? 'Processed Data' : 'Kezelt adatok köre'}
                      </span>
                      <p className="text-ivory leading-relaxed">
                        {isEn 
                          ? "Name, contact details (email, phone, address), description of the case and documents attached thereto, as well as other data voluntarily provided by the data subject due to the nature of the case."
                          : "Név, elérhetőségi adatok (e-mail, telefon, lakcím), az ügy leírása és az ahhoz csatolt dokumentumok, valamint az ügy jellegéből fakadóan az érintett által önkéntesen közölt egyéb adatok."
                        }
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono-data uppercase tracking-wider text-[10px] text-gold-light/60 block">
                        {isEn ? 'Purpose of Processing' : 'Adatkezelés célja'}
                      </span>
                      <p className="text-ivory leading-relaxed">
                        {isEn
                          ? "Receiving, investigating the inquiry, providing legal information and advocacy assistance, and maintaining contact."
                          : "A megkeresés fogadása, kivizsgálása, jogi tájékoztatás és jogvédelmi segítségnyújtás, kapcsolattartás."
                        }
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono-data uppercase tracking-wider text-[10px] text-gold-light/60 block">
                        {isEn ? 'Legal Basis' : 'Jogalap'}
                      </span>
                      <p className="text-ivory leading-relaxed">
                        {isEn
                          ? "Consent of the data subject (GDPR Article 6(1)(a)); in the case of a contract-like mandate, GDPR Article 6(1)(b); in the case of the establishment or defense of legal claims, legitimate interest pursuant to GDPR Article 6(1)(f)."
                          : "Az érintett hozzájárulása (GDPR 6. cikk (1) a) pont); szerződés jellegű megbízás esetén a GDPR 6. cikk (1) b) pontja; jogi igények érvényesítése esetén a GDPR 6. cikk (1) f) pontja szerinti jogos érdek."
                        }
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono-data uppercase tracking-wider text-[10px] text-gold-light/60 block">
                        {isEn ? 'Duration of Processing' : 'Adatkezelés időtartama'}
                      </span>
                      <p className="text-ivory leading-relaxed">
                        {isEn
                          ? "5 years from the closure of the case (general limitation period under Hungarian law), or until consent is withdrawn."
                          : "Az ügy lezárásától számított 5 év (általános elévülési idő), illetve a hozzájárulás visszavonásáig."
                        }
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gold/10">
                    <p className="text-xs text-cream/65 italic leading-relaxed">
                      <strong>{isEn ? 'Processing of Special Categories of Data:' : 'Különleges adatok kezelése:'}</strong>{' '}
                      {isEn 
                        ? "Due to the nature of advocacy activities, the case presented by the data subject may contain special categories of data (e.g., data on ethnic origin, health status, religious or philosophical beliefs). The Association processes these solely based on the data subject's explicit consent (GDPR Article 9(2)(a)), or for the establishment, exercise or defense of legal claims (GDPR Article 9(2)(f)), under strict confidentiality."
                        : "A jogvédelmi tevékenység jellegéből adódóan az érintett által előadott ügy különleges adatokat is tartalmazhat (pl. etnikai származásra, egészségi állapotra, világnézeti meggyőződésre vonatkozó adat). Ezeket a Társaság kizárólag az érintett kifejezett hozzájárulása alapján (GDPR 9. cikk (2) a) pont), illetve jogi igények előterjesztése, érvényesítése vagy védelme érdekében (GDPR 9. cikk (2) f) pont) kezeli, fokozott bizalmassággal és titoktartás mellett."
                      }
                    </p>
                  </div>
                </div>

                {/* 4.2 */}
                <div className="premium-card p-6 sm:p-8 rounded-sm space-y-6">
                  <h3 className="font-serif-display text-lg font-bold text-gold flex items-center gap-3">
                    <span className="text-[11px] font-mono-data px-2 py-0.5 rounded border border-gold/30 bg-gold/5 text-gold-light">4.2</span>
                    {isEn ? 'Contact (Email, Webform, Phone)' : 'Kapcsolatfelvétel (e-mail, űrlap, telefon)'}
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2 text-xs font-light text-cream/80 font-sans">
                    <div className="space-y-1">
                      <span className="font-mono-data uppercase tracking-wider text-[10px] text-gold-light/60 block">{isEn ? 'Processed Data' : 'Kezelt adatok köre'}</span>
                      <p className="text-ivory leading-relaxed">{isEn ? 'Name, email address, telephone number (if provided), content of message.' : 'Név, e-mail cím, telefonszám (ha megadja), az üzenet tartalma.'}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono-data uppercase tracking-wider text-[10px] text-gold-light/60 block">{isEn ? 'Purpose of Processing' : 'Adatkezelés célja'}</span>
                      <p className="text-ivory leading-relaxed">{isEn ? 'Answering inquiries, maintaining communication.' : 'A megkeresés megválaszolása, kapcsolattartás.'}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono-data uppercase tracking-wider text-[10px] text-gold-light/60 block">{isEn ? 'Legal Basis' : 'Jogalap'}</span>
                      <p className="text-ivory leading-relaxed">{isEn ? "Consent of the data subject (GDPR Article 6(1)(a))." : 'Az érintett hozzájárulása (GDPR 6. cikk (1) a) pont).'}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono-data uppercase tracking-wider text-[10px] text-gold-light/60 block">{isEn ? 'Duration of Processing' : 'Adatkezelés időtartama'}</span>
                      <p className="text-ivory leading-relaxed">{isEn ? "1 year following the resolution of the inquiry, or until consent is withdrawn." : 'A megkeresés elintézését követő 1 év, illetve a hozzájárulás visszavonásáig.'}</p>
                    </div>
                  </div>
                </div>

                {/* 4.3 */}
                <div className="premium-card p-6 sm:p-8 rounded-sm space-y-6">
                  <h3 className="font-serif-display text-lg font-bold text-gold flex items-center gap-3">
                    <span className="text-[11px] font-mono-data px-2 py-0.5 rounded border border-gold/30 bg-gold/5 text-gold-light">4.3</span>
                    {isEn ? 'Newsletters and Informational Updates' : 'Hírlevél, tájékoztatók küldése (ha a honlapon elérhető)'}
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2 text-xs font-light text-cream/80 font-sans">
                    <div className="space-y-1">
                      <span className="font-mono-data uppercase tracking-wider text-[10px] text-gold-light/60 block">{isEn ? 'Processed Data' : 'Kezelt adatok köre'}</span>
                      <p className="text-ivory leading-relaxed">{isEn ? 'Name, email address, timestamp of subscription.' : 'Név, e-mail cím, feliratkozás időpontja.'}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono-data uppercase tracking-wider text-[10px] text-gold-light/60 block">{isEn ? 'Purpose of Processing' : 'Adatkezelés célja'}</span>
                      <p className="text-ivory leading-relaxed">{isEn ? "Sending updates about the Association's activities, events, and calls." : 'A Társaság tevékenységéről, eseményeiről, felhívásairól szóló tájékoztatás küldése.'}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono-data uppercase tracking-wider text-[10px] text-gold-light/60 block">{isEn ? 'Legal Basis' : 'Jogalap'}</span>
                      <p className="text-ivory leading-relaxed">{isEn ? "Consent of the data subject (GDPR Article 6(1)(a))." : 'Az érintett hozzájárulása (GDPR 6. cikk (1) a) pont).'}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono-data uppercase tracking-wider text-[10px] text-gold-light/60 block">{isEn ? 'Duration of Processing' : 'Adatkezelés időtartama'}</span>
                      <p className="text-ivory leading-relaxed">{isEn ? "Until consent is withdrawn (unsubscribing); unsubscription is possible via link at the bottom of any newsletter or by contacting the Controller." : 'A hozzájárulás visszavonásáig (leiratkozásig); a leiratkozás minden hírlevél alján, illetve az Adatkezelő elérhetőségein bármikor lehetséges.'}</p>
                    </div>
                  </div>
                </div>

                {/* 4.4 */}
                <div className="premium-card p-6 sm:p-8 rounded-sm space-y-6">
                  <h3 className="font-serif-display text-lg font-bold text-gold flex items-center gap-3">
                    <span className="text-[11px] font-mono-data px-2 py-0.5 rounded border border-gold/30 bg-gold/5 text-gold-light">4.4</span>
                    {isEn ? 'Donations and Financial Support' : 'Adományozás, támogatás'}
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2 text-xs font-light text-cream/80 font-sans">
                    <div className="space-y-1">
                      <span className="font-mono-data uppercase tracking-wider text-[10px] text-gold-light/60 block">{isEn ? 'Processed Data' : 'Kezelt adatok köre'}</span>
                      <p className="text-ivory leading-relaxed">{isEn ? 'Name, email address, bank account / transaction details, amount of donation.' : 'Név, e-mail cím, bankszámlaadatok / tranzakciós adatok, az adomány összege.'}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono-data uppercase tracking-wider text-[10px] text-gold-light/60 block">{isEn ? 'Purpose of Processing' : 'Adatkezelés célja'}</span>
                      <p className="text-ivory leading-relaxed">{isEn ? 'Receiving and recording donations, fulfilling accounting obligations, sending acknowledgments.' : 'Az adományok fogadása, nyilvántartása, számviteli kötelezettségek teljesítése, köszönetnyilvánítás.'}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono-data uppercase tracking-wider text-[10px] text-gold-light/60 block">{isEn ? 'Legal Basis' : 'Jogalap'}</span>
                      <p className="text-ivory leading-relaxed">{isEn ? "Fulfillment of contract (GDPR Article 6(1)(b)) and compliance with legal obligation (GDPR Article 6(1)(c) - Section 169 of the Hungarian Accounting Act)." : 'Szerződés teljesítése (GDPR 6. cikk (1) b) pont), valamint jogi kötelezettség teljesítése (GDPR 6. cikk (1) c) pont – Számv. tv. 169. §).'}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono-data uppercase tracking-wider text-[10px] text-gold-light/60 block">{isEn ? 'Duration of Processing' : 'Adatkezelés időtartama'}</span>
                      <p className="text-ivory leading-relaxed">{isEn ? "8 years for accounting documents." : 'A számviteli bizonylatok tekintetében 8 év.'}</p>
                    </div>
                  </div>
                </div>

                {/* 4.5 */}
                <div className="premium-card p-6 sm:p-8 rounded-sm space-y-6">
                  <h3 className="font-serif-display text-lg font-bold text-gold flex items-center gap-3">
                    <span className="text-[11px] font-mono-data px-2 py-0.5 rounded border border-gold/30 bg-gold/5 text-gold-light">4.5</span>
                    {isEn ? 'Membership and Volunteer Applications' : 'Tagsági, önkéntesi jelentkezések'}
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2 text-xs font-light text-cream/80 font-sans">
                    <div className="space-y-1">
                      <span className="font-mono-data uppercase tracking-wider text-[10px] text-gold-light/60 block">{isEn ? 'Processed Data' : 'Kezelt adatok köre'}</span>
                      <p className="text-ivory leading-relaxed">{isEn ? 'Name, birth details, address, contact details, other details required for application.' : 'Név, születési adatok, lakcím, elérhetőségek, a jelentkezéshez szükséges egyéb adatok.'}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono-data uppercase tracking-wider text-[10px] text-gold-light/60 block">{isEn ? 'Purpose of Processing' : 'Adatkezelés célja'}</span>
                      <p className="text-ivory leading-relaxed">{isEn ? 'Establishing and maintaining membership/volunteer relationship, contact.' : 'A tagsági/önkéntesi jogviszony létesítése, nyilvántartása, kapcsolattartás.'}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono-data uppercase tracking-wider text-[10px] text-gold-light/60 block">{isEn ? 'Legal Basis' : 'Jogalap'}</span>
                      <p className="text-ivory leading-relaxed">{isEn ? "Fulfillment of contract (GDPR Article 6(1)(b)), or compliance with legal obligation (membership record keeping pursuant to Act CLXXV of 2011 on Association Rights)." : 'Szerződés teljesítése (GDPR 6. cikk (1) b) pont), illetve jogi kötelezettség (az egyesülési jogról szóló 2011. évi CLXXV. törvény szerinti tagnyilvántartás).'}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono-data uppercase tracking-wider text-[10px] text-gold-light/60 block">{isEn ? 'Duration of Processing' : 'Adatkezelés időtartama'}</span>
                      <p className="text-ivory leading-relaxed">{isEn ? "5 years following termination of the relationship." : 'A jogviszony megszűnését követő 5 év.'}</p>
                    </div>
                  </div>
                </div>

                {/* 4.6 */}
                <div className="premium-card p-6 sm:p-8 rounded-sm space-y-6">
                  <h3 className="font-serif-display text-lg font-bold text-gold flex items-center gap-3">
                    <span className="text-[11px] font-mono-data px-2 py-0.5 rounded border border-gold/30 bg-gold/5 text-gold-light">4.6</span>
                    {isEn ? 'Website Technical Logging and Cookies' : 'A honlap működésével kapcsolatos adatkezelés (naplózás, sütik)'}
                  </h3>
                  <div className="space-y-4 text-sm font-light text-cream/80 leading-relaxed font-sans">
                    <div>
                      <p className="font-semibold text-ivory mb-1">{isEn ? 'Technical Log Data:' : 'Technikai naplóadatok:'}</p>
                      <p>
                        {isEn 
                          ? "During website visitation, the hosting provider's server may automatically record the visitor's IP address, time of visit, browser, and operating system type. The purpose of this processing is to operate the website securely and prevent abuses (legal basis: GDPR Article 6(1)(f) - legitimate interest). Retention time: 30 days."
                          : "A honlap megtekintése során a tárhelyszolgáltató szervere automatikusan rögzítheti a látogató IP-címét, a látogatás időpontját, a böngésző és az operációs rendszer típusát. Ezen adatok kezelésének célja a honlap biztonságos működtetése, a visszaélések megelőzése (jogalap: GDPR 6. cikk (1) f) pont – jogos érdek). Az adatok tárolási ideje: 30 nap."
                        }
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-ivory mb-1">{isEn ? 'Cookies:' : 'Sütik (cookie-k):'}</p>
                      <p>
                        {isEn
                          ? "The website uses cookies strictly necessary for core functionality. If statistical or marketing cookies (e.g. Google Analytics) are implemented, they are only deployed based on the visitor's prior explicit consent, which the visitor can adjust or withdraw at any time via cookie settings. Cookies can also be disabled or deleted in browser settings."
                          : "A honlap az alapvető működéshez szükséges sütiket használ. Amennyiben a honlap statisztikai vagy marketing célú sütiket (pl. Google Analytics) is alkalmaz, azok kizárólag a látogató előzetes, kifejezett hozzájárulásával kerülnek elhelyezésre, amelyet a látogató a süti-beállítási felületen bármikor módosíthat vagy visszavonhat. A sütik a böngésző beállításaiban is törölhetők, illetve letilthatók."
                        }
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 5. Adatfeldolgozók */}
            <div className="fade-up space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gold/40" />
                <h2 className="font-serif-display text-xl sm:text-2xl font-semibold tracking-wide text-gold">
                  {isEn ? '5. Data Processors, Data Transfers' : '5. Adatfeldolgozók, adattovábbítás'}
                </h2>
              </div>
              
              <div className="premium-card p-6 sm:p-8 rounded-sm space-y-4 text-cream/80 leading-relaxed font-light font-sans text-sm">
                <p>
                  {isEn
                    ? "The Controller may use data processors (particularly hosting providers, and accounting services) to perform processing operations. Data processors process personal data strictly under the Controller's instructions and cannot use them for their own purposes. Information about active data processors will be provided by the Controller upon request at the contact details shown in Section 2."
                    : "Az Adatkezelő az adatkezelési műveletekhez adatfeldolgozókat (így különösen tárhelyszolgáltatót, illetve a számviteli feladatok ellátásához közreműködőt) vehet igénybe. Az adatfeldolgozók a személyes adatokat kizárólag az Adatkezelő utasításai szerint kezelhetik, saját céljaikra nem használhatják fel. Az igénybe vett adatfeldolgozókról az Adatkezelő kérésre tájékoztatást ad a 2. pontban megjelölt elérhetőségén."
                  }
                </p>
                <p>
                  <strong>{isEn ? 'Data Transfers to Third Parties:' : 'Adattovábbítás harmadik személyek részére:'}</strong>{' '}
                  {isEn
                    ? "The Controller transfers personal data to third parties strictly with the data subject's explicit consent, except for mandatory transfers prescribed by law (e.g. authority requests). In advocacy matters, transfers on behalf of the data subject towards authorities, courts, or other organs are performed exclusively with the subject's knowledge and authorization."
                    : "Az Adatkezelő személyes adatot harmadik személynek – a jogszabályban előírt kötelező adattovábbítások (pl. hatósági megkeresés) kivételével – kizárólag az érintett kifejezett hozzájárulásával továbbít. A jogvédelmi ügyekben az érintett képviseletében hatóságok, bíróságok vagy más szervek felé történő adattovábbításra minden esetben csak az érintett tudtával és felhatalmazása alapján kerül sor."
                  }
                </p>
                <p>
                  {isEn
                    ? "The Controller does not transfer personal data to third countries (outside the European Economic Area). If the Controller uses US services (e.g. Google, Meta) in the future, this section will be amended accordingly."
                    : "Az Adatkezelő személyes adatot harmadik országba (az Európai Gazdasági Térségen kívülre) nem továbbít. Amennyiben az Adatkezelő a jövőben pl. amerikai szolgáltatót – Google, Meta stb. – vesz igénybe, ez a pont ennek megfelelően lesz módosítva."
                  }
                </p>
              </div>
            </div>

            {/* 6. Adatbiztonság */}
            <div className="fade-up space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gold/40" />
                <h2 className="font-serif-display text-xl sm:text-2xl font-semibold tracking-wide text-gold">
                  {isEn ? '6. Data Security' : '6. Adatbiztonság'}
                </h2>
              </div>
              
              <div className="premium-card p-6 sm:p-8 rounded-sm space-y-4 text-cream/80 leading-relaxed font-light font-sans text-sm">
                <p>
                  {isEn
                    ? "The Controller ensures the security of processed data through appropriate technical and organizational measures, including in particular:"
                    : "Az Adatkezelő megfelelő technikai és szervezési intézkedésekkel gondoskodik a kezelt adatok biztonságáról, így különösen:"
                  }
                </p>
                <ul className="space-y-2 pl-1">
                  <li className="flex items-start gap-3">
                    <span className="text-gold shrink-0 mt-1">✦</span>
                    <span>{isEn ? 'data can only be accessed by authorized persons bound by confidentiality;' : 'az adatokhoz kizárólag az arra feljogosított, titoktartásra kötelezett személyek férhetnek hozzá;'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold shrink-0 mt-1">✦</span>
                    <span>{isEn ? 'electronically stored data are protected by password, paper-based documents are stored in closed locations;' : 'az elektronikusan tárolt adatok jelszóval védett rendszerekben, a papíralapú dokumentumok zárt helyen kerülnek tárolásra;'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold shrink-0 mt-1">✦</span>
                    <span>{isEn ? 'highly sensitive data relating to advocacy cases are processed with enhanced confidentiality and separate storage;' : 'a jogvédelmi ügyekkel kapcsolatos, különösen érzékeny adatokat a Társaság fokozott bizalmassággal, elkülönítetten kezeli;'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold shrink-0 mt-1">✦</span>
                    <span>{isEn ? 'the Controller protects data against unauthorized access, alteration, transfer, disclosure, erasure, or destruction.' : 'az Adatkezelő gondoskodik az adatok jogosulatlan hozzáférés, megváltoztatás, továbbítás, nyilvánosságra hozatal, törlés vagy megsemmisülés elleni védelméről.'}</span>
                  </li>
                </ul>
                <p className="pt-2 border-t border-gold/10 text-xs">
                  <strong>{isEn ? 'Personal Data Breach:' : 'Adatvédelmi incidens:'}</strong>{' '}
                  {isEn
                    ? "In the event of a personal data breach, the Controller acts in accordance with GDPR Articles 33–34: reports the breach to the supervisory authority without undue delay and at the latest within 72 hours, and – if it entails high risks – informs the affected data subjects."
                    : "Adatvédelmi incidens esetén az Adatkezelő a GDPR 33–34. cikke szerint jár el: az incidenst indokolatlan késedelem nélkül, legkésőbb 72 órán belül bejelenti a felügyeleti hatóságnak, és – ha az incidens magas kockázattal jár – tájékoztatja az érintetteket."
                  }
                </p>
              </div>
            </div>

            {/* 7. Az érintettek jogai */}
            <div className="fade-up space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gold/40" />
                <h2 className="font-serif-display text-xl sm:text-2xl font-semibold tracking-wide text-gold">
                  {isEn ? '7. Rights of the Data Subjects' : '7. Az érintettek jogai'}
                </h2>
              </div>
              
              <p className="text-cream/70 text-sm font-light leading-relaxed max-w-2xl">
                {isEn
                  ? "The data subject is entitled to the following rights in connection with data processing, which they can exercise at the contact details shown in Section 2:"
                  : "Az érintettet az adatkezeléssel összefüggésben az alábbi jogok illetik meg, melyeket az Adatkezelő 2. pontban megadott elérhetőségein gyakorolhat:"
                }
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {rights.map((right, idx) => (
                  <div key={idx} className="premium-card p-5 rounded-sm flex gap-4 hover:border-gold/30">
                    <div className="w-8 h-8 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-sm font-mono-data font-bold shrink-0 shadow-[0_0_12px_rgba(201,167,94,0.1)]">
                      {right.letter}
                    </div>
                    <div className="space-y-1 font-sans">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h3 className="text-ivory font-semibold text-sm sm:text-base leading-snug">
                          {right.title}
                        </h3>
                        <span className="text-[10px] font-mono-data text-gold-light/60">
                          ({right.ref})
                        </span>
                      </div>
                      <p className="text-xs text-cream/70 leading-relaxed font-light">
                        {right.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="premium-card p-5 rounded-sm bg-deep-navy/30 text-xs text-cream/70 leading-relaxed font-light font-sans border-l-2 border-l-gold">
                {isEn ? (
                  <>
                    The Controller fulfills the request without undue delay and at the latest within <strong>one month</strong> of receipt, or provides grounds for rejection. If necessary, taking into account the complexity of the request, this period may be extended by two further months, of which the data subject will be notified.
                  </>
                ) : (
                  <>
                    Az Adatkezelő a kérelmet indokolatlan késedelem nélkül, de legkésőbb a beérkezéstől számított <strong>egy hónapon belül</strong> teljesíti, vagy tájékoztatást ad a kérelem elutasításának indokairól. Ez a határidő szükség esetén – a kérelem összetettségére tekintettel – további két hónappal meghosszabbítható, amelyről az érintett tájékoztatást kap.
                  </>
                )}
              </div>
            </div>

            {/* 8. Jogorvoslati lehetőségek */}
            <div className="fade-up space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gold/40" />
                <h2 className="font-serif-display text-xl sm:text-2xl font-semibold tracking-wide text-gold">
                  {isEn ? '8. Remedies and Enforcement' : '8. Jogorvoslati lehetőségek'}
                </h2>
              </div>

              <div className="space-y-6">
                {/* a */}
                <div className="premium-card p-6 rounded-sm flex items-start gap-4 hover:border-gold/30">
                  <div className="w-8 h-8 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-sm font-mono-data font-bold shrink-0">
                    a
                  </div>
                  <div className="space-y-1 font-sans text-sm font-light text-cream/80">
                    <h3 className="text-ivory font-semibold text-base">{isEn ? 'Complaint to the Controller' : 'Panasz az Adatkezelőnél'}</h3>
                    <p>
                      {isEn
                        ? "Please submit any complaint regarding data processing to the Controller first using the contacts in Section 2 – we will do our best to investigate and resolve it promptly."
                        : "Kérjük, hogy adatkezeléssel kapcsolatos panaszával először az Adatkezelőhöz forduljon a 2. pontban megjelölt elérhetőségeken – igyekszünk azt mielőbb kivizsgálni és orvosolni."
                      }
                    </p>
                  </div>
                </div>

                {/* b */}
                <div className="premium-card p-6 rounded-sm flex items-start gap-4 hover:border-gold/30">
                  <div className="w-8 h-8 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-sm font-mono-data font-bold shrink-0">
                    b
                  </div>
                  <div className="space-y-4 font-sans text-sm font-light text-cream/80 w-full">
                    <div className="space-y-1">
                      <h3 className="text-ivory font-semibold text-base">{isEn ? 'Complaint to the Supervisory Authority' : 'Felügyeleti hatósági eljárás'}</h3>
                      <p>
                        {isEn
                          ? "The data subject may file a complaint with the National Authority for Data Protection and Freedom of Information."
                          : "Az érintett panasszal élhet a Nemzeti Adatvédelmi és Információszabadság Hatóságnál."
                        }
                      </p>
                    </div>

                    {/* NAIH Contact card */}
                    <div className="bg-gold/5 border border-gold/20 rounded-sm p-4 text-xs space-y-2 text-cream/85 font-mono-data max-w-xl">
                      <p className="font-semibold text-gold font-serif-display text-sm tracking-wide">
                        {isEn ? 'National Authority for Data Protection and Freedom of Information (NAIH)' : 'Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)'}
                      </p>
                      <div className="grid gap-2 sm:grid-cols-2 font-mono-data">
                        <p><span className="text-gold-light/60">{isEn ? 'HQ:' : 'Székhely:'}</span> 1055 Budapest, Falk Miksa utca 9–11.</p>
                        <p><span className="text-gold-light/60">{isEn ? 'Postal:' : 'Postacím:'}</span> 1363 Budapest, Pf. 9.</p>
                        <p><span className="text-gold-light/60">{isEn ? 'Phone:' : 'Telefon:'}</span> +36 (1) 391-1400</p>
                        <p>
                          <span className="text-gold-light/60">E-mail:</span>{' '}
                          <a href="mailto:ugyfelszolgalat@naih.hu" className="text-gold hover:underline">
                            ugyfelszolgalat@naih.hu
                          </a>
                        </p>
                        <p className="sm:col-span-2">
                          <span className="text-gold-light/60">{isEn ? 'Website:' : 'Honlap:'}</span>{' '}
                          <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                            www.naih.hu
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* c */}
                <div className="premium-card p-6 rounded-sm flex items-start gap-4 hover:border-gold/30">
                  <div className="w-8 h-8 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-sm font-mono-data font-bold shrink-0">
                    c
                  </div>
                  <div className="space-y-1 font-sans text-sm font-light text-cream/80">
                    <h3 className="text-ivory font-semibold text-base">{isEn ? 'Judicial Enforcement' : 'Bírósági jogérvényesítés'}</h3>
                    <p>
                      {isEn
                        ? "In case of rights infringement, the data subject may file a claim in court. Per local laws, the claim is heard before regional courts (Törvényszék); the data subject can choose to bring the claim before the regional court of their domicile or residence."
                        : "Az érintett jogainak megsértése esetén bírósághoz fordulhat. A per elbírálása a törvényszék hatáskörébe tartozik; a per – az érintett választása szerint – a lakóhelye vagy tartózkodási helye szerinti törvényszék előtt is megindítható."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 9. A tájékoztató módosítása */}
            <div className="fade-up space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gold/40" />
                <h2 className="font-serif-display text-xl sm:text-2xl font-semibold tracking-wide text-gold">
                  {isEn ? '9. Amendments to the Privacy Notice' : '9. A tájékoztató módosítása'}
                </h2>
              </div>
              
              <div className="premium-card p-6 sm:p-8 rounded-sm space-y-4 text-cream/80 leading-relaxed font-light font-sans text-sm">
                <p>
                  {isEn
                    ? "The Controller reserves the right to amend this notice unilaterally (due to changes in regulations or processing practices). The current notice is always available on the website. In case of significant amendments, the Controller will notify subjects via a prominent callout on the website."
                    : "Az Adatkezelő fenntartja a jogot, hogy jelen tájékoztatót – a jogszabályi változásokra vagy az adatkezelési gyakorlat változására tekintettel – egyoldalúan módosítsa. A mindenkor hatályos tájékoztató a honlapon érhető el. Lényeges módosítás esetén az Adatkezelő az érintetteket a honlapon közzétett felhívás útján tájékoztatja."
                  }
                </p>
              </div>
            </div>

            {/* Closing statement */}
            <div className="fade-up border border-gold/25 bg-gold/5 rounded-sm p-8 sm:p-10 text-center space-y-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient(circle, rgba(201,167,94,0.03) 0%, transparent 70%) pointer-events-none" />

              <p className="text-gold-light/90 font-mono-data text-xs uppercase tracking-widest">
                {isEn ? 'Allodial Civil Rights Association' : 'Allódiális Polgárjogi Társaság'}
              </p>
              <p className="text-cream/90 font-serif-display text-base tracking-wide">
                {isEn ? 'Represented by: ' : 'Képviseli: '}
                <strong className="text-gold">{isEn ? 'Bálint Fodor' : 'Fodor Bálint'}</strong>, {isEn ? 'administrator' : 'adminisztrátor'}
              </p>
            </div>

          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

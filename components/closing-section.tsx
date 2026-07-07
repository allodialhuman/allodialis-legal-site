interface ClosingSectionProps {
  lang: string
}

export function ClosingSection({ lang }: ClosingSectionProps) {
  const isEn = lang === 'en'

  return (
    <section className="py-24 md:py-36 section-obsidian text-center border-b border-gold/10 relative overflow-hidden">
      <div className="absolute inset-0 gold-dots opacity-[0.02] pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,167,94,0.055) 0%, transparent 65%)' }}
      />
      <div className="site-container site-container--4xl space-y-10 relative z-10">
        <h3
          className="fade-up font-serif-display text-2xl md:text-4xl font-bold text-ivory leading-snug max-w-3xl mx-auto"
          style={{ textShadow: '0 2px 40px rgba(0,0,0,0.5)' }}
        >
          {isEn ? (
            <>
              &quot;Human rights are more than principles. They matter when a person, a child, a parent or a family{' '}
              <em className="gold-gradient-text italic">finds themselves in a vulnerable situation.</em>&quot;
            </>
          ) : (
            <>
              „Az emberi jogok többek mint elvek. Akkor számítanak, amikor egy ember, egy gyermek, egy szülő vagy egy család{' '}
              <em className="gold-gradient-text italic">kiszolgáltatott helyzetbe kerül.</em>”
            </>
          )}
        </h3>

        <div className="fade-up ornament-divider">
          <span className="text-gold text-sm">✦</span>
        </div>

        <p className="fade-up text-cream/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light font-sans">
          {isEn
            ? "Allódiális Polgárjogi Társaság works to ensure that, in such situations, people have somewhere to turn, someone to connect with and professional support for the protection of their fundamental rights."
            : "Az Allódiális Polgárjogi Társaság azon dolgozik, hogy a nehéz helyzetbe került embereknek legyen hová fordulniuk, kapjanak megfelelő iránymutatást és szakmai hátteret alapvető jogaik védelmében."
          }
        </p>

        <div className="fade-up flex flex-col sm:flex-row justify-center items-center gap-5 pt-4">
          <a
            href="#kapcsolat"
            className="btn-sovereign btn-gold w-full sm:w-auto px-10 py-4 text-obsidian font-bold uppercase tracking-[0.18em] text-xs rounded-sm text-center relative z-10 font-mono-data"
          >
            <span className="relative z-10">{isEn ? 'Request Help' : 'Segítséget kérek'}</span>
          </a>
          <a
            href="#tamogatas"
            className="btn-sovereign btn-outline w-full sm:w-auto px-10 py-4 text-gold hover:text-gold-light font-semibold uppercase tracking-[0.18em] text-xs rounded-sm text-center font-mono-data"
          >
            {isEn ? 'Support Our Work' : 'Támogatom a munkát'}
          </a>
        </div>
      </div>
    </section>
  )
}

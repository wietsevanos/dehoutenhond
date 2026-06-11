import { createFileRoute, Link } from "@tanstack/react-router";
import grooming from "@/assets/grooming.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/trimsalon")({
  head: () => ({
    meta: [
      { title: "Hondentrimsalon Elswout · Professionele vachtverzorging Haarlem" },
      { name: "description", content: "Hondentrimsalon Elswout — professionele vachtverzorging met aandacht voor welzijn, in samenwerking met De Houten Hond in Haarlem." },
      { property: "og:title", content: "Hondentrimsalon Elswout" },
      { property: "og:description", content: "Professionele vachtverzorging in Haarlem, verbonden aan natuurvoedingswinkel De Houten Hond." },
    ],
  }),
  component: Trim,
});

function Trim() {
  return (
    <>
      <section className="container-prose pt-20 pb-16 max-w-4xl">
        <Reveal>
          <span className="eyebrow">Hondentrimsalon Elswout</span>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-walnut leading-[1.05]">
            Vachtverzorging met <span className="italic-serif text-moss">aandacht</span>.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Trimsalon Elswout is nauw verbonden met De Houten Hond. Professionele
            vachtverzorging in een rustige omgeving, met oog voor het welzijn van
            jouw hond.
          </p>
        </Reveal>
      </section>

      <section className="container-prose">
        <Reveal>
          <div className="aspect-[16/8] rounded-3xl overflow-hidden bg-sand">
            <img src={grooming} alt="Hondentrimsalon Elswout" loading="lazy" width={1600} height={900}
              className="w-full h-full object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="py-24">
        <div className="container-prose grid md:grid-cols-3 gap-6">
          {[
            ["Vachtverzorging", "Wassen, knippen, trimmen — afgestemd op het ras en de vacht van jouw hond."],
            ["Welzijn voorop", "Een rustige omgeving, geen haast en oog voor de signalen van je hond."],
            ["Persoonlijke aandacht", "Geen lopende band. Jouw hond krijgt onze volle aandacht tijdens de afspraak."],
          ].map((c, i) => (
            <Reveal key={c[0]} delay={i * 100}>
              <div className="bg-card border border-border/60 rounded-3xl p-8 h-full">
                <h3 className="font-serif text-2xl text-walnut">{c[0]}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c[1]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="container-prose text-center max-w-2xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl text-walnut">
              Een afspraak <span className="italic-serif text-moss">inplannen</span>?
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              Bel of mail ons om een trimafspraak te maken. We denken graag mee over wat
              het beste past bij de vacht en behoeften van jouw hond.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a href="tel:+31642618286" className="btn-primary">06 42 61 82 86</a>
              <Link to="/contact" className="btn-ghost">Stuur een bericht</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, HeartHandshake, Scissors, Sparkles } from "lucide-react";
import heroShop from "@/assets/hero-shop.jpg";
import dogTreat from "@/assets/dog-treat.jpg";
import rawFood from "@/assets/raw-food.jpg";
import grooming from "@/assets/grooming.jpg";
import dogCat from "@/assets/dog-cat.jpg";
import brenda from "@/assets/brenda.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "De Houten Hond · Natuurvoeding voor hond en kat in Haarlem" },
      { name: "description", content: "Biologische en natuurlijke hondenvoeding, kattenvoeding, KVV, rauwvoer, voedingsadvies op maat en professionele vachtverzorging in Haarlem." },
      { property: "og:title", content: "De Houten Hond · Natuurvoeding voor hond en kat" },
      { property: "og:description", content: "Specialist in natuurlijke voeding voor honden en katten — persoonlijk advies in Haarlem." },
    ],
  }),
  component: Home,
});

const brands = [
  "Greenheart Premiums", "Naturly", "Amanova", "Riverwood",
  "Nature Dog Food", "Hubertus Gold", "YDOLO", "DARF",
  "IMBY", "Yarrah", "Biofood", "Kivo",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-prose pt-16 lg:pt-24 pb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 animate-fade-up">
              <span className="eyebrow">Natuurvoeding · Haarlem</span>
              <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-walnut">
                Natuurlijke voeding voor <span className="italic-serif text-moss">hond en kat</span>.
              </h1>
              <p className="mt-7 text-lg text-muted-foreground max-w-lg leading-relaxed">
                Biologische en natuurlijke voeding, persoonlijk voedingsadvies op maat
                en professionele vachtverzorging. In het Ramplaankwartier, Haarlem.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/voeding" className="btn-primary">
                  Ontdek onze winkel <ArrowRight size={16} />
                </Link>
                <Link to="/advies" className="btn-ghost">Vraag advies aan</Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-sand">
                <img
                  src={heroShop}
                  alt="Het warme interieur van natuurvoedingswinkel De Houten Hond in Haarlem"
                  width={1600}
                  height={1200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-secondary/40">
        <div className="container-prose grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">Wie wij zijn</span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-walnut">
              Een speciaalzaak waar <span className="italic-serif text-moss">gezondheid</span> begint bij voeding.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-foreground/85">
              De Houten Hond is gespecialiseerd in natuurlijke en biologische voeding voor
              honden en katten. Bij ons vind je rauwvoer en KVV, hypoallergene voeding,
              supplementen en natuurlijke verzorging — altijd met persoonlijk advies.
            </p>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              We geloven dat de juiste voeding de basis is voor een gezonde huid en vacht,
              een veerkrachtige darmflora en een sterk weerstandsvermogen. Daarom kiezen we
              elk merk in ons assortiment zorgvuldig uit.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SPECIALISATIES */}
      <section className="py-28">
        <div className="container-prose">
          <Reveal className="max-w-2xl mx-auto text-center mb-16">
            <span className="eyebrow">Onze specialisaties</span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-walnut">
              Drie pijlers, één <span className="italic-serif text-moss">passie</span>.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Leaf, title: "Natuurvoeding",
                desc: "Biologische, natuurlijke en hypoallergene voeding voor hond en kat. Van droogvoer tot KVV en vers vlees.",
                to: "/voeding", img: rawFood,
              },
              {
                icon: HeartHandshake, title: "Voedingsadvies",
                desc: "Persoonlijk voedingsplan op maat. Voor allergieën, gevoelige spijsvertering, huidproblemen en meer.",
                to: "/advies", img: dogCat,
              },
              {
                icon: Scissors, title: "Trimsalon Elswout",
                desc: "Professionele vachtverzorging met aandacht voor welzijn, in nauwe samenwerking met onze winkel.",
                to: "/trimsalon", img: grooming,
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <Link to={c.to} className="group block rounded-3xl overflow-hidden bg-card border border-border/60 hover:border-chestnut/60 transition-all duration-500 hover:shadow-[0_30px_60px_-30px_rgba(60,40,20,0.25)]">
                  <div className="aspect-[4/3] overflow-hidden bg-sand">
                    <img src={c.img} alt={c.title} loading="lazy" width={800} height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <c.icon className="text-chestnut" size={22} />
                    <h3 className="mt-4 font-serif text-2xl text-walnut">{c.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm text-walnut group-hover:gap-3 transition-all">
                      Meer over {c.title.toLowerCase()} <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WAAROM KIEZEN */}
      <section className="py-28 bg-secondary/40">
        <div className="container-prose grid lg:grid-cols-12 gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-sand">
              <img src={dogTreat} alt="Een hond krijgt een natuurlijke traktatie" loading="lazy" width={1200} height={1400}
                className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <span className="eyebrow">Waarom klanten ons kiezen</span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-walnut leading-tight">
              Niet zomaar een dierenwinkel, een <span className="italic-serif text-moss">vertrouwd adres</span>.
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {[
                ["Jarenlange ervaring", "Achtergrond als dierenartsassistente en jaren expertise in natuurlijke voeding."],
                ["Persoonlijke aandacht", "Tijd voor jouw verhaal. Geen verkoop, maar oprecht advies."],
                ["Gespecialiseerde kennis", "Focus op gezondheid, voeding en het welzijn van hond en kat."],
                ["Zorgvuldig assortiment", "Alleen merken die we zelf vertrouwen. Natuurlijk, eerlijk en transparant."],
              ].map(([t, d]) => (
                <div key={t}>
                  <Sparkles className="text-moss" size={18} />
                  <h3 className="mt-3 font-serif text-xl text-walnut">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MERKEN */}
      <section className="py-28">
        <div className="container-prose">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Uitgelichte merken</span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-walnut">
              Zorgvuldig <span className="italic-serif text-moss">geselecteerd</span>.
            </h2>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/60">
              {brands.map((b) => (
                <div key={b} className="bg-background py-8 text-center font-serif text-lg text-walnut hover:bg-secondary/60 transition-colors">
                  {b}
                </div>
              ))}
            </div>
          </Reveal>
          <div className="text-center mt-10">
            <Link to="/merken" className="btn-ghost">Bekijk alle merken <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* OVER BRENDA */}
      <section className="py-28 bg-secondary/40">
        <div className="container-prose grid lg:grid-cols-12 gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-sand">
              <img src={brenda} alt="Brenda, eigenaresse van De Houten Hond" loading="lazy" width={1200} height={1400}
                className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <span className="eyebrow">Over Brenda</span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-walnut leading-tight">
              Ervaring als dierenartsassistente, <span className="italic-serif text-moss">passie</span> voor natuurlijke zorg.
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-foreground/85">
              Brenda werkte jarenlang als dierenartsassistente en praktijkmanager bij
              dierenarts Nico Kas. Daar ontwikkelde zij brede kennis over voeding,
              gezondheid en welzijn van honden en katten.
            </p>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              Vandaag richt ze zich volledig op natuurlijke voeding, homeopathische
              ondersteuning en supplementen — met een eigen visie op diergezondheid
              waarin de oorzaak voorop staat, niet alleen het symptoom.
            </p>
            <Link to="/over" className="mt-8 inline-flex items-center gap-2 text-walnut hover:gap-3 transition-all">
              Lees het hele verhaal <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="container-prose">
          <div className="rounded-3xl bg-walnut text-cream px-8 md:px-16 py-20 text-center">
            <span className="eyebrow text-gold">Loop binnen</span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl">
              Een goed gesprek begint met <span className="italic-serif">een kop koffie</span>.
            </h2>
            <p className="mt-6 text-cream/80 max-w-xl mx-auto">
              Kom langs in onze winkel aan de Ramplaan 48 in Haarlem. We nemen graag
              de tijd om je hond of kat écht te leren kennen.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cream text-walnut text-sm font-medium hover:bg-sand transition-colors">
                Plan een bezoek →
              </Link>
              <Link to="/advies" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-cream/30 text-cream text-sm hover:bg-cream/10 transition-colors">
                Vraag voedingsadvies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import rawFood from "@/assets/raw-food.jpg";
import dogCatAsset from "@/assets/hond-kat.png.asset.json"; const dogCat = dogCatAsset.url;
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/voeding")({
  head: () => ({
    meta: [
      { title: "Natuurlijke voeding voor hond en kat · De Houten Hond Haarlem" },
      { name: "description", content: "Biologische voeding, KVV, rauwvoer en hypoallergene voeding voor honden en katten in Haarlem. Lees waarom natuurvoeding het verschil maakt." },
      { property: "og:title", content: "Natuurlijke voeding voor hond en kat" },
      { property: "og:description", content: "KVV, rauwvoer en hypoallergene voeding, specialisme van De Houten Hond Haarlem." },
    ],
  }),
  component: Voeding,
});

function Voeding() {
  return (
    <>
      <section className="container-prose pt-20 pb-16 max-w-4xl">
        <Reveal>
          <span className="eyebrow">Natuurvoeding</span>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-walnut leading-[1.05]">
            Natuurlijke voeding voor <span className="italic-serif text-moss">hond en kat</span>.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Van biologisch droogvoer tot KVV, vers vlees en hypoallergene oplossingen,
            wij selecteren alleen voeding die we zelf met vertrouwen aan onze eigen dieren
            zouden geven.
          </p>
        </Reveal>
      </section>

      <section className="container-prose">
        <Reveal>
          <div className="aspect-[16/7] rounded-3xl overflow-hidden bg-sand">
            <img src={rawFood} alt="Natuurlijk rauwvoer in een houten kom" loading="lazy" width={1600} height={700}
              className="w-full h-full object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="py-24">
        <div className="container-prose grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">Waarom natuurvoeding</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-walnut leading-tight">
              Minder toevoegingen, meer <span className="italic-serif text-moss">balans</span>.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <ul className="space-y-5 text-base text-foreground/85 leading-relaxed">
              {[
                ["Minder kunstmatige toevoegingen", "Geen onnodige kleur-, geur- of smaakstoffen."],
                ["Betere verteerbaarheid", "Pure ingrediënten die het lichaam herkent en gebruikt."],
                ["Ondersteuning van huid en vacht", "Essentiële vetzuren voor glans en veerkracht."],
                ["Gezonde darmflora", "Voeding die de basis legt voor een sterk immuunsysteem."],
                ["Sterkere weerstand", "Natuurlijke ingrediënten met aantoonbare meerwaarde."],
              ].map(([t, d]) => (
                <li key={t} className="border-b border-border/60 pb-5 last:border-0">
                  <span className="font-serif text-xl text-walnut">{t}</span>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="container-prose grid md:grid-cols-3 gap-6">
          {[
            { title: "KVV & rauwvoer", desc: "Wij zijn gespecialiseerd in KVV (Kompleet Vers Vlees) en rauwvoeding. Klanten kunnen bij ons terecht voor uitgebreide begeleiding bij de overstap." },
            { title: "Hypoallergeen", desc: "Voor honden en katten met allergieën, voedselintoleranties, jeuk of huidproblemen bieden we mono-proteïne en hypoallergene voedingsmogelijkheden." },
            { title: "Voor de kat", desc: "Ook katten verdienen pure voeding. Wij hebben een zorgvuldig samengestelde selectie voor katten van alle levensfasen." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="bg-card border border-border/60 rounded-3xl p-8 h-full">
                <h3 className="font-serif text-2xl text-walnut">{c.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container-prose grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow">Allergieën & gevoelige dieren</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-walnut leading-tight">
              Veel klanten komen voor <span className="italic-serif text-moss">ondersteuning</span>.
            </h2>
            <p className="mt-6 text-base text-foreground/85 leading-relaxed">
              Jeukende huid, een gevoelige spijsvertering of terugkerende darmklachten,
              vaak is voeding een belangrijke factor. We gaan met je in gesprek, kijken
              naar het bredere plaatje en stellen samen een passend voedingsplan op.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/advies" className="btn-primary">Persoonlijk advies →</Link>
              <Link to="/merken" className="btn-ghost">Bekijk merken</Link>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden aspect-[5/4] bg-sand">
              <img src={dogCat} alt="Een hond en kat samen" loading="lazy" width={1400} height={1000}
                className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/merken")({
  head: () => ({
    meta: [
      { title: "Onze merken · De Houten Hond Haarlem" },
      { name: "description", content: "Een overzicht van de natuurlijke en biologische voedingsmerken voor honden en katten in ons assortiment in Haarlem." },
      { property: "og:title", content: "Onze merken, De Houten Hond" },
      { property: "og:description", content: "Naturly, Amanova, YDOLO, Hubertus Gold en meer, zorgvuldig geselecteerd." },
    ],
  }),
  component: Merken,
});

const brands = [
  { name: "Naturly", tag: "Voorheen Bio-Ron", desc: "Bekende naam in natuurlijke producten, denk aan Bokashi, veendrenkstof en hennepproducten. Nieuwe naam, dezelfde vertrouwde kwaliteit." },
  { name: "Amanova", tag: "Spaans premium", desc: "Premium voeding met vers vlees als hoofdingrediënt. Geen vleesmeel, niet genetisch gemodificeerd. Uitstekend voor gevoelige honden." },
  { name: "YDOLO", tag: "Semi-moist", desc: "Holistische semi-moist voeding zonder kunstmatige toevoegingen. Ondersteunt darmen, gewrichten, nieren, lever en immuunsysteem." },
  { name: "Hubertus Gold", tag: "Premium", desc: "Hoog vleespercentage, goede verteerbaarheid. Geschikt voor actieve honden die kwaliteitsvoeding verdienen." },
  { name: "IMBY", tag: "Insect & vegan", desc: "Insect based en vegan voeding. Hypoallergeen en ondersteunend voor darmflora en spijsvertering." },
  { name: "Nature Dog Food", tag: "Mono-proteïne", desc: "Hypoallergene mono-proteïne voeding met natuurlijke ingrediënten, een fijne keuze voor gevoelige honden." },
  { name: "Riverwood", tag: "Graanvrij", desc: "Hoog vleespercentage, geen granen of gluten, veel verse groenten en fruit." },
  { name: "DARF", tag: "KVV-specialist", desc: "Kompleet Vers Vlees en natuurlijke voeding, bekend voor gevoelige honden." },
  { name: "Greenheart Premiums", tag: "Belangrijk merk", desc: "Eén van de pijlers in ons assortiment, natuurlijke voeding met aandacht voor kwaliteit." },
  { name: "Yarrah", tag: "Biologisch", desc: "Biologisch geproduceerde voeding, een vertrouwde naam voor de bewuste eigenaar." },
  { name: "Kivo", tag: "Vers vlees", desc: "KVV en vers vlees voor wie kiest voor een rauwe voedingsbenadering." },
  { name: "Biofood", tag: "Biologisch", desc: "Brede biologische lijn van voeding en snacks voor hond en kat." },
];

function Merken() {
  return (
    <>
      <section className="container-prose pt-20 pb-16 max-w-4xl">
        <Reveal>
          <span className="eyebrow">Onze merken</span>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-walnut leading-[1.05]">
            Zorgvuldig <span className="italic-serif text-moss">samengesteld</span>.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            We kiezen alleen merken die passen bij onze filosofie: natuurlijk,
            transparant, met écht voedingswaarde. Hieronder onze belangrijkste partners.
          </p>
        </Reveal>
      </section>

      <section className="py-16">
        <div className="container-prose grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((b, i) => (
            <Reveal key={b.name} delay={(i % 6) * 60}>
              <article className="bg-card border border-border/60 rounded-3xl p-7 h-full hover:border-chestnut/60 transition-all duration-500 hover:shadow-[0_24px_50px_-30px_rgba(60,40,20,0.25)]">
                <div className="eyebrow text-chestnut">{b.tag}</div>
                <h2 className="mt-3 font-serif text-2xl text-walnut">{b.name}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

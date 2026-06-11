import { createFileRoute } from "@tanstack/react-router";
import snacks from "@/assets/snacks.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/snacks")({
  head: () => ({
    meta: [
      { title: "Natuurlijke snacks & kauwproducten · De Houten Hond" },
      { name: "description", content: "Gezonde, natuurlijke snacks en kauwproducten voor honden — Churpi, Lakse Kronch, koffieboom kauwwortel en Van Pom. Haarlem." },
      { property: "og:title", content: "Snacks & kauwproducten" },
      { property: "og:description", content: "Natuurlijke hondensnacks zonder onnodige toevoegingen, geselecteerd in Haarlem." },
    ],
  }),
  component: Snacks,
});

const items = [
  { name: "Churpi", desc: "Traditionele Himalaya-kauwsnack voor langdurig kauwplezier. Geschikt voor honden met eiwitgevoeligheid." },
  { name: "Lakse Kronch", desc: "100% zalm — een gezonde, graanvrije trainingssnack rijk aan natuurlijke vetzuren." },
  { name: "Koffieboom Kauwwortel", desc: "Duurzame natuurlijke kauwsnack die de natuurlijke gebitsreiniging ondersteunt. Hypoallergeen." },
  { name: "Van Pom", desc: "Plantaardige groentemixen — een perfecte aanvulling op KVV." },
];

function Snacks() {
  return (
    <>
      <section className="container-prose pt-20 pb-16 max-w-4xl">
        <Reveal>
          <span className="eyebrow">Snacks & kauwproducten</span>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-walnut leading-[1.05]">
            Gezonde <span className="italic-serif text-moss">traktaties</span>.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Snacks waar je hond gelukkig van wordt — en jij ook. Pure ingrediënten,
            zonder onnodige toevoegingen.
          </p>
        </Reveal>
      </section>

      <section className="container-prose">
        <Reveal>
          <div className="aspect-[16/7] rounded-3xl overflow-hidden bg-sand">
            <img src={snacks} alt="Natuurlijke hondensnacks" loading="lazy" width={1600} height={700}
              className="w-full h-full object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="py-24">
        <div className="container-prose grid sm:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={i * 80}>
              <article className="bg-card border border-border/60 rounded-3xl p-8 h-full">
                <h2 className="font-serif text-2xl text-walnut">{it.name}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

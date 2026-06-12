import { createFileRoute } from "@tanstack/react-router";
import supplements from "@/assets/supplements.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/supplementen")({
  head: () => ({
    meta: [
      { title: "Supplementen & natuurlijke verzorging · De Houten Hond" },
      { name: "description", content: "Natuurlijke supplementen en verzorgingsproducten voor honden en katten, voor darmen, huid, vacht, gewrichten en weerstand. Haarlem." },
      { property: "og:title", content: "Supplementen & verzorging" },
      { property: "og:description", content: "PUUR, Stop Animal Body Guard en meer, natuurlijke ondersteuning op maat." },
    ],
  }),
  component: Supp,
});

function Supp() {
  return (
    <>
      <section className="container-prose pt-20 pb-16 max-w-4xl">
        <Reveal>
          <span className="eyebrow">Supplementen & verzorging</span>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-walnut leading-[1.05]">
            Natuurlijke <span className="italic-serif text-moss">ondersteuning</span>.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Een breed assortiment supplementen voor darmflora, huid, vacht, gewrichten,
            weerstand en ouder wordende dieren, altijd gekozen op basis van wat jouw
            dier echt nodig heeft.
          </p>
        </Reveal>
      </section>

      <section className="container-prose">
        <Reveal>
          <div className="aspect-[16/7] rounded-3xl overflow-hidden bg-sand">
            <img src={supplements} alt="Supplementen op een houten plank" loading="lazy" width={1600} height={700}
              className="w-full h-full object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="py-24">
        <div className="container-prose grid md:grid-cols-2 gap-6">
          <Reveal>
            <article className="bg-card border border-border/60 rounded-3xl p-10 h-full">
              <div className="eyebrow text-chestnut">Homeopathie</div>
              <h2 className="mt-3 font-serif text-3xl text-walnut">PUUR</h2>
              <p className="mt-4 text-base text-foreground/85 leading-relaxed">
                Natuurlijke homeopathische ondersteuning voor:
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-y-2 text-sm text-muted-foreground">
                {["Huid & vacht", "Hormonen", "Weerstand", "Spijsvertering", "Luchtwegen", "Gewrichten", "Gedrag & stress"].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-moss" /> {x}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <article className="bg-card border border-border/60 rounded-3xl p-10 h-full">
              <div className="eyebrow text-chestnut">Parasieten</div>
              <h2 className="mt-3 font-serif text-3xl text-walnut">Stop Animal Body Guard</h2>
              <p className="mt-4 text-base text-foreground/85 leading-relaxed">
                Een natuurlijk, hypoallergeen en 100% plantaardig alternatief tegen
                parasieten. Geschikt voor hond, kat, konijn, fret, hamster en cavia.
              </p>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}

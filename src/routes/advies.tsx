import { createFileRoute, Link } from "@tanstack/react-router";
import brendaAsset from "@/assets/brenda.png.asset.json"; const brenda = brendaAsset.url;
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/advies")({
  head: () => ({
    meta: [
      { title: "Voedingsadvies op maat voor je hond · De Houten Hond" },
      { name: "description", content: "Persoonlijk voedingsadvies en voedingsplan op maat voor jouw hond — bij allergieën, huidproblemen, darmklachten of overgewicht. Haarlem." },
      { property: "og:title", content: "Voedingsadvies op maat" },
      { property: "og:description", content: "Een persoonlijk voedingsplan voor jouw hond, opgesteld door specialist Brenda in Haarlem." },
    ],
  }),
  component: Advies,
});

const steps = [
  ["01", "Intake", "We luisteren naar jouw verhaal en dat van je hond — leeftijd, ras, leefstijl en klachten."],
  ["02", "Analyse", "We bekijken de huidige voeding kritisch: ingrediënten, samenstelling en hoeveelheden."],
  ["03", "Advies", "Persoonlijk voedingsadvies, afgestemd op gezondheid, klachten en jouw situatie."],
  ["04", "Voedingsplan", "We stellen een concreet plan op — inclusief overstap, hoeveelheden en supplementen."],
  ["05", "Evaluatie", "Na enkele weken evalueren we het effect en stellen waar nodig bij."],
];

function Advies() {
  return (
    <>
      <section className="container-prose pt-20 pb-16 max-w-4xl">
        <Reveal>
          <span className="eyebrow">Voedingsadvies</span>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-walnut leading-[1.05]">
            Voedingsadvies <span className="italic-serif text-moss">op maat</span>.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Iedere hond is uniek. Daarom verdient iedere hond een persoonlijk advies —
            geen standaardpakket, maar een plan dat past bij ras, leeftijd, gezondheid
            en levensritme.
          </p>
        </Reveal>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container-prose grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-sand">
              <img src={brenda} alt="Brenda geeft voedingsadvies" loading="lazy" width={1200} height={1400}
                className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <h2 className="font-serif text-3xl md:text-4xl text-walnut leading-tight">
              We helpen bij <span className="italic-serif text-moss">specifieke vragen</span>.
            </h2>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4 text-base text-foreground/85">
              {["Allergieën", "Huidproblemen & jeuk", "Darmproblemen", "Overgewicht", "Gevoelige spijsvertering", "Senior honden", "Pups & jonge honden", "Overstap naar KVV"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-moss" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-28">
        <div className="container-prose">
          <Reveal className="max-w-2xl mb-14">
            <span className="eyebrow">Het traject</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-walnut">
              In vijf rustige <span className="italic-serif text-moss">stappen</span>.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border/60 rounded-3xl overflow-hidden border border-border/60">
            {steps.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 80}>
                <div className="bg-card p-8 h-full">
                  <div className="font-serif text-3xl text-chestnut">{n}</div>
                  <h3 className="mt-4 font-serif text-xl text-walnut">{t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary">Plan een adviesgesprek →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

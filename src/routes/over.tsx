import { createFileRoute, Link } from "@tanstack/react-router";
import brenda from "@/assets/brenda.jpg";
import heroShop from "@/assets/hero-shop.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/over")({
  head: () => ({
    meta: [
      { title: "Over De Houten Hond · Natuurvoedingswinkel Haarlem" },
      { name: "description", content: "Het verhaal achter De Houten Hond in Haarlem: het ontstaan, Brenda's achtergrond als dierenartsassistente en onze filosofie over natuurlijke voeding." },
      { property: "og:title", content: "Over De Houten Hond" },
      { property: "og:description", content: "Het verhaal achter onze speciaalzaak voor natuurlijke hondenvoeding en kattenvoeding in Haarlem." },
    ],
  }),
  component: Over,
});

function Over() {
  return (
    <>
      <section className="container-prose pt-20 pb-16 max-w-4xl">
        <Reveal>
          <span className="eyebrow">Over ons</span>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-walnut leading-[1.05]">
            Het verhaal achter <span className="italic-serif text-moss">De Houten Hond</span>.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Een speciaalzaak in het Ramplaankwartier van Haarlem, ontstaan uit liefde
            voor honden, katten en de kracht van natuurlijke voeding.
          </p>
        </Reveal>
      </section>

      <section className="container-prose">
        <Reveal>
          <div className="aspect-[16/8] rounded-3xl overflow-hidden bg-sand">
            <img src={heroShop} alt="Het interieur van De Houten Hond" loading="lazy" width={1600} height={900}
              className="w-full h-full object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="py-24">
        <div className="container-prose max-w-3xl">
          <Reveal>
            <span className="eyebrow">Het ontstaan</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-walnut">De snoepwinkel voor de hond.</h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/85">
              <p>
                Kinderen van klanten noemden onze winkel al snel "de snoepwinkel voor
                de hond" — vanwege de uitgebreide selectie gezonde snacks, kauwproducten
                en natuurlijke voeding. De jongste dochter van een vaste klant vroeg altijd
                of zij mee mocht naar "de winkel met de houten hond".
              </p>
              <p>
                Daar kwam uiteindelijk de naam vandaan: <em className="italic-serif">De Houten Hond</em>.
                Een naam die past bij de warme, ambachtelijke sfeer van het Ramplaankwartier
                — waar veel klanten een bezoek aan de winkel combineren met een wandeling
                in de duinen of op het strand.
              </p>
              <p>
                Je herkent ons aan de opvallende groene luifel en de houten sculpturen
                voor de deur. En zodra je binnenkomt, krijgt je hond bij ons een
                natuurlijke traktatie van het huis.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="container-prose grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-sand">
              <img src={brenda} alt="Brenda" loading="lazy" width={1200} height={1400}
                className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <span className="eyebrow">Brenda</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-walnut leading-tight">
              Van dierenartspraktijk naar natuurlijke <span className="italic-serif text-moss">specialiteit</span>.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-foreground/85">
              <p>
                Brenda werkte jarenlang als dierenartsassistente en praktijkmanager bij
                dierenarts Nico Kas. In die periode bouwde zij brede kennis op over
                voeding, gezondheid en het welzijn van honden en katten.
              </p>
              <p>
                Later koos ze ervoor zich volledig te richten op natuurlijke voeding
                en natuurlijke ondersteuning. Door jarenlange ervaring met homeopathische
                ondersteuning, supplementen en voedingsanalyses ontwikkelde zij een eigen
                visie op diergezondheid — een visie waarin oorzaak en welzijn centraal staan.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-prose max-w-3xl">
          <Reveal>
            <span className="eyebrow">Onze filosofie</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-walnut">
              Voeding is het <span className="italic-serif text-moss">fundament</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/85">
              We geloven dat voeding een enorme invloed heeft op de huid, vacht, darmflora,
              weerstand, energie en het algemeen welzijn van honden en katten. Bij
              gezondheidsproblemen kijken we daarom altijd naar de oorzaak — niet alleen
              naar het symptoom.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {[
                ["Huid & vacht", "Een glanzende, sterke vacht begint van binnenuit."],
                ["Darmflora", "Een gezonde darm draagt bij aan weerstand en gedrag."],
                ["Weerstand", "Natuurlijke ingrediënten ondersteunen het immuunsysteem."],
                ["Energie & welzijn", "Goed voer = een gelukkig, vitaal dier."],
              ].map(([t, d]) => (
                <div key={t}>
                  <h3 className="font-serif text-xl text-walnut">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link to="/advies" className="btn-primary">Vraag voedingsadvies →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

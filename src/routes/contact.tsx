import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · De Houten Hond Haarlem" },
      { name: "description", content: "Bezoek De Houten Hond aan de Ramplaan 48 in Haarlem. Bel, mail of stuur een bericht voor voedingsadvies of trimsalonafspraken." },
      { property: "og:title", content: "Contact, De Houten Hond" },
      { property: "og:description", content: "Ramplaan 48, Haarlem · 06 42 61 82 86 · info@dehoutenhond.nl" },
    ],
  }),
  component: Contact,
});

const hours = [
  ["Maandag", "Gesloten"], ["Dinsdag", "09:00 – 18:00"],
  ["Woensdag", "09:00 – 18:00"], ["Donderdag", "09:00 – 18:00"],
  ["Vrijdag", "09:00 – 18:00"], ["Zaterdag", "09:00 – 17:00"],
  ["Zondag", "Gesloten"],
];

function Contact() {
  return (
    <>
      <section className="container-prose pt-20 pb-16 max-w-4xl">
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-walnut leading-[1.05]">
            Loop binnen, bel of <span className="italic-serif text-moss">mail</span>.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Vragen over voeding, een adviesgesprek of een trimafspraak inplannen?
            We helpen je graag verder.
          </p>
        </Reveal>
      </section>

      <section className="py-16">
        <div className="container-prose grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-5 space-y-6">
            <div className="bg-card border border-border/60 rounded-3xl p-7">
              <MapPin className="text-chestnut" size={22} />
              <h2 className="mt-3 font-serif text-xl text-walnut">Adres</h2>
              <p className="mt-2 text-sm text-foreground/85">Ramplaan 48<br />2015 GX Haarlem</p>
            </div>
            <div className="bg-card border border-border/60 rounded-3xl p-7">
              <Phone className="text-chestnut" size={22} />
              <h2 className="mt-3 font-serif text-xl text-walnut">Telefoon</h2>
              <a href="tel:+31642618286" className="mt-2 inline-block text-sm text-foreground/85 hover:text-walnut">06 42 61 82 86</a>
            </div>
            <div className="bg-card border border-border/60 rounded-3xl p-7">
              <Mail className="text-chestnut" size={22} />
              <h2 className="mt-3 font-serif text-xl text-walnut">E-mail</h2>
              <a href="mailto:info@dehoutenhond.nl" className="mt-2 inline-block text-sm text-foreground/85 hover:text-walnut">info@dehoutenhond.nl</a>
            </div>
            <div className="bg-card border border-border/60 rounded-3xl p-7">
              <Clock className="text-chestnut" size={22} />
              <h2 className="mt-3 font-serif text-xl text-walnut">Openingstijden</h2>
              <ul className="mt-3 space-y-1.5 text-sm">
                {hours.map(([d, t]) => (
                  <li key={d} className="flex justify-between border-b border-border/50 last:border-0 pb-1.5">
                    <span className="text-foreground/85">{d}</span>
                    <span className="text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-border/60 aspect-[4/3] bg-sand">
              <iframe
                title="De Houten Hond op de kaart"
                src="https://www.google.com/maps?q=Ramplaan+48,+2015+GX+Haarlem&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <form
              className="mt-8 bg-card border border-border/60 rounded-3xl p-7 grid gap-5"
              onSubmit={(e) => { e.preventDefault(); alert("Bedankt voor je bericht! We nemen snel contact op."); }}
            >
              <h2 className="font-serif text-2xl text-walnut">Stuur een bericht</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="text-xs text-muted-foreground">Naam</span>
                  <input required className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-chestnut" />
                </label>
                <label className="block">
                  <span className="text-xs text-muted-foreground">E-mail</span>
                  <input required type="email" className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-chestnut" />
                </label>
              </div>
              <label className="block">
                <span className="text-xs text-muted-foreground">Bericht</span>
                <textarea required rows={5} className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-chestnut" />
              </label>
              <button type="submit" className="btn-primary self-start">Verstuur bericht →</button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

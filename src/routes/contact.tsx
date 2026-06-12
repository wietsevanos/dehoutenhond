import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · De Houten Hond Haarlem" },
      { name: "description", content: "Bezoek De Houten Hond aan de Ramplaan 48 in Haarlem. Bel of mail voor voedingsadvies of trimsalonafspraken." },
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
      <section className="container-prose pt-20 pb-12 max-w-4xl">
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-walnut leading-[1.05]">
            Loop binnen, bel of <span className="italic-serif text-moss">mail</span>.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Vragen over voeding, een adviesgesprek of een trimafspraak inplannen?
            We helpen je graag persoonlijk verder.
          </p>
        </Reveal>
      </section>

      <section className="pb-24">
        <div className="container-prose grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5 space-y-10">
            <div>
              <div className="flex items-center gap-3">
                <MapPin className="text-chestnut" size={18} />
                <h2 className="font-serif text-xl text-walnut">Adres</h2>
              </div>
              <p className="mt-3 text-base text-foreground/85 leading-relaxed">
                Ramplaan 48<br />2015 GX Haarlem
              </p>
            </div>

            <div className="h-px bg-border/60" />

            <div>
              <div className="flex items-center gap-3">
                <Phone className="text-chestnut" size={18} />
                <h2 className="font-serif text-xl text-walnut">Telefoon</h2>
              </div>
              <a href="tel:+31642618286" className="mt-3 inline-block text-base text-foreground/85 hover:text-walnut transition-colors">
                06 42 61 82 86
              </a>
            </div>

            <div className="h-px bg-border/60" />

            <div>
              <div className="flex items-center gap-3">
                <Mail className="text-chestnut" size={18} />
                <h2 className="font-serif text-xl text-walnut">E-mail</h2>
              </div>
              <a href="mailto:info@dehoutenhond.nl" className="mt-3 inline-block text-base text-foreground/85 hover:text-walnut transition-colors">
                info@dehoutenhond.nl
              </a>
            </div>

            <div className="h-px bg-border/60" />

            <div>
              <div className="flex items-center gap-3">
                <Clock className="text-chestnut" size={18} />
                <h2 className="font-serif text-xl text-walnut">Openingstijden</h2>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {hours.map(([d, t]) => (
                  <li key={d} className="flex justify-between border-b border-border/40 last:border-0 pb-2">
                    <span className="text-foreground/85">{d}</span>
                    <span className="text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="rounded-3xl overflow-hidden border border-border/60 aspect-[4/5] bg-sand shadow-sm">
              <iframe
                title="De Houten Hond op de kaart"
                src="https://www.google.com/maps?q=Ramplaan+48,+2015+GX+Haarlem&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-5 text-sm text-muted-foreground italic-serif text-center">
              Een warm welkom in hartje Ramplaankwartier.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

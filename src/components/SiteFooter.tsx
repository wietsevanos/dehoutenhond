import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 bg-walnut text-cream/90">
      <div className="container-prose py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl">De Houten Hond</div>
          <p className="mt-4 text-sm max-w-sm text-cream/70 leading-relaxed">
            Gespecialiseerde natuurvoedingswinkel voor honden en katten in het
            Ramplaankwartier, Haarlem. Persoonlijk advies, biologische voeding
            en natuurlijke verzorging.
          </p>
        </div>
        <div>
          <div className="eyebrow text-cream/60">Bezoek ons</div>
          <p className="mt-4 text-sm leading-relaxed">
            Ramplaan 48<br />2015 GX Haarlem
          </p>
          <p className="mt-4 text-sm text-cream/70">
            Di–Vr 09:00 – 18:00<br />
            Zaterdag 09:00 – 17:00<br />
            Zon & Maandag gesloten
          </p>
        </div>
        <div>
          <div className="eyebrow text-cream/60">Contact</div>
          <p className="mt-4 text-sm leading-relaxed">
            <a href="tel:+31642618286" className="hover:text-cream">06 42 61 82 86</a><br />
            <a href="mailto:info@dehoutenhond.nl" className="hover:text-cream">info@dehoutenhond.nl</a>
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm">
            <Link to="/voeding" className="text-cream/70 hover:text-cream">Natuurvoeding</Link>
            <Link to="/advies" className="text-cream/70 hover:text-cream">Voedingsadvies</Link>
            <Link to="/trimsalon" className="text-cream/70 hover:text-cream">Trimsalon Elswout</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-prose py-6 text-xs text-cream/50 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} De Houten Hond · KvK 59587797</span>
          <span>Natuurvoeding voor hond en kat · Haarlem</span>
        </div>
      </div>
    </footer>
  );
}

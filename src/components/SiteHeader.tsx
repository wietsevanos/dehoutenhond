import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/over", label: "Over" },
  { to: "/voeding", label: "Natuurvoeding" },
  { to: "/advies", label: "Voedingsadvies" },
  { to: "/merken", label: "Merken" },
  { to: "/trimsalon", label: "Trimsalon" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/60">
      <div className="container-prose flex items-center justify-between py-5">
        <Link to="/" className="font-serif text-xl tracking-tight text-walnut">
          De Houten Hond
          <span className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-0.5">
            Natuurvoeding · Haarlem
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 hover:text-walnut transition-colors"
              activeProps={{ className: "text-walnut" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden lg:inline-flex btn-primary text-sm">
          Plan bezoek →
        </Link>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-walnut"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background">
          <div className="container-prose flex flex-col py-4 gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3 self-start">
              Plan bezoek →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

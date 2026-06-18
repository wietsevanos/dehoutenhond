## Doel

Een statische SPA produceren in `dist/` met `.htaccess`, uploadbaar via GitHub Deploy in DirectAdmin. Geen Node-runtime nodig op de hosting.

## Belangrijk om vooraf te weten

Dit project draait op **TanStack Start (SSR)** — dat is geen statische SPA. Om een statische build te krijgen, moet ik een tweede, parallelle build-pipeline toevoegen die dezelfde route-componenten serveert via een puur client-side React Router.

**Wat blijft werken:**
- Lovable preview & publish (TanStack Start, ongewijzigd)
- Alle pagina's (Home, Over, Voeding, Snacks, Supplementen, Merken, Trimsalon, Advies, Contact) — zelfde inhoud
- Alle assets (CDN-afbeeldingen)

**Wat vervalt in de statische build:**
- SSR / server-side meta tags — meta tags worden client-side gezet via `react-helmet-async`. Google indexeert dit prima, social previews (WhatsApp/Facebook) lezen meta tags vóór JS draait en zien dan alleen de defaults. Voor een lokale winkelsite is dat acceptabel; voor maximale social-share kwaliteit blijft Lovable hosting beter.
- `sitemap.xml` als server-route → vervangen door een statisch `public/sitemap.xml`

## Aanpak

### 1. Tweede build-script toevoegen
- `npm run build:static` → produceert `dist/` (de bestaande `npm run build` blijft de Lovable SSR-build)
- Aparte `vite.static.config.ts` met standaard Vite + React plugin (zonder TanStack Start plugin)
- Eigen `index.html` entry op `src/spa/main.tsx`

### 2. SPA-router opzetten
- Installeer `react-router-dom` en `react-helmet-async`
- Nieuwe `src/spa/App.tsx` met `<BrowserRouter>` + één `<Route>` per pagina, hergebruikt de bestaande page-componenten (Home, Over, …)
- Per pagina een kleine wrapper die de huidige `head()` metadata in `<Helmet>` zet
- `Link`-imports uit `@tanstack/react-router` blijven werken in de SSR-build; voor de SPA-build maak ik een dunne shim die naar `react-router-dom`'s `Link` mapt (via Vite alias)

### 3. SPA-routing op Apache
- `public/.htaccess` met de standaard SPA-fallback:

```text
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

- Plus caching headers voor `/assets/*` (1 jaar, immutable) en `no-cache` voor `index.html`

### 4. Statische sitemap & robots
- `public/sitemap.xml` met alle vaste URL's
- `public/robots.txt` (bestaat al) controleren

### 5. Verificatie
- `npm run build:static` draaien, controleren dat `dist/index.html`, `dist/.htaccess`, `dist/assets/…` en `dist/sitemap.xml` aanwezig zijn
- Lokaal serveren en controleren dat refresh op `/over`, `/contact` enz. werkt

## Wat ik aan jou vraag

Twee dingen voor we beginnen:

1. **Akkoord op de SEO-tradeoff** (client-side meta tags i.p.v. SSR). Voor de winkel-vindbaarheid maakt het in de praktijk niets uit, maar ik wil 'm wel benoemen.
2. **Wil je de Lovable-versie behouden** (twee builds naast elkaar, aanrader) of de TanStack Start setup helemaal weghalen (kleiner, maar je verliest dan de Lovable-preview met SSR)?

Zodra je beide bevestigt, voer ik bovenstaande stappen uit en bevestig ik wanneer `dist/` klaarstaat.

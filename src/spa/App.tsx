import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HeadFromRoute } from "./HeadFromRoute";

import { Route as HomeRoute } from "@/routes/index";
import { Route as OverRoute } from "@/routes/over";
import { Route as VoedingRoute } from "@/routes/voeding";
import { Route as SnacksRoute } from "@/routes/snacks";
import { Route as SupplementenRoute } from "@/routes/supplementen";
import { Route as MerkenRoute } from "@/routes/merken";
import { Route as TrimsalonRoute } from "@/routes/trimsalon";
import { Route as AdviesRoute } from "@/routes/advies";
import { Route as ContactRoute } from "@/routes/contact";

type RouteLike = {
  component?: React.ComponentType<unknown>;
  head?: () => { meta?: Array<Record<string, string>>; links?: Array<Record<string, string>>; scripts?: Array<Record<string, string>> };
};

const pages: { path: string; route: RouteLike }[] = [
  { path: "/", route: HomeRoute as RouteLike },
  { path: "/over", route: OverRoute as RouteLike },
  { path: "/voeding", route: VoedingRoute as RouteLike },
  { path: "/snacks", route: SnacksRoute as RouteLike },
  { path: "/supplementen", route: SupplementenRoute as RouteLike },
  { path: "/merken", route: MerkenRoute as RouteLike },
  { path: "/trimsalon", route: TrimsalonRoute as RouteLike },
  { path: "/advies", route: AdviesRoute as RouteLike },
  { path: "/contact", route: ContactRoute as RouteLike },
];

function PageShell({ route }: { route: RouteLike }) {
  const C = route.component;
  return (
    <>
      <HeadFromRoute head={route.head} />
      {C ? <C /> : null}
    </>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-walnut">404</h1>
        <h2 className="mt-4 text-xl text-foreground">Pagina niet gevonden</h2>
        <div className="mt-6">
          <Link to="/" className="btn-primary">Terug naar home</Link>
        </div>
      </div>
    </div>
  );
}

const queryClient = new QueryClient();

export function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SiteHeader />
          <main>
            <Routes>
              {pages.map((p) => (
                <Route key={p.path} path={p.path} element={<PageShell route={p.route} />} />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <SiteFooter />
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

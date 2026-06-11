import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-walnut">404</h1>
        <h2 className="mt-4 text-xl text-foreground">Pagina niet gevonden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Deze pagina bestaat niet of is verplaatst.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">Terug naar home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl text-walnut">Er ging iets mis</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Probeer de pagina opnieuw te laden.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-primary"
          >
            Opnieuw proberen
          </button>
          <a href="/" className="btn-ghost">Naar home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "De Houten Hond · Natuurvoeding voor hond en kat in Haarlem" },
      { name: "description", content: "Gespecialiseerde natuurvoedingswinkel voor honden en katten in Haarlem. Biologische voeding, KVV, rauwvoer, voedingsadvies en trimsalon." },
      { name: "author", content: "De Houten Hond" },
      { property: "og:title", content: "De Houten Hond · Natuurvoeding voor hond en kat in Haarlem" },
      { property: "og:description", content: "Gespecialiseerde natuurvoedingswinkel voor honden en katten in Haarlem. Biologische voeding, KVV, rauwvoer, voedingsadvies en trimsalon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "De Houten Hond · Natuurvoeding voor hond en kat in Haarlem" },
      { name: "twitter:description", content: "Gespecialiseerde natuurvoedingswinkel voor honden en katten in Haarlem. Biologische voeding, KVV, rauwvoer, voedingsadvies en trimsalon." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/44c8ca09-6b52-494e-9985-ab8d4fbacb14/id-preview-1169ccb1--315f7ce5-7ff5-46cb-8563-d390175ca163.lovable.app-1781196629684.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/44c8ca09-6b52-494e-9985-ab8d4fbacb14/id-preview-1169ccb1--315f7ce5-7ff5-46cb-8563-d390175ca163.lovable.app-1781196629684.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main><Outlet /></main>
      <SiteFooter />
    </QueryClientProvider>
  );
}

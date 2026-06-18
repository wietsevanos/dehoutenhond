// Compatibility shim that lets existing TanStack Router route files run inside
// a plain client-side React Router build. Only used by `vite.static.config.ts`
// via an alias rewriting "@tanstack/react-router" to this module.

import {
  Link as RRLink,
  NavLink as RRNavLink,
  Outlet as RROutlet,
  useLocation,
  useNavigate,
  useParams as useRRParams,
  type LinkProps as RRLinkProps,
} from "react-router-dom";
import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";

// ----- Link -----------------------------------------------------------------

type ShimLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  params?: Record<string, string | number>;
  search?: Record<string, unknown>;
  hash?: string;
  activeProps?: { className?: string; style?: React.CSSProperties };
  inactiveProps?: { className?: string; style?: React.CSSProperties };
  preload?: unknown;
  preloadDelay?: number;
  replace?: boolean;
  children?: ReactNode;
};

function buildPath(to: string, params?: Record<string, string | number>) {
  if (!params) return to;
  let out = to;
  for (const [k, v] of Object.entries(params)) {
    out = out.replace(`$${k}`, String(v));
  }
  return out;
}

export const Link = forwardRef<HTMLAnchorElement, ShimLinkProps>(function Link(
  { to, params, search, hash, activeProps, inactiveProps, preload, preloadDelay, replace, className, style, children, ...rest },
  ref,
) {
  const path = buildPath(to, params);
  const searchStr = search
    ? "?" + new URLSearchParams(Object.entries(search).map(([k, v]) => [k, String(v)])).toString()
    : "";
  const dest = path + searchStr + (hash ? `#${hash}` : "");
  if (activeProps || inactiveProps) {
    return (
      <RRNavLink
        ref={ref}
        to={dest}
        replace={replace}
        end={path === "/"}
        className={({ isActive }) =>
          [className, isActive ? activeProps?.className : inactiveProps?.className].filter(Boolean).join(" ")
        }
        style={({ isActive }) => ({ ...(style || {}), ...(isActive ? activeProps?.style : inactiveProps?.style) })}
        {...(rest as Partial<RRLinkProps>)}
      >
        {children}
      </RRNavLink>
    );
  }
  return (
    <RRLink ref={ref} to={dest} replace={replace} className={className} style={style} {...(rest as Partial<RRLinkProps>)}>
      {children}
    </RRLink>
  );
});

// ----- Outlet ---------------------------------------------------------------

export const Outlet = RROutlet;

// ----- Hooks ----------------------------------------------------------------

export function useRouter() {
  const navigate = useNavigate();
  return {
    navigate: ({ to }: { to: string }) => navigate(to),
    invalidate: () => {},
  };
}

export function useNavigate$() {
  const navigate = useNavigate();
  return ({ to }: { to: string }) => navigate(to);
}
export { useNavigate$ as useNavigate };

export function useParams<T = Record<string, string>>(): T {
  return useRRParams() as T;
}

export function useRouterState<T>(opts?: { select?: (s: { location: { pathname: string; search: string; hash: string } }) => T }): T {
  const loc = useLocation();
  const state = {
    location: { pathname: loc.pathname, search: loc.search, hash: loc.hash },
  };
  return (opts?.select ? opts.select(state) : (state as unknown)) as T;
}

// ----- createFileRoute / createRootRoute ------------------------------------
// Stores the config on a `Route` object so the SPA app can read .component / .head.

type RouteConfig = {
  component?: React.ComponentType<unknown>;
  head?: (ctx?: unknown) => { meta?: Array<Record<string, string>>; links?: Array<Record<string, string>>; scripts?: Array<Record<string, string>> };
  notFoundComponent?: React.ComponentType<unknown>;
  errorComponent?: React.ComponentType<{ error: Error; reset: () => void }>;
  shellComponent?: React.ComponentType<{ children: ReactNode }>;
};

export function createFileRoute(_path: string) {
  return (config: RouteConfig) => ({ ...config, path: _path, useRouteContext: () => ({}) });
}

export function createRootRouteWithContext<_T>() {
  return (config: RouteConfig) => ({ ...config, useRouteContext: () => ({}) });
}

export function createRootRoute(config: RouteConfig) {
  return { ...config, useRouteContext: () => ({}) };
}

// ----- No-op SSR head/scripts -----------------------------------------------

export function HeadContent() {
  return null;
}
export function Scripts() {
  return null;
}

// ----- Misc -----------------------------------------------------------------

export function createRouter(_opts: unknown) {
  return null;
}

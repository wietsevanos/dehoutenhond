import { Helmet } from "react-helmet-async";

type Meta = Record<string, string>;
type Head = { meta?: Meta[]; links?: Meta[]; scripts?: Meta[] };

export function HeadFromRoute({ head }: { head?: () => Head }) {
  if (!head) return null;
  const out = head();
  return (
    <Helmet>
      {out.meta?.map((m, i) => {
        if (m.title) return <title key={`t-${i}`}>{m.title}</title>;
        if (m.charSet) return <meta key={`c-${i}`} charSet={m.charSet} />;
        const { content, ...attrs } = m;
        return <meta key={`m-${i}`} {...attrs} content={content} />;
      })}
      {out.links?.map((l, i) => <link key={`l-${i}`} {...l} />)}
      {out.scripts?.map((s, i) => {
        const { children, ...attrs } = s as Meta & { children?: string };
        return (
          <script key={`s-${i}`} {...attrs}>
            {children}
          </script>
        );
      })}
    </Helmet>
  );
}

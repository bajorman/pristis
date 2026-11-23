// The Polish pages share the root layout (one <html> for the whole site), so
// the language is set here: on the wrapper, and on <html> by a tiny inline
// script that runs while the static page is parsed, for screen readers and
// browser translation prompts.
export default function PolishLayout({ children }: LayoutProps<"/pl">) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.lang="pl"' }} />
      <div lang="pl" className="contents">
        {children}
      </div>
    </>
  );
}

// Content area below the header.
export default function PageBody({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main
      className={`mx-auto w-full max-w-6xl flex-1 px-4 py-10 text-[15px] leading-relaxed sm:px-12 ${className}`}
    >
      {children}
    </main>
  );
}

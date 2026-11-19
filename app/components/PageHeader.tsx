import Image from "next/image";
import Link from "next/link";
import { asset, nav, site } from "../site";

// Full-width header used on every page: the theme's grey banner with the
// navigation bar on top and the page title centred, as on Google Sites.
export default function PageHeader({
  title,
  current,
}: {
  title: string;
  current: string;
}) {
  return (
    <header
      className="relative isolate overflow-hidden bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${asset("/images/header-bg.jpg")})` }}
    >
      <div className="absolute inset-0 -z-10 bg-header-overlay opacity-40" />

      <nav className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3 text-lg">
          <Image
            src={asset("/images/logo-128.png")}
            alt=""
            width={36}
            height={36}
            className="rounded-sm bg-white"
          />
          {site.name}
        </Link>
        <ul className="flex flex-wrap gap-x-6 gap-y-1 text-[15px]">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={item.href === current ? "page" : undefined}
                className={
                  item.href === current
                    ? "font-bold"
                    : "opacity-90 hover:opacity-100 hover:underline"
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <h1 className="px-4 pt-10 pb-20 text-center text-5xl font-light sm:pt-12 sm:pb-24 sm:text-7xl">
        {title}
      </h1>
    </header>
  );
}

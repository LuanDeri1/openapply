import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenApply",
  description:
    "A free, global platform helping international students apply to U.S. universities and scholarships.",
};

const navigation = [
  { label: "Guides", href: "/guides" },
  { label: "Resources", href: "/resources" },
  { label: "Community", href: "/community" },
  { label: "About", href: "/about" },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-black/10">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
              <Link href="/" className="text-lg font-semibold tracking-tight">
                OpenApply
              </Link>
              <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-black/70 transition hover:text-black"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-3 text-sm">
                <Link
                  href="/community"
                  className="rounded-full border border-black/20 px-4 py-2 text-black/70 transition hover:border-black hover:text-black"
                >
                  Sign in
                </Link>
              </div>
            </div>
            <nav className="flex items-center gap-4 border-t border-black/10 px-6 py-3 text-sm font-medium md:hidden">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-black/70 transition hover:text-black"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-black/10">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-black/70 md:flex-row md:items-center md:justify-between">
              <p>OpenApply is a free, community-first platform for global access.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/guides" className="hover:text-black">
                  Guides
                </Link>
                <Link href="/resources" className="hover:text-black">
                  Resources
                </Link>
                <Link href="/community" className="hover:text-black">
                  Community
                </Link>
                <Link href="/about" className="hover:text-black">
                  About
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

"use client";

import Link from "next/link";

const navItems = [
  { href: "/", label: "청첩장" },
  { href: "/invitation", label: "초대장" }, // 추후 페이지용
] as const;

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav
        className="mx-auto flex h-12 max-w-lg items-center justify-between px-4"
        aria-label="메인 메뉴"
      >
        <Link
          href="/"
          className="text-sm font-medium text-stone-700 transition hover:text-stone-900"
        >
          청첩장
        </Link>
        <ul className="flex items-center gap-6">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-stone-600 transition hover:text-stone-900"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

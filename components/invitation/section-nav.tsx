"use client";

import { useCallback, useState } from "react";

const sections = [
  { id: "cover", label: "메인" },
  { id: "intro", label: "소개" },
  { id: "when-where", label: "일시·장소" },
  { id: "gallery", label: "갤러리" },
  { id: "guestbook", label: "방명록" },
  { id: "directions", label: "오시는 길" },
] as const;

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function SectionNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = useCallback((id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2">
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 min-w-[120px] items-center justify-center gap-1.5 rounded-full border border-stone-200 bg-white/95 px-4 shadow-md backdrop-blur"
          aria-expanded={isOpen}
          aria-label={isOpen ? "섹션 메뉴 닫기" : "위치별로 이동"}
        >
          <span className="text-sm font-medium text-stone-700">
            {isOpen ? "닫기" : "위치로 이동"}
          </span>
          <svg
            className={`h-4 w-4 text-stone-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 -z-10"
              aria-hidden
              onClick={() => setIsOpen(false)}
            />
            <ul
              className="absolute bottom-full left-1/2 mb-2 w-48 -translate-x-1/2 rounded-xl border border-stone-200 bg-white/95 p-2 shadow-lg backdrop-blur"
              role="list"
            >
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => handleSelect(id)}
                    className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-stone-700 transition hover:bg-stone-100"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

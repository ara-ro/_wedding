import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wedding",
  description: "모바일 청첩장",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}

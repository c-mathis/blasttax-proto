import "./globals.css";
import Link from "next/link";
import { Menu } from "lucide-react";

export const metadata = {
  title: "BlastTax MVP",
  description: "DIY tax resolution prototype",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-[var(--line)] bg-[var(--paper)]">
          <div className="container flex h-14 items-center justify-between">
            <Link href="/" className="font-semibold">BlastTax</Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/analyzer">Analyzer</Link>
              <Link href="/cases">Cases</Link>
              <Link href="/assistant">AI Assistant</Link>
              <Link href="/pro">Pros</Link>
              <Link href="/admin">Admin</Link>
              <Link href="/login" className="badge">Demo / Login</Link>
            </nav>
          </div>
        </header>
        <main className="container py-8">{children}</main>
        <footer className="container py-8 text-sm text-[var(--muted)]">© {new Date().getFullYear()} BlastTax MVP Prototype</footer>
      </body>
    </html>
  );
}

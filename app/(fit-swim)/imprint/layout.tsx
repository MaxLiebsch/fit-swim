import { pageMetadata } from "@/lib/seo";
import type { ReactNode } from "react";

export const metadata = pageMetadata({
  path: "/imprint",
  heading: "Impressum",
  subheading: "Impressum und Kontaktdaten von Fit Swim in Berlin.",
});

export default function ImprintLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16 md:px-6">
      <article className="prose prose-slate max-w-none">{children}</article>
    </div>
  );
}

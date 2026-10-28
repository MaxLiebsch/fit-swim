import { pageMetadata } from "@/lib/seo";
import type { ReactNode } from "react";

export const metadata = pageMetadata({
  path: "/privacy",
  heading: "Datenschutz",
  subheading: "Datenschutzerklärung von Fit Swim.",
});

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16 md:px-6">
      <article className="prose prose-slate max-w-none">{children}</article>
    </div>
  );
}

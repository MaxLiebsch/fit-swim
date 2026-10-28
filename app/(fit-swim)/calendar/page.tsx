import CalendarEmbed from "@/components/calendar-embed";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  path: "/calendar",
  heading: "Termin buchen",
  subheading: "Buchen Sie eine Schwimmstunde bei Fit Swim in Berlin.",
});

export default function CalendarPage() {
  return (
    <div className="grid min-h-[500px] bg-sky-50">
      <section className="container mx-auto p-4 md:py-20">
        <h1 className="mb-8 text-center text-4xl font-bold tracking-tight sm:text-5xl">
          Termin buchen
        </h1>
        <CalendarEmbed />
      </section>
    </div>
  );
}

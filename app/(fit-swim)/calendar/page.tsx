"use client";

import Cal from "@calcom/embed-react";
const CalendarPage = () => {
  return (
    <div className="grid min-h-[500px] bg-sky-50">
      <section className="container mx-auto p-4 md:py-20">
        <Cal
          calLink="fit-swim.de/schwimmstunde-sse"
          config={{ theme: "light" }}
        />
      </section>
    </div>
  );
};

export default CalendarPage;

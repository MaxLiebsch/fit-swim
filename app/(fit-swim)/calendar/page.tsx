"use client";

import Cal from "@calcom/embed-react";
const CalendarPage = () => {

  return (
    <div className="bg-sky-50 min-h-[500px]">
      <section className="py-4 md:py-20 flex-1">
        <div className="container mx-auto my-auto px-4 md:px-6">
          <Cal
            calLink="fit-swim.de/schwimmstunde-sse"
            config={{ theme: "light" }}
          />
        </div>
      </section>
    </div>
  );
};

export default CalendarPage;

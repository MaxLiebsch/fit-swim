"use client";

import Cal from "@calcom/embed-react";

const CalendarPage = () => {
  return (
    <div className="flex flex-col">
      <section className="py-4 md:py-20  h-full bg-sky-50">
        <div className="container mx-auto my-auto h-full px-4 md:px-6">
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

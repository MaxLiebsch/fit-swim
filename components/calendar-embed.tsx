"use client";

import Cal from "@calcom/embed-react";

export default function CalendarEmbed() {
  return <Cal calLink="fit-swim.de/schwimmstunde-sse" config={{ theme: "light" }} />;
}

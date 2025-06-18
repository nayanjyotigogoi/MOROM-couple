"use client"

import LoveJourneyPage from "../../love-journey/[sessionId]/page"

export default function RomanticEscapePage({ params }: { params: { sessionId: string } }) {
  return <LoveJourneyPage params={params} />
}

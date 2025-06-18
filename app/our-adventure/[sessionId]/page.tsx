"use client"

import LoveJourneyPage from "../../love-journey/[sessionId]/page"

export default function OurAdventurePage({ params }: { params: { sessionId: string } }) {
  return <LoveJourneyPage params={params} />
}

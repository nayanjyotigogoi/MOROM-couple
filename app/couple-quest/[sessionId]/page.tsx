"use client"

import LoveJourneyPage from "../../love-journey/[sessionId]/page"

export default function CoupleQuestPage({ params }: { params: { sessionId: string } }) {
  return <LoveJourneyPage params={params} />
}

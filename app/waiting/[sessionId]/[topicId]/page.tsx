"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Clock, RefreshCw, ArrowLeft, CheckCircle, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import { categories } from "@/lib/data"

export default function WaitingPage({ params }: { params: { sessionId: string; topicId: string } }) {
  const [sessionData, setSessionData] = useState<any>(null)
  const [topic, setTopic] = useState<any>(null)
  const [devicePartner, setDevicePartner] = useState<number | null>(null)
  const [partnerCompleted, setPartnerCompleted] = useState(false)
  const [checking, setChecking] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const session = localStorage.getItem(`morom_session_${params.sessionId}`)
    const partner = localStorage.getItem(`morom_device_partner_${params.sessionId}`)

    if (!session || !partner) {
      router.push(`/session/${params.sessionId}`)
      return
    }

    const sessionObj = JSON.parse(session)
    setSessionData(sessionObj)
    setDevicePartner(Number.parseInt(partner))

    // Find topic info
    let foundTopic = null
    for (const category of categories) {
      foundTopic = category.topics.find((t: any) => t.id === params.topicId)
      if (foundTopic) {
        setTopic({ ...foundTopic, categoryName: category.name })
        break
      }
    }

    checkPartnerStatus()
  }, [params.sessionId, params.topicId, router])

  const checkPartnerStatus = () => {
    const partner = localStorage.getItem(`morom_device_partner_${params.sessionId}`)
    if (!partner) return

    const otherPartner = Number.parseInt(partner) === 1 ? 2 : 1
    const partnerCompletionKey = `morom_completion_${params.sessionId}_${params.topicId}_partner${otherPartner}`
    const partnerAnswers = localStorage.getItem(partnerCompletionKey)

    setPartnerCompleted(!!partnerAnswers)
  }

  const handleRefresh = () => {
    setChecking(true)
    setTimeout(() => {
      checkPartnerStatus()
      setChecking(false)
    }, 1000)
  }

  const handleViewResults = () => {
    if (!partnerCompleted) return

    const myAnswersKey = `morom_completion_${params.sessionId}_${params.topicId}_partner${devicePartner}`
    const partnerAnswersKey = `morom_completion_${params.sessionId}_${params.topicId}_partner${devicePartner === 1 ? 2 : 1}`

    const myAnswers = localStorage.getItem(myAnswersKey)
    const partnerAnswers = localStorage.getItem(partnerAnswersKey)

    if (myAnswers && partnerAnswers) {
      const results = {
        sessionId: params.sessionId,
        categoryId: topic?.categoryId || "unknown",
        topicId: params.topicId,
        partner1Answers: devicePartner === 1 ? JSON.parse(myAnswers) : JSON.parse(partnerAnswers),
        partner2Answers: devicePartner === 1 ? JSON.parse(partnerAnswers) : JSON.parse(myAnswers),
        partners: sessionData.partners,
      }
      localStorage.setItem("morom_results", JSON.stringify(results))
      router.push(`/results/${params.sessionId}`)
    }
  }

  if (!sessionData || !topic || !devicePartner) return null

  const currentPartnerName =
    devicePartner === 1 ? sessionData.partners.partner1.name : sessionData.partners.partner2.name
  const otherPartnerName = devicePartner === 1 ? sessionData.partners.partner2.name : sessionData.partners.partner1.name

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => router.push(`/categories/${params.sessionId}`)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Categories
          </Button>
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Waiting Room
            </h1>
            <p className="text-gray-600">Checking partner status...</p>
          </div>
          <div className="w-32" />
        </div>

        {/* Main Waiting Card */}
        <Card className="max-w-2xl mx-auto border-2 border-pink-200 shadow-xl">
          <CardHeader className="text-center bg-gradient-to-r from-pink-50 to-purple-50">
            {partnerCompleted ? (
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            ) : (
              <Clock className="h-16 w-16 text-yellow-500 mx-auto mb-4 animate-pulse" />
            )}
            <CardTitle className="text-2xl">
              {partnerCompleted ? "Both Ready! 🎉" : "Waiting for Your Partner"}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              {/* Topic Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">Topic: {topic.name}</h3>
                <p className="text-blue-700 text-sm">{topic.description}</p>
              </div>

              {/* Partner Status */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <h4 className="font-semibold text-green-800">{currentPartnerName}</h4>
                  <p className="text-green-600 text-sm">✅ Completed</p>
                </div>

                <div
                  className={`${partnerCompleted ? "bg-green-50 border-green-200" : "bg-yellow-50 border-yellow-200"} border rounded-lg p-4`}
                >
                  <div
                    className={`w-12 h-12 ${partnerCompleted ? "bg-green-100" : "bg-yellow-100"} rounded-full flex items-center justify-center mx-auto mb-3`}
                  >
                    {partnerCompleted ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : (
                      <Clock className="h-6 w-6 text-yellow-500" />
                    )}
                  </div>
                  <h4 className={`font-semibold ${partnerCompleted ? "text-green-800" : "text-yellow-800"}`}>
                    {otherPartnerName}
                  </h4>
                  <p className={`text-sm ${partnerCompleted ? "text-green-600" : "text-yellow-600"}`}>
                    {partnerCompleted ? "✅ Completed" : "⏳ In Progress"}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                {partnerCompleted ? (
                  <Button
                    onClick={handleViewResults}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 text-lg"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    See Your Results Together!
                  </Button>
                ) : (
                  <Button onClick={handleRefresh} disabled={checking} variant="outline" className="w-full">
                    {checking ? (
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <RefreshCw className="mr-2 h-4 w-4" />
                    )}
                    {checking ? "Checking..." : "Check Again"}
                  </Button>
                )}
              </div>

              {/* Info */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <Users className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                <h4 className="font-semibold text-purple-800 mb-2">Multi-Device Magic ✨</h4>
                <p className="text-purple-700 text-sm">
                  {partnerCompleted
                    ? "Perfect! Both of you have completed this topic. Time to see how compatible you are!"
                    : `${otherPartnerName} can answer the questions on their own device, at their own pace. You'll both see the results when they're done!`}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <div className="max-w-2xl mx-auto mt-8">
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-blue-800 mb-3">💡 While You Wait:</h3>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• Your partner can access the questions from any device</li>
                <li>• They don't need to answer at the same time as you</li>
                <li>• Perfect for long-distance relationships!</li>
                <li>• Try another topic while waiting</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

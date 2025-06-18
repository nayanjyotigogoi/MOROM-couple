"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Play, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import { categories } from "@/lib/data"

export default function SessionTopicsPage({ params }: { params: { categoryId: string; sessionId: string } }) {
  const [sessionData, setSessionData] = useState<any>(null)
  const [category, setCategory] = useState<any>(null)
  const [devicePartner, setDevicePartner] = useState<number | null>(null)
  const router = useRouter()

  useEffect(() => {
    const session = localStorage.getItem(`morom_session_${params.sessionId}`)
    const partner = localStorage.getItem(`morom_device_partner_${params.sessionId}`)

    if (!session || !partner) {
      router.push(`/session/${params.sessionId}`)
      return
    }

    setSessionData(JSON.parse(session))
    setDevicePartner(Number.parseInt(partner))

    const foundCategory = categories.find((cat) => cat.id === params.categoryId)
    setCategory(foundCategory)
  }, [router, params.categoryId, params.sessionId])

  const handleTopicSelect = (topicId: string) => {
    const { categoryId } = params
    router.push(`/questions/${categoryId}/${topicId}/${params.sessionId}`)
  }

  if (!sessionData || !category || !devicePartner) return null

  const currentPartnerName =
    devicePartner === 1 ? sessionData.partners.partner1.name : sessionData.partners.partner2.name
  const partnerColor = devicePartner === 1 ? "pink" : "purple"

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
              {category.name}
            </h1>
            <p className="text-gray-600 mt-2">{category.description}</p>
            <div className={`inline-flex items-center gap-2 mt-2 px-3 py-1 bg-${partnerColor}-100 rounded-full`}>
              <span className={`text-sm text-${partnerColor}-600 font-medium`}>{currentPartnerName}'s Device</span>
            </div>
          </div>
          <div className="w-32" />
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {category.topics.map((topic: any, index: number) => (
            <Card
              key={topic.id}
              className="cursor-pointer transform transition hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-pink-200"
              onClick={() => handleTopicSelect(topic.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{topic.name}</CardTitle>
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-pink-600">{index + 1}</span>
                  </div>
                </div>
                <CardDescription className="text-sm">{topic.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500">{topic.questions.length} questions</span>
                  <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
                    {topic.difficulty || "Fun"}
                  </span>
                </div>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                  <Play className="mr-2 h-4 w-4" />
                  Start Questions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Session Info */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto border-2 border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Independent Answering 🌍</h3>
              <p className="text-gray-600 text-sm">
                You and your partner can answer the same topic questions independently. Results will be shown when both
                of you complete the topic!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

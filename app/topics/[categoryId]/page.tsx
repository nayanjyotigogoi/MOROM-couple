"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, ArrowLeft, Play } from "lucide-react"
import { useRouter } from "next/navigation"
import { categories } from "@/lib/data"

export default function TopicsPage({ params }: { params: { categoryId: string } }) {
  const [partners, setPartners] = useState<any>(null)
  const [category, setCategory] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    // Check for session in URL params
    const urlParams = new URLSearchParams(window.location.search)
    const sessionId = urlParams.get("session")

    if (sessionId) {
      const session = localStorage.getItem(`morom_session_${sessionId}`)
      if (session) {
        const sessionData = JSON.parse(session)
        setPartners(sessionData.partners)
      }
    } else {
      // Fallback to old method
      const savedPartners = localStorage.getItem("morom_partners")
      if (!savedPartners) {
        router.push("/")
        return
      }
      setPartners(JSON.parse(savedPartners))
    }

    const foundCategory = categories.find((cat) => cat.id === params.categoryId)
    setCategory(foundCategory)
  }, [router, params.categoryId])

  const handleTopicSelect = (topicId: string) => {
    const urlParams = new URLSearchParams(window.location.search)
    const sessionId = urlParams.get("session")

    if (sessionId) {
      router.push(`/questions/${params.categoryId}/${topicId}/${sessionId}`)
    } else {
      router.push(`/questions/${params.categoryId}/${topicId}`)
    }
  }

  if (!partners || !category) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => router.push("/categories")}
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

        {/* Bottom Info */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto border-2 border-pink-200 bg-gradient-to-r from-pink-50 to-purple-50">
            <CardContent className="p-6">
              <Heart className="h-8 w-8 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">How It Works</h3>
              <p className="text-gray-600 text-sm">
                Both of you will answer the same questions independently. Once you're both done, we'll compare your
                answers and show you how compatible you are on this topic!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

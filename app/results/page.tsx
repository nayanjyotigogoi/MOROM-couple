"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, ArrowLeft, Trophy, Sparkles, Mail } from "lucide-react"
import { useRouter } from "next/navigation"
import { categories } from "@/lib/data"

export default function ResultsPage() {
  const [results, setResults] = useState<any>(null)
  const [matchPercentage, setMatchPercentage] = useState(0)
  const [category, setCategory] = useState<any>(null)
  const [topic, setTopic] = useState<any>(null)
  const [sending, setSending] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const savedResults = localStorage.getItem("morom_results")
    if (!savedResults) {
      router.push("/")
      return
    }

    const resultsData = JSON.parse(savedResults)
    setResults(resultsData)

    // Find category and topic
    let foundCategory = null
    let foundTopic = null

    for (const cat of categories) {
      if (cat.id === resultsData.categoryId) {
        foundCategory = cat
        foundTopic = cat.topics.find((t: any) => t.id === resultsData.topicId)
        break
      }
    }

    setCategory(foundCategory)
    setTopic(foundTopic)

    // Calculate match percentage
    const matches = resultsData.partner1Answers.filter(
      (answer: string, index: number) => answer === resultsData.partner2Answers[index],
    ).length
    const percentage = Math.round((matches / resultsData.partner1Answers.length) * 100)
    setMatchPercentage(percentage)
  }, [router])

  const getMatchMessage = (percentage: number) => {
    if (percentage >= 90) return "Perfect Match! 💕"
    if (percentage >= 80) return "Amazing Connection! ✨"
    if (percentage >= 70) return "Great Compatibility! 🌟"
    if (percentage >= 60) return "Good Match! 💖"
    if (percentage >= 50) return "Interesting Differences! 🤔"
    return "Opposites Attract! 💫"
  }

  const getMatchColor = (percentage: number) => {
    if (percentage >= 80) return "from-green-400 to-green-600"
    if (percentage >= 60) return "from-yellow-400 to-yellow-600"
    return "from-pink-400 to-pink-600"
  }

  const handleShare = async () => {
    setSending("email")
    try {
      const response = await fetch("/api/send-results", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId: results.sessionId || "legacy",
          results: results,
          topic: topic,
          category: category,
          matchPercentage: matchPercentage,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        alert("✅ Results sent to both email addresses! Check your inboxes 💕")
      } else {
        throw new Error(data.error || "Failed to send results")
      }
    } catch (error) {
      console.error("Error sending results:", error)
      alert(
        `❌ ${error instanceof Error ? error.message : "Sorry, there was an error sending the results. Please try again."}`,
      )
    } finally {
      setSending(null)
    }
  }

  const handleBackToCategories = () => {
    if (results?.sessionId) {
      router.push(`/categories/${results.sessionId}`)
    } else {
      router.push("/categories")
    }
  }

  if (!results || !category || !topic) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={handleBackToCategories}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            New Topic
          </Button>
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Your Results
            </h1>
            <p className="text-gray-600">
              {category.name} • {topic.name}
            </p>
          </div>
          <div className="w-20" />
        </div>

        {/* Main Results Card */}
        <Card className="max-w-2xl mx-auto border-2 border-pink-200 shadow-2xl mb-8">
          <CardHeader className="text-center bg-gradient-to-r from-pink-50 to-purple-50">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-2">
                  <Heart className="h-8 w-8 text-pink-500" />
                </div>
                <p className="font-semibold text-pink-600">{results.partners.partner1.name}</p>
              </div>
              <Heart className="h-8 w-8 text-red-500 animate-pulse" />
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                  <Heart className="h-8 w-8 text-purple-500" />
                </div>
                <p className="font-semibold text-purple-600">{results.partners.partner2.name}</p>
              </div>
            </div>
            <CardTitle className="text-2xl">{getMatchMessage(matchPercentage)}</CardTitle>
          </CardHeader>
          <CardContent className="p-8 text-center">
            {/* Match Percentage Circle */}
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div
                className={`w-32 h-32 rounded-full bg-gradient-to-r ${getMatchColor(matchPercentage)} flex items-center justify-center shadow-lg`}
              >
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-800">{matchPercentage}%</span>
                </div>
              </div>
              <div className="absolute -top-2 -right-2">
                <Trophy className="h-8 w-8 text-yellow-500" />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Compatibility Score</h3>
            <p className="text-gray-600 mb-6">
              You matched on {Math.round((matchPercentage / 100) * topic.questions.length)} out of{" "}
              {topic.questions.length} questions!
            </p>

            {/* Share Buttons */}
            <div className="flex justify-center">
              <Button
                onClick={() => handleShare("email")}
                disabled={sending === "email"}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3"
              >
                {sending === "email" ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-5 w-5" />
                    Send Results via Email
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Results */}
        <Card className="max-w-4xl mx-auto border-2 border-purple-200">
          <CardHeader>
            <CardTitle className="text-center">Question by Question</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {topic.questions.map((question: any, index: number) => {
                const match = results.partner1Answers[index] === results.partner2Answers[index]
                return (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${match ? "border-green-200 bg-green-50" : "border-gray-200 bg-gray-50"}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-medium text-gray-800 flex-1">{question.question}</h4>
                      {match ? (
                        <Heart className="h-5 w-5 text-green-500 ml-2" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full ml-2" />
                      )}
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-pink-600">{results.partners.partner1.name}:</span>
                        <span className="ml-2 text-gray-700">{results.partner1Answers[index]}</span>
                      </div>
                      <div>
                        <span className="font-medium text-purple-600">{results.partners.partner2.name}:</span>
                        <span className="ml-2 text-gray-700">{results.partner2Answers[index]}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto border-2 border-pink-200 bg-gradient-to-r from-pink-50 to-purple-50">
            <CardContent className="p-6">
              <Sparkles className="h-8 w-8 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Want to Explore More?</h3>
              <p className="text-gray-600 mb-4">Try another category to discover even more about your relationship!</p>
              <Button
                onClick={handleBackToCategories}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
              >
                Explore More Topics
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

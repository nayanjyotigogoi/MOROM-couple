"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Heart, ArrowLeft, ArrowRight, Users, CheckCircle, Clock } from "lucide-react"
import { useRouter } from "next/navigation"
import { categories } from "@/lib/data"

export default function SessionQuestionsPage({
  params,
}: { params: { categoryId: string; topicId: string; sessionId: string } }) {
  const [sessionData, setSessionData] = useState<any>(null)
  const [topic, setTopic] = useState<any>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [currentAnswer, setCurrentAnswer] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const [devicePartner, setDevicePartner] = useState<number | null>(null)
  const [partnerStatus, setPartnerStatus] = useState<string>("unknown")
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

    const category = categories.find((cat) => cat.id === params.categoryId)
    const foundTopic = category?.topics.find((t: any) => t.id === params.topicId)
    setTopic(foundTopic)

    if (foundTopic) {
      setAnswers(new Array(foundTopic.questions.length).fill(""))

      // Check if this partner has already completed this topic
      const completionKey = `morom_completion_${params.sessionId}_${params.topicId}_partner${partner}`
      const existingAnswers = localStorage.getItem(completionKey)
      if (existingAnswers) {
        setAnswers(JSON.parse(existingAnswers))
        setIsComplete(true)
      }

      // Check partner status
      const otherPartner = Number.parseInt(partner) === 1 ? 2 : 1
      const partnerCompletionKey = `morom_completion_${params.sessionId}_${params.topicId}_partner${otherPartner}`
      const partnerAnswers = localStorage.getItem(partnerCompletionKey)
      setPartnerStatus(partnerAnswers ? "completed" : "in_progress")
    }
  }, [router, params.categoryId, params.topicId, params.sessionId])

  const handleNext = () => {
    if (!currentAnswer) return

    const newAnswers = [...answers]
    newAnswers[currentQuestion] = currentAnswer
    setAnswers(newAnswers)
    setCurrentAnswer("")

    if (currentQuestion < topic.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Save completion
      const completionKey = `morom_completion_${params.sessionId}_${params.topicId}_partner${devicePartner}`
      localStorage.setItem(completionKey, JSON.stringify(newAnswers))
      setIsComplete(true)
    }
  }

  const handleViewResults = () => {
    // Check if partner has also completed
    const otherPartner = devicePartner === 1 ? 2 : 1
    const partnerCompletionKey = `morom_completion_${params.sessionId}_${params.topicId}_partner${otherPartner}`
    const partnerAnswers = localStorage.getItem(partnerCompletionKey)

    if (partnerAnswers) {
      // Both completed, show results
      const results = {
        sessionId: params.sessionId,
        categoryId: params.categoryId,
        topicId: params.topicId,
        partner1Answers: devicePartner === 1 ? answers : JSON.parse(partnerAnswers),
        partner2Answers: devicePartner === 1 ? JSON.parse(partnerAnswers) : answers,
        partners: sessionData.partners,
      }
      localStorage.setItem("morom_results", JSON.stringify(results))
      router.push(`/results/${params.sessionId}`)
    } else {
      // Partner hasn't completed yet, show waiting screen
      router.push(`/waiting/${params.sessionId}/${params.topicId}`)
    }
  }

  if (!sessionData || !topic || !devicePartner) return null

  if (isComplete) {
    const otherPartner = devicePartner === 1 ? 2 : 1
    const partnerCompletionKey = `morom_completion_${params.sessionId}_${params.topicId}_partner${otherPartner}`
    const partnerCompleted = localStorage.getItem(partnerCompletionKey)

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100 flex items-center justify-center">
        <Card className="max-w-md mx-auto border-2 border-pink-200 shadow-xl">
          <CardHeader className="text-center bg-gradient-to-r from-pink-50 to-purple-50">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <CardTitle className="text-2xl">You're Done! 🎉</CardTitle>
          </CardHeader>
          <CardContent className="p-6 text-center">
            <p className="text-gray-600 mb-6">You've completed all questions for "{topic.name}"!</p>

            {partnerCompleted ? (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-700 font-medium">✅ Your partner has also completed this topic!</p>
                </div>
                <Button
                  onClick={handleViewResults}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  See Your Results Together
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <Clock className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                  <p className="text-yellow-700 font-medium">Waiting for your partner to complete...</p>
                  <p className="text-yellow-600 text-sm mt-1">They can answer on their own device and time!</p>
                </div>
                <Button onClick={handleViewResults} variant="outline" className="w-full">
                  Check Status & Wait
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  const currentPartnerName =
    devicePartner === 1 ? sessionData.partners.partner1.name : sessionData.partners.partner2.name
  const progress = ((currentQuestion + 1) / topic.questions.length) * 100
  const question = topic.questions[currentQuestion]
  const partnerColor = devicePartner === 1 ? "pink" : "purple"

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => router.push(`/topics/${params.categoryId}/${params.sessionId}`)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">{topic.name}</h1>
            <p className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {topic.questions.length}
            </p>
            <div className={`inline-flex items-center gap-2 mt-1 px-3 py-1 bg-${partnerColor}-100 rounded-full`}>
              <span className={`text-xs text-${partnerColor}-600 font-medium`}>{currentPartnerName}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-purple-500" />
            <span className="text-sm font-medium">Multi-Device</span>
          </div>
        </div>

        {/* Progress */}
        <div className="max-w-2xl mx-auto mb-8">
          <Progress value={progress} className="h-2" />
          <p className="text-center text-sm text-gray-600 mt-2">{Math.round(progress)}% complete</p>
        </div>

        {/* Question Card */}
        <Card className="max-w-2xl mx-auto border-2 border-pink-200 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50">
            <CardTitle className="text-xl text-center">{question.question}</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <RadioGroup value={currentAnswer} onValueChange={setCurrentAnswer} className="space-y-4">
              {question.options.map((option: string, index: number) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                    currentAnswer === option
                      ? "border-pink-300 bg-pink-50"
                      : "border-gray-200 hover:border-pink-200 hover:bg-pink-25"
                  }`}
                  onClick={() => setCurrentAnswer(option)}
                >
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="mt-8 flex justify-between items-center">
              <div className="text-sm text-gray-500">
                <p>Your partner can answer independently on their device</p>
              </div>
              <Button
                onClick={handleNext}
                disabled={!currentAnswer}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
              >
                {currentQuestion === topic.questions.length - 1 ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Finish
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

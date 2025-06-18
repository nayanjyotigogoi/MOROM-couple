"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, AlertCircle, CheckCircle, Sparkles, Star } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LoveJourneyPage({ params }: { params: { sessionId: string } }) {
  const [sessionData, setSessionData] = useState<any>(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // First try to get session directly
    let session = localStorage.getItem(`morom_session_${params.sessionId}`)

    // If not found, check if this is a romantic ID that maps to a session ID
    if (!session) {
      const actualSessionId = localStorage.getItem(`morom_romantic_mapping_${params.sessionId}`)
      if (actualSessionId) {
        session = localStorage.getItem(`morom_session_${actualSessionId}`)
        // Store the actual session ID for future use
        if (session) {
          localStorage.setItem("morom_current_session", actualSessionId)
        }
      }
    }

    if (!session) {
      setError(
        "This love journey link seems to have expired or doesn't exist. Please ask your partner for a new romantic invitation! 💕",
      )
      setLoading(false)
      return
    }

    setSessionData(JSON.parse(session))
    setLoading(false)
  }, [params.sessionId])

  const handleJoinSession = () => {
    if (sessionData) {
      // Get the actual session ID (either direct or mapped)
      let actualSessionId = params.sessionId
      const mappedSessionId = localStorage.getItem(`morom_romantic_mapping_${params.sessionId}`)
      if (mappedSessionId) {
        actualSessionId = mappedSessionId
      }

      localStorage.setItem("morom_current_session", actualSessionId)
      router.push(`/session/${actualSessionId}`)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100 flex items-center justify-center">
        <div className="text-center">
          <Heart className="h-16 w-16 text-pink-500 mx-auto mb-4 animate-pulse" />
          <Sparkles className="h-8 w-8 text-purple-500 mx-auto mb-4 animate-bounce" />
          <p className="text-gray-600 text-lg">Preparing your romantic adventure...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100 flex items-center justify-center">
        <Card className="max-w-md mx-auto border-2 border-red-200 shadow-xl">
          <CardHeader className="text-center">
            <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <CardTitle className="text-red-600">Oops! Love Link Not Found 💔</CardTitle>
          </CardHeader>
          <CardContent className="p-6 text-center">
            <p className="text-gray-600 mb-6">{error}</p>
            <Button
              onClick={() => router.push("/")}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white"
            >
              Start Your Own Love Journey 💕
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!sessionData) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100 flex items-center justify-center p-4">
      <Card className="max-w-lg mx-auto border-2 border-pink-200 shadow-2xl">
        <CardHeader className="text-center bg-gradient-to-r from-pink-50 to-purple-50">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-8 w-8 text-yellow-500 animate-pulse" />
            <CheckCircle className="h-16 w-16 text-green-500" />
            <Star className="h-8 w-8 text-yellow-500 animate-pulse" />
          </div>
          <CardTitle className="text-3xl mb-2">Welcome to Your Love Journey! 💕</CardTitle>
          <CardDescription className="text-lg">
            You've been invited to discover your romantic connection
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            {/* Partner Names Display */}
            <div className="bg-white border-2 border-pink-200 rounded-lg p-6 shadow-inner">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mb-2 shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-pink-600">{sessionData.partners.partner1.name}</p>
                </div>
                <div className="flex flex-col items-center">
                  <Heart className="h-8 w-8 text-red-500 animate-pulse mb-1" />
                  <span className="text-sm text-gray-500 font-medium">+</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mb-2 shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-purple-600">{sessionData.partners.partner2.name}</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  Love Connection Session
                </h3>
                <p className="text-sm text-gray-600">Ready to discover how perfectly you match? ✨</p>
              </div>
            </div>

            {/* Romantic Welcome Message */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-lg p-6">
              <Sparkles className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-bold text-yellow-800 mb-3">🌟 Your Romantic Adventure Awaits!</h4>
              <div className="text-sm text-yellow-700 space-y-2 text-left">
                <p>
                  💕 <strong>Answer questions</strong> about your relationship, dreams, and desires
                </p>
                <p>
                  ✨ <strong>Discover compatibility</strong> in fun, meaningful categories
                </p>
                <p>
                  🎉 <strong>Celebrate your connection</strong> with beautiful results to share
                </p>
                <p>
                  🌍 <strong>Perfect for any distance</strong> - answer from anywhere, anytime!
                </p>
              </div>
            </div>

            {/* Join Button */}
            <div className="space-y-4">
              <Button
                onClick={handleJoinSession}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-4 text-lg font-semibold shadow-lg transform transition hover:scale-105"
              >
                <Users className="mr-3 h-6 w-6" />💖 Join Our Love Journey Together! 💖
              </Button>

              <p className="text-xs text-gray-500">
                By joining, you're about to embark on a beautiful journey of discovery with your partner 💕
              </p>
            </div>

            {/* Fun Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-pink-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-500">💕</div>
                <div className="text-xs text-gray-600">Romantic</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-500">✨</div>
                <div className="text-xs text-gray-600">Magical</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">🎉</div>
                <div className="text-xs text-gray-600">Fun</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, AlertCircle, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function JoinSessionPage({ params }: { params: { sessionId: string } }) {
  const [sessionData, setSessionData] = useState<any>(null)
  const [error, setError] = useState("")
  const router = useRouter()

  useEffect(() => {
    const session = localStorage.getItem(`morom_session_${params.sessionId}`)
    if (!session) {
      setError("Session not found. Please make sure you have the correct link.")
      return
    }
    setSessionData(JSON.parse(session))
  }, [params.sessionId])

  const handleJoinSession = () => {
    if (sessionData) {
      localStorage.setItem("morom_current_session", params.sessionId)
      router.push(`/session/${params.sessionId}`)
    }
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100 flex items-center justify-center">
        <Card className="max-w-md mx-auto border-2 border-red-200 shadow-xl">
          <CardHeader className="text-center">
            <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <CardTitle className="text-red-600">Session Not Found</CardTitle>
          </CardHeader>
          <CardContent className="p-6 text-center">
            <p className="text-gray-600 mb-6">{error}</p>
            <Button onClick={() => router.push("/")} className="w-full">
              Start New Session
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!sessionData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100 flex items-center justify-center">
        <div className="text-center">
          <Heart className="h-16 w-16 text-pink-500 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Loading session...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100 flex items-center justify-center">
      <Card className="max-w-md mx-auto border-2 border-pink-200 shadow-xl">
        <CardHeader className="text-center bg-gradient-to-r from-pink-50 to-purple-50">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <CardTitle className="text-2xl">Welcome to MOROM!</CardTitle>
          <CardDescription>You're about to join a love session</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-2">
                  <Heart className="h-6 w-6 text-pink-500" />
                </div>
                <p className="text-sm font-medium text-pink-600">{sessionData.partners.partner1.name}</p>
              </div>
              <Heart className="h-6 w-6 text-red-500" />
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                  <Heart className="h-6 w-6 text-purple-500" />
                </div>
                <p className="text-sm font-medium text-purple-600">{sessionData.partners.partner2.name}</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-blue-800 mb-2">🌟 You're joining a couples session!</h4>
              <p className="text-sm text-blue-700">
                Answer questions independently and discover your compatibility together.
              </p>
            </div>

            <Button
              onClick={handleJoinSession}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 text-lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Join the Session
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

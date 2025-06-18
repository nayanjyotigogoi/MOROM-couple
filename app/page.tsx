"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const [partner1, setPartner1] = useState({ name: "", contact: "" })
  const [partner2, setPartner2] = useState({ name: "", contact: "" })
  const router = useRouter()

  const handleStart = () => {
    if (partner1.name && partner1.contact && partner2.name && partner2.contact) {
      // Generate unique session ID
      const sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      const sessionData = {
        sessionId,
        partners: { partner1, partner2 },
        createdAt: new Date().toISOString(),
        partner1Status: "waiting",
        partner2Status: "waiting",
        currentCategory: null,
        currentTopic: null,
      }

      localStorage.setItem(`morom_session_${sessionId}`, JSON.stringify(sessionData))
      localStorage.setItem("morom_current_session", sessionId)
      router.push(`/session/${sessionId}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-8 w-8 text-pink-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              MOROM
            </h1>
            <Heart className="h-8 w-8 text-pink-500" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover deeper connections with your partner through fun, flirty, and meaningful questions designed just
            for couples
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-pink-200 shadow-xl">
            <CardHeader className="text-center bg-gradient-to-r from-pink-50 to-purple-50">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Users className="h-6 w-6 text-purple-500" />
                Let's Get Started, Lovebirds!
              </CardTitle>
              <CardDescription className="text-base">
                Both partners need to enter their information to begin this romantic journey together
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Partner 1 */}
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="h-8 w-8 text-pink-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-pink-600">Partner 1</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="partner1-name" className="text-sm font-medium">
                        Your Name
                      </Label>
                      <Input
                        id="partner1-name"
                        placeholder="Enter your beautiful name"
                        value={partner1.name}
                        onChange={(e) => setPartner1((prev) => ({ ...prev, name: e.target.value }))}
                        className="border-pink-200 focus:border-pink-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="partner1-contact" className="text-sm font-medium">
                        Email or Mobile
                      </Label>
                      <Input
                        id="partner1-contact"
                        placeholder="your.email@example.com or +1234567890"
                        value={partner1.contact}
                        onChange={(e) => setPartner1((prev) => ({ ...prev, contact: e.target.value }))}
                        className="border-pink-200 focus:border-pink-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Partner 2 */}
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="h-8 w-8 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-purple-600">Partner 2</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="partner2-name" className="text-sm font-medium">
                        Your Name
                      </Label>
                      <Input
                        id="partner2-name"
                        placeholder="Enter your lovely name"
                        value={partner2.name}
                        onChange={(e) => setPartner2((prev) => ({ ...prev, name: e.target.value }))}
                        className="border-purple-200 focus:border-purple-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="partner2-contact" className="text-sm font-medium">
                        Email or Mobile
                      </Label>
                      <Input
                        id="partner2-contact"
                        placeholder="your.email@example.com or +1234567890"
                        value={partner2.contact}
                        onChange={(e) => setPartner2((prev) => ({ ...prev, contact: e.target.value }))}
                        className="border-purple-200 focus:border-purple-400"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button
                  onClick={handleStart}
                  disabled={!partner1.name || !partner1.contact || !partner2.name || !partner2.contact}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg transform transition hover:scale-105"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Start Our Journey Together
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center border-pink-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-pink-500" />
                </div>
                <h3 className="font-semibold mb-2">Romantic Questions</h3>
                <p className="text-sm text-gray-600">
                  Explore deep, meaningful questions designed to bring you closer together
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-purple-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="font-semibold mb-2">Perfect Compatibility</h3>
                <p className="text-sm text-gray-600">
                  Discover how well you match and celebrate your unique connection
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-red-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="font-semibold mb-2">Shareable Results</h3>
                <p className="text-sm text-gray-600">
                  Get beautiful results sent directly to both of you to treasure forever
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

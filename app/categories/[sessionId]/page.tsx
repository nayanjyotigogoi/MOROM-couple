"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, ArrowLeft, Coffee, Flame, Plane, Home, Utensils, Gamepad2, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import { categories } from "@/lib/data"

export default function SessionCategoriesPage({ params }: { params: { sessionId: string } }) {
  const [sessionData, setSessionData] = useState<any>(null)
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
  }, [params.sessionId, router])

  const handleCategorySelect = (categoryId: string) => {
    router.push(`/topics/${categoryId}/${params.sessionId}`)
  }

  const getCategoryIcon = (categoryId: string) => {
    const icons: Record<string, any> = {
      starters: Coffee,
      relationship: Heart,
      sex_love: Flame,
      get_to_know: Users,
      travel: Plane,
      hobbies: Gamepad2,
      lifestyle: Home,
      food: Utensils,
    }
    return icons[categoryId] || Heart
  }

  const getCategoryColor = (categoryId: string) => {
    const colors: Record<string, string> = {
      starters: "from-blue-400 to-blue-600",
      relationship: "from-pink-400 to-pink-600",
      sex_love: "from-red-400 to-red-600",
      get_to_know: "from-purple-400 to-purple-600",
      travel: "from-green-400 to-green-600",
      hobbies: "from-yellow-400 to-yellow-600",
      lifestyle: "from-indigo-400 to-indigo-600",
      food: "from-orange-400 to-orange-600",
    }
    return colors[categoryId] || "from-pink-400 to-pink-600"
  }

  if (!sessionData || !devicePartner) return null

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
            onClick={() => router.push(`/session/${params.sessionId}`)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Choose Your Adventure
            </h1>
            <p className="text-gray-600 mt-2">Hello {currentPartnerName}! Pick a category to explore</p>
            <div className={`inline-flex items-center gap-2 mt-2 px-3 py-1 bg-${partnerColor}-100 rounded-full`}>
              <div className={`w-2 h-2 bg-${partnerColor}-500 rounded-full`}></div>
              <span className={`text-sm text-${partnerColor}-600 font-medium`}>Your Device</span>
            </div>
          </div>
          <div className="w-20" />
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category) => {
            const IconComponent = getCategoryIcon(category.id)
            const colorClass = getCategoryColor(category.id)

            return (
              <Card
                key={category.id}
                className="cursor-pointer transform transition hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-pink-200"
                onClick={() => handleCategorySelect(category.id)}
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${colorClass} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription className="text-sm">{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-xs text-gray-500 mb-4">{category.topics.length} exciting topics to explore</p>
                  <Button className={`bg-gradient-to-r ${colorClass} hover:opacity-90 text-white w-full`}>
                    Explore Together
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Multi-device Info */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Multi-Device Magic ✨</h3>
              <p className="text-gray-600 text-sm">
                Your partner can choose categories on their own device. You'll both see results when you've completed
                the same topic together!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

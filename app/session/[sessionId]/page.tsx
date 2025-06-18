"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Copy, Check, Smartphone, Globe, Clock, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SessionPage({ params }: { params: { sessionId: string } }) {
  const [sessionData, setSessionData] = useState<any>(null)
  const [copied, setCopied] = useState(false)
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null)
  const [romanticLink, setRomanticLink] = useState("")
  const router = useRouter()

  // Generate romantic link with beautiful, memorable format
  const generateRomanticLink = () => {
    const romanticPaths = [
      "love-journey",
      "our-adventure",
      "heart-to-heart",
      "together-forever",
      "love-connection",
      "our-story",
      "romantic-escape",
      "couple-quest",
    ]

    const romanticWords = [
      "forever",
      "always",
      "hearts",
      "souls",
      "dreams",
      "magic",
      "stars",
      "moon",
      "sunshine",
      "rainbow",
      "butterfly",
      "rose",
      "diamond",
      "treasure",
      "angel",
      "sweet",
    ]

    const loveNumbers = ["143", "520", "831", "1437", "14344", "459"] // Love codes

    const randomPath = romanticPaths[Math.floor(Math.random() * romanticPaths.length)]
    const word1 = romanticWords[Math.floor(Math.random() * romanticWords.length)]
    const word2 = romanticWords[Math.floor(Math.random() * romanticWords.length)]
    const loveCode = loveNumbers[Math.floor(Math.random() * loveNumbers.length)]

    // Create beautiful romantic identifier
    const romanticId = `${word1}-${word2}-${loveCode}`

    return `${window.location.origin}/${randomPath}/${romanticId}`
  }

  useEffect(() => {
    const session = localStorage.getItem(`morom_session_${params.sessionId}`)
    if (!session) {
      router.push("/")
      return
    }
    const sessionObj = JSON.parse(session)
    setSessionData(sessionObj)

    // Generate and store the romantic link
    let storedRomanticLink = localStorage.getItem(`morom_romantic_link_${params.sessionId}`)
    if (!storedRomanticLink) {
      storedRomanticLink = generateRomanticLink()
      localStorage.setItem(`morom_romantic_link_${params.sessionId}`, storedRomanticLink)
      // Also store the mapping for the romantic ID to session ID
      const romanticId = storedRomanticLink.split("/").pop()
      localStorage.setItem(`morom_romantic_mapping_${romanticId}`, params.sessionId)
    }
    setRomanticLink(storedRomanticLink)
  }, [params.sessionId, router])

  const copySessionLink = async () => {
    const partnerNames = `${sessionData.partners.partner1.name} & ${sessionData.partners.partner2.name}`
    const romanticMessage = `💕✨ ${partnerNames}'s Love Journey Awaits! ✨💕

My darling, I've started something magical for us on MOROM! 

💖 Join me on our romantic adventure:
${romanticLink}

Let's discover how perfectly our hearts align! This will be so much fun! 🥰

Can't wait to see our results together! 💕

#OurLoveStory #MOROM #SoulmateConnection`

    await navigator.clipboard.writeText(romanticMessage)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  const handlePartnerSelect = (partnerNumber: number) => {
    setSelectedPartner(partnerNumber)
    localStorage.setItem(`morom_device_partner_${params.sessionId}`, partnerNumber.toString())
    router.push(`/categories/${params.sessionId}`)
  }

  if (!sessionData) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-8 w-8 text-pink-500 animate-pulse" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Your Love Journey Begins
            </h1>
            <Heart className="h-8 w-8 text-pink-500 animate-pulse" />
          </div>
          <p className="text-lg text-gray-600">
            {sessionData.partners.partner1.name} & {sessionData.partners.partner2.name}'s Romantic Adventure
          </p>
        </div>

        {/* Romantic Link Sharing */}
        <Card className="max-w-2xl mx-auto mb-8 border-2 border-pink-200 shadow-xl bg-gradient-to-r from-pink-50 to-purple-50">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="h-6 w-6 text-purple-500" />
              <CardTitle className="text-2xl">Invite Your Soulmate</CardTitle>
              <Sparkles className="h-6 w-6 text-purple-500" />
            </div>
            <CardDescription className="text-base">
              Send this romantic invitation to your partner so they can join your love adventure from anywhere in the
              world! 💕
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Romantic Link Display */}
              <div className="text-center">
                <h3 className="font-semibold mb-3 text-pink-700">💌 Your Romantic Invitation Link:</h3>
                <div className="bg-white border-2 border-pink-200 rounded-lg p-4 shadow-inner">
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-pink-600 mb-1">✨ Beautiful Love Portal ✨</div>
                      <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-3 border border-pink-200">
                        <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                          💕 {romanticLink.split("/").slice(-2).join("/")} 💕
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {romanticLink.split("/").slice(0, 3).join("/")}
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={copySessionLink}
                      size="sm"
                      className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 mr-1" />
                          Copied! 💕
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-1" />
                          Copy Love Message
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  💡 This copies a beautiful romantic message with your special love link!
                </p>
              </div>

              {/* Romantic Features */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-pink-100 rounded-lg border border-pink-200">
                  <Smartphone className="h-8 w-8 text-pink-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm text-pink-700">Any Device 📱</h4>
                  <p className="text-xs text-pink-600">Phone, tablet, laptop - love works everywhere!</p>
                </div>
                <div className="text-center p-4 bg-purple-100 rounded-lg border border-purple-200">
                  <Globe className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm text-purple-700">Any Distance 🌍</h4>
                  <p className="text-xs text-purple-600">Perfect for long-distance lovebirds!</p>
                </div>
                <div className="text-center p-4 bg-red-100 rounded-lg border border-red-200">
                  <Clock className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm text-red-700">Any Time ⏰</h4>
                  <p className="text-xs text-red-600">Answer when your heart feels ready!</p>
                </div>
              </div>

              {/* Romantic Instructions */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                  💌 How to Share the Love:
                </h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>
                    📱 <strong>WhatsApp/Text:</strong> Click "Copy Love Message" and paste in your chat
                  </li>
                  <li>
                    💌 <strong>Email:</strong> Send the romantic message to their inbox
                  </li>
                  <li>
                    💕 <strong>In Person:</strong> Show them the link on your screen for instant magic
                  </li>
                  <li>
                    🎁 <strong>Surprise:</strong> Send it as a sweet surprise when they least expect it!
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Partner Selection */}
        <Card className="max-w-2xl mx-auto border-2 border-purple-200 shadow-xl">
          <CardHeader className="text-center bg-gradient-to-r from-purple-50 to-pink-50">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <Users className="h-6 w-6 text-pink-500" />
              Choose Your Love Identity
            </CardTitle>
            <CardDescription className="text-base">
              Select who you are so we can personalize your romantic journey together 💕
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Partner 1 */}
              <Card
                className={`cursor-pointer transform transition hover:scale-105 border-2 ${
                  selectedPartner === 1
                    ? "border-pink-400 bg-pink-50 shadow-lg"
                    : "border-pink-200 hover:border-pink-300"
                }`}
                onClick={() => handlePartnerSelect(1)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-pink-600 mb-2">{sessionData.partners.partner1.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{sessionData.partners.partner1.contact}</p>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-lg">
                    💕 This is me, my love!
                  </Button>
                </CardContent>
              </Card>

              {/* Partner 2 */}
              <Card
                className={`cursor-pointer transform transition hover:scale-105 border-2 ${
                  selectedPartner === 2
                    ? "border-purple-400 bg-purple-50 shadow-lg"
                    : "border-purple-200 hover:border-purple-300"
                }`}
                onClick={() => handlePartnerSelect(2)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">{sessionData.partners.partner2.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{sessionData.partners.partner2.contact}</p>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg">
                    💜 This is me, darling!
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200 rounded-lg p-6">
                <Heart className="h-8 w-8 text-red-500 mx-auto mb-3 animate-pulse" />
                <h4 className="font-semibold text-gray-800 mb-3">💕 How Your Love Journey Works:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div className="space-y-2">
                    <p>
                      ✨ <strong>Step 1:</strong> Each partner chooses their identity on their own device
                    </p>
                    <p>
                      💖 <strong>Step 2:</strong> Answer romantic questions at your own pace
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>
                      🌟 <strong>Step 3:</strong> Discover your compatibility when both are done
                    </p>
                    <p>
                      🎉 <strong>Step 4:</strong> Celebrate your beautiful connection together!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DebugPage() {
  const [debugInfo, setDebugInfo] = useState<any>({})

  useEffect(() => {
    const currentSession = localStorage.getItem("morom_current_session")
    const allKeys = Object.keys(localStorage).filter((key) => key.startsWith("morom_"))

    const info: any = {
      currentSession,
      allStorageKeys: allKeys,
      storageData: {},
    }

    allKeys.forEach((key) => {
      try {
        info.storageData[key] = JSON.parse(localStorage.getItem(key) || "null")
      } catch {
        info.storageData[key] = localStorage.getItem(key)
      }
    })

    setDebugInfo(info)
  }, [])

  const clearStorage = () => {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("morom_")) {
        localStorage.removeItem(key)
      }
    })
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100 p-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>MOROM Debug Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Current Session:</h3>
              <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">{debugInfo.currentSession || "None"}</pre>
            </div>

            <div>
              <h3 className="font-semibold">All Storage Keys:</h3>
              <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">
                {JSON.stringify(debugInfo.allStorageKeys, null, 2)}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold">Storage Data:</h3>
              <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto max-h-96">
                {JSON.stringify(debugInfo.storageData, null, 2)}
              </pre>
            </div>

            <Button onClick={clearStorage} variant="destructive">
              Clear All MOROM Data
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

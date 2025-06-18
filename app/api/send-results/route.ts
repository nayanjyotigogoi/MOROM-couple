import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with your API key
const resend = new Resend("re_ZFHNPCVr_L4LWdhbMD3VLbtvGGzx9Gnpa")

// Email sending function using Resend
async function sendEmail(to: string, subject: string, htmlContent: string) {
  try {
    console.log(`Attempting to send email to: ${to}`)

    const { data, error } = await resend.emails.send({
      from: "MOROM <onboarding@resend.dev>", // Using Resend's verified domain
      to: [to],
      subject: subject,
      html: htmlContent,
    })

    if (error) {
      console.error("Resend error:", error)
      throw new Error(`Resend API error: ${JSON.stringify(error)}`)
    }

    console.log("Email sent successfully:", data)
    return { success: true, data }
  } catch (error) {
    console.error("Error in sendEmail function:", error)
    throw error
  }
}

function generateEmailHTML(results: any, topic: any, category: any, matchPercentage: number) {
  const getMatchMessage = (percentage: number) => {
    if (percentage >= 90) return "Perfect Match! 💕"
    if (percentage >= 80) return "Amazing Connection! ✨"
    if (percentage >= 70) return "Great Compatibility! 🌟"
    if (percentage >= 60) return "Good Match! 💖"
    if (percentage >= 50) return "Interesting Differences! 🤔"
    return "Opposites Attract! 💫"
  }

  const getMatchColor = (percentage: number) => {
    if (percentage >= 80) return "#10B981" // green
    if (percentage >= 60) return "#F59E0B" // yellow
    return "#EC4899" // pink
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your MOROM Love Results</title>
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          max-width: 600px; 
          margin: 0 auto; 
          padding: 20px; 
          background-color: #fdf2f8;
        }
        .header { 
          text-align: center; 
          background: linear-gradient(135deg, #EC4899, #8B5CF6); 
          color: white; 
          padding: 30px; 
          border-radius: 15px; 
          margin-bottom: 30px; 
          box-shadow: 0 10px 25px rgba(236, 72, 153, 0.3);
        }
        .header h1 { margin: 0; font-size: 28px; font-weight: bold; }
        .partners { 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          gap: 20px; 
          margin: 20px 0; 
          flex-wrap: wrap;
        }
        .partner { text-align: center; }
        .partner-icon { 
          width: 60px; 
          height: 60px; 
          background: rgba(255,255,255,0.2); 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          margin: 0 auto 10px; 
          font-size: 24px; 
        }
        .match-score { text-align: center; margin: 30px 0; }
        .score-circle { 
          width: 120px; 
          height: 120px; 
          border-radius: 50%; 
          background: ${getMatchColor(matchPercentage)}; 
          color: white; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          margin: 0 auto 20px; 
          font-size: 36px; 
          font-weight: bold; 
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        .question-item { 
          background: #ffffff; 
          border-radius: 12px; 
          padding: 20px; 
          margin: 15px 0; 
          border-left: 4px solid ${getMatchColor(matchPercentage)}; 
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .question { 
          font-weight: bold; 
          margin-bottom: 15px; 
          color: #1f2937; 
          font-size: 16px;
        }
        .answers { display: grid; gap: 10px; }
        .answer { 
          padding: 12px 16px; 
          border-radius: 8px; 
          font-size: 14px; 
          border: 1px solid #e5e7eb;
        }
        .answer.match { 
          background: #d1fae5; 
          color: #065f46; 
          border-color: #10b981;
        }
        .answer.different { 
          background: #fef2f2; 
          color: #991b1b; 
          border-color: #f87171;
        }
        .footer { 
          text-align: center; 
          margin-top: 40px; 
          padding: 25px; 
          background: linear-gradient(135deg, #f3f4f6, #e5e7eb); 
          border-radius: 12px; 
        }
        .logo { 
          font-size: 28px; 
          font-weight: bold; 
          background: linear-gradient(135deg, #EC4899, #8B5CF6); 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          background-clip: text;
          margin-bottom: 10px;
        }
        @media (max-width: 600px) {
          body { padding: 10px; }
          .header { padding: 20px; }
          .header h1 { font-size: 24px; }
          .partners { gap: 10px; }
          .score-circle { width: 100px; height: 100px; font-size: 28px; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>💕 Your MOROM Love Results 💕</h1>
        <div class="partners">
          <div class="partner">
            <div class="partner-icon">💖</div>
            <div><strong>${results.partners.partner1.name}</strong></div>
          </div>
          <div style="font-size: 24px; color: rgba(255,255,255,0.8);">+</div>
          <div class="partner">
            <div class="partner-icon">💜</div>
            <div><strong>${results.partners.partner2.name}</strong></div>
          </div>
        </div>
        <p style="margin: 10px 0; opacity: 0.9;">${category.name} • ${topic.name}</p>
      </div>

      <div class="match-score">
        <div class="score-circle">${matchPercentage}%</div>
        <h2 style="color: #1f2937; margin: 0 0 10px 0;">${getMatchMessage(matchPercentage)}</h2>
        <p style="color: #6b7280; font-size: 16px;">
          You matched on <strong>${Math.round((matchPercentage / 100) * topic.questions.length)}</strong> out of <strong>${topic.questions.length}</strong> questions!
        </p>
      </div>

      <h3 style="color: #1f2937; text-align: center; margin: 30px 0 20px 0;">📝 Your Detailed Results</h3>
      
      ${topic.questions
        .map((question: any, index: number) => {
          const match = results.partner1Answers[index] === results.partner2Answers[index]
          return `
          <div class="question-item">
            <div class="question">
              ${match ? "💚" : "💛"} ${question.question}
            </div>
            <div class="answers">
              <div class="answer ${match ? "match" : "different"}">
                <strong>${results.partners.partner1.name}:</strong> ${results.partner1Answers[index]}
              </div>
              <div class="answer ${match ? "match" : "different"}">
                <strong>${results.partners.partner2.name}:</strong> ${results.partner2Answers[index]}
              </div>
            </div>
          </div>
        `
        })
        .join("")}

      <div class="footer">
        <div class="logo">MOROM</div>
        <p style="color: #6b7280; margin: 10px 0;">Discover deeper connections with your partner 💕</p>
        <p style="color: #9ca3af; font-size: 14px; font-style: italic;">Keep exploring your love story together!</p>
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #d1d5db;">
          <p style="color: #6b7280; font-size: 12px; margin: 5px 0;">
            This email was sent because you completed a MOROM couples compatibility quiz.
          </p>
          <p style="color: #9ca3af; font-size: 11px; margin: 0;">
            Made with 💕 for couples everywhere
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    console.log("API route called - parsing request body...")
    const body = await request.json()
    console.log("Request body parsed:", {
      hasResults: !!body.results,
      hasTopic: !!body.topic,
      hasCategory: !!body.category,
      matchPercentage: body.matchPercentage,
    })

    const { sessionId, results, topic, category, matchPercentage } = body

    if (!results || !topic || !category) {
      console.error("Missing required data:", { results: !!results, topic: !!topic, category: !!category })
      return NextResponse.json({ error: "Missing required data" }, { status: 400 })
    }

    const partner1Contact = results.partners.partner1.contact
    const partner2Contact = results.partners.partner2.contact

    console.log("Partner contacts:", { partner1Contact, partner2Contact })

    // Check if contacts are email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(partner1Contact) || !emailRegex.test(partner2Contact)) {
      console.error("Invalid email addresses:", { partner1Contact, partner2Contact })
      return NextResponse.json(
        {
          error: "Both contacts must be valid email addresses",
        },
        { status: 400 },
      )
    }

    const subject = `💕 Your MOROM Love Results - ${matchPercentage}% Compatibility!`
    console.log("Generating email content...")
    const htmlContent = generateEmailHTML(results, topic, category, matchPercentage)
    console.log("Email content generated, sending emails...")

    // Send email to both partners with detailed error handling
    try {
      const emailPromises = [
        sendEmail(partner1Contact, subject, htmlContent),
        sendEmail(partner2Contact, subject, htmlContent),
      ]

      const emailResults = await Promise.allSettled(emailPromises)

      // Check if any emails failed
      const failedEmails = emailResults.filter((result) => result.status === "rejected")

      if (failedEmails.length > 0) {
        console.error("Some emails failed:", failedEmails)
        throw new Error(`Failed to send ${failedEmails.length} email(s)`)
      }

      console.log("All emails sent successfully!")
      return NextResponse.json({
        success: true,
        message: "Results sent to both email addresses successfully!",
      })
    } catch (emailError) {
      console.error("Email sending error:", emailError)
      throw emailError
    }
  } catch (error) {
    console.error("API route error:", error)

    // Return more specific error messages
    let errorMessage = "Failed to send results. Please try again."

    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        errorMessage = "Email service configuration error. Please contact support."
      } else if (error.message.includes("email")) {
        errorMessage = "Invalid email address format. Please check and try again."
      } else {
        errorMessage = error.message
      }
    }

    return NextResponse.json(
      {
        error: errorMessage,
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

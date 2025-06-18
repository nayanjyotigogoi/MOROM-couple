# MOROM - Couples Quiz Website

A beautiful, romantic website for couples to discover their compatibility through fun questions and quizzes.

## Features

- 🌟 **Multi-Device Support**: Partners can answer questions independently on different devices
- 💕 **Romantic UI**: Beautiful, love-themed design with gradients and animations
- 📱 **Responsive**: Works perfectly on mobile, tablet, and desktop
- 🎯 **8 Categories**: Starters, Relationship, Sex & Love, Get to Know, Travel, Hobbies, Lifestyle, Food
- 📊 **Compatibility Scoring**: Real-time compatibility percentage calculation
- 📧 **Automatic Email Results**: Send beautiful results directly to email addresses using Resend
- 🔗 **Beautiful Sharing Links**: Romantic, memorable URLs for partner invitations
- 👥 **Session Management**: Secure session handling for couples

## Email Integration - READY TO USE! ✅

### Resend Setup (Already Configured!)
The application is already configured with Resend for email sending. Your API key is set up and ready to go!

**Features:**
- ✅ **Professional Email Templates**: Beautiful HTML emails with romantic styling
- ✅ **Automatic Delivery**: Results sent to both partners simultaneously
- ✅ **Mobile Responsive**: Perfect on all email clients
- ✅ **Error Handling**: Robust error handling and user feedback
- ✅ **Email Validation**: Ensures valid email addresses before sending

### Environment Variables (Already Set!)
Your `.env.local` file is configured with:
\`\`\`env
RESEND_API_KEY=re_ZFHNPCVr_L4LWdhbMD3VLbtvGGzx9Gnpa
\`\`\`

## Getting Started

1. **Install dependencies**:
\`\`\`bash
npm install
\`\`\`

2. **Run the development server**:
\`\`\`bash
npm run dev
\`\`\`

3. **Open your browser** and navigate to `http://localhost:3000`

4. **Test the email functionality**:
   - Create a new couple session
   - Use real email addresses for both partners
   - Complete a quiz topic
   - Click "Send Results via Email"
   - Check both email inboxes for beautiful results!

## How It Works

1. **Registration**: Both partners enter their names and email addresses
2. **Session Creation**: A unique session is created with romantic sharing links
3. **Independent Answering**: Each partner can answer questions on their own device
4. **Real-time Sync**: Progress is tracked and synced between devices
5. **Results**: When both complete, compatibility scores are calculated
6. **Automatic Email**: Beautiful HTML results are sent to both partners via Resend

## Email Features

### Beautiful HTML Email Template
- **Romantic Header**: Pink/purple gradient with couple names
- **Visual Compatibility Score**: Circular percentage display with colors
- **Question-by-Question Breakdown**: Color-coded matches vs differences
- **Mobile Responsive**: Perfect on phones, tablets, and desktops
- **Professional Footer**: MOROM branding with romantic messaging

### Email Content Includes:
- 💕 **Couple Names**: Personalized header with both partner names
- 📊 **Compatibility Percentage**: Large, visual score display
- 📝 **All Questions & Answers**: Complete breakdown of responses
- 🎨 **Color Coding**: Green for matches, red for differences
- 💌 **Romantic Messaging**: Love-themed content throughout
- 📱 **Mobile Optimized**: Looks perfect on all devices

## Project Structure

\`\`\`
app/
├── api/
│   └── send-results/          # Resend email API endpoint (READY!)
├── categories/                # Category selection pages
├── topics/                    # Topic selection pages
├── questions/                 # Question answering pages
├── results/                   # Results display pages
├── session/                   # Session management pages
├── waiting/                   # Waiting room for partner completion
├── love-journey/              # Romantic link landing pages
└── admin/                     # Admin panel for content management

components/
└── ui/                        # Reusable UI components

lib/
└── data.ts                    # All questions and categories data
\`\`\`

## Customization

### Adding New Questions
Edit `lib/data.ts` to add new categories, topics, or questions:

\`\`\`typescript
{
  id: "new_topic",
  name: "New Topic",
  description: "Description of the new topic",
  difficulty: "Fun",
  questions: [
    {
      question: "Your question here?",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"]
    }
  ]
}
\`\`\`

### Email Template Customization
The email template in `app/api/send-results/route.ts` can be customized:
- **Colors**: Change gradient colors and theme
- **Layout**: Modify HTML structure
- **Content**: Add or remove sections
- **Branding**: Update footer and messaging

### Styling
The project uses Tailwind CSS with a romantic color scheme:
- Primary: Pink gradients (`from-pink-500 to-purple-600`)
- Secondary: Purple and red accents
- Background: Soft gradients (`from-pink-100 via-purple-50 to-red-100`)

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variable in Vercel dashboard:
   - `RESEND_API_KEY`: `re_ZFHNPCVr_L4LWdhbMD3VLbtvGGzx9Gnpa`
4. Deploy!

### Other Platforms
The app works on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

**Important**: Make sure to add the `RESEND_API_KEY` environment variable on your deployment platform.

## Testing Email Functionality

### Local Testing
1. Start the development server: `npm run dev`
2. Create a couple session with real email addresses
3. Complete a quiz topic
4. Click "Send Results via Email"
5. Check both email inboxes (including spam folders)

### Production Testing
1. Deploy to your preferred platform
2. Ensure environment variables are set
3. Test with real email addresses
4. Verify email delivery and formatting

## Resend Features Used

- ✅ **HTML Email Support**: Rich, beautiful email templates
- ✅ **Multiple Recipients**: Send to both partners simultaneously
- ✅ **Error Handling**: Proper error messages and logging
- ✅ **Professional Sending**: From "MOROM <noreply@resend.dev>"
- ✅ **Reliable Delivery**: High deliverability rates

## Troubleshooting

### Email Not Sending
1. Check that `RESEND_API_KEY` is set correctly
2. Verify email addresses are valid
3. Check server logs for error messages
4. Ensure Resend package is installed: `npm install resend`

### Email in Spam
1. This is normal for new domains
2. Ask users to check spam folders
3. Consider setting up a custom domain with Resend for better deliverability

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test email functionality
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please open an issue on GitHub.

---

Made with 💕 for couples everywhere!

**Email functionality powered by Resend** 📧✨

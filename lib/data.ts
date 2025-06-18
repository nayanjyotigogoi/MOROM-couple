// This file contains all the content for MOROM
// In a real application, this would be stored in a database

export const categories = [
  {
    id: "starters",
    name: "Starters",
    description: "Perfect conversation starters to break the ice and get comfortable",
    topics: [
      {
        id: "first_impressions",
        name: "First Impressions",
        description: "What did you think when you first met?",
        difficulty: "Easy",
        questions: [
          {
            question: "What was your first thought when you saw me?",
            options: [
              "You were incredibly attractive",
              "You seemed really interesting",
              "You looked friendly and approachable",
              "I was nervous but excited",
            ],
          },
          {
            question: "What made you want to get to know me better?",
            options: ["Your smile", "Your sense of humor", "Your intelligence", "Your kindness"],
          },
          {
            question: "If you could relive our first meeting, what would you do differently?",
            options: ["Be more confident", "Ask more questions", "Nothing, it was perfect", "Compliment you more"],
          },
          {
            question: "What's one thing you wish you had known about me from day one?",
            options: ["Your favorite things", "Your dreams and goals", "Your love language", "Your biggest fears"],
          },
          {
            question: "How did you know you wanted to see me again?",
            options: [
              "I felt comfortable with you",
              "We had amazing chemistry",
              "You made me laugh",
              "I couldn't stop thinking about you",
            ],
          },
          {
            question: "What's your favorite memory from our early days together?",
            options: [
              "Our first real conversation",
              "Our first date",
              "The first time we laughed together",
              "When I realized I liked you",
            ],
          },
          {
            question: "If you had to describe our first meeting in one word, what would it be?",
            options: ["Magical", "Comfortable", "Exciting", "Unexpected"],
          },
        ],
      },
      {
        id: "getting_comfortable",
        name: "Getting Comfortable",
        description: "Easy questions to help you both relax and open up",
        difficulty: "Easy",
        questions: [
          {
            question: "What's your ideal way to spend a lazy Sunday together?",
            options: [
              "Cuddling and watching movies",
              "Cooking a meal together",
              "Going for a walk",
              "Just talking and relaxing",
            ],
          },
          {
            question: "What's something simple that always makes you happy?",
            options: [
              "A good cup of coffee",
              "Hearing your favorite song",
              "Getting a hug",
              "Seeing a beautiful sunset",
            ],
          },
          {
            question: "If we had a whole day with no plans, what would you want to do?",
            options: [
              "Stay in bed and talk",
              "Explore somewhere new",
              "Do a fun activity together",
              "Just enjoy each other's company",
            ],
          },
          {
            question: "What's your favorite thing about spending time together?",
            options: [
              "How comfortable I feel",
              "How much we laugh",
              "How we can just be ourselves",
              "How time flies by",
            ],
          },
          {
            question: "What's one thing that always puts you in a good mood?",
            options: ["Your smile", "Good music", "Being outdoors", "Funny videos"],
          },
          {
            question: "How do you like to show affection?",
            options: ["Physical touch", "Words of affirmation", "Acts of service", "Quality time"],
          },
          {
            question: "What makes you feel most loved?",
            options: ["When you listen to me", "Physical affection", "Thoughtful gestures", "Quality time together"],
          },
        ],
      },
      {
        id: "first_date_memories",
        name: "First Date Memories",
        description: "Relive those magical first moments together",
        difficulty: "Fun",
        questions: [
          {
            question: "What was the best part of our first date?",
            options: [
              "The conversation flowed so naturally",
              "You made me laugh constantly",
              "I felt so comfortable with you",
              "The romantic atmosphere",
            ],
          },
          {
            question: "What were you most nervous about on our first date?",
            options: [
              "Making a good impression",
              "Running out of things to talk about",
              "Looking good for you",
              "Whether you'd like me",
            ],
          },
          {
            question: "If you could plan our first date again, where would you take me?",
            options: [
              "A cozy coffee shop",
              "A fun activity like mini golf",
              "A romantic dinner",
              "A walk in a beautiful place",
            ],
          },
          {
            question: "What surprised you most about me on our first date?",
            options: [
              "How easy you were to talk to",
              "Your sense of humor",
              "How thoughtful you were",
              "How attractive you were in person",
            ],
          },
          {
            question: "When did you know you wanted a second date?",
            options: [
              "Within the first 10 minutes",
              "Halfway through the date",
              "At the end of the night",
              "The next morning when I woke up",
            ],
          },
          {
            question: "What's one thing you remember me wearing on our first date?",
            options: [
              "Something that made you look amazing",
              "A color that suited you perfectly",
              "Something casual but cute",
              "I was too nervous to notice details",
            ],
          },
          {
            question: "How did you feel when our first date ended?",
            options: [
              "Excited and hopeful",
              "Sad it was over",
              "Confident we'd see each other again",
              "Like I was floating on air",
            ],
          },
        ],
      },
      {
        id: "favorite_things",
        name: "Favorite Things",
        description: "Discover each other's preferences and loves",
        difficulty: "Easy",
        questions: [
          {
            question: "What's your favorite way to spend a Friday night?",
            options: [
              "Going out for dinner and drinks",
              "Staying in with movies and snacks",
              "Trying something new and adventurous",
              "Spending quality time together",
            ],
          },
          {
            question: "What's your favorite season and why?",
            options: [
              "Spring - everything feels fresh and new",
              "Summer - warm weather and fun activities",
              "Fall - cozy vibes and beautiful colors",
              "Winter - holidays and snuggling weather",
            ],
          },
          {
            question: "What's your favorite type of music to listen to together?",
            options: ["Romantic love songs", "Upbeat dance music", "Chill acoustic vibes", "Whatever matches our mood"],
          },
          {
            question: "What's your favorite thing about weekends?",
            options: [
              "Sleeping in together",
              "Having no schedule",
              "Trying new things",
              "Quality time without distractions",
            ],
          },
          {
            question: "What's your favorite way to celebrate special occasions?",
            options: [
              "Intimate dinner at home",
              "Going somewhere special",
              "Throwing a party with friends",
              "Simple but meaningful gestures",
            ],
          },
          {
            question: "What's your favorite thing I do that makes you smile?",
            options: [
              "Your silly jokes and humor",
              "The way you look at me",
              "Your thoughtful surprises",
              "How you make me feel special",
            ],
          },
          {
            question: "What's your favorite memory we've made together so far?",
            options: [
              "A special trip or adventure",
              "A quiet, intimate moment",
              "A time we laughed until we cried",
              "When we overcame something together",
            ],
          },
        ],
      },
      {
        id: "silly_questions",
        name: "Silly Questions",
        description: "Fun and lighthearted questions to make you both laugh",
        difficulty: "Fun",
        questions: [
          {
            question: "If we were both animals, what animals would we be?",
            options: ["Two lovebirds", "A pair of playful otters", "Loyal wolves", "Cuddly pandas"],
          },
          {
            question: "What superpower would you want us to have as a couple?",
            options: [
              "Mind reading each other's thoughts",
              "Teleporting to anywhere together",
              "Never needing sleep so we have more time",
              "Making everyone around us happy",
            ],
          },
          {
            question: "If we had to survive on a deserted island, what would be your job?",
            options: [
              "Finding and preparing food",
              "Building our shelter",
              "Making fire and tools",
              "Keeping our spirits up",
            ],
          },
          {
            question: "What would be our couple theme song?",
            options: [
              "A classic romantic ballad",
              "An upbeat love song",
              "Something fun and silly",
              "A song that's meaningful to us",
            ],
          },
          {
            question: "If we were in a movie together, what genre would it be?",
            options: ["Romantic comedy", "Epic love story", "Adventure film", "Feel-good drama"],
          },
          {
            question: "What would be our signature couple dance move?",
            options: [
              "Something slow and romantic",
              "A fun, silly dance",
              "Something we made up together",
              "We'd just sway and be happy",
            ],
          },
          {
            question: "If we could time travel together, where would we go?",
            options: [
              "The 1950s for the romance",
              "The future to see our life together",
              "Ancient times for adventure",
              "The 80s for the fun music and style",
            ],
          },
        ],
      },
      {
        id: "would_you_rather",
        name: "Would You Rather",
        description: "Fun choices that reveal your preferences",
        difficulty: "Fun",
        questions: [
          {
            question: "Would you rather we always know what the other is thinking or never argue?",
            options: [
              "Always know what you're thinking",
              "Never argue with each other",
              "Both sound amazing",
              "Neither - some mystery is good",
            ],
          },
          {
            question: "Would you rather we travel the world together or have the perfect home?",
            options: [
              "Travel the world and see everything",
              "Have our perfect dream home",
              "A little of both",
              "As long as we're together, it doesn't matter",
            ],
          },
          {
            question: "Would you rather we be famous together or completely private?",
            options: [
              "Famous so everyone knows our love",
              "Private so it's just ours",
              "A little fame would be fun",
              "Privacy is more important",
            ],
          },
          {
            question: "Would you rather we always laugh together or always have deep conversations?",
            options: [
              "Always laughing and having fun",
              "Always having meaningful talks",
              "A perfect mix of both",
              "Whatever feels natural in the moment",
            ],
          },
          {
            question: "Would you rather we could pause time together or fast-forward through hard times?",
            options: [
              "Pause time during perfect moments",
              "Fast-forward through difficulties",
              "Both would be helpful",
              "Experience everything naturally",
            ],
          },
          {
            question: "Would you rather we always agree on everything or have passionate debates?",
            options: [
              "Always agree - no conflict",
              "Passionate debates keep things interesting",
              "Agree on important things, debate the rest",
              "A healthy mix of both",
            ],
          },
          {
            question: "Would you rather we be each other's first love or last love?",
            options: [
              "First love - all the firsts together",
              "Last love - we're each other's forever",
              "Both are beautiful in different ways",
              "What matters is we found each other",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "relationship",
    name: "Relationship",
    description: "Deepen your connection with questions about your relationship dynamics",
    topics: [
      {
        id: "love_languages",
        name: "Love Languages",
        description: "Discover how you both give and receive love",
        difficulty: "Medium",
        questions: [
          {
            question: "What makes you feel most loved by me?",
            options: [
              "When you tell me you love me",
              "When you hug or kiss me",
              "When you do things for me",
              "When we spend quality time together",
            ],
          },
          {
            question: "How do you prefer to show love?",
            options: [
              "Through words and compliments",
              "Through physical affection",
              "By doing helpful things",
              "By spending focused time together",
            ],
          },
          {
            question: "What's the most meaningful way I could surprise you?",
            options: [
              "Write me a heartfelt letter",
              "Plan a special date",
              "Help with something important",
              "Give me your undivided attention",
            ],
          },
          {
            question: "When you're feeling down, what helps you feel better?",
            options: [
              "Hearing encouraging words",
              "Getting a warm hug",
              "Having someone help solve the problem",
              "Just having someone sit with me",
            ],
          },
          {
            question: "What's your favorite way to celebrate good news together?",
            options: [
              "Talking about it excitedly",
              "Celebrating with physical affection",
              "Doing something special to mark it",
              "Spending quality time reflecting on it",
            ],
          },
          {
            question: "How do you know when I'm showing you love?",
            options: [
              "When you say sweet things",
              "When you're physically affectionate",
              "When you help me with things",
              "When you give me your full attention",
            ],
          },
          {
            question: "What's the best gift you could give me?",
            options: [
              "A heartfelt message",
              "A warm embrace",
              "Help with something I need",
              "An experience we can share together",
            ],
          },
        ],
      },
      {
        id: "communication",
        name: "Communication",
        description: "Explore how you both communicate and connect",
        difficulty: "Medium",
        questions: [
          {
            question: "How do you prefer to resolve disagreements?",
            options: [
              "Talk it out immediately",
              "Take time to think first",
              "Focus on finding solutions",
              "Make sure we both feel heard",
            ],
          },
          {
            question: "What's the best way for me to support you when you're stressed?",
            options: [
              "Listen without trying to fix",
              "Help brainstorm solutions",
              "Give you space to process",
              "Offer physical comfort",
            ],
          },
          {
            question: "How do you like to share exciting news?",
            options: [
              "Tell you immediately",
              "Plan a special way to share",
              "Share all the details",
              "Celebrate together first",
            ],
          },
          {
            question: "What makes you feel heard in our conversations?",
            options: [
              "When you ask follow-up questions",
              "When you remember what I said",
              "When you validate my feelings",
              "When you give me your full attention",
            ],
          },
          {
            question: "How do you prefer to give feedback?",
            options: ["Gently and kindly", "Directly but lovingly", "With specific examples", "In private moments"],
          },
          {
            question: "What's your favorite topic to discuss together?",
            options: [
              "Our future dreams",
              "Daily life and experiences",
              "Deep philosophical questions",
              "Fun and lighthearted topics",
            ],
          },
          {
            question: "How do you like to handle sensitive topics?",
            options: [
              "With lots of patience",
              "When we're both calm",
              "With complete honesty",
              "With extra care and love",
            ],
          },
        ],
      },
      {
        id: "conflict_resolution",
        name: "Conflict Resolution",
        description: "How you handle disagreements and challenges together",
        difficulty: "Deep",
        questions: [
          {
            question: "When we disagree, what's most important to you?",
            options: [
              "Understanding each other's perspective",
              "Finding a solution quickly",
              "Making sure no one gets hurt",
              "Learning and growing from it",
            ],
          },
          {
            question: "How do you prefer to cool down after an argument?",
            options: [
              "Talk it through immediately",
              "Take some space first",
              "Do something comforting together",
              "Focus on what we learned",
            ],
          },
          {
            question: "What helps you feel better after we've had a disagreement?",
            options: [
              "A sincere apology",
              "Physical affection and closeness",
              "Talking about how to prevent it",
              "Just moving forward together",
            ],
          },
          {
            question: "When you're upset with me, how should I approach you?",
            options: [
              "Give me space to process first",
              "Come talk to me right away",
              "Show me you care through actions",
              "Be patient and understanding",
            ],
          },
          {
            question: "What's the best way for us to prevent misunderstandings?",
            options: [
              "Communicate more clearly",
              "Check in with each other regularly",
              "Be more patient and understanding",
              "Address small issues before they grow",
            ],
          },
          {
            question: "How do you want us to handle disagreements in public?",
            options: [
              "Present a united front, discuss later",
              "Address it quietly and respectfully",
              "Support each other no matter what",
              "Agree to disagree gracefully",
            ],
          },
          {
            question: "What makes you feel most secure during difficult conversations?",
            options: [
              "Knowing we're on the same team",
              "Feeling heard and understood",
              "Physical comfort and closeness",
              "Focusing on solutions together",
            ],
          },
        ],
      },
      {
        id: "trust_and_honesty",
        name: "Trust and Honesty",
        description: "Building and maintaining trust in your relationship",
        difficulty: "Deep",
        questions: [
          {
            question: "What makes you feel most trusted in our relationship?",
            options: [
              "When you share your deepest thoughts",
              "When you include me in decisions",
              "When you're vulnerable with me",
              "When you keep your promises",
            ],
          },
          {
            question: "How do you prefer to handle mistakes in our relationship?",
            options: [
              "Own up to them immediately",
              "Talk through what happened",
              "Focus on how to do better",
              "Forgive and move forward",
            ],
          },
          {
            question: "What builds trust for you in a relationship?",
            options: [
              "Consistent actions over time",
              "Open and honest communication",
              "Being reliable and dependable",
              "Showing vulnerability and authenticity",
            ],
          },
          {
            question: "How do you want us to handle secrets or surprises?",
            options: [
              "Good surprises are wonderful",
              "Complete transparency always",
              "Small secrets are okay, big ones aren't",
              "Trust each other's judgment",
            ],
          },
          {
            question: "What would help you feel more secure in our relationship?",
            options: [
              "More frequent reassurance",
              "Consistent daily actions",
              "Open communication about everything",
              "Quality time together regularly",
            ],
          },
          {
            question: "How should we handle friendships with other people?",
            options: [
              "Complete openness about all friendships",
              "Trust each other's judgment",
              "Include each other when possible",
              "Maintain some independence",
            ],
          },
          {
            question: "What does loyalty mean to you in our relationship?",
            options: [
              "Always having each other's backs",
              "Being faithful and committed",
              "Putting our relationship first",
              "Being honest even when it's hard",
            ],
          },
        ],
      },
      {
        id: "relationship_goals",
        name: "Relationship Goals",
        description: "Your shared vision for your relationship's future",
        difficulty: "Deep",
        questions: [
          {
            question: "What's your biggest goal for our relationship this year?",
            options: [
              "Growing closer and deeper",
              "Having more fun together",
              "Building better communication",
              "Creating more memories",
            ],
          },
          {
            question: "How do you envision us in 5 years?",
            options: [
              "Even more in love than now",
              "Achieving our dreams together",
              "Having built something beautiful",
              "Still laughing and having fun",
            ],
          },
          {
            question: "What's most important for our relationship's success?",
            options: [
              "Strong communication",
              "Mutual respect and trust",
              "Shared values and goals",
              "Keeping the romance alive",
            ],
          },
          {
            question: "How do you want us to grow together?",
            options: [
              "Support each other's individual growth",
              "Learn new things together",
              "Face challenges as a team",
              "Keep discovering new things about each other",
            ],
          },
          {
            question: "What tradition would you like us to start together?",
            options: [
              "Annual trips or adventures",
              "Regular date nights",
              "Holiday celebrations",
              "Daily or weekly rituals",
            ],
          },
          {
            question: "How do you want us to handle major life decisions?",
            options: [
              "Make them together always",
              "Support each other's individual choices",
              "Take time to discuss thoroughly",
              "Trust each other's judgment",
            ],
          },
          {
            question: "What legacy do you want our relationship to have?",
            options: [
              "An example of true love",
              "A partnership that achieved great things",
              "A source of joy and laughter",
              "A foundation for family and community",
            ],
          },
        ],
      },
      {
        id: "showing_appreciation",
        name: "Showing Appreciation",
        description: "How you express gratitude and appreciation for each other",
        difficulty: "Medium",
        questions: [
          {
            question: "How do you like to be appreciated for the things you do?",
            options: [
              "Verbal recognition and thanks",
              "Physical affection and hugs",
              "Return gestures and acts of service",
              "Quality time and attention",
            ],
          },
          {
            question: "What's the best way for me to show I notice your efforts?",
            options: [
              "Tell you specifically what I appreciate",
              "Show affection and gratitude",
              "Do something nice for you in return",
              "Give you my full attention and presence",
            ],
          },
          {
            question: "When do you feel most appreciated by me?",
            options: [
              "When you thank me for everyday things",
              "When you show physical affection",
              "When you help me without being asked",
              "When you spend focused time with me",
            ],
          },
          {
            question: "How often do you like to hear appreciation?",
            options: [
              "Daily for the little things",
              "Regularly but not constantly",
              "For special efforts and occasions",
              "Actions speak louder than words",
            ],
          },
          {
            question: "What's your favorite way to show me you're grateful?",
            options: [
              "Tell you how much you mean to me",
              "Show you through physical touch",
              "Do something special for you",
              "Spend quality time together",
            ],
          },
          {
            question: "How should we celebrate each other's achievements?",
            options: [
              "With words of pride and encouragement",
              "With hugs, kisses, and physical celebration",
              "By doing something special together",
              "With focused attention and presence",
            ],
          },
          {
            question: "What makes you feel most valued in our relationship?",
            options: [
              "When you tell me how important I am",
              "When you show affection and closeness",
              "When you make efforts for our relationship",
              "When you prioritize time with me",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "sex_love",
    name: "Sex & Love",
    description: "Intimate questions to explore your romantic and physical connection",
    topics: [
      {
        id: "intimacy_preferences",
        name: "Intimacy Preferences",
        description: "Discover what makes you both feel most connected",
        difficulty: "Spicy",
        questions: [
          {
            question: "What makes you feel most emotionally connected to me?",
            options: ["Deep conversations", "Physical closeness", "Shared experiences", "Acts of love and care"],
          },
          {
            question: "What's your favorite way to be romantic?",
            options: [
              "Spontaneous gestures",
              "Planned romantic evenings",
              "Simple daily affections",
              "Grand romantic gestures",
            ],
          },
          {
            question: "What makes you feel most desired?",
            options: ["Verbal compliments", "Physical touch", "Undivided attention", "Romantic surprises"],
          },
          {
            question: "How do you prefer to initiate intimacy?",
            options: [
              "Through conversation",
              "Through physical touch",
              "Through romantic gestures",
              "Through quality time",
            ],
          },
          {
            question: "What's most important for feeling close to me?",
            options: ["Emotional connection", "Physical attraction", "Shared values", "Mutual respect"],
          },
          {
            question: "What's your ideal romantic evening?",
            options: ["Quiet dinner at home", "Adventure together", "Relaxing and talking", "Trying something new"],
          },
          {
            question: "How do you like to express passion?",
            options: ["Through words", "Through touch", "Through actions", "Through presence"],
          },
        ],
      },
      {
        id: "romantic_fantasies",
        name: "Romantic Fantasies",
        description: "Share your romantic dreams and desires",
        difficulty: "Spicy",
        questions: [
          {
            question: "What's your idea of the perfect romantic getaway?",
            options: ["Beach resort", "Mountain cabin", "City adventure", "Cozy countryside"],
          },
          {
            question: "What's a romantic fantasy you'd like to experience together?",
            options: ["Dancing under the stars", "Surprise weekend trip", "Romantic picnic", "Sunset beach walk"],
          },
          {
            question: "What would make you feel like the most special person in the world?",
            options: [
              "A heartfelt love letter",
              "A surprise celebration",
              "Undivided attention for a day",
              "A meaningful gift",
            ],
          },
          {
            question: "What's your dream date scenario?",
            options: [
              "Adventure and excitement",
              "Intimate and cozy",
              "Luxurious and special",
              "Simple and meaningful",
            ],
          },
          {
            question: "How would you want to be seduced?",
            options: [
              "With romantic words",
              "With thoughtful gestures",
              "With physical attraction",
              "With emotional connection",
            ],
          },
          {
            question: "What's the most romantic thing someone could do for you?",
            options: [
              "Remember something important",
              "Plan a surprise",
              "Write something heartfelt",
              "Give their full attention",
            ],
          },
          {
            question: "What makes a moment feel magical to you?",
            options: ["Perfect timing", "Beautiful setting", "Deep connection", "Element of surprise"],
          },
        ],
      },
      {
        id: "physical_affection",
        name: "Physical Affection",
        description: "Explore your preferences for physical touch and closeness",
        difficulty: "Spicy",
        questions: [
          {
            question: "What type of physical touch makes you feel most loved?",
            options: [
              "Gentle caresses and soft touches",
              "Warm hugs and cuddling",
              "Passionate kisses",
              "Holding hands and small touches",
            ],
          },
          {
            question: "When do you most crave physical closeness?",
            options: [
              "When we're relaxing together",
              "During emotional moments",
              "When we're being playful",
              "In quiet, intimate moments",
            ],
          },
          {
            question: "What's your favorite way to show physical affection in public?",
            options: [
              "Holding hands",
              "Quick kisses and hugs",
              "Arm around each other",
              "Subtle touches and closeness",
            ],
          },
          {
            question: "How do you like to be comforted through physical touch?",
            options: [
              "Long, warm hugs",
              "Gentle stroking or caressing",
              "Just being held close",
              "Playful, light touches",
            ],
          },
          {
            question: "What makes physical intimacy most meaningful for you?",
            options: [
              "Emotional connection first",
              "Spontaneous passion",
              "Taking time to be present",
              "Feeling completely comfortable",
            ],
          },
          {
            question: "How do you prefer to initiate physical affection?",
            options: [
              "Start with gentle touches",
              "Through eye contact and closeness",
              "With playful interactions",
              "In quiet, private moments",
            ],
          },
          {
            question: "What's your ideal level of physical affection in daily life?",
            options: [
              "Constant small touches throughout the day",
              "Regular hugs and kisses",
              "Focused intimate moments",
              "Natural, spontaneous affection",
            ],
          },
        ],
      },
      {
        id: "romantic_gestures",
        name: "Romantic Gestures",
        description: "The little and big things that make your heart flutter",
        difficulty: "Medium",
        questions: [
          {
            question: "What small romantic gesture means the most to you?",
            options: [
              "Surprise notes or messages",
              "Unexpected hugs and kisses",
              "Doing something helpful without being asked",
              "Remembering important details about me",
            ],
          },
          {
            question: "What's your favorite way to surprise me romantically?",
            options: [
              "Plan something special and unexpected",
              "Give thoughtful gifts or gestures",
              "Create romantic moments at home",
              "Show up when you need me most",
            ],
          },
          {
            question: "What romantic gesture would make your day?",
            options: [
              "A sweet text or call during the day",
              "A spontaneous hug or kiss",
              "Help with something I'm stressed about",
              "Undivided attention when I need it",
            ],
          },
          {
            question: "How do you like to celebrate special occasions?",
            options: [
              "With thoughtful, personal touches",
              "Through physical closeness and affection",
              "By creating special experiences together",
              "With focused time and attention",
            ],
          },
          {
            question: "What's the most romantic thing I could do for you regularly?",
            options: [
              "Tell you how much you mean to me",
              "Show affection throughout the day",
              "Take care of things to make your life easier",
              "Give you my full presence and attention",
            ],
          },
          {
            question: "How do you want to keep romance alive in our relationship?",
            options: [
              "Regular expressions of love and appreciation",
              "Maintaining physical closeness and affection",
              "Creating new experiences and memories together",
              "Prioritizing quality time together",
            ],
          },
          {
            question: "What makes a romantic gesture feel genuine to you?",
            options: [
              "When it shows you really know me",
              "When it comes from the heart",
              "When it shows effort and thoughtfulness",
              "When it's perfectly timed",
            ],
          },
        ],
      },
      {
        id: "attraction_and_desire",
        name: "Attraction and Desire",
        description: "What draws you to each other and keeps the spark alive",
        difficulty: "Spicy",
        questions: [
          {
            question: "What first attracted you to me physically?",
            options: [
              "Your beautiful eyes",
              "Your amazing smile",
              "Your overall presence and energy",
              "The way you carried yourself",
            ],
          },
          {
            question: "What keeps you attracted to me over time?",
            options: [
              "Your personality and character",
              "How you make me feel",
              "Your physical beauty",
              "Our emotional connection",
            ],
          },
          {
            question: "What makes you feel most attractive and confident?",
            options: [
              "When you compliment me",
              "When you show physical desire",
              "When you appreciate my efforts",
              "When you give me your full attention",
            ],
          },
          {
            question: "What's the sexiest thing about our relationship?",
            options: [
              "Our emotional intimacy",
              "Our physical chemistry",
              "How comfortable we are together",
              "The way we communicate",
            ],
          },
          {
            question: "How do you like me to express that I find you attractive?",
            options: [
              "Tell me what you find beautiful about me",
              "Show me through touch and affection",
              "Make an effort to look good for me",
              "Give me focused attention and presence",
            ],
          },
          {
            question: "What makes you feel most desired by me?",
            options: [
              "When you tell me how attractive I am",
              "When you can't keep your hands off me",
              "When you make an effort for our relationship",
              "When you prioritize time with me",
            ],
          },
          {
            question: "What keeps the spark alive for you in a relationship?",
            options: [
              "Continuing to learn new things about each other",
              "Maintaining physical passion and attraction",
              "Trying new experiences together",
              "Deepening our emotional connection",
            ],
          },
        ],
      },
      {
        id: "emotional_intimacy",
        name: "Emotional Intimacy",
        description: "The deeper emotional connections that bind your hearts",
        difficulty: "Deep",
        questions: [
          {
            question: "When do you feel most emotionally connected to me?",
            options: [
              "During deep, meaningful conversations",
              "When we're physically close and affectionate",
              "When we're going through something together",
              "In quiet, peaceful moments together",
            ],
          },
          {
            question: "What makes you feel safe to be vulnerable with me?",
            options: [
              "How you listen without judgment",
              "Your gentle, caring responses",
              "The way you support and comfort me",
              "How present and attentive you are",
            ],
          },
          {
            question: "How do you prefer to share your deepest feelings?",
            options: [
              "Through long, honest conversations",
              "Through physical closeness and comfort",
              "Through shared experiences and activities",
              "In quiet, intimate moments together",
            ],
          },
          {
            question: "What helps you feel most understood by me?",
            options: [
              "When you really listen and ask questions",
              "When you offer comfort and affection",
              "When you help me work through things",
              "When you just sit with me in the moment",
            ],
          },
          {
            question: "How do you want me to respond when you're emotional?",
            options: [
              "Listen and validate my feelings",
              "Hold me and offer physical comfort",
              "Help me find solutions or next steps",
              "Just be present with me",
            ],
          },
          {
            question: "What makes you feel most accepted by me?",
            options: [
              "When you love me despite my flaws",
              "When you show affection no matter what",
              "When you support my choices and dreams",
              "When you make time for what matters to me",
            ],
          },
          {
            question: "How do you want us to deepen our emotional intimacy?",
            options: [
              "Share more of our inner thoughts and feelings",
              "Increase physical closeness and affection",
              "Go through more experiences together",
              "Spend more quality time focused on each other",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "get_to_know",
    name: "Get to Know Each Other",
    description: "Discover new things about each other's personality and preferences",
    topics: [
      {
        id: "personality_traits",
        name: "Personality Traits",
        description: "Explore what makes each of you unique",
        difficulty: "Fun",
        questions: [
          {
            question: "What's your biggest strength in a relationship?",
            options: [
              "I'm a great listener",
              "I'm very supportive",
              "I'm loyal and committed",
              "I bring fun and laughter",
            ],
          },
          {
            question: "How do you handle stress?",
            options: [
              "Talk it through with someone",
              "Take time alone to process",
              "Stay busy and distracted",
              "Exercise or do something physical",
            ],
          },
          {
            question: "What motivates you most in life?",
            options: ["Personal growth", "Helping others", "Achieving goals", "Creating meaningful connections"],
          },
          {
            question: "How do you prefer to make decisions?",
            options: [
              "Think it through carefully",
              "Go with my gut feeling",
              "Ask for advice from others",
              "Consider all the pros and cons",
            ],
          },
          {
            question: "What's your ideal way to spend free time?",
            options: ["Being social with friends", "Quiet time at home", "Trying new experiences", "Pursuing hobbies"],
          },
          {
            question: "How do you show you care about someone?",
            options: ["Tell them directly", "Do things for them", "Spend quality time", "Remember important details"],
          },
          {
            question: "What's most important to you in life?",
            options: ["Love and relationships", "Personal achievement", "Making a difference", "Happiness and joy"],
          },
        ],
      },
      {
        id: "childhood_memories",
        name: "Childhood Memories",
        description: "Share stories from your past that shaped who you are",
        difficulty: "Medium",
        questions: [
          {
            question: "What's your favorite childhood memory?",
            options: [
              "Family vacations",
              "Playing with friends",
              "Special celebrations",
              "Quiet moments with loved ones",
            ],
          },
          {
            question: "What did you want to be when you grew up?",
            options: ["Something creative", "Something helpful", "Something adventurous", "Something important"],
          },
          {
            question: "What was your favorite thing to do as a kid?",
            options: ["Play outside", "Read books", "Create and build things", "Spend time with family"],
          },
          {
            question: "What's a lesson you learned as a child that still guides you?",
            options: ["Be kind to others", "Work hard for what you want", "Family comes first", "Always be yourself"],
          },
          {
            question: "What's something from your childhood you'd want to share with our future?",
            options: ["Family traditions", "Simple pleasures", "Important values", "Fun activities"],
          },
          {
            question: "Who was your biggest role model growing up?",
            options: ["A parent or family member", "A teacher or mentor", "A friend", "Someone famous"],
          },
          {
            question: "What's a childhood fear you've overcome?",
            options: [
              "Fear of the dark",
              "Fear of being alone",
              "Fear of trying new things",
              "Fear of not being good enough",
            ],
          },
        ],
      },
      {
        id: "fears_and_dreams",
        name: "Fears and Dreams",
        description: "Share your deepest hopes and concerns",
        difficulty: "Deep",
        questions: [
          {
            question: "What's your biggest dream for your life?",
            options: [
              "Having a loving family",
              "Achieving professional success",
              "Making a positive impact",
              "Living life to the fullest",
            ],
          },
          {
            question: "What's your biggest fear in relationships?",
            options: [
              "Being hurt or betrayed",
              "Growing apart over time",
              "Not being good enough",
              "Losing the person I love",
            ],
          },
          {
            question: "What dream would you most like us to pursue together?",
            options: [
              "Building a beautiful life together",
              "Traveling and seeing the world",
              "Creating something meaningful",
              "Having adventures and experiences",
            ],
          },
          {
            question: "What fear would you like me to help you overcome?",
            options: [
              "Fear of not being lovable",
              "Fear of failure or rejection",
              "Fear of being vulnerable",
              "Fear of the unknown future",
            ],
          },
          {
            question: "What's something you've always wanted to try but haven't?",
            options: [
              "A creative pursuit or hobby",
              "An adventure or travel experience",
              "A personal challenge or goal",
              "Something that scares me a little",
            ],
          },
          {
            question: "What would make you feel most fulfilled in life?",
            options: [
              "Deep, meaningful relationships",
              "Achieving my personal goals",
              "Helping others and making a difference",
              "Living authentically and freely",
            ],
          },
          {
            question: "What legacy do you want to leave behind?",
            options: [
              "Being remembered as loving and kind",
              "Having accomplished something important",
              "Making the world a little better",
              "Living a life true to myself",
            ],
          },
        ],
      },
      {
        id: "values_and_beliefs",
        name: "Values and Beliefs",
        description: "Explore what matters most to each of you",
        difficulty: "Deep",
        questions: [
          {
            question: "What value is most important to you in life?",
            options: [
              "Honesty and authenticity",
              "Love and compassion",
              "Growth and learning",
              "Freedom and independence",
            ],
          },
          {
            question: "What do you believe makes a life well-lived?",
            options: [
              "Strong relationships and love",
              "Personal growth and achievement",
              "Service to others",
              "Joy and meaningful experiences",
            ],
          },
          {
            question: "How do you define success?",
            options: [
              "Being happy and fulfilled",
              "Achieving your goals",
              "Making a positive impact",
              "Being true to yourself",
            ],
          },
          {
            question: "What principle guides your decisions?",
            options: [
              "Do what's right and ethical",
              "Follow your heart",
              "Consider the impact on others",
              "Stay true to your values",
            ],
          },
          {
            question: "What do you believe about forgiveness?",
            options: [
              "It's essential for healing",
              "It takes time but is important",
              "Some things are harder to forgive",
              "It's more for you than the other person",
            ],
          },
          {
            question: "What role does spirituality play in your life?",
            options: [
              "It's very important to me",
              "I'm open but not sure",
              "I find meaning in other ways",
              "I prefer to focus on the present",
            ],
          },
          {
            question: "What do you believe about personal growth?",
            options: [
              "We should always be learning",
              "Growth comes through challenges",
              "It's important to help others grow too",
              "Balance growth with acceptance",
            ],
          },
        ],
      },
      {
        id: "family_and_friends",
        name: "Family and Friends",
        description: "The important people in your life and relationships",
        difficulty: "Medium",
        questions: [
          {
            question: "What's most important to you about family?",
            options: [
              "Unconditional love and support",
              "Shared traditions and memories",
              "Being there for each other",
              "Acceptance and understanding",
            ],
          },
          {
            question: "What do you value most in friendships?",
            options: [
              "Loyalty and trustworthiness",
              "Fun and shared experiences",
              "Deep conversations and understanding",
              "Support through good and bad times",
            ],
          },
          {
            question: "How do you want our families to be involved in our relationship?",
            options: [
              "Very involved and close",
              "Supportive but with boundaries",
              "Occasional involvement",
              "We'll figure it out as we go",
            ],
          },
          {
            question: "What's your approach to making new friends?",
            options: [
              "I'm naturally outgoing and social",
              "I prefer smaller groups and deeper connections",
              "I'm selective but open",
              "I'm more comfortable with existing friends",
            ],
          },
          {
            question: "How do you handle conflict with family or friends?",
            options: [
              "Address it directly but kindly",
              "Give it time and space",
              "Try to understand their perspective",
              "Focus on preserving the relationship",
            ],
          },
          {
            question: "What traditions from your family would you like to continue?",
            options: [
              "Holiday celebrations and gatherings",
              "Values and life lessons",
              "Special activities or rituals",
              "Ways of showing love and care",
            ],
          },
          {
            question: "How do you want to balance couple time with friend and family time?",
            options: [
              "Prioritize our relationship first",
              "Maintain strong connections with everyone",
              "Find a healthy balance",
              "Be flexible based on circumstances",
            ],
          },
        ],
      },
      {
        id: "life_experiences",
        name: "Life Experiences",
        description: "The moments and experiences that have shaped you",
        difficulty: "Medium",
        questions: [
          {
            question: "What's been the most transformative experience of your life?",
            options: [
              "A relationship or love",
              "A challenge I overcame",
              "A travel or adventure experience",
              "A moment of personal growth",
            ],
          },
          {
            question: "What's something you're proud of accomplishing?",
            options: [
              "A personal goal I achieved",
              "Helping someone important to me",
              "Overcoming a fear or challenge",
              "Learning something new and difficult",
            ],
          },
          {
            question: "What experience taught you the most about yourself?",
            options: [
              "A difficult time I got through",
              "A success I worked hard for",
              "A relationship that changed me",
              "A moment of clarity or realization",
            ],
          },
          {
            question: "What's an experience you'd love to have with me?",
            options: [
              "Travel to somewhere amazing",
              "Learn something new together",
              "Face a challenge as a team",
              "Create something meaningful",
            ],
          },
          {
            question: "What's the best advice you've ever received?",
            options: [
              "Follow your heart",
              "Be true to yourself",
              "Treat others with kindness",
              "Never give up on your dreams",
            ],
          },
          {
            question: "What experience are you most grateful for?",
            options: [
              "Meeting the people I love",
              "Opportunities I've been given",
              "Challenges that made me stronger",
              "Moments of pure joy and happiness",
            ],
          },
          {
            question: "What's something you'd like to experience before you're old?",
            options: [
              "Deep, lasting love",
              "Adventure and excitement",
              "Making a meaningful impact",
              "True contentment and peace",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "travel",
    name: "Travel",
    description: "Discover your shared wanderlust and dream destinations",
    topics: [
      {
        id: "dream_destinations",
        name: "Dream Destinations",
        description: "Where would you love to explore together?",
        difficulty: "Fun",
        questions: [
          {
            question: "If we could go anywhere in the world right now, where would you choose?",
            options: [
              "Tropical beach paradise",
              "European city adventure",
              "Mountain retreat",
              "Exotic cultural destination",
            ],
          },
          {
            question: "What's your ideal vacation style?",
            options: [
              "Relaxing and peaceful",
              "Adventure and exploration",
              "Cultural immersion",
              "Luxury and pampering",
            ],
          },
          {
            question: "What's on your travel bucket list?",
            options: ["See the Northern Lights", "Safari in Africa", "Backpack through Europe", "Island hopping"],
          },
          {
            question: "How do you prefer to travel?",
            options: ["Planned itinerary", "Spontaneous adventure", "Mix of both", "Go with the flow"],
          },
          {
            question: "What's the most important thing about traveling together?",
            options: [
              "Creating memories",
              "Trying new experiences",
              "Quality time together",
              "Seeing beautiful places",
            ],
          },
          {
            question: "What type of accommodation do you prefer?",
            options: ["Cozy bed & breakfast", "Luxury resort", "Local homestay", "Unique experiences like treehouses"],
          },
          {
            question: "What's your dream honeymoon destination?",
            options: ["Maldives or Bora Bora", "Italy or France", "Japan or Thailand", "New Zealand or Iceland"],
          },
        ],
      },
      {
        id: "travel_experiences",
        name: "Travel Experiences",
        description: "What kind of adventures do you want to share?",
        difficulty: "Fun",
        questions: [
          {
            question: "What's an adventure you'd love to try together?",
            options: [
              "Skydiving or bungee jumping",
              "Scuba diving",
              "Mountain climbing",
              "Road trip across the country",
            ],
          },
          {
            question: "What's your ideal way to explore a new city?",
            options: ["Walking tours", "Food tours", "Museums and culture", "Local neighborhoods"],
          },
          {
            question: "What would make a trip perfect for you?",
            options: ["Amazing food", "Beautiful scenery", "Great company", "Unique experiences"],
          },
          {
            question: "How do you like to document your travels?",
            options: ["Lots of photos", "Travel journal", "Collecting souvenirs", "Just enjoying the moment"],
          },
          {
            question: "What's your favorite type of cuisine to try when traveling?",
            options: ["Street food", "Fine dining", "Local specialties", "Comfort food"],
          },
          {
            question: "What's the best souvenir to bring back?",
            options: ["Something meaningful", "Local crafts", "Photos and memories", "Something practical"],
          },
          {
            question: "How long is your ideal trip together?",
            options: ["Long weekend", "One week", "Two weeks", "Month-long adventure"],
          },
        ],
      },
      {
        id: "travel_styles",
        name: "Travel Styles",
        description: "How you like to approach travel and exploration",
        difficulty: "Fun",
        questions: [
          {
            question: "What's your preferred travel pace?",
            options: [
              "Slow and relaxed, really soaking it in",
              "Packed with activities and sights",
              "Balanced mix of busy and restful",
              "Completely spontaneous and flexible",
            ],
          },
          {
            question: "How do you like to plan trips?",
            options: [
              "Research everything in advance",
              "Plan the basics, wing the details",
              "Book flights and figure it out",
              "Let's plan it together as we go",
            ],
          },
          {
            question: "What's your travel comfort level?",
            options: [
              "Luxury and comfort all the way",
              "Mix of comfort and adventure",
              "Roughing it for authentic experiences",
              "Whatever fits our budget",
            ],
          },
          {
            question: "How do you handle travel stress or problems?",
            options: [
              "Stay calm and find solutions",
              "Go with the flow and adapt",
              "Focus on the positive aspects",
              "Support each other through it",
            ],
          },
          {
            question: "What's your ideal travel group size?",
            options: [
              "Just the two of us",
              "Small group of close friends",
              "Larger group for more fun",
              "Depends on the destination",
            ],
          },
          {
            question: "How important is staying connected while traveling?",
            options: [
              "Completely disconnect and be present",
              "Minimal contact for emergencies",
              "Share experiences with friends/family",
              "Stay connected for work/life",
            ],
          },
          {
            question: "What's your approach to travel budgeting?",
            options: [
              "Save up for amazing experiences",
              "Find great deals and travel smart",
              "Splurge on some things, save on others",
              "Keep it simple and affordable",
            ],
          },
        ],
      },
      {
        id: "cultural_experiences",
        name: "Cultural Experiences",
        description: "Exploring different cultures and ways of life together",
        difficulty: "Medium",
        questions: [
          {
            question: "What aspect of other cultures interests you most?",
            options: [
              "Food and culinary traditions",
              "Art, music, and creative expression",
              "History and ancient sites",
              "Local customs and daily life",
            ],
          },
          {
            question: "How do you like to experience local culture when traveling?",
            options: [
              "Stay with local families",
              "Take cultural tours and classes",
              "Explore markets and neighborhoods",
              "Attend festivals and events",
            ],
          },
          {
            question: "What cultural experience would you most like to share with me?",
            options: [
              "Learning to cook traditional dishes",
              "Participating in local celebrations",
              "Visiting historical and sacred sites",
              "Learning basic language together",
            ],
          },
          {
            question: "How do you approach cultural differences while traveling?",
            options: [
              "Embrace them with curiosity",
              "Research and prepare in advance",
              "Ask locals for guidance",
              "Observe and learn respectfully",
            ],
          },
          {
            question: "What's your ideal cultural immersion experience?",
            options: [
              "Living like locals for a week",
              "Learning traditional crafts or skills",
              "Participating in community activities",
              "Exploring off-the-beaten-path places",
            ],
          },
          {
            question: "How important is learning about history when you travel?",
            options: [
              "Essential - I love historical context",
              "Interesting but not the main focus",
              "Depends on the destination",
              "I prefer focusing on present culture",
            ],
          },
          {
            question: "What cultural tradition would you like to bring home with us?",
            options: [
              "A meaningful ritual or practice",
              "Cooking techniques or recipes",
              "Art or craft skills",
              "A new perspective on life",
            ],
          },
        ],
      },
      {
        id: "adventure_levels",
        name: "Adventure Levels",
        description: "How adventurous are you willing to get together?",
        difficulty: "Fun",
        questions: [
          {
            question: "What's your ideal adventure level for our trips?",
            options: [
              "Extreme adventures and adrenaline",
              "Moderate challenges and exploration",
              "Gentle adventures with comfort",
              "Cultural adventures over physical ones",
            ],
          },
          {
            question: "What outdoor activity would you most like to try together?",
            options: [
              "Hiking and mountain climbing",
              "Water sports and diving",
              "Wildlife safaris and nature",
              "Scenic walks and photography",
            ],
          },
          {
            question: "How do you feel about trying scary or challenging activities?",
            options: [
              "Bring it on - I love the thrill",
              "I'll try if you're with me",
              "I prefer to watch and cheer you on",
              "Let's find adventures we both enjoy",
            ],
          },
          {
            question: "What's your approach to travel safety?",
            options: [
              "Calculated risks for great experiences",
              "Safety first, but open to adventure",
              "Prefer well-established safe activities",
              "Research thoroughly before trying anything",
            ],
          },
          {
            question: "What type of transportation adventure appeals to you?",
            options: [
              "Motorcycle or scooter tours",
              "Train journeys through scenic routes",
              "Boat trips and sailing",
              "Walking and hiking everywhere",
            ],
          },
          {
            question: "How do you want to challenge yourselves while traveling?",
            options: [
              "Physical challenges and activities",
              "Cultural and language barriers",
              "Trying completely new experiences",
              "Stepping out of our comfort zones together",
            ],
          },
          {
            question: "What's your ideal balance of adventure and relaxation?",
            options: [
              "Mostly adventure with some rest",
              "Equal mix of both",
              "Mostly relaxation with some adventure",
              "Whatever feels right in the moment",
            ],
          },
        ],
      },
      {
        id: "travel_memories",
        name: "Travel Memories",
        description: "Creating and cherishing travel memories together",
        difficulty: "Medium",
        questions: [
          {
            question: "What's your favorite travel memory so far?",
            options: [
              "A moment of pure beauty or wonder",
              "A funny or unexpected experience",
              "Connecting with amazing people",
              "Overcoming a challenge together",
            ],
          },
          {
            question: "How do you want to create lasting memories while traveling?",
            options: [
              "Take lots of photos and videos",
              "Collect meaningful souvenirs",
              "Write about our experiences",
              "Just be fully present in each moment",
            ],
          },
          {
            question: "What kind of travel story do you want us to have?",
            options: [
              "Epic adventures and bold experiences",
              "Romantic and intimate moments",
              "Funny mishaps and great stories",
              "Deep connections and personal growth",
            ],
          },
          {
            question: "What's the most important thing to remember from our travels?",
            options: [
              "How we felt in special moments",
              "The people we met along the way",
              "The beautiful places we saw",
              "How we grew closer together",
            ],
          },
          {
            question: "How do you like to share travel experiences with others?",
            options: [
              "Tell stories and show photos",
              "Bring back gifts and souvenirs",
              "Share the lessons we learned",
              "Keep some experiences just for us",
            ],
          },
          {
            question: "What travel tradition would you like us to start?",
            options: [
              "Annual trips to new places",
              "Collecting something from each destination",
              "Taking a photo in the same pose everywhere",
              "Writing letters to our future selves",
            ],
          },
          {
            question: "What would make a travel experience unforgettable for you?",
            options: [
              "Sharing it with someone I love",
              "Seeing something breathtakingly beautiful",
              "Having a life-changing realization",
              "Feeling completely free and happy",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "hobbies",
    name: "Hobbies",
    description: "Explore your interests and activities you'd love to share",
    topics: [
      {
        id: "shared_activities",
        name: "Shared Activities",
        description: "What would you love to do together?",
        difficulty: "Fun",
        questions: [
          {
            question: "What's a hobby you'd love to try together?",
            options: ["Cooking or baking", "Dancing", "Gardening", "Art or crafts"],
          },
          {
            question: "What's your ideal way to spend a weekend together?",
            options: ["Outdoor adventures", "Creative projects", "Learning something new", "Relaxing activities"],
          },
          {
            question: "What type of classes would you want to take together?",
            options: ["Dance classes", "Cooking classes", "Art classes", "Fitness classes"],
          },
          {
            question: "What's a skill you'd love to learn together?",
            options: ["A new language", "Musical instrument", "Sport or fitness", "Creative skill"],
          },
          {
            question: "How do you prefer to stay active?",
            options: ["Gym workouts", "Outdoor activities", "Sports", "Yoga or stretching"],
          },
          {
            question: "What's your favorite way to be creative?",
            options: ["Writing or journaling", "Visual arts", "Music", "Crafts or DIY"],
          },
          {
            question: "What would be the most fun challenge to do together?",
            options: ["Fitness challenge", "Learning challenge", "Creative challenge", "Adventure challenge"],
          },
        ],
      },
      {
        id: "entertainment",
        name: "Entertainment",
        description: "Discover your shared entertainment preferences",
        difficulty: "Easy",
        questions: [
          {
            question: "What's your favorite type of movie to watch together?",
            options: ["Romantic comedies", "Action adventures", "Dramas", "Documentaries"],
          },
          {
            question: "How do you prefer to spend a cozy night in?",
            options: ["Watching movies", "Playing games", "Reading together", "Just talking"],
          },
          {
            question: "What's your favorite type of music to listen to together?",
            options: [
              "Whatever matches the mood",
              "Our shared favorites",
              "Discovering new music",
              "Classic love songs",
            ],
          },
          {
            question: "What's the best way to enjoy entertainment together?",
            options: [
              "Cuddled up on the couch",
              "Going out to events",
              "Trying new experiences",
              "Comfortable at home",
            ],
          },
          {
            question: "What type of games do you enjoy?",
            options: ["Board games", "Video games", "Card games", "Outdoor games"],
          },
          {
            question: "What's your ideal date night entertainment?",
            options: ["Dinner and a movie", "Concert or show", "Comedy club", "Something interactive"],
          },
          {
            question: "How do you like to discover new entertainment?",
            options: [
              "Recommendations from friends",
              "Trying trending things",
              "Exploring together",
              "Sticking to favorites",
            ],
          },
        ],
      },
      {
        id: "sports_and_fitness",
        name: "Sports and Fitness",
        description: "Your approach to staying active and healthy together",
        difficulty: "Fun",
        questions: [
          {
            question: "What's your favorite way to stay active together?",
            options: [
              "Going to the gym together",
              "Outdoor activities like hiking",
              "Playing sports together",
              "Home workouts and yoga",
            ],
          },
          {
            question: "What sport would you most like to try as a couple?",
            options: [
              "Tennis or badminton",
              "Rock climbing or bouldering",
              "Dancing or martial arts",
              "Swimming or water sports",
            ],
          },
          {
            question: "How do you prefer to motivate each other for fitness?",
            options: [
              "Encourage and cheer each other on",
              "Set goals and challenges together",
              "Make it fun and playful",
              "Just enjoy being active together",
            ],
          },
          {
            question: "What's your ideal fitness routine as a couple?",
            options: [
              "Daily walks or runs together",
              "Regular gym sessions",
              "Weekend outdoor adventures",
              "Flexible, whatever feels good",
            ],
          },
          {
            question: "How competitive are you when playing sports together?",
            options: [
              "Very competitive - bring it on!",
              "Friendly competition is fun",
              "More about having fun together",
              "I prefer non-competitive activities",
            ],
          },
          {
            question: "What outdoor activity would you love to master together?",
            options: [
              "Hiking and backpacking",
              "Cycling and bike tours",
              "Water sports like kayaking",
              "Winter sports like skiing",
            ],
          },
          {
            question: "How do you want to support each other's health goals?",
            options: [
              "Work out together regularly",
              "Encourage healthy eating habits",
              "Try new active hobbies",
              "Celebrate progress and achievements",
            ],
          },
        ],
      },
      {
        id: "arts_and_creativity",
        name: "Arts and Creativity",
        description: "Exploring your creative sides together",
        difficulty: "Fun",
        questions: [
          {
            question: "What creative activity would you most like to try together?",
            options: [
              "Painting or drawing",
              "Photography and photo walks",
              "Writing stories or poetry",
              "Crafting and DIY projects",
            ],
          },
          {
            question: "How do you express your creativity?",
            options: [
              "Visual arts and design",
              "Music and performance",
              "Writing and storytelling",
              "Hands-on building and making",
            ],
          },
          {
            question: "What would be the most fun creative project for us?",
            options: [
              "Decorating our home together",
              "Creating art for each other",
              "Starting a creative blog or channel",
              "Making something useful and beautiful",
            ],
          },
          {
            question: "How do you like to appreciate art and creativity?",
            options: [
              "Visit museums and galleries",
              "Attend live performances",
              "Create and make things ourselves",
              "Support local artists and creators",
            ],
          },
          {
            question: "What creative skill would you love to learn from me?",
            options: [
              "Something I'm already good at",
              "Something we could learn together",
              "A completely new challenge",
              "Whatever you're passionate about",
            ],
          },
          {
            question: "How do you want creativity to be part of our relationship?",
            options: [
              "Regular creative dates and activities",
              "Surprise each other with creative gifts",
              "Support each other's individual creativity",
              "Find creative solutions to everyday things",
            ],
          },
          {
            question: "What's your ideal creative space or environment?",
            options: [
              "A dedicated studio or workspace",
              "Anywhere with good natural light",
              "A cozy, comfortable corner",
              "Outdoors in nature",
            ],
          },
        ],
      },
      {
        id: "technology_and_gaming",
        name: "Technology and Gaming",
        description: "Your relationship with technology and digital entertainment",
        difficulty: "Fun",
        questions: [
          {
            question: "What's your approach to technology in our relationship?",
            options: [
              "Embrace it and have fun with it",
              "Use it to stay connected",
              "Keep it simple and minimal",
              "Balance screen time with real time",
            ],
          },
          {
            question: "What type of games do you enjoy playing together?",
            options: [
              "Video games and online gaming",
              "Mobile games and apps",
              "Board games and puzzles",
              "Outdoor games and activities",
            ],
          },
          {
            question: "How do you like to use technology to connect when apart?",
            options: [
              "Video calls and face time",
              "Texting and messaging throughout the day",
              "Sharing photos and experiences",
              "Playing games or watching things together online",
            ],
          },
          {
            question: "What's your ideal balance of digital and offline time together?",
            options: [
              "Mostly offline, real-world experiences",
              "Healthy mix of both",
              "Use technology to enhance our experiences",
              "Whatever feels natural and fun",
            ],
          },
          {
            question: "How do you want to handle social media as a couple?",
            options: [
              "Share our relationship and experiences",
              "Keep some things private",
              "Support each other's individual presence",
              "Minimize social media focus",
            ],
          },
          {
            question: "What tech-related activity would be fun to do together?",
            options: [
              "Learn a new app or platform",
              "Create content together",
              "Play cooperative video games",
              "Take a digital detox together",
            ],
          },
          {
            question: "How do you prefer to stay entertained during downtime?",
            options: [
              "Streaming shows and movies",
              "Playing games together",
              "Browsing and discovering new things online",
              "Using technology for creative projects",
            ],
          },
        ],
      },
      {
        id: "learning_and_growth",
        name: "Learning and Growth",
        description: "How you want to learn and grow together",
        difficulty: "Medium",
        questions: [
          {
            question: "What would you most like to learn together?",
            options: [
              "A new language",
              "A practical skill",
              "Something about each other's interests",
              "Something completely new to both of us",
            ],
          },
          {
            question: "How do you prefer to learn new things?",
            options: [
              "Hands-on practice and experience",
              "Reading and research",
              "Taking classes or workshops",
              "Learning from others and mentors",
            ],
          },
          {
            question: "What's your approach to personal growth in our relationship?",
            options: [
              "Support each other's individual growth",
              "Grow together through shared experiences",
              "Challenge each other to be better",
              "Accept and love each other as we are",
            ],
          },
          {
            question: "What skill would make our relationship even better?",
            options: [
              "Better communication skills",
              "Conflict resolution abilities",
              "Shared hobbies and interests",
              "Emotional intelligence and empathy",
            ],
          },
          {
            question: "How do you want to challenge yourselves as a couple?",
            options: [
              "Try new experiences together",
              "Set goals and work toward them",
              "Step out of our comfort zones",
              "Learn from our mistakes and grow",
            ],
          },
          {
            question: "What's your ideal way to share knowledge with each other?",
            options: [
              "Teach each other things we know",
              "Discover new things together",
              "Read and discuss books or articles",
              "Attend workshops or classes together",
            ],
          },
          {
            question: "How important is intellectual compatibility to you?",
            options: [
              "Very important - we should challenge each other mentally",
              "Important but not everything",
              "Different perspectives can be good",
              "Emotional connection matters more",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    description: "Explore your daily habits and life preferences",
    topics: [
      {
        id: "daily_routines",
        name: "Daily Routines",
        description: "How do you like to structure your days?",
        difficulty: "Easy",
        questions: [
          {
            question: "What's your ideal morning routine?",
            options: [
              "Slow and peaceful",
              "Energetic and active",
              "Efficient and organized",
              "Flexible and spontaneous",
            ],
          },
          {
            question: "How do you prefer to end your day?",
            options: ["Relaxing together", "Reflecting on the day", "Planning for tomorrow", "Winding down quietly"],
          },
          {
            question: "What's your ideal work-life balance?",
            options: ["Clear boundaries", "Flexible integration", "Work hard, play hard", "Prioritize relationships"],
          },
          {
            question: "How do you like to handle household tasks?",
            options: ["Share everything equally", "Play to our strengths", "Take turns", "Do them together"],
          },
          {
            question: "What's most important in your living space?",
            options: ["Comfort and coziness", "Organization and cleanliness", "Style and beauty", "Functionality"],
          },
          {
            question: "How do you prefer to spend your free time?",
            options: [
              "Together as much as possible",
              "Balance of together and apart",
              "Pursuing individual interests",
              "Spontaneous decisions",
            ],
          },
          {
            question: "What's your approach to health and wellness?",
            options: ["Active and fitness-focused", "Balanced and moderate", "Relaxed and intuitive", "Goal-oriented"],
          },
        ],
      },
      {
        id: "future_goals",
        name: "Future Goals",
        description: "What do you envision for your shared future?",
        difficulty: "Deep",
        questions: [
          {
            question: "What's most important for our future together?",
            options: [
              "Building a family",
              "Career success",
              "Travel and experiences",
              "Strong relationship foundation",
            ],
          },
          {
            question: "How do you envision our ideal home?",
            options: [
              "Cozy and intimate",
              "Spacious for entertaining",
              "In a great location",
              "Reflects our personality",
            ],
          },
          {
            question: "What's your biggest dream for us?",
            options: [
              "Growing old together",
              "Achieving our goals together",
              "Creating a beautiful family",
              "Having amazing adventures",
            ],
          },
          {
            question: "How do you want to handle major life decisions?",
            options: [
              "Make them together",
              "Support each other's dreams",
              "Plan carefully",
              "Be open to opportunities",
            ],
          },
          {
            question: "What's most important for our financial future?",
            options: [
              "Security and stability",
              "Freedom and flexibility",
              "Shared goals",
              "Individual and joint success",
            ],
          },
          {
            question: "How do you see us growing together?",
            options: [
              "Supporting each other's growth",
              "Learning new things together",
              "Facing challenges as a team",
              "Building on our strengths",
            ],
          },
          {
            question: "What legacy do you want us to create?",
            options: ["Strong family values", "Positive impact on others", "Beautiful memories", "Lasting love story"],
          },
        ],
      },
      {
        id: "home_and_living",
        name: "Home and Living",
        description: "Creating your perfect living space together",
        difficulty: "Medium",
        questions: [
          {
            question: "What's most important to you in our living space?",
            options: [
              "Comfort and coziness",
              "Style and aesthetics",
              "Functionality and organization",
              "Space for entertaining",
            ],
          },
          {
            question: "How do you envision our ideal home?",
            options: [
              "Modern and minimalist",
              "Cozy and traditional",
              "Eclectic and personal",
              "Whatever feels like 'us'",
            ],
          },
          {
            question: "What's your approach to decorating together?",
            options: [
              "Plan and coordinate everything",
              "Mix both of our styles",
              "One person leads, other supports",
              "Collect pieces over time naturally",
            ],
          },
          {
            question: "How do you want to divide household responsibilities?",
            options: [
              "Split everything 50/50",
              "Each person handles what they're good at",
              "Take turns with different tasks",
              "Work together on everything",
            ],
          },
          {
            question: "What's your ideal neighborhood or location?",
            options: [
              "Quiet suburban area",
              "Vibrant city center",
              "Rural or countryside",
              "Wherever we can afford and be happy",
            ],
          },
          {
            question: "How important is having your own space within our home?",
            options: [
              "Very important - we each need our own area",
              "Nice to have but not essential",
              "We can share everything",
              "Depends on the size of our home",
            ],
          },
          {
            question: "What would make our home feel most like 'ours'?",
            options: [
              "Photos and memories displayed",
              "Furniture and items we chose together",
              "Spaces that reflect both our personalities",
              "The feeling of love and warmth",
            ],
          },
        ],
      },
      {
        id: "career_and_ambitions",
        name: "Career and Ambitions",
        description: "Your professional goals and how they fit together",
        difficulty: "Deep",
        questions: [
          {
            question: "How important is career success to you?",
            options: [
              "Very important - it's a major priority",
              "Important but not everything",
              "Less important than relationships",
              "Success means different things to different people",
            ],
          },
          {
            question: "How do you want to support each other's career goals?",
            options: [
              "Be each other's biggest cheerleader",
              "Make sacrifices when needed",
              "Provide practical help and advice",
              "Maintain work-life balance together",
            ],
          },
          {
            question: "What would you do if one of us got a great job opportunity far away?",
            options: [
              "We'd figure it out together",
              "The relationship comes first",
              "We'd weigh all the pros and cons",
              "Support the person's dreams",
            ],
          },
          {
            question: "How do you envision balancing two careers in our relationship?",
            options: [
              "Equal priority for both careers",
              "Take turns supporting each other's big moments",
              "One person's career takes priority",
              "Find careers that complement each other",
            ],
          },
          {
            question: "What's your approach to work-life balance as a couple?",
            options: [
              "Clear boundaries between work and home",
              "Flexible integration when needed",
              "Support each other through busy periods",
              "Prioritize relationship time",
            ],
          },
          {
            question: "How do you want to handle financial decisions related to careers?",
            options: [
              "Pool everything and decide together",
              "Contribute proportionally to income",
              "Maintain some financial independence",
              "Support each other's career investments",
            ],
          },
          {
            question: "What does professional fulfillment mean to you?",
            options: [
              "Making a positive impact",
              "Achieving personal goals",
              "Financial security and success",
              "Work that aligns with my values",
            ],
          },
        ],
      },
      {
        id: "social_life",
        name: "Social Life",
        description: "How you want to navigate friendships and social activities",
        difficulty: "Medium",
        questions: [
          {
            question: "What's your ideal social life as a couple?",
            options: [
              "Active social calendar with friends",
              "Small gatherings with close friends",
              "Mix of couple time and social time",
              "Mostly just us with occasional socializing",
            ],
          },
          {
            question: "How do you want to handle friendships in our relationship?",
            options: [
              "Merge our friend groups",
              "Maintain separate friendships too",
              "Make new friends together",
              "Support each other's individual friendships",
            ],
          },
          {
            question: "What's your approach to entertaining and hosting?",
            options: [
              "Love hosting parties and gatherings",
              "Prefer small, intimate dinners",
              "Enjoy going out rather than hosting",
              "Keep social activities simple and low-key",
            ],
          },
          {
            question: "How do you want to spend time with each other's families?",
            options: [
              "Regular family gatherings and holidays",
              "Occasional visits and special occasions",
              "Whatever feels comfortable for everyone",
              "Maintain some boundaries while being respectful",
            ],
          },
          {
            question: "What's your ideal Friday night social activity?",
            options: [
              "Going out with friends",
              "Double date with another couple",
              "Hosting friends at home",
              "Quiet night just the two of us",
            ],
          },
          {
            question: "How do you handle social situations where you don't know many people?",
            options: [
              "Stick together and meet people as a team",
              "Encourage each other to mingle",
              "One person leads, the other follows",
              "Find a comfortable corner and enjoy each other's company",
            ],
          },
          {
            question: "What role do you want friends to play in our relationship?",
            options: [
              "Close friends who are part of our life journey",
              "Fun people to socialize and have good times with",
              "Support system for both individual and couple needs",
              "Respect our relationship while maintaining friendships",
            ],
          },
        ],
      },
      {
        id: "personal_habits",
        name: "Personal Habits",
        description: "The little daily habits that make up your lifestyle",
        difficulty: "Easy",
        questions: [
          {
            question: "What's your approach to cleanliness and organization?",
            options: [
              "Everything has a place and should be in it",
              "Generally tidy but not obsessive",
              "Organized chaos works for me",
              "Cleanliness is less important than comfort",
            ],
          },
          {
            question: "How do you prefer to handle meal planning and cooking?",
            options: [
              "Plan meals in advance",
              "Cook whatever sounds good",
              "Take turns cooking",
              "Keep it simple and easy",
            ],
          },
          {
            question: "What's your ideal bedtime routine?",
            options: [
              "Consistent routine every night",
              "Wind down together",
              "Flexible based on the day",
              "Whatever helps us sleep well",
            ],
          },
          {
            question: "How do you like to spend your mornings?",
            options: [
              "Slow and peaceful start",
              "Efficient and productive",
              "Together time before the day starts",
              "Whatever the day requires",
            ],
          },
          {
            question: "What's your approach to health and self-care?",
            options: [
              "Consistent daily habits",
              "Listen to what my body needs",
              "Focus on mental and emotional health",
              "Balance everything in moderation",
            ],
          },
          {
            question: "How do you handle stress and busy periods?",
            options: [
              "Stick to routines for stability",
              "Be flexible and adapt",
              "Support each other extra during tough times",
              "Focus on what's most important",
            ],
          },
          {
            question: "What personal habit would you like us to develop together?",
            options: [
              "Regular exercise or movement",
              "Healthy eating habits",
              "Better sleep routines",
              "Daily connection and communication",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "food",
    name: "Food",
    description: "Discover your culinary preferences and food adventures",
    topics: [
      {
        id: "food_preferences",
        name: "Food Preferences",
        description: "What flavors and cuisines do you love?",
        difficulty: "Fun",
        questions: [
          {
            question: "What's your favorite type of cuisine?",
            options: ["Italian", "Asian", "Mexican", "American comfort food"],
          },
          {
            question: "What's your ideal dinner date?",
            options: ["Fancy restaurant", "Cozy home cooking", "Food truck adventure", "Picnic outdoors"],
          },
          {
            question: "How adventurous are you with food?",
            options: ["I'll try anything once", "I like some variety", "I prefer familiar foods", "I'm very selective"],
          },
          {
            question: "What's your favorite way to enjoy food together?",
            options: [
              "Cooking together",
              "Trying new restaurants",
              "Sharing dishes",
              "Having deep conversations over meals",
            ],
          },
          {
            question: "What's your go-to comfort food?",
            options: ["Something sweet", "Something savory", "Home-cooked meals", "Takeout favorites"],
          },
          {
            question: "How do you prefer to start your day food-wise?",
            options: ["Big hearty breakfast", "Light and healthy", "Just coffee", "Whatever sounds good"],
          },
          {
            question: "What's the most romantic meal setting?",
            options: ["Candlelit dinner at home", "Sunset picnic", "Fancy restaurant", "Cooking together"],
          },
        ],
      },
      {
        id: "cooking_together",
        name: "Cooking Together",
        description: "Explore your kitchen chemistry",
        difficulty: "Fun",
        questions: [
          {
            question: "What would you most like to cook together?",
            options: ["Romantic dinner", "Comfort food", "Something new and challenging", "Baked goods and desserts"],
          },
          {
            question: "What's your cooking style?",
            options: ["Follow recipes exactly", "Improvise and experiment", "Keep it simple", "Make it an event"],
          },
          {
            question: "What's the best part about cooking together?",
            options: ["The teamwork", "The creativity", "The conversation", "The delicious results"],
          },
          {
            question: "What kitchen task would you want to handle?",
            options: [
              "Prep work and chopping",
              "The actual cooking",
              "Seasoning and tasting",
              "Cleanup and organizing",
            ],
          },
          {
            question: "What's your dream cooking experience together?",
            options: [
              "Taking a cooking class",
              "Cooking for friends",
              "Mastering a difficult dish",
              "Creating our signature meal",
            ],
          },
          {
            question: "How do you handle kitchen disasters?",
            options: ["Laugh it off", "Order takeout", "Try to fix it", "Learn from it"],
          },
          {
            question: "What would make cooking together most fun?",
            options: [
              "Good music playing",
              "Wine or drinks",
              "No pressure to be perfect",
              "Trying something completely new",
            ],
          },
        ],
      },
      {
        id: "dining_experiences",
        name: "Dining Experiences",
        description: "Your favorite ways to enjoy meals together",
        difficulty: "Fun",
        questions: [
          {
            question: "What's your ideal restaurant experience?",
            options: [
              "Fine dining with amazing service",
              "Cozy local spot with great food",
              "Fun, lively atmosphere",
              "Quiet place where we can talk",
            ],
          },
          {
            question: "How do you like to discover new restaurants?",
            options: [
              "Research and read reviews",
              "Ask friends for recommendations",
              "Walk around and see what looks good",
              "Try whatever's convenient",
            ],
          },
          {
            question: "What's your approach to ordering when dining out?",
            options: [
              "Order different things and share",
              "Each get what we want",
              "Try the chef's recommendations",
              "Stick to things we know we'll like",
            ],
          },
          {
            question: "What makes a meal special for you?",
            options: [
              "The company and conversation",
              "Amazing, delicious food",
              "Beautiful atmosphere and setting",
              "Trying something new together",
            ],
          },
          {
            question: "How do you feel about food delivery and takeout?",
            options: [
              "Great for lazy nights at home",
              "Convenient but prefer cooking",
              "Love trying different places",
              "Only when we're too busy to cook",
            ],
          },
          {
            question: "What's your favorite type of food event or festival?",
            options: ["Wine and food pairings", "Street food festivals", "Farmers markets", "Cooking demonstrations"],
          },
          {
            question: "How important is presentation and ambiance when eating?",
            options: [
              "Very important - it enhances the experience",
              "Nice but not essential",
              "Good food matters more than presentation",
              "I prefer casual and comfortable",
            ],
          },
        ],
      },
      {
        id: "cultural_cuisines",
        name: "Cultural Cuisines",
        description: "Exploring different food cultures together",
        difficulty: "Medium",
        questions: [
          {
            question: "What cuisine would you most like to explore together?",
            options: [
              "Asian cuisines (Japanese, Thai, Chinese)",
              "European cuisines (French, Italian, Spanish)",
              "Latin American cuisines (Mexican, Peruvian, Brazilian)",
              "Middle Eastern and Mediterranean",
            ],
          },
          {
            question: "How do you approach trying authentic ethnic foods?",
            options: [
              "Go to authentic restaurants run by people from that culture",
              "Try to cook traditional recipes at home",
              "Take cooking classes to learn properly",
              "Start with familiar dishes and branch out",
            ],
          },
          {
            question: "What's your comfort level with spicy food?",
            options: [
              "Bring on the heat - I love spicy food",
              "Moderate spice is perfect",
              "Mild spice or I'm out",
              "I prefer to taste the other flavors",
            ],
          },
          {
            question: "What cultural food experience would you want to share?",
            options: [
              "Traditional tea ceremony or coffee culture",
              "Family-style communal dining",
              "Street food adventures",
              "Learning about food history and traditions",
            ],
          },
          {
            question: "How do you feel about eating with your hands or different utensils?",
            options: [
              "I'm up for any authentic experience",
              "I'll try but might need practice",
              "I prefer familiar eating methods",
              "Whatever makes the food taste better",
            ],
          },
          {
            question: "What's your approach to dietary restrictions when exploring cuisines?",
            options: [
              "Research ahead to find options",
              "Ask servers for modifications",
              "Focus on cuisines that naturally fit",
              "Be flexible and try what we can",
            ],
          },
          {
            question: "What would you want to learn about a culture through its food?",
            options: [
              "Family traditions and celebrations",
              "Regional differences and specialties",
              "History and cultural significance",
              "Cooking techniques and ingredients",
            ],
          },
        ],
      },
      {
        id: "food_memories",
        name: "Food Memories",
        description: "The meals and food experiences that matter most",
        difficulty: "Medium",
        questions: [
          {
            question: "What's your favorite food memory from childhood?",
            options: [
              "Family dinners and gatherings",
              "Special occasion meals",
              "Cooking with a parent or grandparent",
              "Comfort food when I was sick",
            ],
          },
          {
            question: "What food reminds you most of home?",
            options: [
              "A specific dish my family made",
              "Comfort foods from my childhood",
              "Holiday and celebration foods",
              "Simple, everyday meals",
            ],
          },
          {
            question: "What's the best meal you've ever had?",
            options: [
              "A special restaurant experience",
              "A home-cooked meal made with love",
              "Something I tried while traveling",
              "A meal shared with people I love",
            ],
          },
          {
            question: "What food tradition would you like us to start?",
            options: [
              "Weekly date night dinners",
              "Cooking Sunday meals together",
              "Trying a new cuisine each month",
              "Holiday cooking and baking",
            ],
          },
          {
            question: "What's a food experience you'd love to create with me?",
            options: [
              "Cook a meal from scratch together",
              "Have a romantic picnic",
              "Try a famous restaurant",
              "Learn to make something challenging",
            ],
          },
          {
            question: "How do you want food to be part of our special occasions?",
            options: [
              "Cook special meals together",
              "Go to meaningful restaurants",
              "Create new traditions",
              "Focus on the company more than the food",
            ],
          },
          {
            question: "What food memory do you hope we'll create together?",
            options: [
              "Our signature dish or recipe",
              "Amazing travel food experiences",
              "Cooking for our friends and family",
              "Simple, everyday meals that become special",
            ],
          },
        ],
      },
      {
        id: "cooking_skills",
        name: "Cooking Skills",
        description: "Your cooking abilities and what you'd like to learn",
        difficulty: "Fun",
        questions: [
          {
            question: "How would you describe your cooking skills?",
            options: [
              "I'm a confident cook who loves experimenting",
              "I can make basic meals and follow recipes",
              "I'm learning and improving",
              "I'm better at eating than cooking",
            ],
          },
          {
            question: "What cooking skill would you most like to master?",
            options: [
              "Baking and pastries",
              "Grilling and barbecuing",
              "International cuisines",
              "Basic knife skills and techniques",
            ],
          },
          {
            question: "What's your biggest cooking challenge?",
            options: [
              "Timing everything to be ready together",
              "Following recipes vs. improvising",
              "Making food that looks as good as it tastes",
              "Cooking for dietary restrictions",
            ],
          },
          {
            question: "What cooking skill could you teach me?",
            options: [
              "A dish I'm really good at",
              "Basic techniques I've mastered",
              "Family recipes and traditions",
              "How to cook without recipes",
            ],
          },
          {
            question: "What's your approach to meal planning?",
            options: [
              "Plan everything in advance",
              "Have a few go-to meals",
              "Shop and decide what looks good",
              "Keep it simple and flexible",
            ],
          },
          {
            question: "How do you handle cooking mistakes?",
            options: [
              "Try to fix it and learn from it",
              "Laugh it off and order pizza",
              "Get frustrated but keep trying",
              "Ask for help or look up solutions",
            ],
          },
          {
            question: "What would motivate you to improve your cooking skills?",
            options: [
              "Cooking together and having fun",
              "Impressing friends and family",
              "Eating healthier and saving money",
              "Learning about different cultures through food",
            ],
          },
        ],
      },
    ],
  },
]

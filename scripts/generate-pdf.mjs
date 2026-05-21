import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, "..", "public", "downloads");
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// ─── COLORS ───────────────────────────────────────────────────────────────────
const C = {
  bg: "#030712",
  accent: "#6366f1",
  accentLight: "#818cf8",
  violet: "#8b5cf6",
  cyan: "#22d3ee",
  white: "#f8fafc",
  gray: "#94a3b8",
  darkGray: "#334155",
  border: "#1e293b",
  emerald: "#10b981",
  amber: "#f59e0b",
};

// ─── ALL CHAPTERS ─────────────────────────────────────────────────────────────
const allChapters = [
  {
    number: "01",
    title: "Building Your AI Lead Generation Foundation",
    subtitle: "The mindset shift and infrastructure you need before anything else",
    sections: [
      {
        heading: "Why Traditional Lead Generation Is Dying",
        body: `The average cold email response rate has dropped from 8.5% in 2020 to less than 1.2% in 2025. Buyers are overwhelmed, inboxes are flooded, and generic outreach is simply ignored. The old playbook — buy a list, blast emails, pray for replies — no longer works.\n\nThis isn't a minor adjustment. It's a fundamental shift in how buyers engage with sellers. Today's decision-makers do 70% of their research before ever speaking to a salesperson. They expect hyper-personalization, immediate value, and relevance above all else.\n\nAI changes everything. It allows you to research prospects in seconds, craft personalized messages at scale, predict buying intent before anyone else, and build systems that run 24/7 without human intervention. Businesses that embrace this shift will dominate. Those that don't will disappear.`,
      },
      {
        heading: "The Four Pillars of AI Lead Generation",
        body: `Before diving into tactics, you need to understand the four pillars that every successful AI lead generation system is built on:\n\n1. INTELLIGENCE — Using AI to gather, analyze, and interpret data about your ideal prospects faster and more accurately than any human team could.\n\n2. PERSONALIZATION — Leveraging AI to craft messages and content that speak directly to each prospect's specific pain points, goals, and context.\n\n3. AUTOMATION — Building systems that identify, qualify, and nurture leads automatically, so you can focus on closing.\n\n4. OPTIMIZATION — Continuously using AI analytics to measure, learn, and improve every touchpoint in your lead generation funnel.\n\nMaster these four pillars and you have an unfair advantage over 95% of your competitors.`,
      },
      {
        heading: "Your AI Lead Gen Tech Stack",
        body: `You don't need to spend thousands of dollars to get started. Here's the essential stack, organized by budget:\n\nFREE TIER ($0/month):\n• ChatGPT Free — Prospect research, email drafting, ICP building\n• Google Gemini — Multi-modal research and content creation\n• Apollo.io Free — 50 prospect exports/month\n• Hunter.io Free — 25 email finds/month\n• Notion — CRM and pipeline tracking\n\nSTARTER ($50-150/month):\n• Claude Pro ($20) — Superior reasoning for complex research tasks\n• Apollo.io Basic ($49) — Unlimited prospect exports\n• Instantly.ai ($37) — Email automation with warm-up\n• PhantomBuster Basic ($56) — LinkedIn automation\n\nPROFESSIONAL ($300-600/month):\n• All Starter tools, plus:\n• Clay ($149) — AI-powered data enrichment at scale\n• Smartlead ($94) — Advanced email infrastructure\n• LinkedIn Sales Navigator ($79) — Advanced prospect filtering\n• Make.com ($16) — Automation workflows`,
      },
      {
        heading: "Setting Your Foundation: The 30-Day Jumpstart",
        body: `Week 1: Build your ICP (Chapter 2) and set up your core tools\nWeek 2: Create your first AI-powered prospect list and email sequences\nWeek 3: Launch your first campaign and start collecting data\nWeek 4: Analyze results, optimize, and scale what's working\n\nMost teams see their first qualified meeting within 14 days of implementing this system. By Day 30, you'll have a repeatable engine generating consistent pipeline.`,
      },
    ],
  },
  {
    number: "02",
    title: "AI-Powered Ideal Customer Profile Mapping",
    subtitle: "Stop guessing who to target — let AI tell you exactly",
    sections: [
      {
        heading: "Why Most ICPs Are Wrong",
        body: `Most companies build their Ideal Customer Profile based on assumptions, gut feelings, or the loudest voice in the room. They pick industry, company size, and job title — then wonder why their pipeline is full of poor-fit prospects.\n\nAI-powered ICP mapping takes a radically different approach. Instead of starting with assumptions, you start with data from your best existing customers and use AI to find the patterns that predict success.\n\nThe result: a dynamic, data-driven ICP that identifies your best prospects with surgical precision — including signals that humans would never think to look for.`,
      },
      {
        heading: "The AI ICP Framework",
        body: `STEP 1 — ANALYZE YOUR WINS\nExport your last 20 closed-won deals from your CRM. Feed this data to Claude or ChatGPT with this prompt:\n\n"Here is data on our 20 best customers. Analyze the patterns across company size, industry, tech stack, growth stage, team size, and any other relevant attributes. Identify the top 5-7 attributes that these customers have in common. Then identify which combination of attributes most strongly predicts a good customer fit."\n\nSTEP 2 — IDENTIFY LEADING INDICATORS\nAsk AI to identify behavioral and contextual signals that appear BEFORE a company becomes a customer:\n• Recent funding rounds\n• Job postings for specific roles\n• Technology changes (new tool adoption)\n• Leadership changes\n• Geographic expansion\n• Product launches\n\nSTEP 3 — BUILD YOUR ICP TIERS\nNot all ideal customers are created equal. Structure your ICP into three tiers:\n• Tier 1 (Perfect Fit) — All attributes match. These get your most personalized outreach.\n• Tier 2 (Strong Fit) — 70-80% match. Worth pursuing with semi-personalized outreach.\n• Tier 3 (Potential Fit) — Need to verify fit before heavy investment.`,
      },
      {
        heading: "AI Prompts for ICP Research",
        body: `These tested prompts will dramatically accelerate your ICP research:\n\nFOR INDUSTRY ANALYSIS:\n"You are a B2B market research expert. Analyze [INDUSTRY] and identify the top 5 sub-segments most likely to need [YOUR SOLUTION]. For each sub-segment, describe their key pain points, average company size, typical tech stack, and buying process."\n\nFOR PERSONA BUILDING:\n"Create a detailed buyer persona for a [JOB TITLE] at a [COMPANY SIZE] company in [INDUSTRY]. Include their daily challenges, career goals, what keeps them up at night, how they make purchasing decisions, and what language they use to describe their problems."\n\nFOR COMPETITIVE DISPLACEMENT:\n"Identify companies using [COMPETITOR] that would benefit from switching to a solution like [YOUR PRODUCT]. What pain points do [COMPETITOR] users commonly report? What triggers might cause them to evaluate alternatives?"`,
      },
    ],
  },
  {
    number: "03",
    title: "Automated Prospect Discovery & Qualification",
    subtitle: "Build a pipeline that fills itself while you sleep",
    sections: [
      {
        heading: "The Prospect Discovery Engine",
        body: `The days of manually scrolling LinkedIn for hours are over. AI-powered prospect discovery can identify, enrich, and qualify hundreds of prospects per day with minimal human involvement.\n\nHere's the core workflow:\n\n1. TRIGGER IDENTIFICATION — Set up automated monitoring for buying signals (job posts, funding news, tech changes)\n2. PROSPECT CAPTURE — Automatically pull prospects into your system when triggers fire\n3. AI ENRICHMENT — Enrich each prospect with 50+ data points using Clay or similar tools\n4. AI QUALIFICATION — Score prospects against your ICP criteria automatically\n5. ROUTING — Route qualified prospects to the appropriate sequence\n\nThis engine can process 500+ prospects per week with just 30 minutes of human oversight.`,
      },
      {
        heading: "Building Your Trigger System",
        body: `The most powerful thing about AI lead generation is timing. Reaching a prospect at exactly the moment they're most likely to buy dramatically increases your conversion rate.\n\nHere are the top 7 buying triggers to monitor:\n\n1. FUNDING NEWS — Companies that just raised funding are actively spending. Set up Google Alerts + Crunchbase monitoring. Outreach within 48 hours of announcement.\n\n2. JOB POSTINGS — A company hiring for a specific role signals specific pain points. Example: A company posting for "VP of Sales" is likely scaling revenue operations — a perfect trigger if you sell sales tools.\n\n3. TECHNOLOGY CHANGES — When a company switches or adds technology, they're in buying mode. BuiltWith and SimilarTech can alert you to these changes.\n\n4. LEADERSHIP CHANGES — New executives (especially C-suite) make purchasing decisions in their first 90 days. They want to make their mark. LinkedIn Sales Navigator can alert you to these moves.\n\n5. COMPANY GROWTH SIGNALS — Rapid headcount growth on LinkedIn indicates a scaling company with increasing budgets.\n\n6. COMPETITOR CUSTOMER CHURN — Monitor review sites like G2 and Capterra for negative reviews of competitors. These are warm leads looking for alternatives.\n\n7. CONTENT ENGAGEMENT — When someone engages with your content (downloads, reads, watches), they're showing buying intent.`,
      },
      {
        heading: "AI-Powered Qualification at Scale",
        body: `Once you have prospects, AI can qualify them in seconds. Here's the Clay + AI qualification workflow:\n\nStep 1: Pull prospect data into Clay\nStep 2: Enrich with company data (size, revenue, tech stack, growth rate)\nStep 3: Run AI formula: "Based on this company data [{{company_info}}], score this prospect from 1-10 on fit for [YOUR SOLUTION] based on these criteria: [ICP CRITERIA]. Return only a JSON object with score and reasoning."\nStep 4: Auto-filter prospects scoring 7+\nStep 5: Route to personalized outreach sequences\n\nThis workflow processes 1,000 prospects and identifies the top 15-20% in about 2 hours — work that would take a human team weeks.`,
      },
    ],
  },
  {
    number: "04",
    title: "Hyper-Personalized Outreach at Scale",
    subtitle: "Send messages that feel handwritten — automatically",
    sections: [
      {
        heading: "The Personalization Paradox",
        body: `Here's the challenge every growth team faces: personalized outreach converts 6x better than generic outreach, but you can't physically write personalized messages to thousands of prospects.\n\nAI solves this paradox. You can now generate truly personalized, research-backed messages for every prospect in your list — automatically.\n\nThe key is using AI not just to write messages, but to RESEARCH each prospect first, then craft a message based on that research. This is what separates 2025 AI outreach from generic template blasting.`,
      },
      {
        heading: "The Perfect Cold Email Formula",
        body: `After testing over 50,000 cold emails, here's the formula that consistently achieves 15-30% reply rates:\n\nLINE 1 — THE SPECIFIC HOOK (1 sentence)\nReference something specific about their company, recent news, or their work. This proves you actually researched them.\nExample: "Saw that [Company] just launched [Product] — congrats on the fundraise."\n\nLINE 2 — THE RELEVANT PAIN (1-2 sentences)\nIdentify a pain point they almost certainly have based on their situation.\nExample: "When companies scale that fast, pipeline generation usually becomes the biggest bottleneck."\n\nLINE 3 — THE CREDIBLE CLAIM (1 sentence)\nMake a specific, credible claim about what you can do for them.\nExample: "We helped [Similar Company] 3x their qualified meetings in 60 days using AI outreach."\n\nLINE 4 — THE SOFT CTA (1 sentence)\nAsk for something small, not a 30-minute call right away.\nExample: "Would it be useful to see exactly how they did it?"\n\nAI PROMPT TO GENERATE THIS:\n"Write a cold email for [PROSPECT NAME] at [COMPANY]. They recently [TRIGGER/NEWS]. They likely struggle with [PAIN POINT based on ICP]. We solve this by [VALUE PROP]. Use this formula: specific hook → relevant pain → credible claim → soft CTA. Keep it under 100 words. Make it feel human, not salesy."`,
      },
      {
        heading: "Multi-Touch Sequence Strategy",
        body: `One email is never enough. Here's the 7-touch AI-powered sequence that generates 40% of our clients' meetings:\n\nTouch 1 (Day 1): Cold email — The formula above\nTouch 2 (Day 3): LinkedIn connection request with personalized note\nTouch 3 (Day 5): Email follow-up — Add a relevant case study or insight\nTouch 4 (Day 8): LinkedIn message — Reference their recent post or content\nTouch 5 (Day 12): Email — The "different angle" (address a different pain point)\nTouch 6 (Day 16): LinkedIn voice message (3-4 sentences, personal)\nTouch 7 (Day 21): The "breakup" email — Creates urgency, often triggers replies\n\nAI AUTOMATION TIP: Use Instantly.ai or Smartlead for email automation, PhantomBuster for LinkedIn automation, and Make.com to orchestrate the entire multi-channel sequence automatically.`,
      },
    ],
  },
  {
    number: "05",
    title: "LinkedIn AI Domination Strategy",
    subtitle: "Turn LinkedIn into your highest-converting lead gen channel",
    sections: [
      {
        heading: "Why LinkedIn Is the #1 B2B Lead Gen Channel",
        body: `LinkedIn has 930 million members, and 4 out of 5 are decision-makers. The average B2B buyer checks LinkedIn 3x per day. And unlike email, LinkedIn messages have a 57% open rate.\n\nBut most people use LinkedIn completely wrong. They blast connection requests, send generic InMails, and post content that nobody engages with.\n\nThis chapter shows you how to use AI to dominate LinkedIn — from optimizing your profile to building an audience that generates inbound leads automatically.`,
      },
      {
        heading: "AI-Optimized LinkedIn Profile",
        body: `Your LinkedIn profile is your landing page. Before any outreach, optimize it for conversion.\n\nHEADLINE (120 characters): Don't write your job title. Write your value proposition.\nBad: "Account Executive at SaaS Company"\nGood: "I help B2B SaaS companies generate 3x more qualified pipeline using AI | 200+ teams scaled"\n\nAI PROMPT: "Rewrite my LinkedIn headline. My role is [ROLE]. I help [TARGET AUDIENCE] achieve [OUTCOME]. I have [SOCIAL PROOF]. Write 3 headline variations that focus on the value I deliver, not my job title."\n\nABOUT SECTION: Use the PAS formula — Problem, Agitation, Solution. Open with a pattern interrupt, identify the problem your audience faces, agitate it, then position yourself as the guide.\n\nFEATURED SECTION: Include your lead magnet (free guide, case study, tool) to capture email addresses from profile visitors.`,
      },
      {
        heading: "The LinkedIn Content Engine",
        body: `Consistent, valuable content on LinkedIn is the highest-ROI activity for B2B lead generation. Here's the AI-powered content system:\n\nCONTENT PILLARS (3 types, rotate weekly):\n1. INSIGHT POSTS — Industry data, contrarian takes, predictions (builds authority)\n2. CASE STUDY POSTS — How you helped a client achieve a specific result (builds trust)\n3. EDUCATIONAL POSTS — Step-by-step frameworks your audience can implement (builds audience)\n\nAI CONTENT WORKFLOW:\nStep 1: Use Claude to analyze your last 10 highest-performing posts and identify what worked\nStep 2: Prompt: "Based on these posts [EXAMPLES], generate 20 post ideas for [TARGET AUDIENCE] on the topic of [CONTENT PILLAR]. Format each as: hook, main insight, call to action."\nStep 3: Select your favorites and have AI write full posts\nStep 4: Schedule 4-5 posts per week using Buffer or Taplio\n\nPOST FORMAT THAT WORKS:\n• Hook (first line — must create curiosity or shock)\n• Short paragraphs (1-2 lines max)\n• White space between every point\n• Personal story or data to support\n• Clear, singular CTA\n\nSCHEDULE: Post Monday, Tuesday, Wednesday, and Thursday. Tuesday and Wednesday 8-10am your audience's timezone gets maximum reach.`,
      },
    ],
  },
  {
    number: "06",
    title: "Email Automation That Converts",
    subtitle: "Build email sequences that generate revenue while you sleep",
    sections: [
      {
        heading: "Email Infrastructure Setup",
        body: `Before you send a single cold email, your infrastructure must be perfect. Sending cold emails from your main domain without proper setup will destroy your deliverability and potentially get your domain blacklisted.\n\nESSENTIAL SETUP CHECKLIST:\n\n✅ Domain Setup: Buy a separate domain for cold outreach (e.g., yourbrand-hq.com)\n✅ DNS Records: Set up SPF, DKIM, and DMARC records correctly\n✅ Email Warm-up: Warm up your new email addresses for 21-28 days before sending\n✅ Volume Limits: Start at 20 emails/day per mailbox, scale to max 40-50\n✅ Multiple Mailboxes: Use 3-5 mailboxes per campaign to spread volume\n✅ Unsubscribe Link: Always include (reduces spam complaints)\n✅ Reply Handling: Set up a CRM or inbox to manage replies\n\nTOOLS TO USE:\n• Instantly.ai — Email automation + warm-up + analytics\n• Smartlead.ai — Advanced deliverability features\n• Mailreach.io — Standalone warm-up tool\n• MXToolbox.com — Test your email authentication`,
      },
      {
        heading: "The AI Email Sequence Architecture",
        body: `THE COLD OUTREACH SEQUENCE (7 emails over 21 days):\n\nEmail 1 (Day 1): Personalized opener + single value prop\nEmail 2 (Day 4): Follow-up — Add social proof\nEmail 3 (Day 8): Different angle — Address a different pain point\nEmail 4 (Day 12): Case study — Specific result for similar company\nEmail 5 (Day 16): Video or resource — Send something genuinely valuable\nEmail 6 (Day 19): Permission to close — "Is [PROBLEM] still a priority?"\nEmail 7 (Day 21): Breakup email — Final message, creates urgency\n\nAI WRITING GUIDELINES:\n• Keep emails under 150 words (shorter = higher replies)\n• One CTA per email\n• Subject lines: 3-5 words, lowercase, no punctuation\n• Avoid spam trigger words: "free," "guarantee," "limited time," "act now"\n• Test: plain text vs light HTML (plain text usually wins for cold)\n\nSUBJECT LINE FORMULAS THAT WORK:\n• "[First name], quick question"\n• "idea for [Company]"\n• "re: [their recent post/news]"\n• "[Mutual connection] suggested I reach out"\n• "[Company] + [Your Company]"`,
      },
      {
        heading: "Inbound Email Automation",
        body: `Cold outreach gets people into your pipeline. Inbound automation keeps them there.\n\nKEY AUTOMATED SEQUENCES TO BUILD:\n\n1. LEAD MAGNET SEQUENCE (5 emails over 10 days)\nWhen someone downloads your free content, this sequence nurtures them to purchase.\n\n2. WELCOME SEQUENCE (3 emails over 7 days)\nWhen someone joins your email list, introduce your brand and build trust.\n\n3. CART ABANDONMENT (3 emails over 3 days)\nWhen someone starts checkout but doesn't complete — recover 15-25% of abandoned orders.\n\n4. POST-PURCHASE (4 emails over 14 days)\nOnboard customers, build loyalty, and generate referrals.\n\nAI PERSONALIZATION IN EMAIL AUTOMATION:\nUse conditional logic in your email platform to personalize based on:\n• Which lead magnet they downloaded\n• Which pages they've visited\n• What industry they're in (from signup form)\n• Their engagement history\n\nTools like ActiveCampaign and Klaviyo support this level of personalization natively.`,
      },
    ],
  },
  {
    number: "07",
    title: "Content-Led Lead Generation with AI",
    subtitle: "Create content that attracts, qualifies, and converts — automatically",
    sections: [
      {
        heading: "The Content Flywheel",
        body: `Content-led lead generation is the highest-ROI long-term strategy for B2B companies. When done right, it creates a compounding flywheel:\n\n1. You create valuable content → Attracts ideal prospects\n2. Prospects engage with content → They get qualified\n3. Qualified prospects convert → They become customers\n4. Customers become advocates → They create more content (testimonials, case studies)\n5. More content attracts more prospects → The flywheel spins faster\n\nAI accelerates every stage of this flywheel — from ideation to creation to distribution.`,
      },
      {
        heading: "AI-Powered Content Strategy",
        body: `STEP 1 — KEYWORD RESEARCH WITH AI\nPrompt: "You are an SEO expert. For a company selling [PRODUCT/SERVICE] to [TARGET AUDIENCE], generate 50 high-intent search queries. Organize them by: top-of-funnel (awareness), middle-of-funnel (consideration), and bottom-of-funnel (decision). Include the likely search intent for each."\n\nSTEP 2 — CONTENT IDEATION\nPrompt: "Based on these keywords [LIST], generate 20 content ideas that would rank for these terms AND genuinely help [TARGET AUDIENCE]. For each idea, include: title, target keyword, key points to cover, and CTA to include."\n\nSTEP 3 — CONTENT CREATION\nPrompt: "Write a comprehensive 2,000-word article titled [TITLE]. The target audience is [AUDIENCE]. The main keyword is [KEYWORD]. Include: an engaging introduction that acknowledges their pain, H2 and H3 subheadings, 3-5 actionable takeaways, relevant statistics (note where to research these), and a CTA to [YOUR OFFER]."\n\nSTEP 4 — REPURPOSING\nFrom every long-form article, use AI to create:\n• 5 LinkedIn posts\n• 10 Twitter/X threads\n• 1 email newsletter\n• 1 YouTube script\n• 5 short-form videos scripts`,
      },
    ],
  },
  {
    number: "08",
    title: "Building Your Automation Stack",
    subtitle: "Create a lead generation machine that runs itself",
    sections: [
      {
        heading: "The Automation Philosophy",
        body: `Automation isn't about removing the human element from sales — it's about removing the BORING, REPETITIVE human element so you can focus on the parts that actually require human intelligence: building relationships, handling objections, and closing deals.\n\nThe goal is to automate everything that happens BEFORE a qualified conversation. That includes:\n• Prospect identification and enrichment\n• Initial qualification and scoring\n• First 3-5 touchpoints of outreach\n• Meeting scheduling and confirmation\n• CRM data entry and updates\n• Follow-up and nurture sequences\n\nDone right, this automation handles 80% of your pipeline generation work automatically.`,
      },
      {
        heading: "Core Automation Workflows",
        body: `WORKFLOW 1: THE TRIGGER-TO-SEQUENCE MACHINE\nTrigger (New funding announcement) → Apollo enrichment → Clay AI qualification → Score ≥7 → Add to Instantly sequence → Log in CRM\n\nTools: Google Alerts + Make.com + Clay + Instantly.ai + HubSpot\n\nWORKFLOW 2: THE LINKEDIN-TO-EMAIL PIPELINE\nNew LinkedIn connection → PhantomBuster exports → Clay enriches → AI scores → If qualified → Add to email sequence → Track engagement → Alert SDR when reply\n\nTools: LinkedIn + PhantomBuster + Clay + Instantly + Slack\n\nWORKFLOW 3: THE INBOUND INTENT ENGINE\nVisitor views pricing page → Clearbit identifies company → Clay researches → If ICP match → Alert SDR with research → SDR sends personalized message within 5 minutes\n\nTools: Clearbit/RB2B + Clay + Slack + CRM\n\nWORKFLOW 4: THE REVIEW MONITORING SYSTEM\nMonitor G2/Capterra for competitor negative reviews → Alert when found → Research reviewer → Generate personalized outreach → Route to SDR\n\nTools: Phantombuster + Make.com + Clay + Instantly`,
      },
      {
        heading: "Make.com Automation Recipes",
        body: `Make.com (formerly Integromat) is the backbone of most AI lead gen automation stacks. Here are the most valuable scenarios to build:\n\nSCENARIO 1: LinkedIn Post Engagement Monitor\n• Monitor keywords on LinkedIn\n• When someone comments on a relevant post, capture their profile\n• Enrich with Apollo/Clay\n• If ICP match, add to LinkedIn outreach sequence\n\nSCENARIO 2: New Customer Announcement Alert\n• Monitor Crunchbase for new funding in target industries\n• Parse company data\n• Find decision-makers via Apollo\n• Generate personalized email with Claude AI\n• Add to Instantly sequence\n\nSCENARIO 3: Meeting No-Show Recovery\n• Detect no-shows in Calendly\n• Wait 10 minutes\n• Send personalized video via Loom template\n• Schedule 3-touch follow-up sequence\n• Alert manager if prospect ghosts after 2nd follow-up`,
      },
    ],
  },
  {
    number: "09",
    title: "Funnel Optimization & A/B Testing with AI",
    subtitle: "Use data and AI to continuously improve every touchpoint",
    sections: [
      {
        heading: "The Optimization Mindset",
        body: `Most marketers treat their lead generation funnel as a static thing. They set it up, launch it, and move on. This is a massive mistake.\n\nThe highest-performing teams treat their funnel as a living system that gets smarter over time. Every email, every landing page, every CTA is constantly being tested and optimized.\n\nAI makes this optimization 10x faster by:\n• Analyzing patterns in your data that humans would miss\n• Generating test hypotheses based on what's working and what isn't\n• Predicting which changes will have the biggest impact\n• Automating the testing process itself`,
      },
      {
        heading: "What to Test and How",
        body: `PRIORITY 1 — EMAIL SUBJECT LINES (biggest impact, fastest test)\nTest: Length, personalization, questions vs statements, numbers vs words\nSample size needed: 200+ sends per variant\nAI prompt: "Generate 10 subject line variations for this email [EMAIL]. Test dimensions: personalization level, curiosity gap, specificity, length. Predict which will perform best and why."\n\nPRIORITY 2 — EMAIL BODY COPY\nTest: Length (short vs long), opening hook, pain point emphasis, CTA phrasing\nSample size: 500+ sends per variant\n\nPRIORITY 3 — LANDING PAGE HEADLINES\nTest: Value proposition emphasis, specificity, audience-specific language\nTool: Google Optimize, VWO, or Optimizely\n\nPRIORITY 4 — CTA BUTTONS\nTest: Color, copy, placement, size\nEven a 10% improvement in CTA conversion can double your leads\n\nPRIORITY 5 — MEETING BOOKING PAGE\nTest: Number of time slots, calendar availability, confirmation page copy\nReduction in no-shows = direct revenue impact`,
      },
    ],
  },
  {
    number: "10",
    title: "Analytics, Attribution & Scaling",
    subtitle: "Measure everything, scale what works, kill what doesn't",
    sections: [
      {
        heading: "The Metrics That Actually Matter",
        body: `Most lead generation teams track the wrong metrics. They obsess over open rates and click rates while ignoring the metrics that actually predict revenue.\n\nTHE METRICS THAT MATTER:\n\n1. MEETINGS BOOKED per 100 prospects contacted — Target: 3-5%\n2. MEETING SHOW RATE — Target: 80%+\n3. MEETING-TO-OPPORTUNITY rate — Target: 40%+\n4. COST PER QUALIFIED MEETING — Lower is better; benchmark to industry\n5. PIPELINE SOURCED by channel — Which channels generate the highest quality pipeline?\n6. RESPONSE RATE by sequence step — Where are people dropping off?\n7. REPLY SENTIMENT — Positive, negative, or "not now" (each needs different follow-up)\n\nTRACK THESE WEEKLY:\n• Total prospects entered into pipeline\n• Qualified prospects (ICP score 7+)\n• Meetings booked\n• Meetings completed\n• Opportunities created\n• Pipeline value generated`,
      },
      {
        heading: "Building Your AI Analytics Dashboard",
        body: `Use Claude or ChatGPT as your analytics co-pilot. Here's how:\n\nWEEKLY REVIEW PROMPT:\n"Here is my lead generation data for this week [PASTE DATA]. Analyze the performance across each channel and sequence. Identify: 1) What performed better than average and why, 2) What underperformed and likely causes, 3) 3 specific tests I should run next week to improve performance, 4) Any concerning trends I should address immediately."\n\nMONTHLY STRATEGY PROMPT:\n"Here is my lead generation performance for the past month [PASTE DATA]. Compare to previous month. Identify: 1) Overall trend (improving/declining), 2) Biggest wins and how to double down, 3) Biggest losses and how to address, 4) Recommended channel reallocation based on performance, 5) Projected results if current trends continue."\n\nThis turns AI into your always-available analytics team — providing insights in minutes that would take a data analyst hours to produce.`,
      },
      {
        heading: "Scaling Your AI Lead Generation System",
        body: `Once your system is working, scaling is about multiplication — more channels, more sequences, more prospects — while maintaining quality.\n\nTHE SCALING ROADMAP:\n\nPHASE 1 (Month 1-2): Validate\n• 1 channel, 1 sequence, 100 prospects/week\n• Goal: Achieve 3%+ meeting rate before scaling\n\nPHASE 2 (Month 3-4): Expand\n• 2 channels, 2-3 sequences, 300 prospects/week\n• Add second ICP tier\n• Introduce referral automation\n\nPHASE 3 (Month 5-6): Systematize\n• 3-4 channels, full automation stack\n• 500+ prospects/week\n• Weekly optimization reviews\n• First dedicated outreach hire (they manage the system, not do manual work)\n\nPHASE 4 (Month 7+): Scale\n• Multiple markets/geographies\n• ABM for enterprise targets\n• Full AI SDR deployment\n• Predictive pipeline forecasting\n\nThe teams that succeed are obsessed with process before they're obsessed with scale. Build the foundation right, and scaling becomes almost automatic.\n\nYou now have everything you need to build, launch, and scale an AI-powered lead generation machine. The only thing left is to start.`,
      },
    ],
  },
];

// ─── ADVANCED-ONLY BONUS CHAPTER ──────────────────────────────────────────────
const advancedBonusChapter = {
  number: "B1",
  title: "12 Automation Workflow Blueprints",
  subtitle: "Copy-paste Make.com and Zapier workflows for instant deployment",
  sections: [
    {
      heading: "Workflow Architecture Principles",
      body: `Before diving into the blueprints, understand these core principles:\n\n1. SINGLE RESPONSIBILITY — Each workflow does one thing well. Don't combine prospect research with email sending in the same flow.\n\n2. ERROR HANDLING FIRST — Every workflow needs error catching. A failed enrichment step shouldn't kill your entire sequence.\n\n3. HUMAN CHECKPOINTS — Automate everything up to the first reply. After that, humans take over.\n\n4. LOGGING EVERYTHING — Every automated action should write to a CRM or Google Sheet. If you can't audit it, you can't improve it.\n\n5. RATE LIMITING — APIs have limits. Build in delays between steps to avoid hitting rate limits on Apollo, LinkedIn, or Clay.`,
    },
    {
      heading: "Blueprint 1: The Funding Trigger Machine",
      body: `TRIGGER: New funding announcement detected via Crunchbase/Dealroom\nFREQUENCY: Check every 4 hours\n\nSTEPS:\n1. Monitor Crunchbase RSS feed for target industries\n2. Extract: company name, funding amount, investors, date\n3. Apollo.io lookup → find 3-5 decision makers (CEO, VP Sales, CMO)\n4. Clay enrichment → company tech stack, headcount, recent news\n5. AI scoring → "Is this company a fit for [YOUR ICP]?" (Claude API call)\n6. If score ≥ 7 → Generate personalized email via Claude\n7. Add to Instantly.ai campaign tagged "funding-trigger"\n8. Log to HubSpot CRM with all context\n9. Slack notification to SDR: "[Company] just raised $X — 3 contacts added to sequence"\n\nTIMING: Outreach within 48 hours of announcement doubles response rates.`,
    },
    {
      heading: "Blueprint 2: LinkedIn Engagement Monitor",
      body: `TRIGGER: Someone comments on or likes a relevant LinkedIn post\nFREQUENCY: Real-time via PhantomBuster webhook\n\nSTEPS:\n1. PhantomBuster monitors target keywords on LinkedIn\n2. When engagement detected → export commenter profile\n3. Apollo.io lookup → verify email address\n4. Clay → enrich with company data\n5. AI scoring → ICP fit check\n6. If qualified → Send LinkedIn connection request (personalized based on their comment)\n7. After connection → Wait 24 hours\n8. Send LinkedIn DM referencing the post they engaged with\n9. If no reply after 5 days → Add to email sequence\n10. Log entire journey in CRM\n\nKEY INSIGHT: People who comment on industry content are actively interested in the topic. Your response rate will be 3-4x higher than cold outreach.`,
    },
  ],
};

// ─── COMPLETE-ONLY BONUS CHAPTER ──────────────────────────────────────────────
const completeBonusChapter = {
  number: "B2",
  title: "Scaling to $1M Pipeline with AI SDRs",
  subtitle: "The advanced playbook for enterprise-level lead generation",
  sections: [
    {
      heading: "What Is an AI SDR?",
      body: `An AI SDR (Sales Development Representative) is an AI agent that performs the work of a human SDR — researching prospects, crafting personalized outreach, managing follow-ups, and qualifying leads — automatically and at scale.\n\n2025 AI SDR tools include:\n• Artisan (Ava) — Fully autonomous AI SDR with her own email, LinkedIn, and research capabilities\n• 11x (Alice) — AI SDR that integrates with your existing CRM and sequences\n• Relevance AI — Build custom AI SDR agents with your own workflow logic\n• Clay + Claude API — Build your own AI SDR using Clay's data platform + Claude for personalization\n\nA well-configured AI SDR can process 500+ prospects per week, maintain context across multi-touch sequences, and hand off qualified leads to human reps — all without human oversight.`,
    },
    {
      heading: "Building the $1M Pipeline System",
      body: `Here's the exact system architecture used by companies generating $1M+ in pipeline per month with AI:\n\nLAYER 1: SIGNAL MONITORING (always on)\n• Funding news monitoring (Crunchbase, Dealroom)\n• Job posting monitoring (LinkedIn, Indeed)\n• Tech stack change monitoring (BuiltWith, SimilarTech)\n• Competitor review monitoring (G2, Capterra)\n• Content engagement monitoring (website visitors, social)\n\nLAYER 2: INTELLIGENT QUALIFICATION (AI-powered)\n• Real-time ICP scoring for all incoming signals\n• Automatic Tier 1/2/3 classification\n• Buying intent scoring (1-10)\n• Competitor displacement probability scoring\n• Time-to-close prediction based on company profile\n\nLAYER 3: HYPER-PERSONALIZED OUTREACH (automated)\n• AI-researched personalization for every prospect\n• Dynamic sequence selection based on trigger type\n• Multi-channel coordination (email + LinkedIn + phone)\n• A/B testing at scale (10+ variants simultaneously)\n• Automatic optimization based on reply data\n\nLAYER 4: INTELLIGENT FOLLOW-UP (semi-automated)\n• AI sentiment analysis on all replies\n• Automatic routing: positive → human SDR, negative → remove, "not now" → long-term nurture\n• Meeting booking automation (Calendly integration)\n• Pre-meeting research briefs generated for each rep\n\nAt scale, this system requires only 1 human manager for every 500 prospects/week — a 10x efficiency improvement over traditional SDR teams.`,
    },
    {
      heading: "Account-Based Marketing with AI",
      body: `ABM (Account-Based Marketing) is the highest-ROI strategy for enterprise deals — but it's been too resource-intensive for most companies. AI makes ABM accessible at any scale.\n\nAI-POWERED ABM WORKFLOW:\n\nSTEP 1: TARGET ACCOUNT SELECTION\nAI analyzes your best customers and identifies look-alike accounts from a database of 100M+ companies. Scoring criteria: revenue, growth rate, tech stack, hiring patterns, engagement with your content.\n\nSTEP 2: MULTI-STAKEHOLDER MAPPING\nFor each target account, AI maps 5-10 stakeholders:\n• Economic buyer (who signs the check)\n• Technical buyer (who evaluates the solution)\n• Champion (who will advocate for you internally)\n• Blocker (who might kill the deal)\n• End user (who will actually use your product)\n\nSTEP 3: PERSONALIZED CONTENT CREATION\nAI generates account-specific content:\n• Custom case studies featuring similar companies\n• Personalized ROI calculators\n• Industry-specific email sequences\n• LinkedIn ads targeting specific job titles at specific companies\n\nSTEP 4: COORDINATED OUTREACH\nAll stakeholders receive coordinated, personalized outreach across channels — timed and sequenced to build awareness across the buying committee simultaneously.\n\nWhen done right, ABM with AI can generate 5-10x the pipeline value of spray-and-pray outreach with the same budget.`,
    },
  ],
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function drawRect(doc, x, y, w, h, color) {
  doc.rect(x, y, w, h).fill(color);
}

// ─── PDF BUILDER ──────────────────────────────────────────────────────────────
function buildPDF(outputPath, config) {
  const { title, subtitle, badge, chapters, showBonus, bonusChapters = [] } = config;

  const doc = new PDFDocument({
    size: "A4",
    margin: 0,
    info: {
      Title: title,
      Author: "LeadGenPro",
      Subject: "AI-Powered Lead Generation Frameworks & Playbooks",
      Keywords: "AI, lead generation, marketing, automation, B2B",
    },
  });

  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  const W = doc.page.width;
  const H = doc.page.height;
  const MARGIN = 56;
  const TEXT_W = W - MARGIN * 2;

  // ── COVER PAGE ──────────────────────────────────────────────────────────────
  drawRect(doc, 0, 0, W, H, C.bg);
  doc.save();
  doc.polygon([W * 0.6, 0], [W, 0], [W, H * 0.45]).fill("#0f0f1a");
  doc.restore();
  doc.rect(0, 0, W, 4).fill(C.accent);

  // Badge pill
  drawRect(doc, MARGIN, 60, 160, 24, "#1e1b4b");
  doc
    .fillColor(C.accentLight)
    .font("Helvetica-Bold")
    .fontSize(9)
    .text(badge.toUpperCase(), MARGIN + 10, 67, { width: 150, align: "center" });

  doc
    .fillColor(C.white)
    .font("Helvetica-Bold")
    .fontSize(42)
    .text("AI Lead Generation", MARGIN, 110, { width: TEXT_W, lineGap: 4 });

  doc
    .fillColor(C.accentLight)
    .fontSize(42)
    .text("Strategy", MARGIN, 155, { width: TEXT_W });

  // Edition label
  doc
    .fillColor(C.amber)
    .font("Helvetica-Bold")
    .fontSize(14)
    .text(`— ${title}`, MARGIN, 208, { width: TEXT_W });

  doc
    .fillColor(C.gray)
    .font("Helvetica")
    .fontSize(13)
    .text(subtitle, MARGIN, 232, { width: 380, lineGap: 6 });

  // Stats
  const stats = [
    [chapters.length.toString(), "Chapters"],
    [chapters.length === 3 ? "50+" : "150+", "Pages"],
    [showBonus ? "40+" : "10+", "Templates"],
    ["LeadGenPro", "Publisher"],
  ];
  let sx = MARGIN;
  stats.forEach(([val, label]) => {
    doc.fillColor(C.accent).font("Helvetica-Bold").fontSize(20).text(val, sx, 310, { width: 90 });
    doc.fillColor(C.gray).font("Helvetica").fontSize(10).text(label, sx, 334, { width: 90 });
    sx += 100;
  });

  doc.rect(MARGIN, 366, TEXT_W, 1).fill(C.border);
  doc
    .fillColor(C.gray)
    .font("Helvetica")
    .fontSize(11)
    .text("LeadGenPro   ·   info@aiproducts.online   ·   aiproducts.online", MARGIN, 378, {
      width: TEXT_W,
    });

  doc.circle(W - 80, H - 80, 120).fillOpacity(0.05).fill(C.accent);
  doc.circle(W - 40, H - 160, 60).fillOpacity(0.08).fill(C.violet);
  doc.fillOpacity(1);

  drawRect(doc, 0, H - 36, W, 36, "#0f0f1a");
  doc
    .fillColor(C.darkGray)
    .font("Helvetica")
    .fontSize(9)
    .text(
      "© 2025 LeadGenPro · All Rights Reserved · For personal use only · Do not redistribute",
      MARGIN,
      H - 22,
      { width: TEXT_W }
    );

  // ── TABLE OF CONTENTS ────────────────────────────────────────────────────────
  doc.addPage();
  drawRect(doc, 0, 0, W, H, C.bg);
  doc.rect(0, 0, W, 4).fill(C.accent);

  doc
    .fillColor(C.accentLight)
    .font("Helvetica-Bold")
    .fontSize(9)
    .text("TABLE OF CONTENTS", MARGIN, 50);

  doc
    .fillColor(C.white)
    .font("Helvetica-Bold")
    .fontSize(28)
    .text("What's Inside", MARGIN, 68, { width: TEXT_W });

  doc.rect(MARGIN, 108, TEXT_W, 1).fill(C.border);

  let tocY = 124;
  [...chapters, ...bonusChapters].forEach((ch, i) => {
    if (tocY > H - 80) return;
    drawRect(doc, MARGIN, tocY, 36, 20, "#1e1b4b");
    doc
      .fillColor(C.accentLight)
      .font("Helvetica-Bold")
      .fontSize(8)
      .text(ch.number, MARGIN + 4, tocY + 6, { width: 30, align: "center" });

    doc
      .fillColor(C.white)
      .font("Helvetica-Bold")
      .fontSize(12)
      .text(ch.title, MARGIN + 48, tocY + 4, { width: TEXT_W - 80 });

    doc.fillColor(C.darkGray).fontSize(10).text(ch.subtitle, MARGIN + 48, tocY + 18, {
      width: TEXT_W - 80,
      lineGap: 2,
    });

    tocY += 50;

    if (i < chapters.length + bonusChapters.length - 1) {
      doc.rect(MARGIN, tocY - 8, TEXT_W, 1).fillOpacity(0.3).fill(C.border).fillOpacity(1);
    }
  });

  if (showBonus && tocY < H - 120) {
    drawRect(doc, MARGIN, tocY + 10, TEXT_W, 60, "#0f172a");
    doc.rect(MARGIN, tocY + 10, 3, 60).fill(C.emerald);
    doc
      .fillColor(C.emerald)
      .font("Helvetica-Bold")
      .fontSize(10)
      .text("BONUS INCLUDED", MARGIN + 16, tocY + 20);
    doc
      .fillColor(C.gray)
      .font("Helvetica")
      .fontSize(10)
      .text(
        "40+ AI Prompt Templates · Automation Workflow Blueprints · AI Tool Stack Guide",
        MARGIN + 16,
        tocY + 36,
        { width: TEXT_W - 20 }
      );
  }

  drawRect(doc, 0, H - 36, W, 36, "#0f0f1a");
  doc
    .fillColor(C.darkGray)
    .font("Helvetica")
    .fontSize(9)
    .text("LeadGenPro — AI Lead Generation Strategy", MARGIN, H - 22, { width: TEXT_W });

  // ── CHAPTER PAGES ────────────────────────────────────────────────────────────
  [...chapters, ...bonusChapters].forEach((chapter, chIdx) => {
    doc.addPage();
    drawRect(doc, 0, 0, W, H, C.bg);
    doc.rect(0, 0, 6, H).fill(C.accent);

    doc
      .fillColor("#1e1b4b")
      .font("Helvetica-Bold")
      .fontSize(120)
      .text(chapter.number, W - 180, 40, { width: 160, align: "right" });

    doc
      .fillColor(C.accentLight)
      .font("Helvetica-Bold")
      .fontSize(10)
      .text(`CHAPTER ${chapter.number}`, MARGIN, 60);

    doc
      .fillColor(C.white)
      .font("Helvetica-Bold")
      .fontSize(30)
      .text(chapter.title, MARGIN, 84, { width: TEXT_W - 60, lineGap: 6 });

    const titleHeight = doc.heightOfString(chapter.title, {
      width: TEXT_W - 60,
      fontSize: 30,
    });

    doc
      .fillColor(C.gray)
      .font("Helvetica")
      .fontSize(13)
      .text(chapter.subtitle, MARGIN, 90 + titleHeight + 10, { width: TEXT_W - 40, lineGap: 4 });

    doc.rect(MARGIN, 230, 60, 3).fill(C.accent);

    let previewY = 250;
    doc
      .fillColor(C.darkGray)
      .font("Helvetica-Bold")
      .fontSize(9)
      .text("IN THIS CHAPTER:", MARGIN, previewY);
    previewY += 16;
    chapter.sections.forEach((s) => {
      doc.circle(MARGIN + 4, previewY + 4, 2).fill(C.accentLight);
      doc
        .fillColor(C.gray)
        .font("Helvetica")
        .fontSize(10)
        .text(s.heading, MARGIN + 14, previewY, { width: TEXT_W - 20 });
      previewY += 18;
    });

    drawRect(doc, 0, H - 36, W, 36, "#0f0f1a");
    doc
      .fillColor(C.darkGray)
      .font("Helvetica")
      .fontSize(9)
      .text(`Chapter ${chapter.number}  ·  ${chapter.title}`, MARGIN, H - 22, { width: TEXT_W - 60 })
      .text(`${(chIdx + 1) * 2}`, MARGIN, H - 22, { width: TEXT_W, align: "right" });

    chapter.sections.forEach((section, secIdx) => {
      doc.addPage();
      drawRect(doc, 0, 0, W, H, C.bg);
      doc.rect(0, 0, W, 4).fill(C.accent);

      doc
        .fillColor(C.darkGray)
        .font("Helvetica")
        .fontSize(8)
        .text(
          `CHAPTER ${chapter.number}  ›  ${chapter.title.toUpperCase()}`,
          MARGIN,
          20,
          { width: TEXT_W }
        );

      doc.rect(MARGIN, 34, TEXT_W, 1).fill(C.border);

      doc
        .fillColor(C.white)
        .font("Helvetica-Bold")
        .fontSize(18)
        .text(section.heading, MARGIN, 48, { width: TEXT_W, lineGap: 4 });

      const headingH = doc.heightOfString(section.heading, { width: TEXT_W, fontSize: 18 });

      let bodyY = 56 + headingH + 8;
      const paragraphs = section.body.split("\n\n");

      paragraphs.forEach((para) => {
        if (bodyY > H - 80) {
          doc.addPage();
          drawRect(doc, 0, 0, W, H, C.bg);
          doc.rect(0, 0, W, 4).fill(C.accent);
          bodyY = MARGIN;
        }

        const isHeading = para.trim().match(/^[A-Z][A-Z\s]+:$|^[A-Z][A-Z ]+\s—/);

        if (isHeading) {
          doc
            .fillColor(C.accentLight)
            .font("Helvetica-Bold")
            .fontSize(10)
            .text(para.trim(), MARGIN, bodyY, { width: TEXT_W });
          bodyY += 20;
        } else if (para.trim().startsWith("Prompt:") || para.trim().startsWith('"')) {
          drawRect(doc, MARGIN, bodyY, TEXT_W, 1, C.accent);
          drawRect(doc, MARGIN, bodyY + 1, 3, 999, C.accent);
          doc
            .fillColor(C.gray)
            .font("Helvetica-Oblique")
            .fontSize(10)
            .text(para.trim(), MARGIN + 12, bodyY + 8, {
              width: TEXT_W - 16,
              lineGap: 4,
            });
          const h = doc.heightOfString(para.trim(), { width: TEXT_W - 16, fontSize: 10 });
          bodyY += h + 20;
        } else {
          doc
            .fillColor(C.gray)
            .font("Helvetica")
            .fontSize(11)
            .text(para.trim(), MARGIN, bodyY, { width: TEXT_W, lineGap: 5 });
          const h = doc.heightOfString(para.trim(), { width: TEXT_W, fontSize: 11 });
          bodyY += h + 14;
        }
      });

      drawRect(doc, 0, H - 36, W, 36, "#0f0f1a");
      doc
        .fillColor(C.darkGray)
        .font("Helvetica")
        .fontSize(9)
        .text(`LeadGenPro — AI Lead Generation Strategy`, MARGIN, H - 22, { width: TEXT_W - 60 })
        .text(`${(chIdx + 1) * 3 + secIdx + 3}`, MARGIN, H - 22, { width: TEXT_W, align: "right" });
    });
  });

  // ── BONUS PROMPT TEMPLATES (Pro, Advanced, Complete only) ─────────────────
  if (showBonus) {
    doc.addPage();
    drawRect(doc, 0, 0, W, H, C.bg);
    drawRect(doc, 0, 0, W, 200, "#050d1a");
    doc.rect(0, 0, W, 4).fill(C.emerald);

    doc.fillColor(C.emerald).font("Helvetica-Bold").fontSize(10).text("BONUS RESOURCE", MARGIN, 50);
    doc
      .fillColor(C.white)
      .font("Helvetica-Bold")
      .fontSize(28)
      .text("40+ AI Prompt Templates", MARGIN, 68, { width: TEXT_W });
    doc
      .fillColor(C.gray)
      .font("Helvetica")
      .fontSize(12)
      .text(
        "Copy-paste these battle-tested prompts directly into ChatGPT, Claude, or Gemini.",
        MARGIN,
        106,
        { width: TEXT_W }
      );

    doc.rect(MARGIN, 158, TEXT_W, 1).fill(C.border);

    const prompts = [
      {
        cat: "ICP & Research",
        items: [
          "Analyze my top 20 customers and identify common attributes that predict success",
          "Build a detailed buyer persona for [ROLE] at [COMPANY SIZE] in [INDUSTRY]",
          "Identify the top 5 triggers that indicate a company is ready to buy [SOLUTION]",
          "Research [COMPANY] and find 3 personalized conversation starters for outreach",
          "Generate 10 questions that reveal buying intent for [PRODUCT CATEGORY]",
        ],
      },
      {
        cat: "Email & Outreach",
        items: [
          "Write a cold email under 100 words for [PROSPECT] at [COMPANY] referencing [TRIGGER]",
          "Generate 10 subject line variations for this email: [EMAIL BODY]",
          "Rewrite this email to be more concise and direct: [ORIGINAL EMAIL]",
          "Create a 7-email follow-up sequence for prospects who didn't reply to my cold email",
          "Write a breakup email that creates urgency without being pushy",
        ],
      },
      {
        cat: "LinkedIn",
        items: [
          "Rewrite my LinkedIn headline to focus on the value I deliver, not my job title",
          "Generate 10 LinkedIn post ideas for [TARGET AUDIENCE] about [TOPIC]",
          "Write a LinkedIn connection request message referencing [MUTUAL CONNECTION/SHARED INTEREST]",
          "Create a LinkedIn about section using the PAS formula for [MY ROLE AND AUDIENCE]",
          "Generate 5 hooks for LinkedIn posts about [TOPIC] that create curiosity",
        ],
      },
      {
        cat: "Content & SEO",
        items: [
          "Generate 50 high-intent search queries for [PRODUCT/SERVICE] targeting [AUDIENCE]",
          "Write a 2,000-word article about [TOPIC] optimized for [KEYWORD]",
          "Create a content calendar for 1 month of LinkedIn posts on [TOPIC]",
          "Transform this blog post into 5 LinkedIn posts and 10 tweet threads: [ARTICLE]",
          "Identify content gaps in [COMPETITOR]'s content strategy based on their blog",
        ],
      },
      {
        cat: "Analytics & Optimization",
        items: [
          "Analyze this email campaign data and identify 3 tests to improve reply rate: [DATA]",
          "Review my lead generation metrics for this month and provide strategic recommendations",
          "Identify patterns in these won vs lost deals: [DEAL DATA]",
          "Generate a hypothesis for why our reply rate dropped 20% last week",
          "Create a scoring model for our ICP based on these attributes: [LIST]",
        ],
      },
    ];

    let pY = 172;
    prompts.forEach((group) => {
      if (pY > H - 100) {
        doc.addPage();
        drawRect(doc, 0, 0, W, H, C.bg);
        doc.rect(0, 0, W, 4).fill(C.emerald);
        pY = 50;
      }
      doc.fillColor(C.emerald).font("Helvetica-Bold").fontSize(10).text(group.cat.toUpperCase(), MARGIN, pY);
      pY += 16;
      group.items.forEach((prompt, i) => {
        if (pY > H - 60) {
          doc.addPage();
          drawRect(doc, 0, 0, W, H, C.bg);
          doc.rect(0, 0, W, 4).fill(C.emerald);
          pY = 50;
        }
        drawRect(doc, MARGIN, pY, TEXT_W, 28, "#0f172a");
        doc
          .fillColor(C.accentLight)
          .font("Helvetica-Bold")
          .fontSize(8)
          .text(`${String(i + 1).padStart(2, "0")}`, MARGIN + 8, pY + 10, { width: 16 });
        doc
          .fillColor(C.white)
          .font("Helvetica")
          .fontSize(10)
          .text(prompt, MARGIN + 30, pY + 10, { width: TEXT_W - 40 });
        pY += 34;
      });
      pY += 12;
    });
  }

  // ── FINAL PAGE ───────────────────────────────────────────────────────────────
  doc.addPage();
  drawRect(doc, 0, 0, W, H, C.bg);
  drawRect(doc, 0, 0, W, H * 0.5, "#050d1a");
  doc.rect(0, 0, W, 4).fill(C.accent);

  doc
    .fillColor(C.white)
    .font("Helvetica-Bold")
    .fontSize(36)
    .text("You Have Everything\nYou Need.", MARGIN, 80, { width: TEXT_W, lineGap: 8 });

  doc
    .fillColor(C.gray)
    .font("Helvetica")
    .fontSize(13)
    .text(
      "Now it's time to act. Start with Chapter 1 today. Build your ICP this week.\nLaunch your first sequence next week. The AI lead generation machine you've\nbeen reading about is waiting to be built by you.",
      MARGIN,
      162,
      { width: TEXT_W - 40, lineGap: 6 }
    );

  doc.rect(MARGIN, 240, 60, 3).fill(C.accent);

  doc.fillColor(C.white).font("Helvetica-Bold").fontSize(14).text("Questions or feedback?", MARGIN, 260);
  doc.fillColor(C.accentLight).font("Helvetica").fontSize(13).text("info@aiproducts.online", MARGIN, 280);

  doc.fillColor(C.gray).fontSize(10).text("© 2025 LeadGenPro. All rights reserved.", MARGIN, 310);
  doc
    .fillColor(C.darkGray)
    .fontSize(9)
    .text(
      "This ebook is licensed for personal and business use by the original purchaser only.\nRedistribution, resale, or sharing is strictly prohibited.",
      MARGIN,
      328,
      { width: TEXT_W }
    );

  doc.circle(W - 80, H - 60, 160).fillOpacity(0.04).fill(C.accent).fillOpacity(1);
  doc.end();

  return new Promise((resolve, reject) => {
    stream.on("finish", resolve);
    stream.on("error", reject);
  });
}

// ─── TIER DEFINITIONS ─────────────────────────────────────────────────────────
const tiers = [
  {
    filename: "ebook-essential.pdf",
    config: {
      title: "Essential Guide",
      subtitle:
        "Master the AI lead generation fundamentals — build your foundation, map your ICP, and automate prospect discovery.",
      badge: "Essential Guide — $17",
      chapters: allChapters.slice(0, 3), // Chapters 1–3
      showBonus: false,
      bonusChapters: [],
    },
  },
  {
    filename: "ebook-pro.pdf",
    config: {
      title: "Pro Playbook",
      subtitle:
        "The complete 10-chapter AI lead generation playbook with 40+ prompt templates and outreach scripts.",
      badge: "Pro Playbook — $27",
      chapters: allChapters, // All 10 chapters
      showBonus: true,
      bonusChapters: [],
    },
  },
  {
    filename: "ebook-advanced.pdf",
    config: {
      title: "Advanced Suite",
      subtitle:
        "All 10 chapters plus 12 automation workflow blueprints and the Make.com recipe library.",
      badge: "Advanced Suite — $47",
      chapters: allChapters, // All 10 chapters
      showBonus: true,
      bonusChapters: [advancedBonusChapter],
    },
  },
  {
    filename: "ebook-complete.pdf",
    config: {
      title: "Complete Mastery",
      subtitle:
        "The full package — every chapter, every blueprint, plus the $1M pipeline scaling playbook and ABM guide.",
      badge: "Complete Mastery — $97",
      chapters: allChapters, // All 10 chapters
      showBonus: true,
      bonusChapters: [advancedBonusChapter, completeBonusChapter],
    },
  },
];

// ─── RUN ──────────────────────────────────────────────────────────────────────
for (const tier of tiers) {
  const outputPath = path.join(outputDir, tier.filename);
  console.log(`\nGenerating ${tier.filename}...`);
  await buildPDF(outputPath, tier.config);
  const stats = fs.statSync(outputPath);
  console.log(`✅  ${tier.filename} — ${(stats.size / 1024).toFixed(0)} KB`);
}

console.log("\nAll 4 PDFs generated successfully!");

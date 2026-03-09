const appEl = document.getElementById("app");
const progressBarEl = document.getElementById("progressBar");
const progressTextEl = document.getElementById("progressText");
const backButtonEl = document.getElementById("backButton");

function optimizeImage(url, width = 900) {
  if (!url.includes("images.unsplash.com")) return url;
  return `${url}&auto=format&fit=crop&w=${width}&q=68`;
}

const steps = [
  {
    id: "welcome",
    type: "hero",
    trackProgress: false,
    title: "Feel lighter.\nThink clearer.\nMove forward.",
    description:
      "This NewMindStart quiz maps your energy, focus, emotional balance, and everyday habits to shape a more personal starting plan.",
    pills: [
      "4 minute flow",
      "Behavior science based",
      "Personal growth blueprint",
    ],
    cta: "Start my quiz",
  },
  {
    id: "age",
    type: "single",
    eyebrow: "Personal fit",
    question: "How old are you?",
    description: "We only use age to tailor the tone and pace of your plan.",
    options: ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"].map(
      (label) => ({ label, value: label })
    ),
    nextLabel: "Continue",
  },
  {
    id: "teaser_people",
    type: "info",
    eyebrow: "Why this works",
    visual: {
      image: optimizeImage(
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?",
        1200
      ),
      label: "Human-centered guidance",
    },
    title: "More than 500,000 people have already stepped into NewMindStart.",
    description:
      "The goal is not to label you. The goal is to spot the patterns that are quietly shaping your days.",
    note: "Your answers turn into a practical starting plan, not generic wellness copy.",
    cta: "Keep going",
  },
  {
    id: "energy_after_rest",
    type: "single",
    question: "How often do you feel drained by the end of the day, even after some rest?",
    options: [
      { label: "Almost every day", score: 1, tags: ["energy", "stress"] },
      { label: "A few times a week", score: 2, tags: ["energy"] },
      { label: "Rarely", score: 4, tags: ["balance"] },
    ],
  },
  {
    id: "deadline_delay",
    type: "single",
    question: "Do you tend to leave important things until the last minute?",
    options: [
      { label: "Yes, often", score: 1, tags: ["focus", "habits"] },
      { label: "Sometimes", score: 2, tags: ["focus"] },
      { label: "Not really", score: 4, tags: ["discipline"] },
    ],
  },
  {
    id: "distracted_level",
    type: "single",
    question: "Which description sounds most like your attention during the day?",
    options: [
      { label: "I get pulled away by little things", score: 1, tags: ["focus"] },
      { label: "I lose momentum now and then", score: 2, tags: ["focus"] },
      { label: "I usually stay on track", score: 3, tags: ["discipline"] },
      { label: "I am mostly in deep focus", score: 4, tags: ["discipline", "balance"] },
    ],
  },
  {
    id: "overwhelm_feeling",
    type: "single",
    question: "How often does stress or overwhelm affect your day?",
    options: [
      { label: "Often", score: 1, tags: ["stress"] },
      { label: "Sometimes", score: 2, tags: ["stress"] },
      { label: "Rarely", score: 4, tags: ["balance"] },
    ],
  },
  {
    id: "mood_swings",
    type: "single",
    question: "Do emotional ups and downs feel sharp lately?",
    options: [
      { label: "Yes, definitely", score: 1, tags: ["balance"] },
      { label: "Sometimes", score: 2, tags: ["balance"] },
      { label: "Not much", score: 4, tags: ["resilience"] },
    ],
  },
  {
    id: "inner_harmony",
    type: "single",
    question: "Have you felt connected to yourself and to people around you lately?",
    options: [
      { label: "Yes, mostly", score: 4, tags: ["connection"] },
      { label: "Only partly", score: 2, tags: ["connection"] },
      { label: "Not really", score: 1, tags: ["connection", "stress"] },
    ],
  },
  {
    id: "statement_emotions",
    type: "single",
    question: "It is hard for me to speak openly about how I feel.",
    description: "Pick the answer that feels closest.",
    options: [
      { label: "Strongly disagree", score: 5, tags: ["confidence"] },
      { label: "Somewhat disagree", score: 4, tags: ["confidence"] },
      { label: "Not sure", score: 3, tags: ["confidence"] },
      { label: "Somewhat agree", score: 2, tags: ["confidence"] },
      { label: "Strongly agree", score: 1, tags: ["confidence", "connection"] },
    ],
  },
  {
    id: "statement_tasks",
    type: "single",
    question: "My to do list often feels bigger than my actual capacity.",
    description: "Pick the answer that feels closest.",
    options: [
      { label: "Strongly disagree", score: 5, tags: ["focus"] },
      { label: "Somewhat disagree", score: 4, tags: ["focus"] },
      { label: "Not sure", score: 3, tags: ["focus"] },
      { label: "Somewhat agree", score: 2, tags: ["stress"] },
      { label: "Strongly agree", score: 1, tags: ["stress", "habits"] },
    ],
  },
  {
    id: "statement_decisions",
    type: "single",
    question: "I struggle to make decisions without second-guessing myself.",
    description: "Pick the answer that feels closest.",
    options: [
      { label: "Strongly disagree", score: 5, tags: ["confidence"] },
      { label: "Somewhat disagree", score: 4, tags: ["confidence"] },
      { label: "Not sure", score: 3, tags: ["confidence"] },
      { label: "Somewhat agree", score: 2, tags: ["confidence"] },
      { label: "Strongly agree", score: 1, tags: ["confidence", "stress"] },
    ],
  },
  {
    id: "statement_fear_fail",
    type: "single",
    question: "Fear of getting it wrong slows down my goals.",
    description: "Pick the answer that feels closest.",
    options: [
      { label: "Strongly disagree", score: 5, tags: ["discipline"] },
      { label: "Somewhat disagree", score: 4, tags: ["discipline"] },
      { label: "Not sure", score: 3, tags: ["discipline"] },
      { label: "Somewhat agree", score: 2, tags: ["confidence"] },
      { label: "Strongly agree", score: 1, tags: ["confidence", "focus"] },
    ],
  },
  {
    id: "compliments",
    type: "single",
    question: "Do compliments ever feel hard to believe?",
    options: [
      { label: "Yes, very often", score: 1, tags: ["confidence"] },
      { label: "Sometimes", score: 2, tags: ["confidence"] },
      { label: "Rarely", score: 4, tags: ["confidence"] },
      { label: "I am not sure", score: 2, tags: ["confidence"] },
    ],
  },
  {
    id: "social_insecurity",
    type: "single",
    question: "Do you feel unsure of yourself while talking to people?",
    options: [
      { label: "Yes", score: 1, tags: ["confidence", "connection"] },
      { label: "Sometimes", score: 2, tags: ["confidence"] },
      { label: "No", score: 4, tags: ["connection"] },
    ],
  },
  {
    id: "overthinking_partner",
    type: "single",
    question: "Do you overthink a partner's tone, mood, or behavior?",
    options: [
      { label: "Yes, often", score: 1, tags: ["stress", "connection"] },
      { label: "Sometimes", score: 2, tags: ["connection"] },
      { label: "Rarely", score: 4, tags: ["resilience"] },
    ],
  },
  {
    id: "others_first",
    type: "single",
    question: "Do you put other people's needs ahead of your own too often?",
    options: [
      { label: "Yes", score: 1, tags: ["boundaries"] },
      { label: "Sometimes", score: 2, tags: ["boundaries"] },
      { label: "No", score: 4, tags: ["boundaries", "resilience"] },
    ],
  },
  {
    id: "last_motivation",
    type: "single",
    question: "When did you last feel deeply motivated for more than a day or two?",
    options: [
      { label: "Within the last few days", score: 4, tags: ["energy"] },
      { label: "A week or two ago", score: 3, tags: ["energy"] },
      { label: "A few months ago", score: 2, tags: ["energy"] },
      { label: "I honestly do not remember", score: 1, tags: ["energy", "stress"] },
    ],
  },
  {
    id: "improve_areas",
    type: "multi",
    question: "Which areas feel most important to improve right now?",
    description: "Choose as many as you want.",
    options: [
      { label: "Stress regulation", score: 2, tags: ["stress"] },
      { label: "Steadier energy", score: 2, tags: ["energy"] },
      { label: "Focus and productivity", score: 2, tags: ["focus"] },
      { label: "Self-confidence", score: 2, tags: ["confidence"] },
      { label: "Relationships and communication", score: 2, tags: ["connection"] },
      { label: "Balance and boundaries", score: 2, tags: ["boundaries"] },
    ],
  },
  {
    id: "morning_first",
    type: "single",
    question: "What usually happens during the first half hour after you wake up?",
    options: [
      { label: "I reach for my phone right away", score: 1, tags: ["habits", "focus"] },
      { label: "I rush into the day", score: 2, tags: ["habits"] },
      { label: "I have a short routine and some structure", score: 4, tags: ["discipline"] },
      { label: "It changes every day", score: 2, tags: ["habits"] },
    ],
  },
  {
    id: "physical_activity",
    type: "single",
    question: "How much movement do you usually get in a week?",
    options: [
      { label: "Very little", score: 1, tags: ["energy"] },
      { label: "One or two short sessions", score: 2, tags: ["energy"] },
      { label: "Three or four active days", score: 3, tags: ["energy"] },
      { label: "Five or more active days", score: 4, tags: ["energy", "discipline"] },
    ],
  },
  {
    id: "quit_habits",
    type: "multi",
    question: "Which habits would you most like to reduce?",
    description: "Choose as many as you want.",
    options: [
      { label: "Endless scrolling", score: 1, tags: ["habits", "focus"] },
      { label: "Procrastination", score: 1, tags: ["habits", "focus"] },
      { label: "Working without breaks", score: 1, tags: ["energy"] },
      { label: "Stress eating", score: 1, tags: ["stress"] },
      { label: "Late night sleep rhythm", score: 1, tags: ["sleep"] },
      { label: "Harsh self-talk", score: 1, tags: ["confidence"] },
      { label: "Nothing stands out", score: 4, tags: ["resilience"] },
    ],
  },
  {
    id: "sleep_improve",
    type: "multi",
    question: "What would you most like to improve about your sleep?",
    description: "Choose every answer that fits.",
    options: [
      { label: "Falling asleep", score: 1, tags: ["sleep", "stress"] },
      { label: "Waking up in the middle of the night", score: 1, tags: ["sleep"] },
      { label: "Waking up tired", score: 1, tags: ["sleep", "energy"] },
      { label: "A more stable schedule", score: 1, tags: ["sleep", "habits"] },
      { label: "My sleep is already solid", score: 4, tags: ["sleep"] },
    ],
  },
  {
    id: "recent_triggers",
    type: "multi",
    question: "What has been adding the most pressure lately?",
    description: "Choose as many as you want.",
    options: [
      { label: "Workload", score: 1, tags: ["stress"] },
      { label: "Money pressure", score: 1, tags: ["stress"] },
      { label: "Relationships", score: 1, tags: ["connection"] },
      { label: "Family dynamics", score: 1, tags: ["connection"] },
      { label: "Health concerns", score: 1, tags: ["energy"] },
      { label: "Nothing major at the moment", score: 4, tags: ["resilience"] },
    ],
  },
  {
    id: "happier_life",
    type: "multi",
    question: "To feel more grounded and happy, what needs the biggest upgrade?",
    description: "Choose your top priorities.",
    options: [
      { label: "Emotional steadiness", score: 2, tags: ["balance"] },
      { label: "Mental clarity", score: 2, tags: ["focus"] },
      { label: "Rest without guilt", score: 2, tags: ["boundaries"] },
      { label: "Healthier relationships", score: 2, tags: ["connection"] },
      { label: "Self-trust", score: 2, tags: ["confidence"] },
      { label: "More life energy", score: 2, tags: ["energy"] },
    ],
  },
  {
    id: "plan_targets",
    type: "multi",
    question: "What would you like your plan to help you build first?",
    description: "Choose as many as you want.",
    options: [
      { label: "Short reset and stress tools", score: 2, tags: ["stress"] },
      { label: "A stronger morning rhythm", score: 2, tags: ["habits"] },
      { label: "Focus blocks with less noise", score: 2, tags: ["focus"] },
      { label: "Healthier self-worth", score: 2, tags: ["confidence"] },
      { label: "Clearer boundaries and communication", score: 2, tags: ["boundaries"] },
      { label: "Recovery and sleep structure", score: 2, tags: ["sleep"] },
    ],
  },
  {
    id: "evidence",
    type: "info",
    eyebrow: "Built with intention",
    visual: {
      image: optimizeImage(
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?",
        1200
      ),
      label: "Evidence-based design",
    },
    title: "NewMindStart is shaped by evidence-based behavioral methods.",
    description:
      "We draw from CBT, behavior design, emotional regulation tools, and micro-learning so the plan feels realistic on an actual busy day.",
    note: "The goal is consistency over intensity. Small repeatable actions usually win.",
    cta: "Continue",
  },
  {
    id: "behavior_knowledge",
    type: "single",
    question: "How familiar are you with behavior change or habit design tools?",
    options: [
      { label: "Very familiar, I have used them before", score: 4, tags: ["discipline"] },
      { label: "A little, but never with a system", score: 2, tags: ["habits"] },
      { label: "Hardly at all", score: 1, tags: ["habits"] },
    ],
  },
  {
    id: "heard_expert",
    type: "single",
    question: "Did an expert or coach recommend a program like this to you?",
    options: [
      { label: "Yes", score: 3, tags: ["motivation"] },
      { label: "No", score: 2, tags: ["motivation"] },
    ],
  },
  {
    id: "teaser_community",
    type: "info",
    eyebrow: "Momentum matters",
    visual: {
      image: optimizeImage(
        "https://images.unsplash.com/photo-1511988617509-a57c8a288659?",
        1200
      ),
      label: "Community support",
    },
    title: "People do better when growth feels supported, not lonely.",
    description:
      "Structured sessions, gentle accountability, and compact routines make it easier to stay with the process long enough to see change.",
    note: "That is why your plan is designed to feel calm, elegant, and realistic from day one.",
    cta: "Next",
  },
  {
    id: "daily_goal",
    type: "single",
    question: "How much time could you honestly give this plan each day?",
    options: [
      { label: "5 minutes", score: 1, tags: ["habits"] },
      { label: "10 minutes", score: 2, tags: ["habits"] },
      { label: "15 minutes", score: 3, tags: ["discipline"] },
      { label: "20+ minutes", score: 4, tags: ["discipline"] },
    ],
  },
  {
    id: "email",
    type: "input",
    field: "email",
    eyebrow: "Profile delivery",
    question: "Where should we send your personal NewMindStart profile?",
    description:
      "We will attach your starter summary and your first plan outline to this email.",
    placeholder: "you@example.com",
    inputType: "email",
    nextLabel: "Get my profile",
  },
  {
    id: "newsletter",
    type: "single",
    question: "Would you like practical NewMindStart emails with short weekly tools?",
    options: [
      { label: "Yes, a light weekly cadence", value: "yes" },
      { label: "No, just my report", value: "no" },
    ],
  },
  {
    id: "name",
    type: "input",
    field: "name",
    eyebrow: "Personal touch",
    question: "What should we call you in the plan?",
    description:
      "Your name helps the summary feel more like a personal map and less like a template.",
    placeholder: "For example, Alex",
    inputType: "text",
    nextLabel: "Build my summary",
  },
  {
    id: "summary",
    type: "summary",
  },
  {
    id: "plan_preview",
    type: "plan",
  },
  {
    id: "calculating",
    type: "loading",
    trackProgress: false,
    title: "Designing your starting path",
    description:
      "We are translating your answers into a calm, realistic four-week plan.",
    duration: 3600,
  },
  {
    id: "final",
    type: "final",
  },
];

const state = {
  currentStepIndex: 0,
  answers: {},
  loadingInterval: null,
  loadingTimer: null,
  selectedPlan: "7d",
  checkoutOpen: false,
  checkoutForm: {
    email: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  },
  dashboardOpen: false,
  appTab: "home",
};

const trackedStepIndices = steps
  .map((step, index) => ({ step, index }))
  .filter(({ step }) => step.trackProgress !== false)
  .map(({ index }) => index);

const insightMap = {
  focus: {
    title: "Focus and attention",
    text: "Your plan should reduce noise, simplify decisions, and protect deep work windows.",
  },
  stress: {
    title: "Stress regulation",
    text: "The strongest lever is a steady reset rhythm through the day, not occasional heavy effort.",
  },
  energy: {
    title: "Energy recovery",
    text: "Better recovery, sleep timing, and lighter routines can restore more consistent energy.",
  },
  confidence: {
    title: "Self-trust",
    text: "A calmer internal voice and repeated small wins will likely move the needle fastest.",
  },
  boundaries: {
    title: "Personal boundaries",
    text: "Protecting your own bandwidth more clearly may bring immediate relief and steadiness.",
  },
  connection: {
    title: "Relationships",
    text: "You may benefit from clearer communication and less emotional guessing in close dynamics.",
  },
  sleep: {
    title: "Sleep quality",
    text: "A more intentional wind-down rhythm could upgrade both recovery and next-day capacity.",
  },
  habits: {
    title: "Habit structure",
    text: "You are likely to respond well to lighter routines with almost no friction to begin.",
  },
  discipline: {
    title: "Consistency",
    text: "You already have some ability to hold structure. The plan should build on that, not restart from zero.",
  },
  resilience: {
    title: "Resilience",
    text: "You have useful stability in the background. The next step is making it more reliable under pressure.",
  },
  balance: {
    title: "Emotional balance",
    text: "Regular self-checks and softer transitions through the day may help you feel more even.",
  },
  motivation: {
    title: "Momentum",
    text: "Quick visible progress matters. Your program should create elegant wins early.",
  },
};

const questionArtMap = {
  age: {
    image: optimizeImage("https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?"),
    label: "Personalized by life stage",
  },
  energy_after_rest: {
    image: optimizeImage("https://images.unsplash.com/photo-1494790108377-be9c29b29330?"),
    label: "Daily energy",
  },
  deadline_delay: {
    image: optimizeImage("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?"),
    label: "Focus habits",
  },
  distracted_level: {
    image: optimizeImage("https://images.unsplash.com/photo-1517048676732-d65bc937f952?"),
    label: "Attention pattern",
  },
  overwhelm_feeling: {
    image: optimizeImage("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?"),
    label: "Stress rhythm",
  },
  mood_swings: {
    image: optimizeImage("https://images.unsplash.com/photo-1494790108755-2616b612b786?"),
    label: "Emotional balance",
  },
  inner_harmony: {
    image: optimizeImage("https://images.unsplash.com/photo-1511988617509-a57c8a288659?"),
    label: "Inner alignment",
  },
  statement_emotions: {
    image: optimizeImage("https://images.unsplash.com/photo-1524504388940-b1c1722653e1?"),
    label: "Emotional openness",
  },
  statement_tasks: {
    image: optimizeImage("https://images.unsplash.com/photo-1494172961521-33799ddd43a5?"),
    label: "Mental load",
  },
  statement_decisions: {
    image: optimizeImage("https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?"),
    label: "Decision confidence",
  },
  statement_fear_fail: {
    image: optimizeImage("https://images.unsplash.com/photo-1521572267360-ee0c2909d518?"),
    label: "Self trust",
  },
  compliments: {
    image: optimizeImage("https://images.unsplash.com/photo-1529139574466-a303027c1d8b?"),
    label: "Self worth",
  },
  social_insecurity: {
    image: optimizeImage("https://images.unsplash.com/photo-1524503033411-c9566986fc8f?"),
    label: "Social ease",
  },
  overthinking_partner: {
    image: optimizeImage("https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?"),
    label: "Relationship pattern",
  },
  others_first: {
    image: optimizeImage("https://images.unsplash.com/photo-1517457373958-b7bdd4587205?"),
    label: "Boundaries",
  },
  last_motivation: {
    image: optimizeImage("https://images.unsplash.com/photo-1494790108377-be9c29b29330?"),
    label: "Motivation",
  },
  improve_areas: {
    image: optimizeImage("https://images.unsplash.com/photo-1511988617509-a57c8a288659?"),
    label: "Growth areas",
  },
  morning_first: {
    image: optimizeImage("https://images.unsplash.com/photo-1494390248081-4e521a5940db?"),
    label: "Morning rhythm",
  },
  physical_activity: {
    image: optimizeImage("https://images.unsplash.com/photo-1518611012118-696072aa579a?"),
    label: "Movement",
  },
  quit_habits: {
    image: optimizeImage("https://images.unsplash.com/photo-1494173853739-c21f58b16055?"),
    label: "Habit reset",
  },
  sleep_improve: {
    image: optimizeImage("https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?"),
    label: "Sleep",
  },
  recent_triggers: {
    image: optimizeImage("https://images.unsplash.com/photo-1519834785169-98be25ec3f84?"),
    label: "Pressure points",
  },
  happier_life: {
    image: optimizeImage("https://images.unsplash.com/photo-1524504388940-b1c1722653e1?"),
    label: "What matters most",
  },
  plan_targets: {
    image: optimizeImage("https://images.unsplash.com/photo-1508672019048-805c876b67e2?"),
    label: "Plan direction",
  },
  behavior_knowledge: {
    image: optimizeImage("https://images.unsplash.com/photo-1517048676732-d65bc937f952?"),
    label: "Behavior tools",
  },
  heard_expert: {
    image: optimizeImage("https://images.unsplash.com/photo-1544717305-2782549b5136?"),
    label: "Guided choice",
  },
  daily_goal: {
    image: optimizeImage("https://images.unsplash.com/photo-1499750310107-5fef28a66643?"),
    label: "Daily commitment",
  },
  newsletter: {
    image: optimizeImage("https://images.unsplash.com/photo-1516321165247-4aa89a48be28?"),
    label: "Weekly support",
  },
};

const plans = [
  {
    id: "7d",
    badge: "Trial",
    title: "7 days",
    price: "$5.90",
    subtitle: "Starter access",
    note: "Then $34.99 every 4 weeks",
    cta: "Start 7-day trial",
  },
  {
    id: "30d",
    badge: "Most popular",
    title: "30 days",
    price: "$24.90",
    subtitle: "Full monthly reset",
    note: "One payment, full access",
    cta: "Get 30-day access",
  },
  {
    id: "90d",
    badge: "Best value",
    title: "90 days",
    price: "$59.90",
    subtitle: "Deep transformation plan",
    note: "Save more for a longer arc",
    cta: "Get 90-day access",
  },
];

const dashboardData = {
  recommended: [
    "Calmer Mind Reset",
    "Focus Architecture",
    "Sleep Repair",
    "Emotional Balance"
  ],
  bookmarks: [
    "Morning Ease",
    "Body Confidence",
    "Voice and Breath",
    "Creative Recovery"
  ],
  watching: [
    "Stress Release Flow",
    "Deep Focus Sprint",
    "Gentle Evening Reset"
  ],
  live: [
    "Live Breathwork Session",
    "Weekly Group Reflection",
    "Mind + Body Alignment"
  ],
  newest: [
    "Healing Through Movement",
    "Brain Clarity Protocol",
    "Creative Confidence",
    "Massage for Reset"
  ],
  categories: [
    "Dance movement",
    "Fitness and health",
    "Creativity and arts",
    "Brain",
    "Singing",
    "Healing",
    "Massage"
  ],
  messages: [
    { title: "Focus Architecture Group", text: "New session notes are live." },
    { title: "Emma R.", text: "Loved the breathwork class today." },
    { title: "Sleep Repair Cohort", text: "Reminder: live Q&A tomorrow." }
  ],
};

function getCurrentStep() {
  return steps[state.currentStepIndex];
}

function getAnswer(stepId) {
  return state.answers[stepId];
}

function setAnswer(stepId, value) {
  state.answers[stepId] = value;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderStepMeta(step) {
  return step.eyebrow
    ? `<div class="step-meta">${escapeHtml(step.eyebrow)}</div>`
    : "";
}

function renderOptions(step) {
  const selected = getAnswer(step.id);
  const selectedSet = new Set(
    Array.isArray(selected) ? selected : [selected].filter((item) => item !== undefined)
  );
  const many = step.type === "multi" || step.options.length > 4;

  return `
    <div class="options" data-many="${many}">
      ${step.options
        .map((option, index) => {
          const isSelected = selectedSet.has(index);
          return `
            <button
              type="button"
              class="option ${isSelected ? "selected" : ""}"
              data-action="select-option"
              data-index="${index}"
            >
              ${escapeHtml(option.label)}
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderQuestionVisual(step) {
  const art = questionArtMap[step.id];
  if (!art) return "";
  const tone = getIllustrationTone(step.id);

  return `
    <div class="question-visual illustration ${tone}" aria-hidden="true">
      <div class="illustration-orb illustration-orb--a"></div>
      <div class="illustration-orb illustration-orb--b"></div>
      <div class="illustration-wave"></div>
      <div class="question-visual-chip">${escapeHtml(art.label)}</div>
    </div>
  `;
}

function renderInfoVisual(step) {
  if (!step.visual) return "";
  const tone = getIllustrationTone(step.id);
  return `
    <div class="info-visual illustration ${tone}" aria-hidden="true">
      <div class="illustration-orb illustration-orb--a"></div>
      <div class="illustration-orb illustration-orb--b"></div>
      <div class="illustration-wave"></div>
      <div class="info-visual-chip">${escapeHtml(step.visual.label)}</div>
    </div>
  `;
}

function getIllustrationTone(seed) {
  const tones = ["tone-peach", "tone-sand", "tone-apricot", "tone-gold"];
  const index = String(seed)
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0) % tones.length;
  return tones[index];
}

function renderNavigation(step) {
  const nextLabel = step.nextLabel || "Continue";
  return `
    <div class="step-actions">
      <button type="button" class="btn btn-primary" data-action="next-step">${escapeHtml(nextLabel)}</button>
    </div>
    <div id="errorText" class="hint-error"></div>
  `;
}

function renderHeroStep(step) {
  return `
    <article class="step hero">
      <div class="hero-copy">
        ${renderStepMeta({ eyebrow: "Personal growth quiz" })}
        <h1>${step.title.replaceAll("\n", "<br />")}</h1>
        <p>${escapeHtml(step.description)}</p>
        <div class="hero-pill-row">
          ${step.pills.map((pill) => `<span class="hero-pill">${escapeHtml(pill)}</span>`).join("")}
        </div>
        <div class="step-actions">
          <button type="button" class="btn btn-primary" data-action="next-step">${escapeHtml(step.cta)}</button>
        </div>
        <div class="hero-shortcuts">
          <button type="button" class="shortcut-link" data-action="open-shortcut" data-target="offer">Offer preview</button>
          <button type="button" class="shortcut-link" data-action="open-shortcut" data-target="checkout">Checkout demo</button>
          <button type="button" class="shortcut-link" data-action="open-shortcut" data-target="dashboard">App preview</button>
        </div>
      </div>

      <div class="hero-visual" aria-hidden="true">
        <div class="hero-overlay"></div>
        <div class="hero-shape hero-shape--sun"></div>
        <div class="hero-shape hero-shape--orb"></div>
        <div class="hero-figure">
          <div class="hero-figure-head"></div>
          <div class="hero-figure-body"></div>
        </div>
        <div class="hero-floating hero-floating--left">
          <strong>Today</strong>
          <span>Focus reset</span>
        </div>
        <div class="hero-device">
          <div class="hero-device-header">
            <span>Today</span>
            <span>09:41</span>
          </div>
          <div class="hero-device-card">
            <strong>Calmer mind</strong>
            <span>Short daily rituals, better attention, softer recovery.</span>
          </div>
        </div>
        <div class="hero-footer">
          <div class="hero-stat">
            <strong>500K+</strong>
            <span>people already inside</span>
          </div>
          <div class="hero-stat">
            <strong>4.9</strong>
            <span>average experience rating</span>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderInfoStep(step) {
  return `
    <article class="step">
      <div class="content-stack">
        ${renderStepMeta(step)}
        ${renderInfoVisual(step)}
        <div class="info-copy">
          <h2 class="question-title">${escapeHtml(step.title)}</h2>
          <p class="question-description">${escapeHtml(step.description)}</p>
          <p class="note-inline">${escapeHtml(step.note)}</p>
        </div>
        <div class="step-actions">
          <button type="button" class="btn btn-primary" data-action="next-step">${escapeHtml(step.cta || "Continue")}</button>
        </div>
      </div>
    </article>
  `;
}

function renderQuestionStep(step) {
  return `
    <article class="step">
      <div class="content-stack">
        ${renderStepMeta(step)}
        <h2 class="question-title">${escapeHtml(step.question)}</h2>
        ${step.description ? `<p class="question-description">${escapeHtml(step.description)}</p>` : ""}
        ${renderQuestionVisual(step)}
        ${renderOptions(step)}
        ${renderNavigation(step)}
      </div>
    </article>
  `;
}

function renderInputStep(step) {
  const currentValue = escapeHtml(getAnswer(step.id) || "");
  return `
    <article class="step">
      <div class="content-stack">
        ${renderStepMeta(step)}
        <h2 class="question-title">${escapeHtml(step.question)}</h2>
        <p class="question-description">${escapeHtml(step.description || "")}</p>
        <div class="input-wrap">
          <input
            id="textInput"
            class="text-input"
            type="${escapeHtml(step.inputType || "text")}"
            placeholder="${escapeHtml(step.placeholder || "")}"
            value="${currentValue}"
            autocomplete="${step.field === "email" ? "email" : "given-name"}"
          />
        </div>
        ${renderNavigation(step)}
      </div>
    </article>
  `;
}

function getDisplayName(name) {
  const clean = String(name || "").trim();
  return clean || "there";
}

function computeSummary() {
  let total = 0;
  let count = 0;
  const tags = {};

  for (const step of steps) {
    if (!["single", "multi"].includes(step.type)) continue;
    if (!Array.isArray(step.options)) continue;
    if (!step.options.some((option) => typeof option.score === "number")) continue;

    const answer = getAnswer(step.id);
    if (answer === undefined || answer === null) continue;

    const selectedIndexes = Array.isArray(answer) ? answer : [answer];
    const selectedOptions = selectedIndexes
      .map((index) => step.options[index])
      .filter(Boolean)
      .filter((option) => typeof option.score === "number");

    if (!selectedOptions.length) continue;

    const maxScore = Math.max(...step.options.map((option) => option.score || 0), 1);
    const averageScore =
      selectedOptions.reduce((sum, option) => sum + option.score, 0) / selectedOptions.length;

    total += averageScore / maxScore;
    count += 1;

    for (const option of selectedOptions) {
      const optionTags = Array.isArray(option.tags) ? option.tags : [];
      for (const tag of optionTags) {
        tags[tag] = (tags[tag] || 0) + 1;
      }
    }
  }

  const score = count ? Math.round((total / count) * 100) : 0;
  const topTags = Object.entries(tags)
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag)
    .slice(0, 3);
  const fallbackTags = ["focus", "energy", "balance"];
  const insightTags = topTags.length ? topTags : fallbackTags;

  return {
    score,
    insights: insightTags.map((tag) => insightMap[tag]).filter(Boolean),
  };
}

function renderSummaryStep() {
  const { score, insights } = computeSummary();
  const scoreDegrees = Math.max(6, Math.min(360, Math.round((score / 100) * 360)));
  const name = getDisplayName(getAnswer("name"));

  return `
    <article class="step">
      <div class="content-stack">
        <div class="step-meta">Your profile</div>
        <h2 class="question-title">Your profile is ready, ${escapeHtml(name)}.</h2>
        <p class="question-description">
          This is your current resilience score. It is not a diagnosis. It is a starting point for your plan.
        </p>

        <div class="summary-grid">
          <div>
            <div class="score-ring" style="background: conic-gradient(var(--accent) ${scoreDegrees}deg, #ffe9dc ${scoreDegrees}deg)">
              <div class="score-ring-inner">
                <div>
                  <div class="score-value">${score}</div>
                  <div class="score-note">resilience index</div>
                </div>
              </div>
            </div>
          </div>

          <div class="summary-cards">
            ${insights
              .map(
                (insight) => `
                  <article class="summary-card">
                    <h3>${escapeHtml(insight.title)}</h3>
                    <p>${escapeHtml(insight.text)}</p>
                  </article>
                `
              )
              .join("")}
            <article class="summary-card">
              <h3>What this means</h3>
              <p>Your strongest plan is likely a gentle one: short daily moves, high clarity, and almost no wasted friction.</p>
            </article>
          </div>
        </div>

        <div class="step-actions">
          <button type="button" class="btn btn-primary" data-action="next-step">See my plan</button>
        </div>
      </div>
    </article>
  `;
}

function renderPlanStep() {
  const name = getDisplayName(getAnswer("name"));
  const dailyGoalStep = steps.find((step) => step.id === "daily_goal");
  const dailyGoalIndex = getAnswer("daily_goal");
  const dailyGoal =
    dailyGoalIndex !== undefined && dailyGoalStep
      ? dailyGoalStep.options[dailyGoalIndex].label
      : "10 minutes";

  return `
    <article class="step">
      <div class="content-stack">
        <div class="step-meta">Starter path</div>
        <h2 class="question-title">${escapeHtml(name)}, here is your first four-week direction.</h2>
        <p class="question-description">
          The plan is tuned for a daily commitment of <strong>${escapeHtml(dailyGoal)}</strong>.
        </p>

        <div class="plan-columns">
          <article class="plan-card">
            <h3>Week 1. Reset the nervous system</h3>
            <p>Light reset rituals, smoother transitions, and less emotional carry-over through the day.</p>
          </article>
          <article class="plan-card">
            <h3>Week 2. Protect attention</h3>
            <p>Lower distraction, shape cleaner work blocks, and create more deliberate starts to important tasks.</p>
          </article>
          <article class="plan-card">
            <h3>Week 3. Build self-trust</h3>
            <p>Reduce harsh self-talk, make decisions with less drag, and practice steadier internal feedback.</p>
          </article>
          <article class="plan-card">
            <h3>Week 4. Lock in the rhythm</h3>
            <p>Turn the strongest tools into a repeatable routine that still feels elegant on busy days.</p>
          </article>
        </div>

        <div class="footer-badges">
          <span class="footer-badge">Daily micro sessions</span>
          <span class="footer-badge">Gentle weekly structure</span>
          <span class="footer-badge">Built for real life pace</span>
        </div>

        <div class="step-actions">
          <button type="button" class="btn btn-primary" data-action="next-step">Build the final version</button>
        </div>
      </div>
    </article>
  `;
}

function renderLoadingStep(step) {
  return `
    <article class="step">
      <div class="content-stack">
        <div class="step-meta">Personalization in progress</div>
        <h2 class="question-title">${escapeHtml(step.title)}</h2>
        <p class="question-description">${escapeHtml(step.description)}</p>
        <div class="loader-wrap">
          <div class="loader-bar">
            <div id="loaderFill" class="loader-fill"></div>
          </div>
          <div id="loaderText" class="question-description">Preparing your plan... 0%</div>
        </div>
      </div>
    </article>
  `;
}

function renderFinalStep() {
  const name = getDisplayName(getAnswer("name"));
  const email = getAnswer("email") || "you@example.com";
  const selectedPlan = plans.find((plan) => plan.id === state.selectedPlan) || plans[0];

  if (state.checkoutOpen) {
    return renderCheckoutStep(selectedPlan, name, email);
  }

  return `
    <article class="step">
      <div class="content-stack">
        <div class="offer-hero">
          <div class="offer-copy">
            <div class="step-meta">All access offer</div>
            <h2 class="question-title">Unlock every NewMindStart course, ${escapeHtml(name)}.</h2>
            <p class="final-note">
              Your personalized profile is ready and connected to <strong>${escapeHtml(email)}</strong>. The next step is full access to the complete NewMindStart library: mind, body, emotional balance, sleep, focus, and guided routines in one subscription.
            </p>
            <div class="offer-badges">
              <span class="footer-badge">290+ guided courses</span>
              <span class="footer-badge">Daily programs and resets</span>
              <span class="footer-badge">Designed for mobile first</span>
            </div>
          </div>
          <div class="offer-plan-stack">
            ${plans
              .map(
                (plan) => `
                  <button
                    type="button"
                    class="offer-plan ${plan.id === selectedPlan.id ? "offer-plan--selected" : ""}"
                    data-action="choose-plan"
                    data-plan="${plan.id}"
                  >
                    <span class="offer-label">${escapeHtml(plan.badge)}</span>
                    <div class="offer-plan-main">
                      <div>
                        <strong>${escapeHtml(plan.title)}</strong>
                        <span>${escapeHtml(plan.subtitle)}</span>
                      </div>
                      <div class="offer-plan-price">${escapeHtml(plan.price)}</div>
                    </div>
                    <p class="offer-price-note">${escapeHtml(plan.note)}</p>
                  </button>
                `
              )
              .join("")}
          </div>
        </div>

        <div class="offer-grid">
          <article class="offer-panel">
            <h3>What is included</h3>
            <ul class="offer-list">
              <li>Mindset and emotional resilience programs</li>
              <li>Focus, productivity, and anti-overwhelm tracks</li>
              <li>Sleep, recovery, and stress relief routines</li>
              <li>Body confidence and movement support classes</li>
            </ul>
          </article>
          <article class="offer-panel">
            <h3>Why people convert after the quiz</h3>
            <ul class="offer-list">
              <li>The plan already feels personalized</li>
              <li>The routines are short enough to stick</li>
              <li>The design feels calm, premium, and clear</li>
              <li>The app gives structure without pressure</li>
            </ul>
          </article>
        </div>

        <div class="testimonial-row">
          <article class="testimonial-card">
            <p>"It felt like a calmer, more premium version of the usual fitness quiz funnels. I actually wanted to keep going."</p>
            <span>Emma, 32</span>
          </article>
          <article class="testimonial-card">
            <p>"The mobile flow was smooth, fast, and the plan felt relevant in under five minutes."</p>
            <span>Daniel, 41</span>
          </article>
        </div>

        <div class="step-actions offer-actions">
          <button type="button" class="btn btn-primary offer-cta" data-action="open-checkout">${escapeHtml(
            selectedPlan.cta
          )}</button>
          <button type="button" class="btn offer-secondary" data-action="restart">Retake the quiz</button>
        </div>
      </div>
    </article>
  `;
}

function renderCheckoutStep(plan, name, email) {
  const form = state.checkoutForm;
  return `
    <article class="step app-screen">
      <div class="content-stack">
        <div class="checkout-topbar">
          <button type="button" class="back-button checkout-back" data-action="close-checkout">&#8592;</button>
          <span class="step-meta">Secure checkout</span>
        </div>

        <div class="checkout-card">
          <div class="checkout-summary">
            <div>
              <div class="offer-label">${escapeHtml(plan.badge)}</div>
              <h2 class="question-title checkout-title">${escapeHtml(plan.title)} access for ${escapeHtml(name)}</h2>
              <p class="question-description">You are purchasing full NewMindStart access linked to <strong>${escapeHtml(
                email
              )}</strong>.</p>
            </div>
            <div class="checkout-price-block">
              <strong>${escapeHtml(plan.price)}</strong>
              <span>${escapeHtml(plan.note)}</span>
            </div>
          </div>

          <div class="stripe-shell">
            <div class="stripe-bar">
              <span>Pay with card</span>
              <span>Powered by Stripe-style UI</span>
            </div>
            <div class="input-wrap">
              <input class="text-input" id="checkoutEmail" data-checkout-field="email" type="email" placeholder="Email" value="${escapeHtml(
                form.email || email
              )}" />
              <input class="text-input" id="checkoutName" data-checkout-field="cardName" type="text" placeholder="Cardholder name" value="${escapeHtml(
                form.cardName
              )}" />
              <input class="text-input" id="checkoutNumber" data-checkout-field="cardNumber" type="text" inputmode="numeric" placeholder="Card number" value="${escapeHtml(
                form.cardNumber
              )}" />
              <div class="checkout-row">
                <input class="text-input" id="checkoutExpiry" data-checkout-field="expiry" type="text" placeholder="MM / YY" value="${escapeHtml(
                  form.expiry
                )}" />
                <input class="text-input" id="checkoutCvc" data-checkout-field="cvc" type="text" inputmode="numeric" placeholder="CVC" value="${escapeHtml(
                  form.cvc
                )}" />
              </div>
            </div>
            <div class="step-actions checkout-actions">
              <button type="button" class="btn btn-primary" data-action="complete-purchase">Pay ${escapeHtml(
                plan.price
              )}</button>
            </div>
            <div id="errorText" class="hint-error"></div>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderCourseRail(title, items, variant = "course") {
  return `
    <section class="dashboard-section">
      <div class="dashboard-section-head">
        <h3>${escapeHtml(title)}</h3>
      </div>
      <div class="rail">
        ${items
          .map((item, index) => {
            return `
              <article class="rail-card rail-card--${variant}">
                <div class="rail-card-art illustration ${getIllustrationTone(item)}">
                  <div class="illustration-orb illustration-orb--a"></div>
                  <div class="illustration-orb illustration-orb--b"></div>
                  <div class="illustration-wave"></div>
                </div>
                <div class="rail-card-copy">
                  <strong>${escapeHtml(item)}</strong>
                  <span>${variant === "live" ? "Reserve your seat" : "12 lessons"}</span>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderHomeTab() {
  return `
    <div class="dashboard-home">
      <section class="dashboard-hero">
        <div>
          <span class="step-meta">Today for you</span>
          <h2 class="question-title dashboard-title">Your personal NewMindStart home.</h2>
          <p class="question-description">A calmer feed of what to start, save, resume, and join live.</p>
        </div>
      </section>
      ${renderCourseRail("Recommended for you", dashboardData.recommended)}
      ${renderCourseRail("Bookmarked", dashboardData.bookmarks)}
      ${renderCourseRail("Continue watching", dashboardData.watching)}
      ${renderCourseRail("Live sessions", dashboardData.live, "live")}
      ${renderCourseRail("New courses", dashboardData.newest)}
      <section class="dashboard-section">
        <div class="dashboard-section-head"><h3>Categories</h3></div>
        <div class="rail rail--chips">
          ${dashboardData.categories
            .map((category) => `<span class="category-chip">${escapeHtml(category)}</span>`)
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderDiscoverTab() {
  return `
    <div class="dashboard-pane">
      <div class="dashboard-search">
        <input class="text-input" type="text" value="" placeholder="Search courses, teachers, or live sessions" />
      </div>
      ${renderCourseRail("Trending now", dashboardData.newest)}
      <section class="dashboard-section">
        <div class="dashboard-section-head"><h3>Explore categories</h3></div>
        <div class="rail rail--chips">
          ${dashboardData.categories
            .map((category) => `<span class="category-chip">${escapeHtml(category)}</span>`)
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderLearningTab() {
  return `
    <div class="dashboard-pane">
      ${renderCourseRail("Continue learning", dashboardData.watching)}
      ${renderCourseRail("Saved for later", dashboardData.bookmarks)}
    </div>
  `;
}

function renderMessagesTab() {
  return `
    <div class="dashboard-pane messages-pane">
      ${dashboardData.messages
        .map(
          (message) => `
            <article class="message-card">
              <strong>${escapeHtml(message.title)}</strong>
              <p>${escapeHtml(message.text)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderProfileTab() {
  return `
    <div class="dashboard-pane">
      <article class="profile-card">
        <strong>${escapeHtml(getDisplayName(getAnswer("name")))}</strong>
        <span>${escapeHtml(getAnswer("email") || "you@example.com")}</span>
      </article>
      <div class="settings-list">
        ${[
          "Notifications",
          "Download on Wi-Fi only",
          "Manage Subscription",
          "Logout",
          "Delete account",
        ]
          .map(
            (item) => `
              <button type="button" class="settings-item">${escapeHtml(item)}</button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderDashboardStep() {
  const tabs = [
    { id: "home", label: "Home" },
    { id: "discover", label: "Discover" },
    { id: "learning", label: "My Learning" },
    { id: "messages", label: "Messages" },
    { id: "profile", label: "Profile" },
  ];

  const contentByTab = {
    home: renderHomeTab(),
    discover: renderDiscoverTab(),
    learning: renderLearningTab(),
    messages: renderMessagesTab(),
    profile: renderProfileTab(),
  };

  return `
    <article class="step app-screen">
      <div class="app-topbar">
        <div class="brand">
          <span class="brand-mark">&#10048;</span>
          <span class="brand-text">NEWMINDSTART</span>
        </div>
      </div>

      <div class="app-body">
        ${contentByTab[state.appTab] || contentByTab.home}
      </div>

      <nav class="mobile-tabs">
        ${tabs
          .map(
            (tab) => `
              <button
                type="button"
                class="mobile-tab ${state.appTab === tab.id ? "mobile-tab--active" : ""}"
                data-action="switch-tab"
                data-tab="${tab.id}"
              >
                ${escapeHtml(tab.label)}
              </button>
            `
          )
          .join("")}
      </nav>
    </article>
  `;
}

function clearLoadingResources() {
  if (state.loadingTimer) {
    window.clearTimeout(state.loadingTimer);
    state.loadingTimer = null;
  }
  if (state.loadingInterval) {
    window.clearInterval(state.loadingInterval);
    state.loadingInterval = null;
  }
}

function renderStep() {
  clearLoadingResources();
  const step = getCurrentStep();

  if (step.type === "hero") {
    appEl.innerHTML = renderHeroStep(step);
  } else if (step.type === "info") {
    appEl.innerHTML = renderInfoStep(step);
  } else if (step.type === "single" || step.type === "multi") {
    appEl.innerHTML = renderQuestionStep(step);
  } else if (step.type === "input") {
    appEl.innerHTML = renderInputStep(step);
    const input = document.getElementById("textInput");
    if (input) {
      input.focus();
      input.addEventListener("input", () => {
        setAnswer(step.id, input.value.trimStart());
      });
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          nextStep();
        }
      });
    }
  } else if (step.type === "summary") {
    appEl.innerHTML = renderSummaryStep();
  } else if (step.type === "plan") {
    appEl.innerHTML = renderPlanStep();
  } else if (step.type === "loading") {
    appEl.innerHTML = renderLoadingStep(step);
    startLoadingSequence(step.duration || 3500);
  } else if (step.type === "final") {
    appEl.innerHTML = state.dashboardOpen ? renderDashboardStep() : renderFinalStep();
  }

  updateHeader();
}

function updateHeader() {
  const step = getCurrentStep();
  const trackedPosition = trackedStepIndices.findIndex(
    (index) => index === state.currentStepIndex
  );
  const ratio =
    trackedPosition < 0 || trackedStepIndices.length === 0
      ? 0
      : (trackedPosition + 1) / trackedStepIndices.length;

  const percent = Math.round(ratio * 100);
  progressBarEl.style.width = `${percent}%`;
  progressTextEl.textContent = `${percent}%`;

  const hideBack =
    state.currentStepIndex === 0 ||
    step.type === "loading" ||
    (step.type === "final" && !state.checkoutOpen);

  backButtonEl.disabled = hideBack;
}

function showError(message) {
  const errorEl = document.getElementById("errorText");
  if (!errorEl) return;
  errorEl.textContent = message;
}

function validateStep(step) {
  if (step.type === "single") {
    const answer = getAnswer(step.id);
    if (answer === undefined || answer === null) {
      return "Choose one answer to continue.";
    }
    return null;
  }

  if (step.type === "multi") {
    const answer = getAnswer(step.id);
    if (!Array.isArray(answer) || answer.length === 0) {
      return "Choose at least one answer.";
    }
    return null;
  }

  if (step.type === "input") {
    const answer = String(getAnswer(step.id) || "").trim();
    if (!answer) {
      return "Please fill in the field to continue.";
    }
    if (step.field === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(answer)) {
        return "Please enter a valid email.";
      }
    }
    if (step.field === "name" && answer.length < 2) {
      return "Please enter at least 2 characters.";
    }
  }

  return null;
}

function goToStep(index) {
  state.currentStepIndex = Math.max(0, Math.min(steps.length - 1, index));
  renderStep();
}

function nextStep() {
  const step = getCurrentStep();
  const error = validateStep(step);
  if (error) {
    showError(error);
    return;
  }
  goToStep(state.currentStepIndex + 1);
}

function previousStep() {
  const step = getCurrentStep();
  if (step.type === "loading" || step.type === "final") return;
  goToStep(state.currentStepIndex - 1);
}

function updateCheckoutField(field, value) {
  state.checkoutForm[field] = value;
}

function openCheckout() {
  const email = String(getAnswer("email") || "").trim();
  state.checkoutForm.email = state.checkoutForm.email || email;
  state.checkoutOpen = true;
  renderStep();
}

function closeCheckout() {
  state.checkoutOpen = false;
  renderStep();
}

function completePurchase() {
  const { email, cardName, cardNumber, expiry, cvc } = state.checkoutForm;
  if (!email || !cardName || !cardNumber || !expiry || !cvc) {
    showError("Please complete the payment form.");
    return;
  }

  state.checkoutOpen = false;
  state.dashboardOpen = true;
  state.appTab = "home";
  renderStep();
}

function openShortcut(target) {
  state.answers.name = state.answers.name || "Alex";
  state.answers.email = state.answers.email || "test@example.com";
  state.selectedPlan = state.selectedPlan || "7d";

  if (target === "offer") {
    state.checkoutOpen = false;
    state.dashboardOpen = false;
    goToStep(steps.length - 1);
    return;
  }

  if (target === "checkout") {
    state.checkoutOpen = true;
    state.dashboardOpen = false;
    state.checkoutForm = {
      email: state.answers.email,
      cardName: "Alex Stone",
      cardNumber: "4242 4242 4242 4242",
      expiry: "12 / 28",
      cvc: "123",
    };
    goToStep(steps.length - 1);
    return;
  }

  if (target === "dashboard") {
    state.checkoutOpen = false;
    state.dashboardOpen = true;
    state.appTab = "home";
    goToStep(steps.length - 1);
  }
}

function startLoadingSequence(durationMs) {
  const loaderFill = document.getElementById("loaderFill");
  const loaderText = document.getElementById("loaderText");
  if (!loaderFill || !loaderText) return;

  const startedAt = Date.now();
  state.loadingInterval = window.setInterval(() => {
    const elapsed = Date.now() - startedAt;
    const ratio = Math.min(1, elapsed / durationMs);
    const percent = Math.round(ratio * 100);
    loaderFill.style.width = `${percent}%`;
    loaderText.textContent = `Preparing your plan... ${percent}%`;
  }, 120);

  state.loadingTimer = window.setTimeout(() => {
    clearLoadingResources();
    goToStep(state.currentStepIndex + 1);
  }, durationMs + 90);
}

function toggleOption(step, optionIndex) {
  if (step.type === "single") {
    setAnswer(step.id, optionIndex);
    syncOptionSelection(step);
    return;
  }

  if (step.type === "multi") {
    const current = getAnswer(step.id);
    const nextSelection = new Set(Array.isArray(current) ? current : []);

    if (nextSelection.has(optionIndex)) {
      nextSelection.delete(optionIndex);
    } else {
      nextSelection.add(optionIndex);
    }

    setAnswer(step.id, Array.from(nextSelection).sort((a, b) => a - b));
    syncOptionSelection(step);
  }
}

function syncOptionSelection(step) {
  const selected = getAnswer(step.id);
  const selectedSet = new Set(
    Array.isArray(selected) ? selected : [selected].filter((item) => item !== undefined)
  );

  appEl.querySelectorAll('[data-action="select-option"]').forEach((node) => {
    const index = Number(node.dataset.index);
    node.classList.toggle("selected", selectedSet.has(index));
  });

  showError("");
}

appEl.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const action = target.dataset.action;
  const step = getCurrentStep();

  if (action === "select-option") {
    const index = Number(target.dataset.index);
    if (!Number.isNaN(index)) {
      toggleOption(step, index);
    }
    return;
  }

  if (action === "next-step") {
    nextStep();
    return;
  }

  if (action === "restart") {
    state.answers = {};
    state.checkoutOpen = false;
    state.dashboardOpen = false;
    state.selectedPlan = "7d";
    state.appTab = "home";
    state.checkoutForm = {
      email: "",
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
    };
    goToStep(0);
    return;
  }

  if (action === "choose-plan") {
    state.selectedPlan = target.dataset.plan || "7d";
    renderStep();
    return;
  }

  if (action === "open-shortcut") {
    openShortcut(target.dataset.target);
    return;
  }

  if (action === "open-checkout") {
    openCheckout();
    return;
  }

  if (action === "close-checkout") {
    closeCheckout();
    return;
  }

  if (action === "complete-purchase") {
    completePurchase();
    return;
  }

  if (action === "switch-tab") {
    state.appTab = target.dataset.tab || "home";
    renderStep();
  }
});

appEl.addEventListener("input", (event) => {
  const target = event.target.closest("[data-checkout-field]");
  if (!target) return;
  updateCheckoutField(target.dataset.checkoutField, target.value);
});

backButtonEl.addEventListener("click", previousStep);

window.state = state;
window.steps = steps;
window.goToStep = goToStep;

renderStep();

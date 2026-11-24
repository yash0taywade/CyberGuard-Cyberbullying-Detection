module.exports = [
"[project]/.next-internal/server/app/api/analyze/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/types/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ATTRIBUTE_DESCRIPTIONS",
    ()=>ATTRIBUTE_DESCRIPTIONS,
    "ATTRIBUTE_ICONS",
    ()=>ATTRIBUTE_ICONS,
    "ATTRIBUTE_LABELS",
    ()=>ATTRIBUTE_LABELS,
    "LANGUAGE_FLAGS",
    ()=>LANGUAGE_FLAGS,
    "PERSPECTIVE_ATTRIBUTES",
    ()=>PERSPECTIVE_ATTRIBUTES,
    "generateReport",
    ()=>generateReport,
    "getSentimentLabel",
    ()=>getSentimentLabel
]);
const PERSPECTIVE_ATTRIBUTES = [
    "TOXICITY",
    "SEVERE_TOXICITY",
    "IDENTITY_ATTACK",
    "INSULT",
    "PROFANITY",
    "THREAT"
];
const ATTRIBUTE_LABELS = {
    TOXICITY: "Overall Toxicity",
    SEVERE_TOXICITY: "Severe Toxicity",
    IDENTITY_ATTACK: "Identity Attack",
    INSULT: "Insult",
    PROFANITY: "Profanity",
    THREAT: "Threat"
};
const ATTRIBUTE_DESCRIPTIONS = {
    TOXICITY: "A rude, disrespectful, or unreasonable comment (any language)",
    SEVERE_TOXICITY: "A hateful, aggressive, or dehumanizing comment",
    IDENTITY_ATTACK: "Attacks based on race, religion, caste, gender, sexuality, or nationality",
    INSULT: "Insulting or demeaning language directed at a person (any language)",
    PROFANITY: "Swear words, obscene language, or slurs in any language",
    THREAT: "Language expressing intent to harm, intimidate, or hurt someone"
};
const ATTRIBUTE_ICONS = {
    TOXICITY: "⚠️",
    SEVERE_TOXICITY: "🔥",
    IDENTITY_ATTACK: "🎯",
    INSULT: "💢",
    PROFANITY: "🤬",
    THREAT: "⚡"
};
const LANGUAGE_FLAGS = {
    English: "🇬🇧",
    "Hindi (Romanized)": "🇮🇳",
    Hinglish: "🇮🇳",
    Hindi: "🇮🇳",
    "Punjabi (Romanized)": "🇮🇳",
    Punjabi: "🇮🇳",
    "Urdu (Romanized)": "🇵🇰",
    Urdu: "🇵🇰",
    "Bengali (Romanized)": "🇧🇩",
    Bengali: "🇧🇩",
    "Tamil (Romanized)": "🇮🇳",
    Tamil: "🇮🇳",
    "Telugu (Romanized)": "🇮🇳",
    Telugu: "🇮🇳",
    "Marathi (Romanized)": "🇮🇳",
    Marathi: "🇮🇳",
    "Kannada (Romanized)": "🇮🇳",
    Kannada: "🇮🇳",
    "Arabic (Romanized)": "🇸🇦",
    Arabic: "🇸🇦",
    Spanish: "🇪🇸",
    French: "🇫🇷",
    German: "🇩🇪",
    Portuguese: "🇧🇷",
    "Russian (Romanized)": "🇷🇺",
    Russian: "🇷🇺",
    "Chinese (Romanized)": "🇨🇳",
    Chinese: "🇨🇳",
    "Korean (Romanized)": "🇰🇷",
    Korean: "🇰🇷",
    "Japanese (Romanized)": "🇯🇵",
    Japanese: "🇯🇵"
};
function getSentimentLabel(score) {
    if (score < 0.1) return {
        emoji: "😊",
        label: "Friendly & Positive",
        color: "#16a34a"
    };
    if (score < 0.25) return {
        emoji: "😐",
        label: "Neutral",
        color: "#2563eb"
    };
    if (score < 0.5) return {
        emoji: "🤔",
        label: "Mildly Negative",
        color: "#d97706"
    };
    if (score < 0.75) return {
        emoji: "😠",
        label: "Hostile",
        color: "#dc2626"
    };
    return {
        emoji: "🚨",
        label: "Severe Cyberbullying",
        color: "#7f1d1d"
    };
}
function generateReport(result) {
    const { isBullying, cyberbullyingScore, overallScore, detectedLanguages, flaggedWords, contextAnalysis, text, attributeScores } = result;
    const bar = "═".repeat(50);
    const thin = "─".repeat(50);
    const attrLines = PERSPECTIVE_ATTRIBUTES.map((attr)=>{
        const score = attributeScores[attr]?.summaryScore?.value ?? 0;
        const pct = Math.round(score * 100);
        const label = score < 0.3 ? "Safe" : score < 0.6 ? "Moderate" : "High Risk";
        return `  ${ATTRIBUTE_ICONS[attr]}  ${ATTRIBUTE_LABELS[attr].padEnd(20)} ${String(pct + "%").padStart(4)}  [${label}]`;
    });
    const lines = [
        bar,
        "    CYBERBULLYING ANALYSIS REPORT — CyberGuard",
        bar,
        "",
        `Verdict        : ${isBullying ? "⚠️  CYBERBULLYING DETECTED" : "✅  CONTENT APPEARS SAFE"}`,
        `Bullying Score : ${Math.round(cyberbullyingScore * 100)}%`,
        `Toxicity Score : ${Math.round(overallScore * 100)}%`,
        `Languages      : ${detectedLanguages.join(", ") || "English"}`,
        `Flagged Terms  : ${flaggedWords.length > 0 ? flaggedWords.join(", ") : "None"}`,
        "",
        thin,
        "  Attribute Scores",
        thin,
        ...attrLines,
        "",
        thin,
        "  AI Context Analysis",
        thin,
        `  ${contextAnalysis}`,
        "",
        thin,
        "  Analyzed Text",
        thin,
        text.length > 400 ? text.slice(0, 400) + "…" : text,
        "",
        `Generated by CyberGuard  •  ${new Date().toLocaleString()}`,
        bar
    ];
    return lines.join("\n");
}
}),
"[project]/src/lib/openai.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analyzeWithOpenAI",
    ()=>analyzeWithOpenAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/client.mjs [app-route] (ecmascript) <export OpenAI as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/index.ts [app-route] (ecmascript)");
;
;
const SYSTEM_PROMPT = `You are an expert multilingual content moderation AI specializing in cyberbullying detection across all languages, scripts, and transliterated forms.

## SCORING SCALE (0.0 – 1.0)
- 0.00–0.15 : Virtually absent
- 0.16–0.35 : Minor / borderline
- 0.36–0.55 : Moderate, clearly present
- 0.56–0.75 : High, definitely harmful
- 0.76–1.00 : Severe / extreme

## CONTEXT RULES
Score LOWER: friendly sarcasm, sports/gaming banter, quoting/reporting harmful content, self-deprecation, mild venting with no target.
Score HIGHER: sustained targeted harassment, slurs directed at a person, explicit threats, dehumanizing language, sexual harassment.

## ━━ MULTILINGUAL DETECTION (MANDATORY) ━━
Detect harmful content in EVERY language — native script OR romanized/transliterated into Latin letters.
Romanized slurs carry EXACTLY the same weight as their English equivalents.

### South Asian Languages (Romanized — very common in Indian social media)

**Hindi / Hinglish**
Profanity/slurs: madarchod, maa ki aankh, maa ki, bhosdike, bhosdi ke, chutiya, bhenchod, bhen chod, randi, gaandu, gandu, loda, lodu, lauda, harami, jhaant, jhatu, jhaant ke
Abbreviations that ARE slurs: MC, BC, MKB, MKBC, BCMKC, BMC
Insults: bewakoof, bevakoof, gadha, ullu, pagal, paagal, nalayak, nikamma, bekar, bekaar, ghatiya, neech, kamina, kamine, kamino, kutte, kutta, suar, bandar, chhakka (slur), hijra (used as slur)
Threats: maar dunga, teri khabar lunga, dekh lunga tujhe, tod dunga, khatam kar dunga, jaan le lunga

**Punjabi**
bhen di, bhen de, teri maa di, painde, madharchod (Punjabi variant), bhain di

**Urdu**
haramzada, haramzadi, kameena, kameeni, harami, zaleel, ghatiya insaan, badmaash (aggressive)

**Bengali (Romanized)**
khankir chele, khanki, magi, shala, shale, choda, chodachudi, boka, chutmar

**Tamil (Romanized)**
ommala, omala, pundachi, punda, soothu, naaye, loose figure, pottai (slur)

**Telugu (Romanized)**
dengey, nakka, pooku, puku, dengudu, lanja

**Marathi (Romanized)**
aai chi, aichi, chodu, jhavto, zavto, navta (slur), bhik mag

**Kannada (Romanized)**
sooleh maga, thika, nayi maga, henda

**Gujarati (Romanized)**
bhosri, lund, gaand, randi

### Arabic (Romanized)
ibn el sharmouta, bin el sharmouta, kuss ummak, kuss ommak, kuss ommah, air, ayr, 3air, zebbi, sharmouta, sharmuta, kalb, ya ibn el sharmouta, weld el sharmouta, kes ommak, maniak, charamit

### Spanish
puta, puto, cabrón, cabron, pendejo, pendeja, hijo de puta, hdp, coño, culo (aggressive), maricón, maricon, vete a la mierda, estupido (aggressive), idiota, imbécil, la concha, conchuda, verga (aggressive), perra

### French
connard, connasse, salope, putain (aggressive), va te faire foutre, fils de pute, enculé, bâtard, batard, espece de con, ferme ta gueule

### German
Scheiß, Scheiss, Hurensohn, Arschloch, Wichser, Dummkopf (aggressive), Fotze, Bastard (aggressive), Vollidiot, Trottel (aggressive), Schwachkopf, fick dich

### Russian / Eastern European (Romanized)
pizda, blyad, blyat, suka, idi nahui, poshol nahui, mudak, pidar, pidor, yeban, chёrt (aggressive), dolboeb, shluha, padla, urod

### Portuguese
puta, putinha, filho da puta, fdp, viado (slur), caralho (aggressive), vai se foder, vai tomar no cu, idiota, imbecil, babaca, merda (aggressive), corno

### Chinese (Romanized)
tmd, ta ma de, sb, sha bi, shabi, cao ni ma, cnm, wang ba dan, gun dan, biao zi, diao, nima de, baise

### Korean (Romanized)
shibal, ssibal, byeonshin, gaesaekki, gae sekki, jiral, boji, sekkiya, ddong chim, yeom byeong

### Japanese (Romanized)
kichiku, kisama, kono yaro, baka (aggressive targeting), shine/shineyo (die), kutabare, yarichin (slur), yariman (slur)

### Internet / Cross-language Slang
- kys, kys urself, go kys (kill yourself — always HIGH threat score)
- ratio + L + no bitches (harassment pattern)
- ur mom / yo mama (insult chains)
- incel, simp, cuck (when used as targeted insults)
- gtfo, stfu (aggressive)
- cope + seethe, touch grass (when used to demean)

### CODE-SWITCHING (Mixed Language — very common)
ALWAYS detect harmful terms regardless of surrounding language:
- "You are such a chutiya, bro" → flag "chutiya"
- "Teri maa ki, you absolute loser" → flag "teri maa ki" AND "loser"
- "What a madarchod thing to say" → flag "madarchod"
- "bc tu kuch nahi kar sakta" → flag "bc" (abbreviation slur)
- "tu pura gaandu hai yaar" → flag "gaandu"

## ━━ ATTRIBUTE DEFINITIONS ━━

TOXICITY – Overall rude, disrespectful content (any language)
  0.0 → Respectful disagreement | 0.3 → Dismissive | 0.6 → Openly hostile | 1.0 → Sustained vicious attack

SEVERE_TOXICITY – Deeply hateful, dehumanizing content
  0.0 → Blunt criticism | 0.5 → "People like you shouldn't exist" | 1.0 → Calls for violence / extreme dehumanization

IDENTITY_ATTACK – Targets race, religion, caste, gender, sexuality, nationality, disability
  0.0 → None | 0.5 → Slurs targeting a community | 1.0 → Extreme sustained hate speech
  (Includes casteist slurs, communal slurs, regional discrimination, Islamophobia, Hinduphobia, etc.)

INSULT – Direct put-downs, name-calling, demeaning attacks
  0.0 → None | 0.4 → "You're being stupid" | 0.7 → "You're a complete chutiya/idiot, everyone hates you" | 1.0 → Relentless personal insult stream

PROFANITY – Swear words, obscene terms (any language)
  0.0 → None | 0.3 → Casual mild expletive | 0.6 → Profanity used aggressively | 1.0 → Pervasive aggressive profanity

THREAT – Intent to harm, intimidate
  0.0 → None | 0.3 → "I'll get you back" (vague) | 0.7 → Implicit credible threat | 1.0 → Explicit threat with specifics
  (kys / kill yourself is always THREAT ≥ 0.9)

CYBERBULLYING_SCORE – Holistic: is this cyberbullying?
  0.0 → Clearly not | 0.5 → Harmful but ambiguous | 1.0 → Textbook cyberbullying (targeted, personal, sustained)

## ━━ FLAGGED WORDS RULES ━━
• Extract EXACT substrings from the input text — including romanized slurs
• Include abbreviation slurs (MC, BC, etc.) when clearly used as slurs
• Include code-switched harmful terms
• DO NOT include: neutral foreign words (namaste, chai, bonjour), academic/reporting context

## ━━ OUTPUT FORMAT ━━
Return ONLY valid JSON with NO markdown fences:
{
  "context_analysis": "One sentence: tone, language mix, intent, and whether it constitutes cyberbullying.",
  "detected_languages": ["e.g. English", "Hindi (Romanized)", "Punjabi (Romanized)"],
  "cyberbullying_score": <float 0-1>,
  "TOXICITY": <float 0-1>,
  "SEVERE_TOXICITY": <float 0-1>,
  "IDENTITY_ATTACK": <float 0-1>,
  "INSULT": <float 0-1>,
  "PROFANITY": <float 0-1>,
  "THREAT": <float 0-1>,
  "flagged_words": ["exact", "substrings", "from", "input", "including", "romanized", "slurs"]
}`;
async function analyzeWithOpenAI(text) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        throw new Error("OPENAI_API_KEY is not configured. Add it to .env.local and restart the server.");
    }
    const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";
    const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
        apiKey
    });
    const response = await client.chat.completions.create({
        model,
        messages: [
            {
                role: "system",
                content: SYSTEM_PROMPT
            },
            {
                role: "user",
                content: text
            }
        ],
        response_format: {
            type: "json_object"
        },
        temperature: 0,
        max_tokens: 600
    });
    const content = response.choices[0].message.content;
    if (!content) throw new Error("Empty response from OpenAI");
    const parsed = JSON.parse(content);
    const scores = {};
    for (const attr of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PERSPECTIVE_ATTRIBUTES"]){
        const raw = parsed[attr];
        scores[attr] = typeof raw === "number" ? Math.min(1, Math.max(0, raw)) : 0;
    }
    const rawCbs = parsed["cyberbullying_score"];
    const cyberbullyingScore = typeof rawCbs === "number" ? Math.min(1, Math.max(0, rawCbs)) : scores["TOXICITY"] ?? 0;
    const rawFlagged = parsed["flagged_words"];
    const flaggedWords = Array.isArray(rawFlagged) ? rawFlagged.filter((w)=>typeof w === "string" && w.trim().length > 0) : [];
    const contextAnalysis = typeof parsed["context_analysis"] === "string" ? parsed["context_analysis"] : "";
    const rawLangs = parsed["detected_languages"];
    const detectedLanguages = Array.isArray(rawLangs) ? rawLangs.filter((l)=>typeof l === "string" && l.trim().length > 0) : [
        "English"
    ];
    return {
        scores,
        cyberbullyingScore,
        flaggedWords,
        contextAnalysis,
        detectedLanguages
    };
}
}),
"[project]/src/app/api/analyze/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/openai.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/index.ts [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Invalid JSON body"
        }, {
            status: 400
        });
    }
    const { text } = body;
    if (!text || typeof text !== "string") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "text field is required"
        }, {
            status: 400
        });
    }
    const trimmed = text.trim();
    if (trimmed.length < 2) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Text must be at least 2 characters long"
        }, {
            status: 400
        });
    }
    if (trimmed.length > 3000) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Text must not exceed 3000 characters"
        }, {
            status: 400
        });
    }
    try {
        const { scores, cyberbullyingScore, flaggedWords, contextAnalysis, detectedLanguages } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["analyzeWithOpenAI"])(trimmed);
        const attributeScores = {};
        for (const attr of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PERSPECTIVE_ATTRIBUTES"]){
            attributeScores[attr] = {
                summaryScore: {
                    value: scores[attr] ?? 0,
                    type: "PROBABILITY"
                }
            };
        }
        const result = {
            attributeScores,
            isBullying: cyberbullyingScore > 0.5,
            overallScore: scores["TOXICITY"] ?? 0,
            cyberbullyingScore,
            text: trimmed,
            flaggedWords,
            contextAnalysis,
            detectedLanguages
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result);
    } catch (error) {
        const message = error instanceof Error ? error.message : "Analysis failed";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message
        }, {
            status: 502
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__36142979._.js.map
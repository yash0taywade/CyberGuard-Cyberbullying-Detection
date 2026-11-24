import { NextRequest, NextResponse } from "next/server";
import { analyzeWithOpenAI } from "@/lib/openai";
import { AnalysisResult, PERSPECTIVE_ATTRIBUTES } from "@/types";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const { text } = body as { text?: string };

  if (!text || typeof text !== "string") {
    return NextResponse.json({ message: "text field is required" }, { status: 400 });
  }

  const trimmed = text.trim();
  if (trimmed.length < 2) {
    return NextResponse.json(
      { message: "Text must be at least 2 characters long" },
      { status: 400 }
    );
  }
  if (trimmed.length > 3000) {
    return NextResponse.json(
      { message: "Text must not exceed 3000 characters" },
      { status: 400 }
    );
  }

  try {
    const { scores, cyberbullyingScore, flaggedWords, contextAnalysis, detectedLanguages } =
      await analyzeWithOpenAI(trimmed);

    const attributeScores: AnalysisResult["attributeScores"] = {};
    for (const attr of PERSPECTIVE_ATTRIBUTES) {
      attributeScores[attr] = {
        summaryScore: { value: scores[attr] ?? 0, type: "PROBABILITY" },
      };
    }

    const result: AnalysisResult = {
      attributeScores,
      isBullying: cyberbullyingScore > 0.5,
      overallScore: scores["TOXICITY"] ?? 0,
      cyberbullyingScore,
      text: trimmed,
      flaggedWords,
      contextAnalysis,
      detectedLanguages,
    };

    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Analysis failed";
    return NextResponse.json({ message }, { status: 502 });
  }
}

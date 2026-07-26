import { NextResponse } from "next/server";
import { generateGuide } from "@/lib/gemini";

export async function POST(request: Request) {
  try {
    const { place } = await request.json();

    const guide = await generateGuide(place);

    return NextResponse.json({
      guide,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "ガイドの生成に失敗しました",
      },
      {
        status: 500,
      }
    );
  }
}
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";
import { defaultMenu } from "@/lib/menu";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export async function GET() {
  try {
    const menu = await redis.get("menu");
    return NextResponse.json(menu ?? defaultMenu);
  } catch {
    return NextResponse.json(defaultMenu);
  }
}

export async function POST(req: Request) {
  const { password, menu } = await req.json();
  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  await redis.set("menu", menu);
  return NextResponse.json({ ok: true });
}

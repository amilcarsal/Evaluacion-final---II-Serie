import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const data = await request.json();
  const cliente = await prisma.cliente.create({ data });
  return NextResponse.json(cliente);
}

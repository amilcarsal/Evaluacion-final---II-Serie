import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const listado = await prisma.informacionGeneral.findMany({
    include: { cliente: true },
    orderBy: [
      { fechaCreacion: "asc" },
      { cliente: { apellidos: "asc" } },
    ],
  });
  return NextResponse.json(listado);
}

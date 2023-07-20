import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { NextResponse } from 'next/server'

export async function GET() {
  const movies = await prisma.movies.findMany()
  return NextResponse.json({ movies })
}

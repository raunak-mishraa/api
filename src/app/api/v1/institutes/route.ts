import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const url = new URL(request.url);

  const state = url.searchParams.get('state');
  const city = url.searchParams.get('city');

  const where: any = {};
  if (state) where.state = state;
  if (city) where.city = city;

  try {
    const institutes = await prisma.institute.findMany({
      where: Object.keys(where).length > 0 ? where : undefined,
    });

    return NextResponse.json(institutes);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { error: 'Error fetching data from the database' },
      { status: 500 }
    );
  }
}

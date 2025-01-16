import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  try {
    const studentClubs = await prisma.student_club.findMany();
    return NextResponse.json({
      success: true,
      message: "Student clubs fetched successfully",
      data: studentClubs,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Internal server error",
        success: false,
      },
      { status: 500 }
    );
  }
}

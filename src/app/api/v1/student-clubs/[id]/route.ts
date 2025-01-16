import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const { id } = await params;
    const studentClub = await prisma.student_club.findUnique({
      where: {
        club_id: id,
      },
    });

    if (!studentClub) {
      return NextResponse.json(
        {
          success: false,
          message: "Student club not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Student club fetched successfully",
      data: studentClub,
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

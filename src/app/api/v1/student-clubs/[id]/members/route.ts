import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { id: string } }): Promise<NextResponse> {
  try {
    const studentClubMembers = await prisma.student_club.findMany({
      where: {
        club_id: params.id,
      },
    });
    return NextResponse.json({
      success: true,
      message: "Student club members fetched successfully",
      data: studentClubMembers,
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
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { id: string } }): Promise<NextResponse> {
  try {
    // const faculty = await prisma.faculty.findMany({
    //   where: {
    //     department_id: params.id,
    //   },
    // });
    return NextResponse.json({
      success: true,
      message: "Faculty fetched successfully",
    //   data: faculty,
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
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const searchParams = req.nextUrl.searchParams;
    const instituteId = searchParams.get("instituteId");

    if (!instituteId) {
      return NextResponse.json({
        success: false,
        message: "Institute id is required",
      });
    }
    const departments = await prisma.department.findMany({
      where: {
        institute_id: instituteId,
      },
    });

    if (!departments.length) {
      return NextResponse.json({
        success: false,
        message: "Departments not found",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Departments fetched successfully",
      data: departments,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error", success: false },
      { status: 500 }
    );
  }
}

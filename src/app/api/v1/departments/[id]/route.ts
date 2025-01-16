import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const { id } = await params;
  try {
    if (!id) {
      return NextResponse.json({
        success: false,
        message: "Department id is required",
      });
    }
    const departments = await prisma.department.findMany({
      where: {
        department_id: id,
      },
    });

    if (!departments.length) {
      return NextResponse.json({
        success: false,
        message: "Department not found",
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
      {
        message: "Internal server error",
        success: false,
      },
      { status: 500 }
    );
  }
}

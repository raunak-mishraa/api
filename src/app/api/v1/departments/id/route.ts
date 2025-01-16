import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET({
  params,
}: {
  params: { id: string };
}): Promise<NextResponse> {
  try {
    const { id } = params;
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

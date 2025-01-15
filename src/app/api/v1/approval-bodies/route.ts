import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const searchParams = req.nextUrl.searchParams;
    const instituteId = searchParams.get("instituteId");
    if (!instituteId) {
      return NextResponse.json(
        {
          success: false,
          message: "instituteId is required",
        },
        { status: 400 }
      );
    }
    
    const approvalBodies = await prisma.approval_body.findMany({
        where: {
            institute_id: instituteId,
        },
    });

    return NextResponse.json({
        success: true,
        message: "Approval bodies fetched successfully",
        data: approvalBodies,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}

import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  {
  params,
}: {
  params: { id: string };
}): Promise<NextResponse> {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Approval body id is required",
        },
        { status: 400 }
      );
    }

    const approvalBody = await prisma.approval_body.findUnique({
      where: {
        approval_body_id: id,
      },
    });

    if (!approvalBody) {
      return NextResponse.json({
          success: false,
          message: "Approval bodies not found",
      });
  }

    return NextResponse.json({
      success: true,
      message: "Approval body fetched successfully",
      data: approvalBody,
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

import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
    try {
        const { id } = await params;
        const faculty =  await prisma.faculty.findMany({
            where: {
                department_id: id
            }
        });

        if(!faculty.length) {
            return NextResponse.json({
                success: false,
                message: "Faculty not found"
            })
        }
        
        return NextResponse.json({
            success: true,
            message: "Faculties fetched successfully",
            data: faculty
        })

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

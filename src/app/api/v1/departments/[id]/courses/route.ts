import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
    try {
        const { id } = await params;
        const course =  await prisma.course.findMany({
            where: {
                department_id: id
            }
        });

        if(!course.length) {
            return NextResponse.json({
                success: false,
                message: "Course not found"
            })
        }
        
        return NextResponse.json({
            success: true,
            message: "Courses fetched successfully",
            data: course
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

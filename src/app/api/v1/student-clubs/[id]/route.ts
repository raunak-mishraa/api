import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET({ params }:{ params:{ id: string }}): Promise<NextResponse> {
    try {
        const { id } = params;
        const studentClub = await prisma.student_club.findMany({
            where: {
                institute_id: id,
            },
        });
        return NextResponse.json({
            success: true,
            message: "Student clubs fetched successfully",
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
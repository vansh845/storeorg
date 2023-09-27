import { prisma } from "../../../../prisma";
import { NextResponse } from "next/server";
import { UserType } from "@/types";

export async function POST(request:Request){
    const body = await request.json() as UserType;
    console.log(body)
    try {
        await prisma.user.create({
            data:{
                name: body.name,
                email: body.email
            }
        })
        return NextResponse.json({message:'success',})
    } 
    catch (error) {
        return NextResponse.json({success:false,message:error})
    }

}

export async function GET(req:Request){
    return NextResponse.json({name:'vansh'})
}
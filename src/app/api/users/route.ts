import { prisma } from "../../../../prisma";
import { NextResponse } from "next/server";
import { UserType } from "@/types";
import { getServerSession } from 'next-auth'
import { authOptions } from "@/lib/auth";

export async function POST(request:Request){

    const session = await getServerSession(authOptions);

    if(!session?.user){
        console.log('unauthorized')
        return NextResponse.json({message:"Unauthorized access", success:false})
    }

    const body = await request.json() as UserType;
    try {
        const data = await prisma.user.create({
            data:{
                name: body.name,
                email: body.email,

            }
        })
        return NextResponse.json({"message":'success',"data":data})
    } 
    catch (error) {
        return NextResponse.json({success:false,message:error})
    }

}

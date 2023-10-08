import { getServerSession } from "next-auth"
import { prisma } from "../../../../prisma"
import { CartItemsType } from "@/types"
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";

export async function POST(request:Request){

    const session = await getServerSession(authOptions);
    if(!session){
        return NextResponse.json({message:'Unauthorized',success:false})
    }

    const body = await request.json() as CartItemsType
    const res = await prisma.cart.create({
        data:{
            title: body.title,
            useremail: session.user?.email!,
            price: body.price

        }
    })
    return NextResponse.json({message:'added to cart',success:true})
}
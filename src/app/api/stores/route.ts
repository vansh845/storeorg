import { NextResponse } from "next/server"
import { prisma } from "../../../../prisma"

export async function POST(request:Request){
    const body = await request.json()

    try {
        const res = await prisma.stores.create({
            data:{
                name:body.Name,
                coverImage:body.Description
            }
        })
        return NextResponse.json({message:'store created successfully', success:true})
        
    } catch (error) {
        return NextResponse.json({message:'error creating store'})
    }


}
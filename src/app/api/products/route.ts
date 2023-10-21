import { NextResponse } from "next/server"
import { prisma } from "../../../../prisma"
import { getServerSession } from "next-auth"

export async function POST(req:Request){

    const session = await getServerSession()
    if(!session){
        return NextResponse.json({message:'Unauthorized user',success:false})
    }

    const body = await req.json()
    // console.log(body)
    try {
        const res = await prisma.products.create({
            data:{
                name:body.name,
                storeId:body.storeid,
                price:body.price,
                images:body.images
            }
        })
        return NextResponse.json({message:'product added successfully',success:true})
    } catch (error) {
        return NextResponse.json({message:'error creating product',error:error})
    }
}
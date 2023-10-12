import { NextResponse } from "next/server"
import { prisma } from "../../../../prisma"


export async function POST(req:Request){
    const body = await req.json()
    console.log(body)
    try {
        const res = await prisma.products.create({
            data:{
                name:body.name,
                storeId:body.storeid,
                price:body.price
            }
        })
        return NextResponse.json({message:'product added successfully',success:true})
    } catch (error) {
        return NextResponse.json({message:'error creating product',error:error})
    }
}
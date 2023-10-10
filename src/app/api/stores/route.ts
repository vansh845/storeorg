import { NextResponse } from "next/server"
import { prisma } from "../../../../prisma"
import { getServerSession } from "next-auth"

type reqType = {
    Name: string,
    Description: string
}

export async function POST(request:Request){

    const session = await getServerSession()

    if(!session){
        return NextResponse.json({message: 'Unauthorized access' , success: false})
    }

    const body = await request.json() as reqType

    try {
        const res = await prisma.stores.create({
            data:{
                name:body.Name,
                coverImage:body.Description,
                useremail : session?.user?.email!
                
            }
        })
        return NextResponse.json({message:'store created successfully', success:true})
        
    } catch (error) {
        return NextResponse.json({message:'error creating store', error: error})
    }


}
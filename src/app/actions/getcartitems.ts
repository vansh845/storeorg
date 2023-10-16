import { prisma } from "../../../prisma"
import { CartItemsType } from "@/types";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";


export async function getCartItems():Promise<CartItemsType[]>{
    
    const session = await getServerSession(authOptions)

    if(!session){
        return new Promise((res)=>res([]))
    }

    const data = await prisma.cart.findMany({
        where:{
            useremail:session?.user?.email!
        }
    })

    // console.log(data)

    return new Promise<CartItemsType[]>((res,rej)=>res(data))

}

export async function cartLength():Promise<number>{
    const session = await getServerSession(authOptions)

    const data = await prisma.cart.findMany({
        where:{
            useremail:session?.user?.email!
        }
    })

    return new Promise((resolve)=>resolve(data.length))
}

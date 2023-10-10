import { prisma } from "../../../../prisma"

export default async function Products(){

    const data = await prisma.stores.findMany({
        include:{
            products:true
        }
    })
    console.log(data)

    return (
        <p>hi</p>
    )
}
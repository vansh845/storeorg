import { prisma } from "../../../../../../prisma"
import ProductCard from "@/components/product-card"

export default async function StoreId({params}:{params: {storeId:number}}){

    const data = await prisma.stores.findFirst({
        where:{
            id:parseInt(`${params.storeId}`)
        },
        include:{
            products:true
        }
    })

    if(!data){
        return (
            <div className="min-h-screen">
                page not found
            </div>
        )
    }

    // console.log(data)



    return (
        <div className="min-h-screen">
            {data.products.length === 0 ? 'no products found':data.products.map(x=>x.name)}
        </div>
    )
}
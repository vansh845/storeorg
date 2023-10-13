import {NewProductFrom} from "@/components/newProductForm"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
export default async function NewProduct({params}:{params:{storeId:number}}) {

    const session = await getServerSession()
    if(!session){
        redirect('/signin')
    }

    return (
        <div className="space-y-4 p-5 h-screen flex flex-col">
            <div>
                <h1 className="font-bold tracking-tighter lg:leading-[1.1] text-2xl md:text-3xl">
                    New Product
                </h1>
            </div>
            <div className="flex justify-center items-center h-full">
                <NewProductFrom storeId={params.storeId}/>
            </div>
        </div>
    )
}
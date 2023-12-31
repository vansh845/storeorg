import { PlusIcon } from "lucide-react"
import { prisma } from "../../../../../../../prisma"
import { getServerSession } from "next-auth"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { notFound } from "next/navigation"

export default async function StoreId({ params }: { params: { storeId: number } }) {

    const session = await getServerSession()

    const data = await prisma.stores.findFirst({
        where:{
            id : parseInt(`${params.storeId}`),
            useremail:session?.user?.email!
        },
        include:{
            products:true
        }
    })

    if (!data) {
        notFound()
    }


    return (
        <div className="min-h-screen p-4">
            <div className="flex justify-between w-full">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Products
                </h2>
                <Link className={cn(buttonVariants({variant:'default',size:'sm'}))} href={`/dashboard/stores/${params.storeId}/products/new`}><PlusIcon className="w-4"/>Add Product</Link>
            </div>
            <div className="flex flex-col">
                {data.products.length === 0 ? 'no products found' : data.products.map(x => <p key=''>{x.name}</p>)}
            </div>
        </div>
    )
}
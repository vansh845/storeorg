'use client'
import { NewProductFrom } from "@/components/newProductForm"
import { getServerSession } from "next-auth"
import { useSession } from "next-auth/react"
import { redirect, useRouter } from "next/navigation"
export default function NewProduct({ params }: { params: { storeId: number } }) {
    const router = useRouter()
    const session = useSession()
    if (!session) {
        router.push('/signin')
    }

    return (
        <div className="space-y-4 p-5 h-screen flex flex-col">
            <div>
                <h1 className="font-bold tracking-tighter lg:leading-[1.1] text-2xl md:text-3xl">
                    New Product
                </h1>
            </div>
            <div className="flex justify-center items-center h-full">
                <NewProductFrom storeId={params.storeId} />
            </div>
        </div>
    )
}
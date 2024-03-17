'use client'
import { PlusIcon } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { notFound, redirect } from "next/navigation"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { StoreType } from "@/types"

export default function StoreId({ params }: { params: { storeId: number } }) {

    const session = useSession()

    if (!session) {
        redirect('/signin')
    }

    const [products, setProducts] = useState<StoreType[]>()

    // if (!products) {
    //     notFound()
    // }

    useEffect(() => {
        console.log(process.env.FIREBASE_API_KEY!)
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/products?storeId=${params.storeId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setProducts(json);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle the error state or display a message to the user
            }
        };

        fetchData();
    }, [params.storeId]);


    return (
        <div className="min-h-screen p-4">
            <div className="flex justify-between w-full">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Products
                </h2>
                <Link className={cn(buttonVariants({ variant: 'default', size: 'sm' }))} href={`/dashboard/stores/${params.storeId}/products/new`}><PlusIcon className="w-4" />Add Product</Link>
            </div>
            <div className="flex flex-col">
                {products?.length === 0 ? 'no products found' : products?.map(x => <p key=''>{x.name}</p>)}
            </div>
        </div>
    )
}
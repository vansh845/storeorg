'use client'
import ProductCard from "@/components/product-card"
import { prisma } from "../../../../prisma"
import { useEffect, useState } from "react"
import { ProductType } from "@/types"
import LoadingDots from "@/components/loadingdots"

export default function Products({ searchParams }: { searchParams: { storeid: string } }) {
    const [isLoading, setIsLoading] = useState(true);
    let query = {}
    if (searchParams.storeid) {
        query = { where: { storeId: parseInt(searchParams.storeid) } }
    }

    const [data, setData] = useState<ProductType[] | null>([])
    async function fetchData() {
        const res = await fetch(`/api/products?storeId=${searchParams.storeid || '0'}`)
        const json = await res.json()
        setData(json)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])


    if (isLoading) {
        return <LoadingDots />
    }

    if (data?.length === 0) {
        return <div>No products found</div>
    }

    return (
        <div className="min-h-screen p-5 space-y-5">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Products
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data?.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    )
}
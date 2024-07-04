'use client'
import Image from "next/image"
import { AlertTriangle } from "lucide-react"
import { useEffect, useState } from "react"
import { ProductType } from "@/types"
// import { notFound } from "next/navigation"

export default function Product({ params }: { params: { productId: number } }) {
    const [data, setData] = useState<ProductType>()
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/product?productId=${params.productId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.log(error);
            } finally {
                // setIsLoading(false);
            }
        };

        fetchData();
    }, [params.productId]);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!data) {
        return (
            <div className="flex flex-col text-center min-h-screen justify-center items-center">
                <AlertTriangle />
                <span className="text-muted-foreground">product not found</span>
            </div>
        )
        // notFound()
    }

    return (
        <div className="min-h-screen p-20">
            <div className="p-10">

                <Image src={data.images[0]} className="w-full h-56 object-contain" alt="main" width={300} height={300} ></Image>
            </div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                {data.name}
            </h1>
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                {data.price}
            </h2>
        </div>
    )
}
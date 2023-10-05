import Image from "next/image"
import { prisma } from "../../../../../prisma"

export default async function Product({ params }: { params: { productId: number } }) {

    const data = await prisma.products.findFirst({
        where: {
            id: Number(params.productId)
        }
    })

    if (!data) {
        return (
            <p>product not found</p>
        )
    }

    return (
        <div className="min-h-screen p-8">
            <Image src={data.images[0]} alt="main" width={300} height={300} ></Image>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                {data.name}
            </h1>
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                {data.price}
            </h2>
        </div>
    )
}
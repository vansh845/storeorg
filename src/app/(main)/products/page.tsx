import ProductCard from "@/components/product-card"
import { prisma } from "../../../../prisma"

export default async function Products() {

    const data = await prisma.products.findMany()
    const products = data.map(product => <ProductCard product={product} />)

    return (
        <div className="min-h-screen p-5 space-y-5">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Products
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products}
            </div>
        </div>
    )
}
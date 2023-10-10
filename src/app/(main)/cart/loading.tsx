import CartSkeleton from "@/components/cart-skeleton"

export default function Loading(){
    return (
        <div className="p-8 md:p-16 min-h-screen">
            <CartSkeleton/>
            <CartSkeleton/>
            <CartSkeleton/>

        </div>
    )
}
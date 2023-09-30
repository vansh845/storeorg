'use client'

import { Button } from "./ui/button"
import { useMutation } from "@tanstack/react-query"
import { CartItemsType } from "@/types"
import { toast } from "./ui/use-toast"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

const AddToCart = ({ link, title, price }: { link: string, title: string, price: number }) => {

    const mutation = useMutation({
        mutationFn: async function (): Promise<CartItemsType> {
            const res = await fetch('/api/cart', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    img: link,
                    price: price
                })
            })
            return res.json()
        },
        onSuccess: () => {
            toast({
                description: "Added to cart."
            })
            router.refresh()
        }

    });

    const router = useRouter()

    const addtoCart = () => {
        mutation.mutate()
    }

    return (
        <>
            {mutation.isLoading?<Button disabled><Loader2 className="animate-spin"/></Button>:<Button onClick={addtoCart} className="font-normal">Add to cart</Button>}
        </>

    )
}

export default AddToCart


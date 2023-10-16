'use client'

import { Button } from "./ui/button"
import { useMutation } from "@tanstack/react-query"
import { CartItemsType } from "@/types"
import { toast } from "./ui/use-toast"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import {useSession} from "next-auth/react"

const AddToCart = ({ link, title, price }: { link: string, title: string, price: number }) => {

    const {data : session} = useSession()

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
                description: `${session?"Added to cart!":"Signin first!"}`,
                variant:'destructive'
            })
            router.refresh()
        }

    });

    const router = useRouter()

    const addtoCart = () => {
        mutation.mutate()
    }

    return (
        <div className="pb-2">
            {mutation.isLoading?<Button disabled><Loader2 className="animate-spin"/></Button>:<Button onClick={addtoCart} size={'sm'} className="font-medium text-xs">Add to cart</Button>}
        </div>

    )
}

export default AddToCart


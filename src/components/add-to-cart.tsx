'use client'

import Image from "next/image"
import { Button } from "./ui/button"
import { images } from "@/config/site"
import useCartState from "@/hooks/store"

const AddToCart = ()=>{
    const increaseCount = useCartState((state)=>state.increaseCartCount)
    return (
        <Button onClick={increaseCount} className="font-normal">Add to cart</Button>
    )
}

export default AddToCart


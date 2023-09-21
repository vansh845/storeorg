'use client'

import { ShoppingBag } from 'lucide-react'
import { Button } from './ui/button'
import useCartState from '@/hooks/store'

export default function CartButton(){
    const cartCount = useCartState((state)=>state.cartCount)

    return (
        <button className='flex'>
            <ShoppingBag className='w-5' />
            {cartCount?<div className='bg-black text-white rounded-3xl w-4 font-extralight text-xs'>{cartCount}</div>:''}
        </button>

    )
}
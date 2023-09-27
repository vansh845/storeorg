'use client'

import { ShoppingBag } from 'lucide-react'
import useCartState from '@/hooks/store'
import { useSession } from 'next-auth/react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

export default function CartButton(){
    const cartCount = useCartState((state)=>state.cartCount)
    const {data} =  useSession();
    const page = data?.user ? '/cart': '/signin'
    const router = useRouter();

    const handleClick = ()=>{
        router.push(page)
    }

    return (
        <Button variant={'ghost'} className="flex" onClick={handleClick}>
            <ShoppingBag className='w-5' />
            {cartCount?<div className='flex items-center justify-center bg-black text-white rounded-3xl w-4 h-4 font-extralight text-xs'>{cartCount}</div>:''}
        </Button>

    )
}
import { ShoppingBag } from 'lucide-react'
import { buttonVariants } from './ui/button'
import { getCartItems } from '@/actions/getcartitems'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

export default async function CartButton() {
    const res = await getCartItems();
    const data = await getServerSession()
    const page = data?.user ? '/cart' : '/signin'
    const cartCount = res.length

    return (
        <div className='relative'>
            <Link href={page} className={buttonVariants({ variant: 'ghost' })}>
                <ShoppingBag className='w-5' />
            </Link>
            {cartCount?<div className='flex absolute top-0 right-0 items-center justify-center bg-black text-white rounded-3xl w-4 h-4 font-extralight text-xs'>{cartCount}</div>:''}
        </div>

    )
}
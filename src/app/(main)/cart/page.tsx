'use client'

import { getCartItems } from '../../../actions/getcartitems'
import { ShoppingCart } from 'lucide-react'
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation';

export default function Cart() {

    const {data} = useSession();
    const router = useRouter();
    

    if (!data?.user) {
        router.push('/signin')
    }
    else {
        const cartItems = getCartItems()
        if (cartItems.length === 0) {
            return (
                <div className='flex flex-col items-center justify-center h-screen text-muted-foreground'>
                    <ShoppingCart className='w-20 h-20' />
                    <br />
                    <h3>Your cart is empty</h3>
                </div>
            )
        }

        return (
            <div>

            </div>
        )
    }


}
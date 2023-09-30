import { getCartItems } from '../../../actions/getcartitems'
import { ShoppingCart } from 'lucide-react'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import CartCard from '@/components/cartitemscard';


export default async function Cart() {

    const session = await getServerSession()


    if (!session?.user) {
        redirect('/signin')
    }

    const cartItems = await getCartItems()
    let sum = 0;
    for(let i = 0 ; i < cartItems.length ; i++){
        sum = sum + cartItems[i].price
    }
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
        <div className='min-h-screen'>
            {cartItems.map(x => <CartCard key='' title={x.title} price={x.price} />)}
            <div className='p-16 right-0'>
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Summary
                </h2>
                {`₹${sum}`}
            </div>
        </div>
    )
}


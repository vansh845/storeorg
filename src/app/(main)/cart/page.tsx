// import { getCartItems } from '../../../actions/getcartitems'
import { ShoppingCart } from 'lucide-react'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import CartCard from '@/components/cartitemscard';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default async function Cart() {

    const session = await getServerSession()


    if (!session?.user) {
        redirect('/signin')
    }

    const cartItems = [
        {
          cartid: 1,
          title: 'product3',
          price: 6242,
          useremail: 'koulvansh845@gmail.com'
        },
        {
          cartid: 2,
          title: 'p2',
          price: 3922,
          useremail: 'koulvansh845@gmail.com'
        }
      ]
    let sum = 0;
    for (let i = 0; i < cartItems.length; i++) {
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
        <div className='min-h-screen flex flex-col justify-between'>
            <div>
                {cartItems.map(x => <CartCard key='' title={x.title} price={x.price} />)}
            </div>
            <div className='p-16 right-0 flex flex-col space-y-3'>
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Summary
                </h2>
                {`₹${sum}`}
                <Link href={'https://buy.stripe.com/test_8wM2at72y82m688144'} className={`w-min ${buttonVariants({variant:'default'})}`}>Checkout</Link>
            </div>
        </div>
    )
}
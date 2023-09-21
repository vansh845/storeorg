import CartButton from './shopping-cart-button'
import { AlignJustify } from 'lucide-react'
export default function Navbar() {
    return (
        <nav className="sticky bg-background z-50 top-0 py-4 px-8 lg:px-16 flex justify-between border-b items-center">
            <h4 className="scroll-m-20 text-xl font-bold tracking-tight">
                StoreOrg
            </h4>
            <div className='items-center flex justify-center space-x-4'>
                <CartButton/>
                <button ><AlignJustify/></button>
                
            </div>

        </nav>
    )
}

import AddToCart from '@/components/add-to-cart'
import Image from 'next/image'
import Link from 'next/link'
import { Products } from '@prisma/client'

export default function ProductCard({product}:{product:Products}) {

    return (
        <div key={product.id} className='flex flex-col space-y-3 justify-center border items-center rounded-lg overflow-hidden'>
            <Link href={`/product/${product.id}`}>
            <Image className='w-fit object-cover' src={product.images[0]} alt='main-cover' width={70} height={70} unoptimized />
            </Link>
            <AddToCart link={product.images[0]} title={product.name} price={product.price}/>
        </div> 
    )
}
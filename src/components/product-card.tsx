import AddToCart from '@/components/add-to-cart'
import Image from 'next/image'


export default function ProductCard({link}:{link:string}){
    return (
        <div key={link} className='flex flex-col space-y-2 justify-center border-b items-center'>
                <Image className='rounded-lg w-fit object-cover' src={link} alt='main-cover' width={70} height={70} unoptimized />
                <AddToCart/>
              </div>
    )
}
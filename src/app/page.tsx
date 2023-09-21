import Image from 'next/image'
import Link from 'next/link'
import { links, images } from '@/config/site'
import { badgeVariants } from "@/components/ui/badge"
import { Button } from '@/components/ui/button'
import AddToCart from '@/components/add-to-cart'

export default function Home() {
  return (
    <main className='md:px-16'>
      <section className="flex flex-col justify-center items-center h-screen">
        <Link className={`${badgeVariants({ variant: 'secondary' })} font-medium`} href={links.repo}>{"view on github >"}</Link>
        <h1 className="p-5 text-center scroll-m-20 text-3xl font-normal lg:font-medium leading-tight tracking-tighter md:text-4xl lg:text-6xl">
          E-commerce store made using nextjs 13
        </h1>
        <h3 className='font-extralight mt-4'>
          buy products from all over the world
        </h3>
        <div className='flex space-x-2 mt-4'>
          <Button variant={'default'}>Buy</Button>
          <Button variant={'outline'}>Sign Up</Button>
        </div>

      </section>
      <section className='p-4 md:px-8 '>
        <h2 className='font-bold text-2xl tracking-tighter leading-tight'>
          Featured
        </h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {images
          .featured
            .map(x => 
              <div key={x} className='flex flex-col space-y-2 justify-center border-b items-center'>
                <Image className='rounded-lg w-fit object-cover' src={x} alt='main-cover' width={70} height={70} unoptimized />
                <AddToCart/>
              </div>)}
          
        </div>
      </section>
    </main>
  )
}

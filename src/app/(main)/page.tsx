import Link from 'next/link'
import { links, images } from '@/config/site'
import { badgeVariants } from "@/components/ui/badge"
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/product-card'
import { getServerSession } from 'next-auth'

export default async function Home() {

  const session = await getServerSession()

  return (
    <main className='md:px-16'>
      <section className="flex flex-col justify-center items-center h-screen">
        <Link className={`${badgeVariants({ variant:"secondary" })} rounded-2xl font-normal p-1.5`} href={links.repo}>{"view on github >"}</Link>
        <h1 className="p-5 text-center scroll-m-20 text-3xl font-normal lg:font-medium leading-tight tracking-tighter md:text-4xl lg:text-6xl">
          E-commerce store made using nextjs 13
        </h1>
        <h3 className='font-extralight mt-4'>
          buy products from all over the world
        </h3>
        <div className='flex space-x-2 mt-4'>
          <Button variant={'default'}>Buy</Button>
          {session?.user?'':<Button variant={'outline'}>Sign Up</Button>}
        </div>

      </section>
      <section className='p-4 md:px-8 '>
        <h2 className='font-bold text-2xl tracking-tighter leading-tight'>
          Featured
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {images.featured.map(x => 
            <ProductCard key='' link={x.img} title={x.title} price={x.price}/> 
          )}
          
        </div>
      </section>
    </main>
  )
}

import Link from 'next/link'
import { links, images } from '@/config/site'
import { badgeVariants } from "@/components/ui/badge"
import { Button, buttonVariants } from '@/components/ui/button'
import ProductCard from '@/components/product-card'
import StoreCard from '@/components/store-card'
import { getServerSession } from 'next-auth'
import { prisma } from '../../../prisma'
import { cn } from '@/lib/utils'

export default async function Home() {

	const session = await getServerSession()

	const someProducts = await prisma.products.findMany({
		take: 4
	})

	const someStores = await prisma.stores.findMany({
		take: 4
	})

	return (
		<main className='md:px-8 px-4 justify-center-center space-y-4'>
			<section className="flex flex-col justify-center items-center h-screen">
				<Link className={`${badgeVariants({ variant: "secondary" })} rounded-2xl font-normal p-1.5`} href={links.repo}>{"view on github >"}</Link>
				<h1 className="p-5 text-center scroll-m-20 text-3xl font-normal lg:font-medium leading-tight tracking-tighter md:text-4xl lg:text-6xl">
					Ecommerce store made using Nextjs 13
				</h1>
				<h3 className='font-extralight mt-4'>
					buy products from all over the world
				</h3>
				<div className='flex space-x-2 mt-4'>
					<Button variant={'default'} size='sm'>Buy</Button>
					{session?.user ? '' : <Button variant={'outline'}>Sign Up</Button>}
				</div>

			</section>
			<section className=''>
				<h2 className='font-bold text-2xl tracking-tighter leading-tight'>
					{someProducts.length != 0 ? `Featured` : ''}
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
					{someProducts.length != 0 ? someProducts.map(product => <ProductCard key={product.id} product={product} />) : ''}
				</div>
			</section>
			<div className='flex justify-center'>
				<Link href='/products' className={cn(buttonVariants({ variant: 'default' }))}>View all products</Link>
			</div>

			<section className=''>
				<h2 className='font-bold text-2xl tracking-tighter leading-tight'>
					{someProducts.length != 0 ? `Stores` : ''}
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
					{/* {someStores.map(store => <StoreCard key={store.id} storeid={store.id} title={store.name} />)} */}
					{someStores.length != 0 ? someStores.map(store => <StoreCard key={store.id} storeid={store.id} title={store.name} />) : ''}

				</div>
			</section>
		</main>
	)
}

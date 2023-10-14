import AddToCart from '@/components/add-to-cart'
import Image from 'next/image'
import Link from 'next/link'
import { Products } from '@prisma/client'
import { ImageOff } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { AspectRatio } from './ui/aspect-ratio'


export default function ProductCard({ product }: { product: Products }) {

    return (
        <Card className='h-full overflow-hidden'>
            <CardHeader className='p-0 '>

                <Link className='overflow-hidden' href={`/product/${product.id}`}>
                    <AspectRatio ratio={4 / 3}>
                        {product.images[0] ? <Image fill className='object-cover w-fit p-0' src={product.images[0] ? product.images[0] : '/images/product-placeholder.webp'} alt='main-cover' /> : 
                        <div
                            aria-label="Placeholder"
                            role="img"
                            aria-roledescription="placeholder"
                            className="flex h-full w-full items-center justify-center bg-secondary"
                        >
                            <ImageOff
                                className="h-9 w-9 text-muted-foreground flex grow"
                                aria-hidden="true"
                            />
                        </div>}
                    </AspectRatio>
                </Link>
            </CardHeader>
            <CardContent className='p-3'>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.price}</CardDescription>
            </CardContent>
            <CardFooter className='flex justify-center p-0'>
                <AddToCart link={product.images[0]} title={product.name} price={product.price} />
            </CardFooter>
        </Card>
    )
}
import { Suspense } from "react"
import { prisma } from "../../prisma"
import { AspectRatio } from "./ui/aspect-ratio"
import { Card, CardContent, CardTitle, CardHeader } from "./ui/card"
import Image from "next/image"
import Link from "next/link"
import { ImageOff } from "lucide-react"


export default function StoreCard({ storeid, title }: { storeid: number, title: string }) {

    return (
        <Card className="overflow-hidden">
            <CardHeader className="overflow-hidden">
                <Link className="overflow-hidden" href={{ pathname: '/products', query: { storeid: storeid } }}>
                    <AspectRatio ratio={4 / 3}>
                        <Suspense fallback={<ImageOff />}>
                            <Image src={`/images/storebackground/back2.jpg`} fill className="object-cover w-fit" alt="store-background" />
                        </Suspense>
                    </AspectRatio>
                </Link>
            </CardHeader>
            <CardContent>
                <CardTitle>{title}</CardTitle>
            </CardContent>
        </Card>
    )
}
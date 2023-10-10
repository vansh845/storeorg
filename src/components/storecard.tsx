import Image from "next/image"
import { ImageOff } from "lucide-react"
import Link from "next/link"

export default function StoreCard({id , coverImage, name }: {id: number,  coverImage: string, name: string }) {
    return (
        <Link href={`/dashboard/stores/${id}/products`} className="rounded-lg overflow-hidden border flex flex-col justify-center items-center">
            <div className="p-5 w-full border-b flex justify-center items-center">
                <ImageOff className="w-16 h-16" />
            </div>
            <div>{name}</div>
        </Link>
    )
}
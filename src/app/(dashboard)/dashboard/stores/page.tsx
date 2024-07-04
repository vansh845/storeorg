'use client'
import Link from "next/link";
import { PlusIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { prisma } from "../../../../../prisma";
import StoreCard from "@/components/storecard";
import { getServerSession } from "next-auth";
import { redirect, useRouter } from "next/navigation";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { StoreType } from "@/types";

export default function Stores() {

    const session = useSession()
    const router = useRouter()

    const [stores, setStores] = useState<StoreType[]>()
    if (!session.data) {
        router.push('/signin')
    }
    useEffect(() => {
        const res = fetch('/api/stores').then(x => x.json()).then(x => setStores(x))
    }, [])


    // console.log(data)
    if (!stores) {
        return (
            <div className="min-h-screen">
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Update username in settings.
                </p>
            </div>
        )
    }

    return (
        <div className="min-h-screen p-4">

            <div className="flex justify-between text-sm ">
                <h1 className="font-bold tracking-tighter lg:leading-[1.1] text-2xl md:text-3xl">
                    Stores
                </h1>
                <Link href='/dashboard/stores/new' className={cn(buttonVariants({ variant: 'default', size: 'sm' }))} >Create <PlusIcon /></Link>
            </div>
            {stores?.length === 0 ? 'You have no stores currently!' :
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {stores?.map(x => <StoreCard key={x.id} id={x.id} name={x.name} coverImage={x.coverImage} />)}
                </div>}
        </div>
    )
}
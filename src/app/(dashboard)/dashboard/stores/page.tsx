import Link from "next/link";
import { PlusIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { prisma } from "../../../../../prisma";

export default async function Stores() {

    const res = await prisma.stores.findMany();

    return (
        <div className="min-h-screen p-4">

        <div className="flex justify-between text-sm ">
            <h1 className="font-bold tracking-tighter lg:leading-[1.1] text-2xl md:text-3xl">
                Stores
            </h1>
            <Link href='/dashboard/stores/new' className={cn(buttonVariants({variant:'default',size:'sm'}))} >Create <PlusIcon /></Link>
        </div>
            {res.length === 0 ? 'You have no stores currently!' : res.map(x=><p>{x.name}</p>)}
        </div>
    )
}
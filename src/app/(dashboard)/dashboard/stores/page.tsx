import Link from "next/link";
import { PlusIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { prisma } from "../../../../../prisma";
import StoreCard from "@/components/storecard";
import { getServerSession } from "next-auth";
import { toast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";

export default async function Stores() {

    const session = await getServerSession()
     
    if(!session){
        redirect('/signin')
    }

    const data = await prisma.user.findFirst({
        where:{
            email : `${session?.user?.email === undefined ? '':session.user.email}`
        },
        include : {
            stores : true
        }
    })!
    // console.log(data)


    return (
        <div className="min-h-screen p-4">

            <div className="flex justify-between text-sm ">
                <h1 className="font-bold tracking-tighter lg:leading-[1.1] text-2xl md:text-3xl">
                    Stores
                </h1>
                <Link href='/dashboard/stores/new' className={cn(buttonVariants({ variant: 'default', size: 'sm' }))} >Create <PlusIcon /></Link>
            </div>
            {data?.stores.length === 0 ? 'You have no stores currently!' :
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {data?.stores.map(x => <StoreCard key={x.id} id={x.id} name={x.name} coverImage={x.coverImage} />)}
                </div>}
        </div>
    )
}
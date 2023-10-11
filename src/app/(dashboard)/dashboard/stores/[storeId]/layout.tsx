import { notFound } from "next/navigation"
import { prisma } from "../../../../../../prisma"
import { getServerSession } from "next-auth"

interface StoreLayoutProps extends React.PropsWithChildren {
    params : {
        storeId : string
    }
}

export default async function Layout({children,params}:StoreLayoutProps){

    const session = await getServerSession()

    const store = await prisma.stores.findFirst({
        where:{
            id: parseInt(params.storeId),
            useremail: session?.user?.email!
        }
    })

    if(!store){
        return notFound()
    }

    return (
        <div>
            {children}
        </div>
    )
}
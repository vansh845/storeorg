import { Skeleton } from "@/components/ui/skeleton";

export default function Loading(){
    return (
        <>
        <Skeleton className="w-80 h-80"/>
        <Skeleton className="h-4 w-10"/>
        <Skeleton className="h-4 w-6"/>

        </>
    )
}
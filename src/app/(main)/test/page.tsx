// import { Suspense } from "react"
// import { Loader2 } from "lucide-react";
// import CartSkeleton from "@/components/cart-skeleton";

// export default function Test(){
    
//     return (
//         <div className="flex flex-col justify-center items-center p-8">
//             <Suspense fallback={<Loader2 className="animate-spin"/>}>
//                 <First/>
//             </Suspense>
//             <Suspense fallback={<Loader2 className="animate-spin"/>}>
//                 <Second/>
//             </Suspense>
//             <Suspense fallback={<Loader2 className="animate-spin"/>}>
//                 <Third/>
//             </Suspense>

//             <CartSkeleton/>

//         </div>
//     )
// }

// export async function First(){
//     await new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve('hi')
//         }, 3000);
//     })
//     return (
//         <p>hi from 1</p>
//     )
// }

// async function Second(){
//     await new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve('hi')
//         }, 5000);
//     })
//     return (
//         <p>hi from 2</p>
//     )
// }

// async function Third(){
//     await new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve('hi')
//         }, 1000);
//     })  
//     return (
//         <p>hi from 3</p>
//     )
// }

import CartSkeleton from "@/components/cart-skeleton"

export default function Loading(){


    return (
        <div className="p-8">
            <CartSkeleton/>
            <CartSkeleton/>
            <CartSkeleton/>

        </div>
    )
}
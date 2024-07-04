'use client'
import Image from "next/image"
import { AlertTriangle } from "lucide-react"
import { useEffect, useState } from "react"
import { ProductType } from "@/types"
import LoadingDots from "@/components/loadingdots"
// import { notFound } from "next/navigation"

export default function Product({ params }: { params: { productId: number } }) {
    const [data, setData] = useState<ProductType>();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/product?productId=${params.productId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setData(json);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
        console.log(data)
    }, []);

    if (isLoading) {
        return (
            // <div className="flex flex-col text-center min-h-screen justify-center items-center">
            //     <div className="animate-spin w-10 h-10 border-t-2 border-b-2 border-primary rounded-full"></div>
            //     <span className="text-muted-foreground">Loading...</span>
            // </div>
            <LoadingDots />
        )
    }

    if (!data) {
        return (
            <div className="flex flex-col text-center min-h-screen justify-center items-center">
                <AlertTriangle />
                <span className="text-muted-foreground">product not found</span>
            </div>
        )
        // notFound()
    }

    return (
        // <div className="min-h-screen p-20">
        //     <div className="p-10">

        //         <Image src={data.images[0]} className="w-full h-56 object-contain" alt="main" width={300} height={300} ></Image>
        //     </div>
        //     <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        //         {data.name}
        //     </h1>
        //     <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        //         {data.price}
        //     </h2>
        // </div>
        <div className="flex flex-col">
            <section className="bg-muted py-12 md:py-20">
                <div className="container grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <Image src={data.images[0]} alt="Product Image" width={600} height={600} className="w-full rounded-lg" />
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold">{data.name}</h1>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc
                            nisl ultricies nunc, nec ultricies nunc nisl nec nunc.
                        </p>

                    </div>
                    <div className="text-4xl font-bold">₹{data.price}</div>
                </div>
            </section>
            <section className="py-12 md:py-20">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Product Details</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc
                                nisl ultricies nunc, nec ultricies nunc nisl nec nunc. Nullam auctor, nisl nec ultricies ultricies, nunc
                                nisl ultricies nunc, nec ultricies nunc nisl nec nunc.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Specifications</h2>
                            <ul className="space-y-2">
                                <li>
                                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                                    Feature 1
                                </li>
                                <li>
                                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                                    Feature 2
                                </li>
                                <li>
                                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                                    Feature 3
                                </li>
                                <li>
                                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                                    Feature 4
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-muted py-12 md:py-20">
                <div className="container">
                    <h2 className="text-2xl font-bold mb-8">Reviews</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex items-center gap-0.5">
                                    <StarIcon className="w-5 h-5 fill-primary" />
                                    <StarIcon className="w-5 h-5 fill-primary" />
                                    <StarIcon className="w-5 h-5 fill-primary" />
                                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                </div>
                                <span className="text-lg font-medium">4.3</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n euismod, nisl nec ultricies ultricies,
                                nunc nisl ultricies nunc,\n nec ultricies nunc nisl nec nunc.
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                                <img src="/placeholder.svg" alt="Reviewer Avatar" width={40} height={40} className="rounded-full" />
                                <span className="text-sm font-medium">John Doe</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex items-center gap-0.5">
                                    <StarIcon className="w-5 h-5 fill-primary" />
                                    <StarIcon className="w-5 h-5 fill-primary" />
                                    <StarIcon className="w-5 h-5 fill-primary" />
                                    <StarIcon className="w-5 h-5 fill-primary" />
                                    <StarIcon className="w-5 h-5 fill-primary" />
                                </div>
                                <span className="text-lg font-medium">5.0</span>
                            </div>
                            <p>
                                Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies\n nunc, nec ultricies nunc nisl nec
                                nunc. Nullam auctor, nisl nec\n ultricies ultricies, nunc nisl ultricies nunc, nec ultricies\n nunc nisl
                                nec nunc.
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                                <img src="/placeholder.svg" alt="Reviewer Avatar" width={40} height={40} className="rounded-full" />
                                <span className="text-sm font-medium">Jane Smith</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

function CheckIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}


function StarIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
import {NewProductFrom} from "@/components/newProductForm"

export default function NewProduct({params}:{params:{storeId:number}}) {
    return (
        <div className="space-y-4 p-5 h-screen flex flex-col">
            <div>
                <h1 className="font-bold tracking-tighter lg:leading-[1.1] text-2xl md:text-3xl">
                    New Product
                </h1>
            </div>
            <div className="flex justify-center items-center h-full">
                <NewProductFrom/>
            </div>
        </div>
    )
}
import { CartItemsType } from "@/types"
type propType = Pick<CartItemsType,'title'|'price'>

export default function CartCard({title,price}:propType){
    return (
        <div className="flex justify-between p-5 m-8 md:mx-16 shadow-lg">
            <h3>{title}</h3>
            <h4 className="text-muted-foreground text-sm">{`₹${price}`}</h4>
        </div>
    )
}
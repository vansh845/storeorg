import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

export default function Stores() {
    return (
        <div className="min-h-screen flex justify-between text-sm p-4">
            <p>
                Currently you have no stores!
            </p>
            <Button size={'sm'} >Create <PlusIcon /></Button>
        </div>
    )
}
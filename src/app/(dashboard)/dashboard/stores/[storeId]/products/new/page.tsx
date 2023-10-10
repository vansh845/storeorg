import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function NewProduct() {
    return (
        <div className="space-y-4 p-5 h-screen flex flex-col">
            <div>
                <h1 className="font-bold tracking-tighter lg:leading-[1.1] text-2xl md:text-3xl">
                    New Product
                </h1>
            </div>
            <div className="flex justify-center items-center h-full">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Create Product</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Name of your project" />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <Button size={'sm'}>Create</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
'use client'

import * as React from "react"

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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useMutation } from "@tanstack/react-query"
import { toast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function NewStore() {

    const [formData , setFormData] = React.useState({Name:'',Description:''})

    const router = useRouter()

    const mutation = useMutation({
        mutationFn: async (formData:{Name:string,Description:string}) => {
            const res = await fetch('/api/stores',{
                method:'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(formData)
            })
            return res;
        },
        onSuccess: () => {
            toast({
                description:'store created'
            })
            router.back()
            router.refresh()
        }
    })

    const handleClick = () => {
        mutation.mutate(formData)
        setFormData({...formData,Name:'',Description:''})
    }

    return (
        <div className="flex flex-col min-h-screen space-y-10 p-4">
            <div>
                <h1 className="font-bold tracking-tighter lg:leading-[1.1] text-xl md:text-2xl">
                    New Store
                </h1>
                <h3 className="text-muted-foreground text-sm">
                    create a brand new store
                </h3>
            </div>
            <div className="flex justify-center items-center">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Add Store</CardTitle>
                        <CardDescription>enter details to create a new store</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Name of your store" value={formData.Name} onChange={(e)=>setFormData({...formData,Name:e.target.value})}/>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="description">Description</Label>
                                    <Input id='description' placeholder="Something about your store" value={formData.Description} onChange={(e=>setFormData({...formData,Description:e.target.value}))}/>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline" size={'sm'} >Cancel</Button>
                        {!mutation.isLoading?<Button size={'sm'} onClick={handleClick} >Create</Button>:<Button disabled><Loader2 className="animate-spin"/></Button>}
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
'use client'

import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { useSession } from "next-auth/react"
import { toast } from "@/components/ui/use-toast"

export default function Settings() {

    const [userName, setUsername] = useState("");
    const { data: session } = useSession()

    const mutation = useMutation({
        mutationFn: async (nm: String) => {

            const res = await fetch('/api/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: nm,
                    email: session?.user?.email!
                })
            })
        },
        onSuccess: () => {
            toast({
                description: 'Name saved.'
            })
        }
    });

    const handleClick = () => {
        console.log('button', userName)
        mutation.mutate(userName);
        setUsername("")
    }

    return (
        <div className="p-8 flex flex-col space-y-10 h-screen">
            <div className="">
                <h1 className="font-bold tracking-tighter lg:leading-[1.1] text-2xl md:text-3xl">
                    Settings
                </h1>
            </div>
            <div className="flex justify-center">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Pick a NickName</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" value={userName} placeholder="Enter name" onChange={(e) => setUsername(e.target.value)} />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        {mutation.isLoading ? <Button disabled><Loader2 size={'sm'} className="animate-spin" /></Button> : <Button onClick={handleClick} size={'sm'}>Create</Button>}
                    </CardFooter>
                </Card>
            </div>
        </div>

    )
}
'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Button } from "@/components/ui/button"
import { signIn, useSession } from "next-auth/react"
import { GoogleIcon } from "@/components/icons"
import { redirect } from "next/navigation"

export default function SignIn() {

    const {data : session} = useSession();
    if(session){
        redirect('/')
    }
    
    

    return (

        <div className="flex justify-center bg-black items-center text-center h-screen">
            <Card className="bg-black text-white border-black shadow-lg">
                <CardHeader>
                    <CardTitle>Sign In with Github</CardTitle>
                    <CardDescription>lets go</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col space-y-3">
                    <Button onClick={() => signIn("github")}><GitHubLogoIcon className="mr-2" />{"Github"}</Button>
                    <Button onClick={() => signIn("google")}><GoogleIcon />{"Google"}</Button>
                </CardContent>
            </Card>
        </div>
    )
}
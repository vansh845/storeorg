'use client'
import axios from 'axios'
import SignInCard from "@/components/sigincard"
import { prisma } from "../../../../prisma/index";
import { redirect } from "next/navigation";
import {useMutation} from "@tanstack/react-query"
import { useSession } from "next-auth/react";

export default function SignIn() {

    const {data: session} = useSession()

    const mutation = useMutation({
        mutationFn: async ()=>{
            const data = await axios.post('http://127.0.0.1:3000/api/users',{
                name:session?.user?.name,
                email:session?.user?.email
            })
        }
        // onSuccess:()=>{
        //     redirect('/')
        // }
    })
    
    if(session?.user){
        mutation.mutate()
    }

    return (
        <SignInCard />
    )
}
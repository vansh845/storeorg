'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image';
import { LogOut } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export default function ProfilePicture() {
    const { data: session } = useSession();
    console.log(session)
    if (session) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Image src={session.user?.image!} width={32} height={32} alt='pp' className='rounded-full' />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                    <DropdownMenuItem onClick={()=>signOut()}>
                        LogOut
                        <DropdownMenuShortcut><LogOut className='w-5' /></DropdownMenuShortcut>
                    </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

        )
    }
    return (
        <>
            user not logged in
            <button onClick={() => signIn("github")}>sign In</button>
        </>
    )
}
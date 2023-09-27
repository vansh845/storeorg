'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image';
import { LogOut } from 'lucide-react';
import { Button } from './ui/button';
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
            <Button className='text-xs' variant={'secondary'} onClick={() => signIn()}>SignIn</Button>
        </>
    )
}
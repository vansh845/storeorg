'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image';
import { LogOut } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
export default function ProfilePicture() {
    const { data: session } = useSession();
    if (session) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Image src={session.user?.image!} width={32} height={32} alt='pp' className='rounded-full' />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            Profile
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Dashboard
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <Link href='/settings'>
                            <DropdownMenuItem>
                                Settings
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()}>
                        Log out
                        <DropdownMenuShortcut><LogOut className='w-4' /></DropdownMenuShortcut>
                    </DropdownMenuItem>
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
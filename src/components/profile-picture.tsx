'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image';
import { LogOut } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { dashboardConfig } from '@/config/dashboardConfig';
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
                <DropdownMenuTrigger className='focus:outline-none'>
                    <Image src={session.user?.image!} width={32} height={32} alt='pp' className='rounded-full' />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align='end'>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        {dashboardConfig.map(
                            item =>
                                <Link href={item.href}>
                                    <DropdownMenuItem>
                                        {item.title}
                                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </Link>
                        )}
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

{/* <Link href={'/dashboard'}>
    <DropdownMenuItem>
        Dashboard
        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
    </DropdownMenuItem>
</Link> */}
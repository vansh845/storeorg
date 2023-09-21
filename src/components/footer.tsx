import { links } from "@/config/site"
import Link from "next/link"
import ModeToggle from './mode-toggle'

export default function Footer() {
    return (
        <footer className="border-t flex justify-between items-center p-4">

            <div className="flex space-x-1 text-sm text-muted-foreground tracking-tight">
                Built by 
                <br />
                <Link className="font-semibold" href={links.github}>Vansh.</Link>
            </div>
            <ModeToggle />
        </footer>
    )
}
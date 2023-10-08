import Link from "next/link"
import { Button, buttonVariants } from "./ui/button"
import { dashboardConfig } from "@/config/dashboardConfig"
import { cn } from "@/lib/utils"

const Sidebar = () => {
    return (
        <div className="md:flex md:flex-col md:py-4 md:px-2 lg:px-4 md:border-r hidden">
            {dashboardConfig.map(
                item =>
                    <Link key='' href={item.href} className={`${cn(buttonVariants({variant:'ghost'}))} text-left pr-14 md:pr-24 justify-start`}>
                        {item.title}
                    </Link>
            )}
        </div>
    )
}

export default Sidebar
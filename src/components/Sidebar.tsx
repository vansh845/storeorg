import Link from "next/link"
import { Button, buttonVariants } from "./ui/button"
import { dashboardConfig } from "@/config/dashboardConfig"
import { cn } from "@/lib/utils"

const Sidebar = () => {
    return (
        <div className="flex flex-col p-4 border-r">
            {dashboardConfig.map(
                item =>
                    <Link key='' href={item.href} className={`${cn(buttonVariants({variant:'ghost'}))} text-left pr-24 justify-start`}>
                        {item.title}
                    </Link>

            )}
        </div>
    )
}

export default Sidebar
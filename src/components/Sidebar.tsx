import Link from "next/link"
import { Button, buttonVariants } from "./ui/button"
import { dashboardConfig } from "@/config/dashboardConfig"
import { cn } from "@/lib/utils"

const Sidebar = () => {
    return (
        <div className="flex flex-col p-4">
            {dashboardConfig.map(
                item =>
                    <Link key='' href={item.href} className={`${cn(buttonVariants({variant:'ghost'}))} px-4 justify-start`}>
                            {item.title}
                    </Link>

            )}
        </div>
    )
}

export default Sidebar
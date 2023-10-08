import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "@/components/Sidebar"
import { Toaster } from "@/components/ui/toaster"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ThemeProvider attribute="class"
                defaultTheme="dark"
                disableTransitionOnChange>
                <Navbar />
                <div className="flex">
                    <Sidebar />
                    <div className="w-full">
                        {children}
                    </div>
                </div>
                <Toaster/>
                <Footer />
            </ThemeProvider>
        </>
    )
}
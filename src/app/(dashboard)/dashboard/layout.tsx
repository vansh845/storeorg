import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "@/components/Sidebar"

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
                <Footer />
            </ThemeProvider>
        </>
    )
}
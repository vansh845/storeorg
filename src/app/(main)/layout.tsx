import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <ThemeProvider attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange>
                <Navbar />
                {children}
                <Toaster/>
                <Footer />
            </ThemeProvider>

        </div>
    )
}
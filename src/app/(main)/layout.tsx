import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <ThemeProvider attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange>
                <Navbar />
                {children}
                <Footer />
            </ThemeProvider>

        </div>
    )
}
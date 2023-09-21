import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Urbanist } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ShopOrg',
  description: 'An e-commerce store made using nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange>
          <Navbar />

          {children}

          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}

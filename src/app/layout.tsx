import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Footer from '@/components/footer'
import { getServerSession } from 'next-auth'
import SessionProvider from '../components/SessionProvider'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ShopOrg',
  description: 'An e-commerce store made using nextjs',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <SessionProvider session={session}>

            {children}

          </SessionProvider>
        </ThemeProvider>

      </body>
    </html>
  )
}

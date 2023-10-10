import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { getServerSession } from 'next-auth'
import SessionProvider from '../components/SessionProvider'
import QCprovider from '../components/queryclientprovider'
import { cn } from '@/lib/utils'

const fontSans = FontSans({ 
  subsets: ['latin'] ,
  variable: '--font-sans'
})


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
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}>
        
          <SessionProvider session={session}>
            <QCprovider>
              {children}
            </QCprovider>
          </SessionProvider>

      </body>
    </html>
  )
}

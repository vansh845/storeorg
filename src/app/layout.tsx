import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import SessionProvider from '../components/SessionProvider'
import QCprovider from '../components/queryclientprovider'

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
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        
          <SessionProvider session={session}>
            <QCprovider>
              {children}
            </QCprovider>
          </SessionProvider>

      </body>
    </html>
  )
}

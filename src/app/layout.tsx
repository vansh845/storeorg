import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { getServerSession } from 'next-auth'
import SessionProvider from '../components/SessionProvider'
import QCprovider from '../components/queryclientprovider'

const font = FontSans({ 
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

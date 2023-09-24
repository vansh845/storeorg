import { Metadata } from "next"

export const metadata:Metadata = {
  title: 'SignIn',
  description: 'click to sign ins',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

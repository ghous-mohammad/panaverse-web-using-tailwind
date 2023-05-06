
import './globals.css'
import Header from './components/layout/Header'


export const metadata = {
  title: 'Panaverse',
  description: 'Panaverse website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta charSet="utf-8" />
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      </head>
      <body >
        {/* navbar*/}
        
        <Header />

        
        {children}

        </body>
    </html>
  )
}

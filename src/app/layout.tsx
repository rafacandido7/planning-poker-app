import './globals.css'
import { Metadata } from 'next'
import { Raleway } from 'next/font/google'

export const metadata: Metadata = {
  applicationName: 'planning-poker-page',
  keywords: [
    'React',
    'Next.js',
    'Node.js',
    'Tailwindcss',
  ],
  authors: [
    { name: 'Rafael Cândido', url: 'https://github.com/rafacandido7' },
  ],
  colorScheme: 'light',
  creator: 'Rafael Cândido',
  publisher: 'Rafael Cândido',
  openGraph: {
    title: 'Planning Poker App',
    description: '💎',
    siteName: 'app',
    locale: 'pt-BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  title: {
    default: 'Planning Poker',
    template: '%s | Planning Poker',
  },
  description: '',
  icons: {
    icon: '/assets/favicon.ico',
  },
}

const raleway = Raleway({
  weight: '300',
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-br' className={`
    ${raleway.className}
    scroll-smooth`}>
      <body>
        {children}
      </body>
    </html>
  )
}

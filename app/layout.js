import './globals.css'

export const metadata = {
  title: 'Marvin Rabe',
  description: 'Software Developer',
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;700&display=swap" rel="stylesheet"/>
      <script defer data-domain="rabe.pro" data-api="/stats/event" src="/stats/script.js"></script>
    </head>
    <body className={'bg-zinc-800'}>
    {children}
    </body>
    </html>
  )
}

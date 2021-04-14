import Head from 'next/head'

export default function Home () {
  const socialLinks = [
    {
      title: 'Github',
      url: 'https://github.com/marvinrabe',
      icon: 'fa-github'
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com/marvin_rabe',
      icon: 'fa-twitter'
    },
    {
      title: 'DEV',
      url: 'https://dev.to/marvinrabe',
      icon: 'fa-dev'
    },
    {
      title: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/565323/marvin-rabe',
      icon: 'fa-stack-overflow'
    },
  ]

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <Head>
        <title>Marvin Rabe | Laravel Developer</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;700&display=swap" rel="stylesheet" />
        <link href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" rel="stylesheet"/>
        <script async defer data-domain="rabe.pro" src="https://stats.rabe.pro/js/index.js"/>
      </Head>

      <div className="text-4xl lg:text-6xl font-bold font-serif text-gray-800 dark:text-gray-100">Hello, I'm Marvin!</div>
      <div className="text-xl lg:text-2xl font-light font-serif my-8 text-gray-700 dark:text-gray-200">
        Laravel&nbsp;Developer @&nbsp;<a href="https://nueprice.com/" target="_blank" className='underline hover:no-underline'>nueprice&nbsp;GmbH</a>
      </div>
      <div className="text-4xl lg:text-6xl text-gray-700 dark:text-gray-200 flex gap-4">
        {socialLinks.map((item, index) => (
          <a key={index} href={item.url} title={item.title} target="_blank">
            <span className={`p-2 fab ${item.icon}`}/>
          </a>
        ))}
      </div>
      <style jsx global>{`
      body {
        @apply bg-gray-100;
      }
    `}</style>
    </main>
  )
}

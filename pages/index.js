import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faDev, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

export default function Home () {
  const socialLinks = [
    {
      title: 'Github',
      url: 'https://github.com/marvinrabe',
      icon: faGithub
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com/marvin_rabe',
      icon: faTwitter
    },
    {
      title: 'DEV',
      url: 'https://dev.to/marvinrabe',
      icon: faDev
    },
    {
      title: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/565323/marvin-rabe',
      icon: faStackOverflow
    },
  ]

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <Head>
        <title>Marvin Rabe | Laravel Developer</title>
        <meta name="description" content="Marvin Rabe is a Laravel Developer."/>
      </Head>
      <div className="relative">
        <img src="/me.png" alt="" className="rounded-full w-24 lg:w-32 h-24 lg:h-32 relative z-10 shadow" />
        <img src="/me.png" alt="" className="rounded-full w-24 lg:w-32 h-24 lg:h-32 absolute bottom-0 inset-x-0 transform scale-90 filter blur" />
      </div>
      <h1 className="text-4xl lg:text-6xl font-bold font-serif text-gray-900 dark:text-gray-50 mt-12 mb-6">
        Hello, I'm Marvin.
      </h1>
      <p className="text-xl lg:text-2xl font-light mb-12 text-gray-500 dark:text-gray-400">
        Laravel&nbsp;Developer
        @&nbsp;<a href="https://nueprice.com/" rel="noopener"
                  className='underline hover:no-underline transition-opacity hover:opacity-75'>nueprice&nbsp;GmbH</a>
      </p>
      <div className="text-3xl lg:text-5xl text-gray-700 dark:text-gray-200 grid grid-flow-col items-center gap-4">
        {socialLinks.map((item, index) => (
          <a key={index} href={item.url} title={item.title} rel="noreferrer"
             className="p-2 transition-opacity hover:opacity-75">
            <FontAwesomeIcon icon={item.icon} fixedWidth/>
          </a>
        ))}
      </div>
    </main>
  )
}

import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faDev, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

export default function Home () {
  const socialLinks = [
    {
      title: 'Github',
      url: 'https://github.com/marvinrabe',
      icon: faGithub
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/marvinrabe/',
      icon: faLinkedin
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
        <title>Marvin Rabe | Software Developer</title>
        <meta name="description" content="Marvin Rabe is a Laravel Developer."/>
      </Head>
      <img src="/me.png" height="128" width="128" alt="Marvins face" className="rounded-full shadow-sm"/>
      <h1 className="text-4xl lg:text-6xl font-bold font-serif text-gray-800 dark:text-gray-50 mt-12 mb-6">
        Hello, I'm Marvin.
      </h1>
      <p className="text-xl lg:text-2xl font-light mb-12 text-gray-500 dark:text-gray-400">
        <span className="whitespace-nowrap">Software Developer</span>
      </p>
      <div className="text-3xl lg:text-5xl text-gray-700 dark:text-gray-200 grid grid-flow-col items-center gap-4">
        {socialLinks.map((item, index) => (
          <a key={index} href={item.url} title={item.title} rel="me noreferrer"
             className="p-2 transition-opacity hover:opacity-75">
            <FontAwesomeIcon icon={item.icon} fixedWidth/>
          </a>
        ))}
      </div>
    </main>
  )
}

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
    <main className="flex flex-col items-center justify-center min-h-full p-8 text-center">
      <img src="/me.jpg" height="128" width="128" alt="Marvins face"
           className="border-8 border-zinc-800 ring-2 ring-amber-400 rounded-full" />
      <h1 className="text-4xl lg:text-6xl font-bold font-serif text-zinc-50 mt-12 mb-4">
        Hello, I'm <span
        className="text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-orange-600">Marvin</span>.
      </h1>
      <p className="text-xl lg:text-2xl font-light mb-6 text-zinc-400">
        <span className="whitespace-nowrap">Software Developer</span>
      </p>
      <div className="grid grid-flow-col items-center gap-4">
        {socialLinks.map((item, index) => (
          <a key={index} href={item.url} title={item.title} rel="me noreferrer"
             className="p-2 text-zinc-50 transition-color duration-500 hover:text-orange-500">
            <FontAwesomeIcon icon={item.icon} fixedWidth className="h-6 lg:h-8 w-6 lg:w-8" />
          </a>
        ))}
      </div>
    </main>
  )
}

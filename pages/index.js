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
    <main>
      <Head>
        <title>Marvin Rabe | Laravel Developer</title>
        <link href="https://fonts.googleapis.com/css?family=Reem+Kufi|Roboto:300" rel="stylesheet"/>
        <link href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" rel="stylesheet"/>
        <link rel="stylesheet" href="css/reset.css"/>
        <link rel="stylesheet" href="css/styles.css"/>
        <link rel="stylesheet" href="css/themes/white-grey.css"/>
        <script async defer data-domain="rabe.pro" src="https://stats.rabe.pro/js/index.js" />
      </Head>

      <div className="intro">Hello, I'm Marvin!</div>
      <div className="tagline">
        Laravel Developer @ <a href="https://nueprice.com/" target="_blank" style={{color: 'inherit'}}>nueprice GmbH</a>
      </div>
      <div className="icons-social">
        {socialLinks.map(item => (
          <a target="_blank" href={item.url} title={item.title}><span className={`fab ${item.icon}`}/></a>
        ))}
      </div>
    </main>
  )
}

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;700&display=swap" rel="stylesheet"/>
          <script async defer data-domain="rabe.pro" src="https://stats.rabe.pro/js/index.js"/>
        </Head>
        <body className="bg-gray-100 dark:bg-gray-800">
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument

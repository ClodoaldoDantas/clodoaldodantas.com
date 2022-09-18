import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <meta
          name="description"
          content="Front-End Engineer, Tecnólogo em Análise e Desenvolvimento de Sistemas e sempre buscando programar de maneira simples, organizada e com boas práticas de código."
        />
        <meta name="keywords" content="React, React Native, Vue, Node JS" />
        <meta name="author" content="Clodoaldo Dantas" />

        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Readex+Pro:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

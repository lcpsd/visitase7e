import Document from 'next/document'
import { NextSeo } from 'next-seo'

import { ServerStyleSheet } from 'styled-components'
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
              <NextSeo 
              title='Visita Se7e | Seu Cartão de Visitas Digital'
              description="Cartão de visitas deigital de respeito"
              canonical='http://www.visitase7e.com'
              additionalLinkTags={[{
                rel: 'icon',
                href: '/favicon.ico'
              }]}
              additionalMetaTags={[{
                property: 'dc:creator',
                content: 'Se7e - Estúdio de Design'
                }, {
                  name: 'application-name',
                  content: 'VisitaSe7e'
                }, {
                  httpEquiv: 'x-ua-compatible',
                  content: 'IE=edge; chrome=1'
                }]
              }
              additionalLinkTags={[
                {
                  rel: 'icon',
                  href: '/public/favicon.ico',
                },
              ]}

              openGraph={{
                type: 'website',
                url: 'https://www.visitase7e.com',
                title: 'Visita Se7e',
                description: 'Seu cartão de visitas digital de respeito',
                images: [
                  {
                    url: '/public/logo.png',
                    width: 800,
                    height: 600,
                    alt: 'logo da empresa',
                  },
                  {
                    url: '/public/smartphone.png',
                    width: 800,
                    height: 600,
                    alt: 'Cartão de visitas digital',
                  },
                ],
              }}
            />
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
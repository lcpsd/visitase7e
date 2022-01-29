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
              title='Se7e | Estúdio de Design'
              description='Estúdio de design focado em solução.'
              canonical='http://www.visitase7e.com'
              additionalLinkTags={[{
                rel: 'icon',
                href: '/favicon.ico'
              }]}
              />
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Meta */}
        <meta name="author" content="Scholarbright" />
        <meta itemProp="image" content="https://Scholarbright.app/share.png" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Scholarbright" />
        <meta property="og:image" content="https://Scholarbright.app/share.png" />

        <meta name="twitter:site" content="@Scholarbrightapp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://Scholarbright.app/share.png" />

        {/* Web App */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/Scholarbright-icon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f5f5f7" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Scholarbright" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="translucent" />
        <meta name="apple-mobile-web-app-title" content="Scholarbright" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000" />

        <meta name="msapplication-tap-highlight" content="no" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

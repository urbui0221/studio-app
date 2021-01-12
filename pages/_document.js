import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" media="all"/>
        <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" media="all" />
        <link rel="stylesheet" href="css/ionicons.min.css" type="text/css" media="all" />
        <link rel="stylesheet" href="css/owl.carousel.css" type="text/css" media="all"/>
        <link rel="stylesheet" href="css/owl.theme.css" type="text/css" media="all"/>
        <link rel="stylesheet" href="css/settings.css" type="text/css" media="all"/>
        <link rel="stylesheet" href="css/component.css" type="text/css" media="all"/>
        <link rel="stylesheet" href="css/slick.css" type="text/css" media="all"/>
        <link rel="stylesheet" href="css/magnific-popup.css" type="text/css" media="all"/>
        <link rel="stylesheet" href="css/style.css" type="text/css" media="all"/>
        <link rel="stylesheet" href="css/custom.css" type="text/css" media="all"/>
        <link href="//fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i%7CMontserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i%7CLato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
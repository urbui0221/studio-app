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
          <script type="text/javascript" src="./static/js/jquery.min.js"></script>
		      <script type="text/javascript" src="./static/js/jquery-migrate.min.js"></script>
		      <script type="text/javascript" src="./static/js/bootstrap.min.js"></script>
		      <script type="text/javascript" src="./static/js/modernizr-2.7.1.min.js"></script>
		      <script type="text/javascript" src="./static/js/owl.carousel.min.js"></script>
		      <script type="text/javascript" src="./static/js/imagesloaded.pkgd.min.js"></script>
		      <script type="text/javascript" src="./static/js/isotope.pkgd.min.js"></script>
		      <script type="text/javascript" src="./static/js/jquery.isotope.init.js"></script>
		      <script type="text/javascript" src="./static/js/classie.js"></script>
		      <script type="text/javascript" src="./static/js/modalEffects.js"></script>
		      <script type="text/javascript" src="./static/js/slick.min.js"></script>
		      <script type="text/javascript" src="./static/js/jquery.magnific-popup.min.js"></script>
		      <script type="text/javascript" src="./static/js/script.js"></script>
		      <script type="text/javascript" src="./static/js/jquery.themepunch.tools.min.js"></script>
		      <script type="text/javascript" src="./static/js/jquery.themepunch.revolution.min.js"></script>
		      <script type="text/javascript" src="./static/js/extensions/revolution.extension.video.min.js"></script>
		      <script type="text/javascript" src="./static/js/extensions/revolution.extension.slideanims.min.js"></script>
		      <script type="text/javascript" src="./static/js/extensions/revolution.extension.actions.min.js"></script>
		      <script type="text/javascript" src="./static/js/extensions/revolution.extension.layeranimation.min.js"></script>
		      <script type="text/javascript" src="./static/js/extensions/revolution.extension.kenburn.min.js"></script>
		      <script type="text/javascript" src="./static/js/extensions/revolution.extension.navigation.min.js"></script>
		      <script type="text/javascript" src="./static/js/extensions/revolution.extension.migration.min.js"></script>
		      <script type="text/javascript" src="./static/js/extensions/revolution.extension.parallax.min.js"></script>    
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
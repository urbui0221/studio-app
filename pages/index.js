import Head from "next/head"
import Awards from "../components/Awards"
import Carousal from "../components/Carousal"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import OurFilms from "../components/OurFilms"
import Partners from "../components/Partners"
import SectionFeatures from "../components/SectionFeatures"
import SectionWorkWithEstablished from "../components/SectionWorkWithEstablished"

import TopSearch from "../components/TopSearch"
import WhoAreWe from "../components/WhoAreWe"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='site'>
        <TopSearch />
        <Header />

        <div className='main'>
        <Carousal />
        <SectionWorkWithEstablished />
        <SectionFeatures />
        <Awards />
        <OurFilms />
        <WhoAreWe />
        <Partners />  
        <Newsletter />
        </div>
        <Footer />
      </div>
      
		<div className="modals">
			<div className="md-modal md-effect-1" id="modal-1">
				<div className="md-content bg-transparent">
					<iframe src="https://player.vimeo.com/video/177252412" width="500" height="281" allowFullScreen></iframe>
					<button className="md-close">Close me!</button>
				</div>
			</div>
		</div>

		<div className="md-overlay"></div>

		<a className="backtotop" id="backtotop"><i className="ion-android-arrow-up"></i></a>

    </div>
  )
}

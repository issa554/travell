import Navbar from "../com/navbar"
import Homee from '../com/Home'
import Category from "../com/Category"
import TopSelling from "../com/TopSelling"
import Steps from "../com/Steps"
import Testimonials from "../com/Testimonials"
import Logos from "../com/Logos"
import News from "../com/NewsLater"
import Footer from "../com/Footer"
import Head from 'next/head'
export default function Home() {
  return (
    <div >
        <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Navbar />
      <div className="app" >

      <Homee  />
      </div>
      <Category />
      <TopSelling />
      <Steps />
      <Testimonials />
      <Logos />
      
      <News />
      <Footer />
</div>


  )
}

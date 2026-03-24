import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import ProductGrid from "../components/ProductGrid"
import BenefitsBanner from "../components/BenefitsBanner"
import WhatsAppButton from "../components/WhatsAppButton"
import { products } from "../data/products"

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <BenefitsBanner />
            {/* NOVO VÍDEO */}
      <div className="video-container">
        <iframe
          className="video-frame"
          src="https://www.youtube.com/embed/5Jsuzuz7i1U"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <ProductGrid products={products} />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
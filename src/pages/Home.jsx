import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import ProductGrid from "../components/ProductGrid"
import BenefitsBanner from "../components/BenefitsBanner"
import { products } from "../data/products"

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <BenefitsBanner />
      <ProductGrid products={products} />
      <Footer />
    </>
  )
}
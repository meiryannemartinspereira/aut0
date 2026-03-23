import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import ProductGrid from "../components/ProductGrid"
import BenefitsBanner from "../components/BenefitsBanner"

const products = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  name: "Produto Automotivo",
  price: "199,90",
  image: "https://via.placeholder.com/200"
}))

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
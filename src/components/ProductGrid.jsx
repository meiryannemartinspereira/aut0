import ProductCard from "./ProductCard"

export default function ProductGrid({ products }) {
  return (
    <div className="container" style={{
      marginTop: 20,
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 15
    }}>
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
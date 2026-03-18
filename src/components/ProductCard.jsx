export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} className="product-image" />

      <p className="product-name">
        {product.name}
      </p>

      {/* PREÇO ANTIGO */}
      <span className="old-price">
        R$ 300,00{product.oldPrice}
      </span>

      {/* DESCONTO */}
      <span className="discount">
        {product.discount}10% OFF NO PIX
      </span>

      {/* PREÇO ATUAL */}
      <div className="product-price">
        <span className="currency">R$</span>
        <span className="value">{product.price}</span>
      </div>

      {/* PARCELAMENTO */}
      <p className="installments">
        à vista com desconto Pix 
      </p>

      <button className="btn-buy">
        Comprar
      </button>
    </div>
  )
}
export default function Navbar() {
  const categories = [
    "Motor", "Freios", "Suspensão", "Elétrica", "Acessórios"
  ]

  return (
    <div style={{ background: "#fff", borderBottom: "1px solid #eee" }}>
      <div className="container" style={{ display: "flex", gap: 20, padding: "10px 0", fontSize: 14 }}>
        {categories.map((c, i) => (
          <span key={i} style={{ cursor: "pointer" }}>
            {c}
          </span>
        ))}
      </div>
    </div>
  )
}
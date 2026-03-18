export default function Header() {
  return (
    <>
      {/* TOPBAR */}
      <div style={{ background: "#0056b3", color: "#fff", fontSize: 14 }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", padding: "6px 0" }}>
          <span>Minha Conta</span>
        </div>
      </div>

      {/* HEADER PRINCIPAL */}
      <div style={{ background: "#fff", borderBottom: "1px solid #ddd" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", gap: 20, padding: "15px 0" }}>

          {/* LOGO */}
          <img src="/logo.png" style={{ height: 40 }} />

          {/* BUSCA */}
          <div style={{ display: "flex", flex: 1 }}>
            <input
              placeholder="O que você procura?"
              style={{
                flex: 1,
                height: 40,
                border: "1px solid #ccc",
                padding: "0 10px"
              }}
            />
            <button style={{
              background: "#0056b3",
              color: "#fff",
              border: "none",
              padding: "0 20px"
            }}>
              Buscar
            </button>
          </div>

          {/* AÇÕES */}
          <div style={{ display: "flex", gap: 15 }}>
            <span>Entrar</span>
            <span>🛒 Carrinho</span>
          </div>
        </div>
      </div>
    </>
  )
}
import CategoriesMenu from "./CategoriesMenu"
import Logo from "../images/logo.png"

export default function Header() {
  return (
    <>
      {/* TOPBAR */}
      <div style={{ background: "#f0f0f0", color: "#fff", fontSize: 14 }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", padding: "6px 0" }}>
          <span style={{ color: "#333", fontWeight: 500, marginLeft: "auto" }}>
            Minha Conta
          </span>
        </div>
      </div>

      {/* HEADER PRINCIPAL */}
      <div style={{ background: "#fff", borderBottom: "1px solid #ddd" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: 10 }}>

          {/* Linha do logo + busca + ações */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, padding: "10px 0" }}>
            {/* LOGO */}
            <img src={Logo} style={{ height: 40 }} alt="Logo" />

            {/* BUSCA */}
            <div style={{ display: "flex", flex: 1 }}>
      <input
        placeholder="O que você procura?"
        style={{
          flex: 1,
          height: 40,
          border: "none",                 // remove borda padrão
          borderBottom: "1px solid #ccc", // 👈 só linha embaixo
          padding: "0 10px",
          fontFamily: "inherit",
          fontStyle: "italic",
          outline: "none"                 // remove borda azul ao focar
        }}
      />
              {/* <button style={{
                background: "#0056b3",
                color: "#fff",
                border: "none",
                padding: "0 20px"
              }}>
                Buscar
              </button> */}
            </div>

            {/* AÇÕES */}
          </div>
        </div>
      </div>
    </>
  )
}
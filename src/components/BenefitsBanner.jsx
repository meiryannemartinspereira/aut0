export default function BenefitsBanner() {
  const items = [
    {
      icon: "https://images.tcdn.com.br/files/946974/themes/234/img/settings/line-parcelamento.png",
      title: "PARCELAMENTO",
      desc: "Em até 12x no cartão"
    },
    {
      icon: "https://images.tcdn.com.br/files/946974/themes/234/img/settings/mapamaior.png",
      title: "ENVIO IMEDIATO",
      desc: "Postagem rápida"
    },
    {
    icon: "https://images.tcdn.com.br/files/946974/themes/234/img/settings/cc.png",
    title: "PRODUTOS EM ESTOQUE",
    desc: "100% dos produtos a pronta entrega"
    }
  ]

  return (
    <div className="container">
      <div className="benefits">
        {items.map((item, i) => (
          <div key={i} className="benefit-item">
            <img className="icon" src={item.icon} alt={item.title} />

            <span className="text">
              <span className="featured">{item.title}</span>
              <span className="desc">{item.desc}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        {/* Institucional */}
        <div className="footer-column">
          <h4 className="footer-title">Institucional</h4>
          <ul className="footer-list">
            {[
              "Quem Somos", "Informações Úteis", "Segurança", "Fretes e Entrega", 
              "Tempo de Garantia", "Política de Privacidade", "Termos de Uso", 
              "Trocas e Devoluções", "Depoimentos", "Sobre", "Contato"
            ].map(item => (
              <li key={item} className="footer-link">{item}</li>
            ))}
          </ul>
        </div>

        {/* Atendimento */}
        <div className="footer-column">
          <h4 className="footer-title">Atendimento</h4>

          <div className="footer-contact">
            <p className="footer-info contact-item">
              <span className="contact-icon">📞</span>
              (49) 3025-8380
            </p>

            <p className="footer-info contact-item">
              <span className="contact-icon">🟢</span>
              49 99948-4754
            </p>

            <p className="footer-info contact-item">
              <span className="contact-icon">✉️</span>
              tcautopecas.com.br
            </p>
          </div>

          <p className="footer-info">Seg a Sex: 8h às 18h</p>
          <p className="footer-info">Sáb e Dom: fechado</p>

          <div className="footer-social">
            <span>📘</span>
            <span>📸</span>
            <span>💬</span>
          </div>
        </div>

        {/* Formas de Pagamento */}
        <div className="footer-column">
          <h4 className="footer-title">Formas de Pagamento</h4>
          <ul className="footer-list">
            {[
              "Cartão Visa - Vindi",
              "Cartão MasterCard - Vindi",
              "Cartão Diners - Vindi",
              "Cartão Amex - Vindi",
              "Cartão Elo - Vindi",
              "Pix - Vindi"
            ].map(item => (
              <li key={item} className="footer-link">{item}</li>
            ))}
          </ul>
        </div>

        {/* Razão Social */}
        <div className="footer-column large">
          <h4 className="footer-title">Razão Social</h4>

          <p className="footer-info">
            Razão Social Matriz:<br/>
            Centro de Distribuição: TC Auto Center<br/>
            CNPJ: 12.345.678/0001-90<br/>
            Inscrição Estadual: 123456789<br/>
            Endereço: Rua Itapecuru Mirim, 100 – Bairro Centro<br/>
            CEP: 65200-000 – Maranhão
          </p>

          <p className="footer-info">
            Razão Social Filial:<br/>
            Centro Administrativo: TC Auto Center<br/>
            CNPJ: 12.345.678/0002-80<br/>
            Inscrição Estadual: 987654321<br/>
            Endereço: Rua Itapecuru Mirim, 150 – Bairro Centro<br/>
            CEP: 65200-000 – Maranhão
          </p>

          <h4 className="footer-title" style={{ marginTop: "15px" }}>
            Compre com segurança
          </h4>

          <p className="footer-info" style={{ fontSize: "13px" }}>
            Loja Protegida. Imagens dos produtos originais, desenvolvidas internamente. 
            Proibida a utilização total ou parcial sem autorização.
          </p>
        </div>

      </div>

      <div className="footer-copy">
        © 2026 TC Auto Center. Todos os direitos reservados.
      </div>
    </footer>
  )
}
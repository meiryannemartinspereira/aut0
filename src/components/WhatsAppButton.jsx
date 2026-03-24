export default function WhatsAppButton() {
  const phoneNumber = "5551999999999" // coloque seu número com DDI + DDD

  const message = "Olá! Gostaria de mais informações."
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
      />
    </a>
  )
}
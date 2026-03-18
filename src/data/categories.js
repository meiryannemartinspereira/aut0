export const categories = [
  {
    name: "Injeção",
    icon: "https://images.tcdn.com.br/img/img_prod/946974/categoria_img_725_20251128092043.png",
    children: [
      {
        name: "Bico Injetor",
        children: [
          { name: "Hilux" },
          { name: "Amarok" },
          { name: "HB20" }
        ]
      },
      {
        name: "Corpo de Borboleta",
        children: [
          { name: "Fiat" },
          { name: "VW" },
          { name: "GM" }
        ]
      },
      {
        name: "Sensores",
        children: [
          { name: "MAP" },
          { name: "MAF" },
          { name: "Temperatura" }
        ]
      }
    ]
  },

  {
    name: "Motor",
    icon: "https://cdn-icons-png.flaticon.com/512/2967/2967350.png",
    children: [
      { name: "Correias", children: [{ name: "Dentada" }, { name: "Poly V" }] },
      { name: "Juntas", children: [{ name: "Cabeçote" }, { name: "Cárter" }] },
      { name: "Pistões", children: [{ name: "Gasolina" }, { name: "Diesel" }] }
    ]
  },

  {
    name: "Transmissão",
    icon: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png",
    children: [
      { name: "Embreagem", children: [{ name: "Kit Completo" }, { name: "Disco" }, { name: "Platô" }] },
      { name: "Câmbio", children: [{ name: "Manual" }, { name: "Automático" }] }
    ]
  },

  {
    name: "Suspensão",
    icon: "https://cdn-icons-png.flaticon.com/512/809/809957.png",
    children: [
      { name: "Amortecedores", children: [{ name: "Dianteiro" }, { name: "Traseiro" }] },
      { name: "Molas", children: [{ name: "Helicoidal" }, { name: "Esportiva" }] }
    ]
  },

  {
    name: "Filtros",
    icon: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
    children: [
      { name: "Filtro de Óleo", children: [{ name: "Bosch" }, { name: "Mann" }] },
      { name: "Filtro de Ar", children: [{ name: "Esportivo" }, { name: "Original" }] },
      { name: "Filtro de Combustível", children: [{ name: "Diesel" }, { name: "Gasolina" }] }
    ]
  },

  {
    name: "Lataria",
    icon: "https://cdn-icons-png.flaticon.com/512/743/743922.png",
    children: [
      { name: "Parachoque", children: [{ name: "Dianteiro" }, { name: "Traseiro" }] },
      { name: "Capô", children: [{ name: "Original" }, { name: "Esportivo" }] }
    ]
  },

  {
    name: "Freios",
    icon: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
    children: [
      { name: "Pastilhas", children: [{ name: "Dianteira" }, { name: "Traseira" }] },
      { name: "Discos", children: [{ name: "Ventilado" }, { name: "Sólido" }] }
    ]
  },

  {
    name: "Elétrica",
    icon: "https://cdn-icons-png.flaticon.com/512/3103/3103446.png",
    children: [
      { name: "Bateria", children: [{ name: "60Ah" }, { name: "70Ah" }] },
      { name: "Alternador", children: [{ name: "Bosch" }, { name: "Valeo" }] },
      { name: "Iluminação", children: [{ name: "Farol" }, { name: "Lanterna" }] }
    ]
  },

  {
    name: "Diversos",
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
    children: [
      { name: "Acessórios", children: [{ name: "Tapetes" }, { name: "Capas" }] },
      { name: "Ferramentas", children: [{ name: "Chaves" }, { name: "Macaco" }] }
    ]
  }
];
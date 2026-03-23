import { useState } from "react"
import { categories } from "../data/categories"

export default function CategoriesMenu() {
  const [active, setActive] = useState(null)
  const [subActive, setSubActive] = useState(null)

  return (
    <ul
      className="menu-root"
      onMouseLeave={() => {
        setActive(null)
        setSubActive(null)
      }}
    >
      {categories.map((cat, i) => (
        <li
          key={i}
          className="menu-item"
          onMouseEnter={() => setActive(i)}
        >
          <div className="menu-link">
            <img src={cat.icon} alt="" />
            <span>{cat.name}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
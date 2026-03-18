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

          {active === i && (
            <div className="mega-menu">
              {cat.children?.map((sub, j) => (
                <div
                  key={j}
                  className="mega-column"
                  onMouseEnter={() => setSubActive(j)}
                >
                  <div className="mega-item">
                    {sub.name}
                    {sub.children && <span className="arrow">▶</span>}
                  </div>

                  {subActive === j && sub.children && (
                    <div className="sub-menu">
                      {sub.children.map((item, k) => (
                        <div key={k} className="sub-item">
                          {item.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
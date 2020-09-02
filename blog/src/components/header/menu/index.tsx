import React from 'react'
import style from './style.module.css'
import Link from '../../active-link'

type Props = {
  links: { title: string, url: string }[]
}

const Menu: React.FC<Props> = (props) => {
  const { links } = props

  return (
    <React.Fragment>
      <nav className={style.menu}>
        <ul>
          {links.map(({ title, url }) => {
            return (
              <li key={title}>
                <Link activeClassName={style.selected} href={url}>
                  <a className={style.link} >
                    {title}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Menu

import React, { PureComponent } from 'react'
import style from './style.module.css'

class Menu extends PureComponent {
  render() {
    const { links } = this.props

    return (
      <React.Fragment>
        <nav className={style.menu}>
          <ul>
            {links.map(({ title, url }) => {
              return (
                <li key={title}>
                 <title> {url} </title>
                </li>
              )
            })}
          </ul>
        </nav>
      </React.Fragment>
    )
  }
}

export default Menu

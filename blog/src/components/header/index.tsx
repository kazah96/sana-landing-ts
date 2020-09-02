import React, { PureComponent } from "react"

import cn from "classnames"

import style from "./style.module.css"

import Menu from "./menu"

const defaultLinks = [{ title: "portfolio", url: "/" }]

class HeaderPage extends PureComponent {
  changeTheme = () => {
    console.log("change theme")
    const theme = localStorage.getItem("theme")

    if (theme === "dark") {
      localStorage.setItem("theme", "light")
      document.documentElement.setAttribute("theme", "light")
    } else {
      document.documentElement.setAttribute("theme", "dark")
      localStorage.setItem("theme", "dark")
    }
  }

  render() {
    let { title, subtitle, theme } = this.props

theme = "dark"
    const links = [
      ...defaultLinks,
    ]


    return (
      <React.Fragment>
        <header className={style.header}>
          <div className={cn(style.brands, { [style["brands-dark"]]: theme === "dark" })}>
            <i
              role="button"
              onKeyPress={this.changeTheme}
              onClick={this.changeTheme}
              className="fas fa-adjust"
              tabIndex={0}
            ></i>
            <a
              target="_blank"
              aria-label="Telegram"
              rel="noopener noreferrer"
              href="https://t.me/svnvsvg"
            >
              <i className="fab fa-telegram"></i>
            </a>
            <a
              target="_blank"
              aria-label="Twitter"
              rel="noopener noreferrer"
              href="https://twitter.com/BblCoKa9_AcTma"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
              href="https://instagram.com/svnvsvg"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <a href="/" style={{ textDecoration: "none" }}>
            <h2 className={style.name}>{title}</h2>
          </a>
          <h4 className={style.sub_name}>{subtitle}</h4>
          <Menu links={links} />
        </header>
      </React.Fragment>
    )
  }
}

HeaderPage.defaultProps = {
  title: "SSS",
  subtitle: "DSFSDF",
}

export default HeaderPage

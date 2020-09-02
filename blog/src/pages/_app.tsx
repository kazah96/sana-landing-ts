import { AppProps } from "next/app";
import React from "react"
import { Consumer } from "../components/settings-context"

import Header from "../components/header"
import "./global.style.css"

const config = {
  title: 'Title',
  subtitle: 'Subtitle',
  pages: []
}

const Layout = ({ Component, pageProps }: AppProps) => {
  return (
    <Consumer>
      {({ theme }) => {
        return (
          <>
            <Header
              theme={theme}
              title={config.title}
              subtitle={config.subtitle}
              pages={config.pages} />
            <div
              style={{
                margin: `0 auto`,
                padding: `0 1.0875rem 1.45rem`,
              }}
            >
              <main className="main-content"> <Component {...pageProps} /></main>
            </div>
          </>
        );
      }}
    </Consumer>
  )
}

export default Layout

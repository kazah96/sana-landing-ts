/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { AppProps } from "next/app";
import React from "react"
import PropTypes from "prop-types"
import { Consumer } from "../components/settings-context"

import Header from "../components/header"
import "./global.style.css"


const config = {
  title: 'dsf',
  subtitle: 'dfsd',
  pages: []
}

const Layout = ({ Component, pageProps }: AppProps) => {
  return (
      <Consumer>
        {theme => (
          <>
            <Header
              theme={theme}
              title={config.title}
              width="200px"
              height="200px"
              subtitle={config.subtitle}
              pages={config.pages}
            />
            <div
              style={{
                margin: `0 auto`,
                padding: `0 1.0875rem 1.45rem`,
              }}
            >
              <main> <Component {...pageProps} /></main>
            </div>
          </>
        )}
      </Consumer>
  )
}

export default Layout

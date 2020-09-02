import React from "react"


const SettingsContext = React.createContext()

export { SettingsContext }
export const Consumer = SettingsContext.Consumer

export const themes = {
  desktop: "desktop",
  mobile: "mobile",
}

export class Provider extends React.Component {
  state = { theme: "light" }

  render() {

    return (
      <SettingsContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </SettingsContext.Provider>
    )
  }
}

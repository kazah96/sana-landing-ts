/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const React = require('react')
const SettingsContext = require('./src/components/settings-context').Provider
const theme = localStorage.getItem('theme');
document.documentElement.setAttribute('theme', theme || 'dark');

exports.wrapRootElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it

  return <SettingsContext>{element}</SettingsContext>
}

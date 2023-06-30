import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div className="config-container">
          <h1>Layout</h1>
          <ul className="co-ul-container">
            <li>
              <input
                className="co-li-element"
                checked={showContent}
                onChange={onToggleShowContent}
                type="checkbox"
                id="l-1"
              />
              <label className="co-para" htmlFor="l-1">
                Content
              </label>
            </li>
            <li>
              <input
                className="co-li-element"
                checked={showLeftNavbar}
                onChange={onToggleShowLeftNavbar}
                type="checkbox"
                id="l-2"
              />
              <label className="co-para" htmlFor="l-2">
                Left Navbar
              </label>
            </li>
            <li>
              <input
                className="co-li-element"
                checked={showRightNavbar}
                onChange={onToggleShowRightNavbar}
                type="checkbox"
                id="l-3"
              />
              <label className="co-para" htmlFor="l-3">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

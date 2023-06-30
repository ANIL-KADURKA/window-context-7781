import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="b-container">
          {showLeftNavbar && (
            <ul className="left-bar-container">
              <h1 className="b-head">Left Navbar Menu </h1>

              <ul className="li-container">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </ul>
          )}
          {showContent && (
            <div className="content-container">
              <h1 className="head">Content</h1>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-bar-container">
              <h1 className="b-head">Right Navbar Menu </h1>
              <div className="b-box">
                <p>Ad 1</p>
              </div>
              <div className="b-box">
                <p>Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body

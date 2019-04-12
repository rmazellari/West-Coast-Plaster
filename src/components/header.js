import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/gatsby-icon.png'



const Header = ({ siteTitle }) => (
  <header className="header">
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
          <div className="title">West Coast </div>
          <div className="title-2">Plaster</div>
        </Link>
      </h1>
      <button onClick={showForm} className="contact-btn">Say Hello!</button>      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const showForm = (event) => {
  document.querySelector('.contact-form-container').classList.add('show')
}
export default Header

import React from 'react'

import logo from '../../assets/images/logo.png'
import './styles.scss'

function Header() {
  return (
    <header data-test="header-component" className="header-component">
      <div className="wrapper header-content">
        <img alt="logo" data-test="image-component" className="header-logo" src={logo} />
      </div>
    </header>
  )
}

export default Header

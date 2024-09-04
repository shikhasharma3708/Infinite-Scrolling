import { Menu } from "@mui/icons-material"
import React, { useState } from "react"
import { Link } from "react-router-dom"

export const Header = () => {
  const [responsive, setResponsive] = useState(false)
  return (
    <>
      <header>
        <div className='container flexsb'>
          <div className='logo'>
            <img src="https://png.pngtree.com/png-vector/20230219/ourmid/pngtree-modern-demo-logo-vector-file-png-image_6608503.png" alt='' />
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
             <Link to='/'>Home</Link>
             <Link to='/about'>About</Link>
             <Link to='/contact'>Contact</Link> 
          </div>
          <button className='toggle' onClick={() => setResponsive(!responsive)}>
            <Menu className='icon' />
          </button>
        </div>
      </header>
    </>
  )
}
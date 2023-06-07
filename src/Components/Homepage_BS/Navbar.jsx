import React from 'react'
import { useState } from 'react'

import './Navbar.css'
import { Button } from "@chakra-ui/button" 
import PopupModal from '../PopupModal/PopupModal';
import { PopupContext } from '../../Context/PopupContext';
import { Link } from 'react-router-dom'
// import Login from '../Login/Login'
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { setPopup } = React.useContext(PopupContext);

  const changeBackground = () => {
    if ( window.scrollY >= 35){
      setNavbar(true)
    }
    else{
      setNavbar(false)
    }

  }
  window.addEventListener("scroll", changeBackground)

  return( 
  
  
    <div style={{paddingLeft:"100px", paddingRight:"100px"}} className = { navbar ? "navbar active" : "navbar" }>

<div>
<Link to="/">
<h1 style={{ fontSize: "50px" , color:"black", fontWeight:"900"}}>Campus-Hive</h1>
</Link>
</div>
  
  <div className = "part-2">

    <div>  
      
        <Button onClick={()=>{setPopup(false)}} style = {{ background: navbar ? "green" : "black" ,color:"white",borderRadius:"20px",fontSize:"15px",fontWeight:"400", letterSpacing:".5px" }}><PopupModal mainTitle='Sign in' /></Button>
      
    </div>
      
    <div>
      <Button onClick={()=>{setPopup(true)}} style = {{ background: navbar ? "green" : "black" ,color:"white",borderRadius:"20px",fontSize:"15px",fontWeight:"400", letterSpacing:".5px" }}><PopupModal mainTitle='Sign Up' /></Button>
    </div>

    </div>
  </div>
  )
}

export default Navbar


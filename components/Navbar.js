import React, {useState} from 'react'
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"
import Link from 'next/link'
// import Image from "next/image"
// import logo from "../assets/download.png"

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  const handleClick = ()=>{
    setShowNav((prev)=>!prev);
  }
  return (
    <div className = "navContainer">
      <div className = "logoContainer">
       <img
        src="https://png.pngtree.com/png-vector/20190420/ourlarge/pngtree-vector-camera-icon-png-image_964783.jpg"
        alt="Picture of the author"
        width={70}
        height={70}
        className = "logoImg"
      />
      </div>
      <div className = "navIcon">
        {showNav ? <AiOutlineClose fontSize={30} onClick = {handleClick}/> : <FaBars fontSize={30} onClick = {handleClick}/>}
      </div>
      <ul className = "navListContainer">
        <Link className = "link" href = "/">Home</Link>
        <Link className = "link" href = "/gallery">Gallery</Link>
        <Link className = "link" href = "/about">About Me</Link>
        <Link className = "link" href = "/faq">FAQ</Link>
        <Link className = "link" href = "/contact">Contact</Link>
      </ul>
    </div>
  )
}

export default Navbar
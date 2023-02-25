import React from 'react'
import {BsFacebook, BsTwitter} from "react-icons/bs"
import {AiOutlineInstagram} from "react-icons/ai"
import {motion} from "framer-motion"


const Footer = () => {
  return (
    <>
    <div className = "footerContainer">
      <div className = "formContainer">
      <h3 className = "formHeader">Have any Questions? Leave a Message.</h3>
      <section className = "emailSection">
        <label for = "email" id = "email" className = "emailLabel" required>Email<span className = "required">*</span></label>
        <input type = "email" className = "inputField"/>
        <button type = "submit" className = "btnSubmit">Submit</button>
      </section>
      </div>
      <section className = "otherWorks">
        <h3 className = "footerOtherWorksHeading">Other Works</h3>
        <ul className = "worksLinks">
          <li>Maternity Shoot</li>
          <li>Wedding Photography</li>
        </ul>
      </section>
    </div>
     <section className = "iconsContainer">
        <ul className = "icons">
          <BsFacebook className = "icon" fontSize={30}/>
          <AiOutlineInstagram  className = "icon" fontSize={30}/>
          <BsTwitter  className = "icon" fontSize={30}/>
        </ul>
        <small>&copy;2023|Yu Photography. All Rights Reserved</small>
      </section>
    </>
  )
}

export default Footer 

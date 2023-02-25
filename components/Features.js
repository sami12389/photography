import React from 'react'
import Link from "next/link"
// import Image from "next/image"
// import phone from "../assets/download.png"
import {FaUserGraduate, FaBirthdayCake, FaUserTie} from "react-icons/fa"

const product = [
  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg", 
  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg", 
]


const Features = () => {
  return (
    <div className = "features">
      <section className = "featuresTop">
        <img
        src="https://headshots.nadiachapman.com/hs-fs/hubfs/Headshots/1000px%20on%20long%20edge/stop%20the%20scroll%20with%20nadia%20chapman%20photography.png?width=1042&height=1042&name=stop%20the%20scroll%20with%20nadia%20chapman%20photography.png"
        alt="Picture of the author"
        width={700}
        height={600}
        className = "phoneImg"
      />
      <div className = "featuresText">
        <h2 className = "featuresHeading">Stop the Scroll</h2>
        <p className = "featuresPara">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
           Ab at ex nisi inventore numquam placeat adipisci dolor sed 
           quis ut ea illo aperiam provident velit eveniet laudantium,
          voluptatibus laborum rerum!</p>
          <button type = "button" className = "featuresBtn btnMore">I'm interested</button>
      </div>
      </section>
    <div className = "featuresContainer">
      <Link href = "/gallery" className = "featureContainer">
        <img src = "https://images.unsplash.com/photo-1623461487986-9400110de28e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt = "" className = "featuresImage"/>
        <h2 className = "featuresCategory">Graduation</h2>
      </Link>
      <Link href = "/gallery" className = "featureContainer">
         <img src = "https://plus.unsplash.com/premium_photo-1661265909145-88d75177655c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt = "" className = "featuresImage"/>
         <h2 className = "featuresCategory">Birthday Parties</h2>
      </Link>
      <Link href = "/gallery" className = "featureContainer">
          <img src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt = "" className = "featuresImage"/>
          <h2 className = "featuresCategory">Headshots</h2>
      </Link>
    </div>
    </div>
  )
}

export default Features
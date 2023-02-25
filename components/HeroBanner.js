import React from 'react'
import {motion} from "framer-motion"
import {BsArrowRightCircleFill} from "react-icons/bs"


const products = [
  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg"
]

const product = [
  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
 
]


const HeroBanner = () => {
  const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

  return (
    <>
    <div className= "heroContainer">
      <section className = "heroText">
        <h2 className = "heroHeading">Kyu Photography</h2>
        <p className = "heroParagraph">Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Ab at ex nisi inventore 
          numquam placeat adipisci dolor sed quis ut
          ea illo aperiam provident velit eveniet
          laudantium, voluptatibus laborum rerum!
           numquam placeat adipisci dolor sed quis ut
          ea illo aperiam provident velit eveniet
          laudantium, voluptatibus laborum rerum!
          </p>
          <button type = "button" className = "btnMore">
            Learn More<motion.div><BsArrowRightCircleFill fontSize={53} className = "heroIcon"/></motion.div>
          </button>
      </section>
         <div className = "marquee">
                <div className = "imageContainer track">
                   {products.map((item)=>(
                   <img src = {item} alt = "" height = "250px" width = "250px" className = "heroImage"/>
                   ))} 
                </div>
          </div>
    </div>
     <motion.div 
    variants={container}
    initial="hidden"
    animate="visible"
    className = "categories"
    >
            {product.map((img)=>(
             <motion.li className="item" variants={item}>
            <img src = {img} alt = "" height = "200px" width = "200px" className = "heroCategories"/>
              </motion.li>
            ))} 
      </motion.div>
      </>
  )
}

export default HeroBanner
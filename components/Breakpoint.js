import React from 'react'

const products = [
  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg"
]

  const bgContainer = {
    backgroundImage: `url(${products[0]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: '50vh',
    width: '100vw',
    marginTop: "100px",
    backgroundAttachment: "fixed"
  }


const Breakpoint = () => {
  return (
    <div style = {bgContainer} className = "breakContainer">
    </div>
  )
}

export default Breakpoint
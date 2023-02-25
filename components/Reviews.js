import React from 'react'
import {motion} from "framer-motion"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {ImQuotesLeft} from "react-icons/im"


const product = [
  {
    name: "Samson Lemma",
    position: "Frontend Developer",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab at ex nisi inventore numquam placeat adipisci dolor sed quis ut ea illo aperiam provident velit eveniet laudantium, voluptatibus laborum rerum!",
    image:  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  },
  {
    name: "Samson Lemma",
    position: "Frontend Developer",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab at ex nisi inventore numquam placeat adipisci dolor sed quis ut ea illo aperiam provident velit eveniet laudantium, voluptatibus laborum rerum!",
    image:  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  },
  {
    name: "Samson Lemma",
    position: "Frontend Developer",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab at ex nisi inventore numquam placeat adipisci dolor sed quis ut ea illo aperiam provident velit eveniet laudantium, voluptatibus laborum rerum!",
    image:  "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  },
]


const Reviews = () => {
  return (
    <div className = "reviewsContainer">
            <>
            <ImQuotesLeft fontSize={30}/>
            <div className = "review">
            {product.map((review)=>(
            <div className="itemContainer">
            <p className = "reviewsText">{review.desc}</p>
            <img src = {review.image} alt = "profile" className = "profileImage"/>
            <h4 className = "reviewName">{review.name}</h4>
            <p className = "reviewPosition">{review.position}</p>
            </div>
            ))}
            </div>
            </>
         <div className = "featuresIconContainer">
            <AiOutlineArrowLeft className = "reviewIcon" fontSize={40}/>
            <AiOutlineArrowRight className = "reviewIcon" fontSize={40}/>
            </div>
    </div>
  )
}

export default Reviews

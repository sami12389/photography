import React from 'react'
import { Breakpoint, HeroBanner, Features, Reviews } from '../components'

const Home = () => {
  return (
    <>
    <HeroBanner/>
    <Breakpoint/>
    <Features/>
    <Breakpoint/>
    <Reviews/>
    </>
  )
}

export default Home


// export const getServerSideProps = async()=>{
//   const bannerQuery = '*[_type == "banner"]'
//   const bannerData = await client.fetch(bannerQuery);

//   const videoQuery = '*[_type == "video"]';
//   const videoData = await client.fetch(videoQuery);

//   const breakpointQuery = '*[_type == "breakpoint"]';
//   const breakpointData = await client.fetch(breakpointQuery);

//   const reviewsQuery = '*[_type == "testemonies"]';
//   const reviewsData = await client.fetch(testemoniesQuery);

//   const featuresQuery = '*[_type == "categories"]';
//   const featuresData = await client.fetch(categoriesQuery);

//   const footerQuery = '*[_type == "footer"]';
//   const footerData = await client.fetch(footerQuery);

//   const linksQuery = '*[_type == "links"]';
//   const linksData = await client.fetch(linksQuery);


//   return{
//     props:{
//       bannerData,
//       testemoniesData,
//       categoriesData,
//       footerData,
//       linksData,
//       videoData,
//       breakpointData
//     }
//   }
// }
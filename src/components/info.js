import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getData = graphql ` { info:site{  siteMetadata { title description author } } } `

const Info = () => (
    <StaticQuery
      query={getData}
      render={data => {
          const siteData = data.info.siteMetadata;
         
         const {title,author, description}  = siteData;

         return (
             <div>
                 <h2>Title : {title}</h2>
                 <p>Description : {description}</p>
                 <h3>Author : {author}</h3>
                 </div>
         )


      } }
    />
  )
  export default Info
  

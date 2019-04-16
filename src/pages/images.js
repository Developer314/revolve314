import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function images ({data}){
    const images = data.getData.edges;
    console.log(images);
    return (
        <Layout>
            <h1>Images</h1>
          {images.map(item=>{
              return <h3>{item.node.relativePath}</h3>
          })}
        </Layout>
    )
}

  export const query = graphql`
  {
    getData:allFile{
     edges {
       node {
         relativePath
       } 
     }
   }
   }
  `
  

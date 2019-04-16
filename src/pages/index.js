import React from "react"
import Layout from "../components/layout"
import C5Blocks from '../blocks/blocks'

export default function({ data }) {
  
  return (
    <Layout>
      <C5Blocks data={data.HomeData.edges[0].node.areaData.Main} />
     </Layout>
    )
}


export const query = graphql`
{
  HomeData:allConcrete5Pages(filter:{cID:{eq:"1"}}) {
  totalCount
  edges {
    node {
      areaData{
        Main {
          bID
          _xxxtable
          titleone
          titletwo
          titlethree
          link
          link_Title
          link_Page
          link_File
          link_Image
          link_URL
          link_Relative_URL
          btHandle
          content
        }
      }
    }
  }

 }
 }
`

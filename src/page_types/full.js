import React from 'react'
import Layout from '../components/layout'
import C5Blocks from '../blocks/blocks'
//import SEO from '../components/seo'

export default function({ pageContext: { page } }) {

  



  return (
    <Layout>
        <h1 style={{ color: 'red' }}>{page.node.cName}</h1>
        <p>{page.node.cDescription}</p>
        <C5Blocks data={page.node.areaData.Main} />
     </Layout>
    )
}

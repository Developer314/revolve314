import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function({ pageContext: { page } }) {
var  rawMarkup = {page.node.areaData.Main}
  return (

      <Layout>
        <SEO title={page.node.cName} keywords={[`gatsby`, `application`, `react`]} />
        <h1 style={{ color: 'red' }}>{page.node.cName}</h1>
        <p>{page.node.cDescription}</p>
        <div dangerouslySetInnerHTML={ __html: rawMarkup } >  </div>


      </Layout>
    )
}

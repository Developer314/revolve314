const path = require('path')
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allConcrete5Pages {
   edges {
     node {
       cID
       cName
       path
       template
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
       attributes {
         header_extra_content
         is_featured
         exclude_page_list
         tags
       }
     }
   }
 }
    }
  `)
    .then(result => {
      result.data.allConcrete5Pages.edges.forEach(({ node }) => {

        if(node.path !=''){
        createPage({
          path: `${node.path}`,
          component: path.resolve(`./src/page_types/${node.template}.js`),
          //component: path.resolve(`./src/page_types/full.js`),
          context: {
            page: {node},
          },
        })
      }
      })
    })
    .catch(err => console.log(err))
}

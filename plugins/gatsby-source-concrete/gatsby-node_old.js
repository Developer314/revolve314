
import createConcreteNodes from './nodes/index.js';
const fetch = require("node-fetch")
const queryString = require("query-string")

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }, configOptions ) => {

  const { createNode } = actions

  //console.log("Consoleing",configOptions);
  // Gatsby adds a configOption that's not needed for this plugin, delete it
  //delete configOptions.plugins
  // Helper function that processes a photo to match Gatsby's node structure
  const processPage = page => {
    const nodeId = createNodeId(`concrete-page-${page.cID}`)
    const nodeContent = JSON.stringify(page)
    const nodeData = Object.assign({}, page, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `Concrete5Pages`,
        content: nodeContent,
        contentDigest: createContentDigest(page),
      },
    })

    return nodeData
  }

  // Convert the options object into a query string

  const apiOptions = queryString.stringify(configOptions)
  console.log("Consoleing",configOptions);
  // Join apiOptions with the Pixabay API URL
  const apiUrl = configOptions.protocol+'://'+configOptions.baseUrl+'/gatsby/pages'



  // Gatsby expects sourceNodes to return a promise
  return (
    // Fetch a response from the apiUrl
    fetch(apiUrl)
      // Parse the response as JSON
      .then(response => response.json())
      // Process the response data into a node
      .then(data => {
        // For each query result (or 'hit')
        data.forEach(page => {
          // Process the photo data to match the structure of a Gatsby node
          const nodeData = processPage(page)
          // Use Gatsby's createNode helper to create a node from the node data
          createNode(nodeData)
        })
      })
  )
}

import React from 'react'
export default function({data}) {
console.log(data);
  return (

      <div>
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
        

      </div>
    )
}

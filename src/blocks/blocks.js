import React from "react"

import ContentBlock from '../blocks/content'
import HomeHero from '../blocks/home_hero'
import Image from '../blocks/image'

export default function({ data }) {

  const Blocks = [];
  data.forEach((item, key) =>{

    switch(item.btHandle){
      case "content":
        if(item.content !=''){
          Blocks.push(<ContentBlock data={item} />);
        }
      break;
      case "home_hero":

          Blocks.push(<HomeHero data={item} />);
        
      break;
      case "image":
        if(item.content !=''){
          Blocks.push(<Image data={item} />);
        }
      break;
    }

  });



  return (
    <>

      {Blocks}
     </>
    )
}

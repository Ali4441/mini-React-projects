import React, { useRef } from 'react'
import Card from './Card'


const data = [
  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    filesize: ".9mb",
    close: false,
    tag: { isOpen: true, tagTitle: "Download Now", },
    tagColor: "bg-blue-600",
  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    filesize: ".9mb",
    close: true,
    tag: { isOpen: true, tagTitle: "Uploads", },
    tagColor:
      "bg-green-600",



  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    filesize: ".9mb",
    close: true,
    tag: { isOpen: false, tagTitle: "Uploads", },
    tagColor: "bg-red-600",

  }

];



const FourGrund = () => {

  const roko = useRef(null);



  return (
    <div ref={roko} className='fixed z-[3] w-full top-0 left-0 h-full '>
      {data.map((item, index) => (
        <Card key={index} data={item} refrence={roko} />
      ))}

    </div>
  )
}

export default FourGrund

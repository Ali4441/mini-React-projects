import React from 'react'
import { IoArrowUpCircleOutline } from "react-icons/io5";

const LandingPage = () => {
  return (
    <div className='w-full h-screen  bg-zinc-900  pt-1 '>



      <div className='textStructure mt-40 px-20'>

        {["we Create", "eye - opening", "peresentations"].map((item, index) => {
          return (
            <div className='masker '>
              <div className='w-fit flex items-center'>
                {index === 1 && (<div className='w-[8rem] h-[4.1vw] bg-blue-500 rounded-md overflow-hidden mr-1'></div>)}
                <h1 className='uppercase text-[5.7vw] font-myfont2 leading-[5.5vw] tracking-tighter font-bold '> {item} </h1>
              </div>

            </div>
          )
        })}

      </div>

      <div className='border-t-[1px] border-zinc-800 mt-[5rem] flex items-center justify-around pt-[1rem] leading-3'>

        {["Presentation and storytelling agency", "For innovation teams and global brands"].map((item, index) => {
          return (
            <h3 className='text-zinc-600 capitalize'>{item} </h3>
          )
        })}

        <div className='flex gap-1 items-center justify-around cursor-pointer '>
          <button className={`w-[12rem] h-[2rem] border-[2px] border-zinc-700 rounded-full font-medium uppercase ${"hover:text-white"} text-zinc-700 hover:bg-black `}>start the Project</button>
          <IoArrowUpCircleOutline size={"2.3rem"} className={`text-zinc-700 rotate-45  ${"hover:text-white"} `} />

        </div>

      </div>
    </div>
  )
}

export default LandingPage

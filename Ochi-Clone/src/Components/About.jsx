import React from 'react'
import { FaArrowUp } from "react-icons/fa6";
import cuple from '../assets/cuple.jpg'

const About = () => {
  return (
    <div className='w-full h-auto bg-[#cce968] rounded-md pt-1 '>
      <div className='max-w-[1200px] m-[5rem]'>

        <p className='text-zinc-700  items-start leading-[3.5rem] text-[3.10rem] font-myfont1 '>We craft category-defining presentations, brand identities, and digital experiences that <span className='underline '>drive funding</span>, <span className='underline '>sales</span>, and <spna className="underline ">market leadership.</spna></p>


      </div>
      <div className='border-t-[1px] border-b-[1px] border-zinc-400'></div>


      <div className=' relative flex items-center  flex-row justify-between
       max-w-[1200px] m-[5rem] text-black' >
        <div className='w-[800px] h-[400px]'>
          <p>What you can expect:</p>
        </div >
        <div className='w-[400px] h-[400px]'>
          <p className=' mb-10'>We don't just make slides. We shape strategy, storytelling, design scalable brand systems, and build presentations that make people say: "I want in!"</p>
          <p className=' mb-10'>Our clients make the world go round – from deep tech, aerospace and robotics to music festivals and Michelin-starred restaurants.</p>

          <p className=' mb-10'>
            Since 2019, we've been the go-to partner for Yahoo, Medallia, Uber, Lexus, Salience Labs, Trawa and AllThingsGo.

          </p>
        </div>
        <div className='flex relative w-[400px] h-[400px] '>
          <ul className='absolute bottom-20 right-0'>S:
            <li>
              <a href="#">Instagram</a></li>
            <li><a href="#">Behance</a></li>
            <li><a href="#">facebook</a></li>
            <li><a href="#">Liinkedn</a></li>
          </ul>
        </div>
      </div>

      <div className='border-t-[1px] border-b-[1px] border-zinc-400'></div>


      <div className='flex items-center  flex-row justify-around
       max-w-[1500px] p-10  ' >


        <div className='w-[60%] '>
          <div className='flex flex-col gap-5'>
            <h1 className='text-[4rem] text-black font-myfont1'>How we can help:</h1>
            <div className='flex items-center justify-around flex-row w-[12.5rem] h-[4rem] rounded-full bg-zinc-800 '>
              <p className='tex-[4rem] font-semibold uppercase'>read more</p>


              <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800 text-zinc-800 ${'hover:bg-white && bg-zinc-900'}`}>
                <FaArrowUp size={'1rem'} className='rotate-45 ' />
              </div>
            </div>

          </div>


        </div>
        <div className='w-[60%] h-[70vh] rounded-md mt-5 '>
          <img src={cuple} alt="Couple" className="w-full h-full object-cover rounded-md" />
        </div>


      </div>
    </div>
  )
}

export default About

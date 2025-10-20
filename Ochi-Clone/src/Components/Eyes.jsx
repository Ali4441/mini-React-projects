import React, { useState } from 'react'

const Eyes = () => {
  const [rotate, setRotate] = useState();

  window.addEventListener("mousemove", (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    let X = mouseX - window.innerWidth / 2;
    let Y = mouseY - window.innerHeight / 2;


    let angle = Math.atan2(Y, X) * 180 / Math.PI;
    setRotate(angle.toFixed(2));

    console.log(`Angle: ${angle.toFixed(2)} degrees`);
  });



  return (
    <div className='Eyes w-full h-screen overflow-hidden'>
      <div className='relative w-full h-screen bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-center '>


        {/* Fixed red box */}
        <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/2 flex items-start justify-center flex-row gap-10'>

          <div className="w-[20vw] h-[20vw] bg-white rounded-full flex items-center justify-center">
            <div className="w-[10vw] h-[10vw] bg-black rounded-full relative ">
              <div style={{
                transform: `translate(-50%, -50%) rotate(${rotate - 180}deg)`
              }} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-5 h-5 bg-white rounded-full"></div>

              </div>
              <span className="absolute top-1/2 right-[37%] -translate-y-1/2 text-xl text-white">play</span>
            </div>
          </div>


          <div className="w-[20vw] h-[20vw] bg-white rounded-full flex items-center justify-center">
            <div className="w-[10vw] h-[10vw] bg-black rounded-full relative flex items-center justify-center">
              <div style={{
                transform: `translate(-50%, -50%) rotate(${rotate - 180}deg)`
              }} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-5 h-5 bg-white rounded-full"></div>
              </div>
              <span className="absolute top-1/2 right-[37%] -translate-y-1/2 text-xl text-white">play</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Eyes

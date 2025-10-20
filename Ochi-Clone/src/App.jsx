import React from "react"
import Navbar from "./Components/Navbar"
import LandingPage from "./Components/LandingPage"
import Marqure from "./Components/Marqure"
import About from "./Components/About"
import Eyes from "./Components/Eyes"


function App() {


  return (
    <div className=" relative w-full min-h-screen text-white bg-zinc-900 ">
      <Navbar />
      <LandingPage />
      <Marqure />
      <About />
      <Eyes />


    </div>
  )
}

export default App

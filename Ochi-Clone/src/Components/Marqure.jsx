import { motion } from "framer-motion";

const Marqure = () => {

  return (
    <div className="w-full py-20 bg-[#004d43] rounded-t-md overflow-hidden">
      <div className=" flex whitespace-nowrap overflow-hidden border-t-[1px] border-b-[1px]  border-zinc-300  ">

        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="uppercase font-extrabold leading-none text-[32.8vh] text-white pr-10"
        >
          we are ochi
        </motion.h1>

        {/* 2nd copy (to make it seamless) */}
        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="uppercase font-extrabold leading-none text-[32.8vh] text-white pr-10"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  )
}

export default Marqure

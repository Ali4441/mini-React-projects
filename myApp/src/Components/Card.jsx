import React from 'react'
import { PiDownloadSimpleBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, refrence }) => {
  return (
    <motion.div
      drag
      dragConstraints={refrence}
      whileDrag={{ scale: 1.3 }}
      className="relative w-60 h-72 bg-zinc-900/90 rounded-[50px] text-white p-8 m-5 overflow-hidden"
    >
      {/* Description */}
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>

      {/* Footer */}
      <div className="footer absolute bottom-0 w-full left-0">
        {/* Size + Icon */}
        <div className="flex items-center justify-around py-3 mb-1">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose />
            ) : (
              <PiDownloadSimpleBold size="0.7rem" color="#fff" />
            )}
          </span>
        </div>

        {/* Tag Section */}
        <div
          className={`flex items-center justify-center w-full py-4 ${data.tag.isOpen ? data.tagColor : ""
            }`}
        >
          <h3 className="text-sm font-semibold">
            {data.tag?.isOpen ? data.tag.tagTitle : ""}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;

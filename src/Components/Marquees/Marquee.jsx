import React from 'react'
import {motion} from "framer-motion"


const Marquee = ({ imagesurl, direction  }) => {
  return (
    <div className="flex w-full gap-24 overflow-x-hidden bg-zinc-100">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 17, repeat: Infinity }}
        className="flex flex-shriink-0 gap-40 py-10 pr-40"
      >
        {imagesurl.map((url, index) => (
          <img key={index} className="w- h-5 flex-shrink-0" src={url} alt="" />
        ))}
      </motion.div>
      {/* <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shriink-0 gap-40 py-10 pr-40"
      >
        {imagesurl.map((url, index) => (
          <img key={index} className="w- h-5 flex-shrink-0" src={url} alt="" />
        ))}
      </motion.div> */}
    </div>
  );
};

export default Marquee
import React, { useState } from "react";
import { motion } from "framer-motion";
import Product from "./Product";

const Products = () => {
  var products = [
    {
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, tenetur.",
      live: true,
      case: false,
    },
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, tenetur.",
      live: true,
      case: false,
    },
    {
      title: "Creative Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, tenetur.",
      live: true,
      case: true,
    },
    {
      title: "Backend Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, tenetur.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="flex relative flex-col  mt-1">
      {products.map((product, index) => (
        <Product mover={mover} key={index} index={index} product={product} />
      ))}
      {/* <div className="w-full h-full  absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animaate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window  w-[32rem] left-[45%] absolute h-[23rem]  overflow-hidden  "
        >
          <motion.div
            animate={{ y: pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full   h-full bg-sky-200 scene"
          ></motion.div>
          <motion.div
            animate={{ y: pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full  h-full bg-sky-300 scene"
          ></motion.div>
          <motion.div
            animate={{ y: pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full   h-full bg-sky-200 scene"
          ></motion.div>
          <motion.div
            animate={{ y: pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full  h-full bg-sky-300 scene"
          ></motion.div>
        </motion.div> //window ends here
   
      
      </div> */}

      <div
        id="window container"
        className="absolute w-full h-full   pointer-events-none top-0"
      >
        {/* <div
          id="window "
          className="w-96 h-[17.7rem] bg-white left-[45%] absolute -translate-x[-50%] -translate-y-[-50%]  overflow-hidden"
        >
          <div id="scene " className="w-full h-full bg-red-500 "></div>
          <div id="scene " className="w-full h-full bg-green-500 "></div>
          <div id="scene " className="w-full h-full bg-blue-500 "></div>
          <div id="scene " className="w-full h-full bg-slate-500 "></div>
        </div> */}
      </div>
    </div>
  );
};

export default Products;

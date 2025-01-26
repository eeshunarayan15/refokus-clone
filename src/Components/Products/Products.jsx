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
    <div className="flex relative flex-col gap-2 mt-1">
      {products.map((product, index) => (
        <Product mover={mover} key={index} index={index} product={product} />
      ))}
      <div className="w-full h-full  absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animaate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="w-[32rem] left-[45%] absolute h-[23rem]  window overflow-hidden  "
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
        </motion.div>
      </div>
    </div>
  );
};

export default Products;

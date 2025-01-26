import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Work = () => {
  // ,scrollYProgress,scrollX,scrollXProgress,scrollY
  //  var images =;
  const [images, setImages] = useState([
    {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "50%",
      left: "30%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661593486413-d279b1a02e28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "25%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "65%",
      left: "35%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/62df9251ae9124d9d726bcb9/6346b68e7f858311216e120b_V2%20Tools%20OpenGraph%20Final.jpg",
      top: "65%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/62df9251ae9124d9d726bcb9/6346b68e7f858311216e120b_V2%20Tools%20OpenGraph%20Final.jpg",
      top: "53%",
      left: "47%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "55%",
      left: "52%",
      isActive: false,
    },
  ]);
  const { scrollYProgress } = useScroll();
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {

  //   showNHideImages(Math.floor(latest*100));
  // });
  // function showNHideImages(scrollval) {
  //   console.log("Page scroll: ", scrollval);

  // switch (scrollval) {
  //   case 1:
  //     console.log("abcd");
  //     break;
  //   case 3:
  //     console.log("abcd1");
  //     break;

  //   default:
  //     break;
  // }
 
  // }
  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) => 
        prev.map((item, index) => 
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            :{...item,isActive:true}
        )
      )
      
    }
     console.log(Math.floor(data*100))
     switch (Math.floor(data * 100)) {
       case 0:
         imagesShow([]);
         break;
       case 1:
         imagesShow([0, 1]);
         break;
       case 2:
         imagesShow([0, 1, 2]);
         break;
       case 3:
         imagesShow([0, 1, 2, 3]);
         break;
       case 4:
         imagesShow([0, 1, 2, 3, 4]);
         break;
       case 5:
         imagesShow([0, 1, 2, 3, 4]);
         break;
       case 6 :
         imagesShow([0, 1, 2, 3, 4]);
         break;
       default:
         break;
     }
   });

  return (
    <div className="mt-10">
      <div className="relative max-w-screen-xl mx-auto bg-zinc-800 p-6">
        <h1 className="text-[30vw] text-white leading-none text-center font-medium tracking-tight select-none">
          Work
        </h1>
        <div className=" absolute top-0 left-0 w-full h-full ">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  className="w-60 rounded-lg absolute -translate-x-[50%] translate-y-[-50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work
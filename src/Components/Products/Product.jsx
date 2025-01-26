import React from 'react'
import Button from '../Button/Button'

const Product = ({product,mover,index}) => {
  return (
    <div className="w-full py-20 h-[23rem] hover:bg-purple-500 text-white ">
          <div onMouseEnter={() => {mover(index)
              
      }} className="max-w-screen-xl mx-auto flex items-center justify-between  ">
        <h1 className="text-6xl capitalize font-semibold">{product.title}</h1>
        <div className="details w-1/3">
                  <p className="mb-10">{product.description}</p>
                  <div className='flex items-center gap-5'>
                      
          {product.live && <Button />}
          {product.case && <Button btn='Case Study' />}
                  </div>
        </div>
      </div>
    </div>
  );
}

export default Product
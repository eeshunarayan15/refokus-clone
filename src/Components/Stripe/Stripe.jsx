import React from 'react'

const Stripe = ({url,number}) => {
  return (
      <div className='mt-20 bg-zinc-100 w-[16.66%] px-4 py-3  border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-700 flex justify-between items-center'>
        <img className='h-5' src={url} alt="" />
          <span>{ number}</span>
    </div>
  )
}

export default Stripe
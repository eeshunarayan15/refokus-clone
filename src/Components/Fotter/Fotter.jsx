import { A } from 'caniuse-lite/data/agents';
import React from 'react'

const Fotter = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 flex-gap-32 flex">
      <div className="basis-1/2">
        <h1 className="text-[14rem] text-zinc-100 leading-none tracking-tight">
          refokus.
        </h1>
      </div>
      <div className="basis-1/2  flex gap-5 ">
        <div>
          <h4 className="text-zinc-600 capitalize">socials</h4>
          {["instagram", "twitter(x?)", "LinkedIn"].map((item, index) => (
            <a key={index} className="block mt-3 capitalize text-zinc-600 " href="">
              {item}
            </a>
          ))}
        </div>
        <div>
          <h4 className="text-zinc-600 capitalize">socials</h4>
          {["instagram", "twitter(x?)", "LinkedIn"].map((item, index) => (
            <a key={index} className="block mt-3 capitalize text-zinc-600 " href="">
              {item}
            </a>
          ))}
              </div>
              <div className='basis-1/2'>
                  <p className='text-zinc-100'>Refokus is pionerring digital agency and empowered by technical</p>
              </div>
      </div>
    </div>
  );
}

export default Fotter
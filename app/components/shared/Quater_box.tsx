import React from 'react'
import { FC } from "react";

const  Quater_box:FC<{text :string,heading:string,Number:string|number}> = ({heading,text ,Number}) => {
  return (
    <>
      {/* box 1 */}
      

<div className='border  rounded-lg flex-1 px-7 py-14 my-10  flex  flex-col justify-center relative'>
<h4 className='font-bold text-2xl'>{heading}</h4>
<p className='text-slate-600 mt-2'>{text}</p>
<div className='text-[170px] absolute -top-12 text-gray-200 right-10 font-bold -z-20'>{Number}</div>
</div>
     
    
    
    </>
  )
}

export default Quater_box
"use client"
import React from 'react'
import { useState } from "react";
import Image from "next/image";
import Data from "../shared/Box_data";
import { FaStar } from "react-icons/fa";

import {BiRightArrowAlt} from "react-icons/bi";
import {HiArrowRight} from "react-icons/hi";

function Functionality() {
    let [course, currentcourse] = useState("bcc");
    let selectedcourse = Data.find((items) => items.slug === course);
    let img = selectedcourse?.coursepic;
    let imgname = selectedcourse?.name;
    let calc = +Math.random().toFixed(1);
    calc *= 4 + 1;
    if (calc < 3) {
      calc *= 2 + 1;
    }
  
  return (
    <>
     {/* Buttons */}
     <div className="overflow-auto">

<div className="my-10 space-x-3 w-[100%] flex ">
  {Data.map((items) => (
      <>
      <button
        className="border border-blue-50 py-3 px-4 rounded-xl shrink-0 font-semibold text-lg 
        hover:scale-105 hover:shadow-lg hover:bg-blue-50 hover:text-blue-700 shadow-inner shadow-blue-50  text-black-800 "
        onClick={() => currentcourse(items.slug)}
        >
        {items.name}
      </button>
    </>
  ))}
  ;
</div>
  </div>

{/* box */}
<div className="md:border max-w-full py-10  md:mx-5  md:px-11 border-black rounded-2xl h-[1400px] md:h-[1250px] lg:h-[900px]">
    {/* text */}
<div>
      <h4 className="text-lg font-medium text-blue-800 ">
        Specialized Courses
      </h4>
      <h2 className="text-3xl sm: md:text-4xl py-2 font-semibold">{`${selectedcourse?.name}`}</h2>
      <p className="text-slate-500">{selectedcourse?.Quote}</p>
      <h4 className="mt-10 font-medium text-base text-black md:text-lg pb-6">
        Avarage Salary Of {selectedcourse?.name} In International
        Market
      </h4>
    </div>

    {/* for flex parent div */}
    <div className="flex lg:flex-row  sm:flex-col flex-col md:relative  flex-wrap">

    
  {/* text */}
  {/* left side  */}
  <div className="max-w-5xl basis-3/6  ">
  
    {/* salary div */}
    <div className="">
      {/* average skill */}
      {/* for responsivenes */}
      <p className="sm:inline md:hidden text-md font-semibold  px-1 mb-3 text-slate-600 ">Average Skill </p>

      <div className="flex  ">
        <div className="w-1/3 p-2 rounded-md  bg-gray-200  text-sm   ">
        <p className="sm:inline md:hidden px-2  ">{`$ ${selectedcourse?.intitialsal} `}</p>

          <p className="hidden md:inline px-2 ">Average Skill</p>
        </div>
        <div className="self-center  px-3">

          <p className="hidden md:inline px-2  lg:inline">{` $ ${selectedcourse?.intitialsal} `}</p>
        </div>
      </div>
      {/* for responsivenes */}
      <p className="sm:inline md:hidden  text-md font-semibold px-1 mt-4 text-slate-600 ">{selectedcourse?.name}</p>

      {/* emerging skill */}
      <div className="flex">
        <div className="w-3/4 p-2 rounded-md bg-blue-700 text-white my-3 ">
          <p className="sm:inline md:hidden px-2 ">{` $ ${selectedcourse?.coursesal} `}</p>
          <p className="hidden md:inline px-2 ">{selectedcourse?.name}</p>
        </div>
        <div className="self-center px-3">
          <p className="hidden md:inline lg:inline">{`$ ${selectedcourse?.coursesal} `}</p>
        </div>
      </div>
    </div>
    {/* salary end */}
    {/* job opemning start */}
    <div className="my-5">
      <p className="text-slate-700 text-sm">Projected 10 year growth: <span className="text-slate-800 font-semibold">+{calc*3}%***</span></p>
    </div>
      {/* job opemning end */}
      <hr></hr>


  </div>
    {/* review */}
     <div className="flex justify-center md:justify-start  md:absolute left-0 top-44   md:top-[750px] lg:top-32 mt-14  order-3 md:2 ">
    <div className="flex flex-col  md:flex-row max-w-[16rem] md:max-w-lg gap-5  lg:inline-flex items-center   ">
      <div className="w-[50%] md:w-1/4 h-100">
        <Image src={selectedcourse?.avatarpic} alt="avatar" className="rounded-[100%] w-[640px]  sm:w-[540px] h-[120px] object-fill" height={"52"} width={"52"} />
      </div>
      {/* review text */}
       <div className="w-2/3 shrink-0 text-center md:text-left my-5 md-my-1">
        {selectedcourse?.review}
      </div>
    </div>
    </div> 

  {/* right side  */}
  <div className="max-w-2xl  self-start lg:self-center ">

  {/* box started */}

  <div className="max-w-sm  border-gray-200 border-2 shadow-md md:shadow-2xl rounded-lg my-5  md:inline-block over:scale-105 hover:shadow-blue-100 pb-4">
    {/* image */}
    <div className="overflow-hidden rounded-t-lg object-cover">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image
        src={img}
        alt={imgname}
        width={1110}
        height={724}
        className=""
      />
    </div>
    {/* bottom container */}
    <div>
      {/* img */}
      <div className="flex items-center relative  ">
        <div className="w-14 h-14"></div>
        <div className="w-50 absolute md:-left-1 -left-2 top-1 ">
          <Image
            src="/favicon.png"
            alt="panaverse-logo"
            width="100"
            height={"80"}
          />
        </div>
        <p className="text-slate-400 absolute top-6 left-[51px]">
          Panaverse Dao
        </p>
      </div>

      {/* text */}
      <div className="mx-4 md:mx-6">
        {/* heading */}
        <h3 className="text-lg md:text-xl pb-2  font-semibold ">{`${selectedcourse?.name}:`}</h3>
        {/* text */}
        <div className="">
          <p className="text-slate-500 text-sm md:text-md pb-2">
            Skill You Will Gain :
            <span className="pl-3">
              {selectedcourse?.skillsyougain.join(` , `)}
            </span>
          </p>
        </div>
        {/* rating */}
        <div className="flex gap-x-3 items-center py-2 ">
          <div className="text-slate-500">
            <span className="font-bold text-black">{calc}</span>
          </div>
          <div className="text-blue-700">
            <FaStar />
          </div>
          <div className="text-slate-500">
            <p className="">({calc * 100 + 500}K reviews )</p>
          </div>
        </div>

        <div>
          <p className="text-slate-500 text-center font-medium mt-2 text-sm ">
            Beiginer <span className="font-bold text-black">.</span> Earn while you learn <span className="font-bold text-black">.</span> 6 months
          </p>
        </div>
        
      </div>
      
    </div>
    
    
  </div>
  {/* more */}
  <div className="flex items-center px-1 py-3 font-semibold gap-1 hover:underline decoration-blue-700 justify-end ">
<div >

  <p className="text-black-700 text-lg md:text-lg " >Explore more </p>
</div>
<div className="self-center mt-1 text-black-700 text-md md:text-lg">
<HiArrowRight />
</div>
  
  </div>

   </div>

  {/* box ended */}
  </div>
</div>

    </>
  )
}

export default Functionality
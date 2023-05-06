import React from "react";
import Wrapper from "../shared/Wrapper";
import HeroIamge from "/public/assets/heroimg1.png";
import Image from "next/image";
import Button from "../shared/Button";

function Hero() {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* left side */}
          <div className="flex-1">
            <h4 className="text-xl font-medium text-blue-800 mt-4">
              Join a 13 Trillion Dollar Industry with 5 Billion Users
            </h4>
            <h1 className="text-3xl sm: md:text-4xl font-bold pt-2">
              Certified Web 3.0 and Metaverse Developer: A Nationwide building
              Program
            </h1>
            <p className="py-5 text-slate-700 text-base leading-7">
              The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
              Panaverse DAO is a movement to spread these technolgies globally.
              It is community of Web 3 and Metaverse developers, designers,
              trainers, startup founders and service providers.
            </p>
            <div className="">

         <Button text={"Enroll now"} />
            </div>
          </div>

          {/* right side */}
          <div className="flex-1 px-auto" >
            <Image src={HeroIamge} alt="Hero image" 
             />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Hero;

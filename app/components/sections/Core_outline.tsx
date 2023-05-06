import React from 'react'
import Wrapper from '../shared/Wrapper'
import Button from '../shared/Button'
import Quater_box from '../shared/Quater_box'

function Core_outline() {
  return (
    <>
<section>
{/* text */}
    <Wrapper >
      <div className='max-w-lg'>

      <h4 className='text-lg font-medium text-blue-800 mt-4'>Programs of studies</h4>
<h2 className="text-3xl sm: md:text-3xl font-bold">Core Courses
</h2>
<p className="py-3 text-slate-700 text-base leading-7">Every Participant of the program will start by completing the following three core Quaters</p>
<div>

<Button text='Learn more' ></Button>

</div>
      </div>

{/* boxes */}
<div className='flex gap-x-6 gap-y-1 my-5 flex-col md:flex-row'>

  {/* box 1 */} 

<Quater_box text={"CS-101 Object Oriented Programming Using Typescipt"} heading={"CS 101"} Number="I" />
{/* box 2 */}

<Quater_box text={"Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"} heading={"CS 201"} Number={"II"} />

{/* box 3  */}

<Quater_box text={"$-101 Dollar Making Bootcamp - Full Stack  Tempelate and Api Product Development"} heading={"CS 301"} Number={"III"} />



</div>
      
    </Wrapper>
</section>
    
    </>
  )
}

export default Core_outline
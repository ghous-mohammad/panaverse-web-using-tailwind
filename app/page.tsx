import React from 'react'
import Hero from './components/sections/Hero'
import Core_outline from './components/sections/Core_outline'
import Specialized_track from './components/sections/Specialized_track'
import Link from 'next/link'




export default function page() {
  return (
    <>
    <main>

 <Hero />

 <Core_outline />

 <Specialized_track />
 {/* <Link href="./course.tsx" >helo</Link> */}
 
    </main>
    
    </>
  )
}

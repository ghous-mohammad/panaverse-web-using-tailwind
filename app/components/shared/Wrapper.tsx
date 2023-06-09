
import { FC } from "react";


const Wrapper: FC<{children:React.ReactNode}>=({children}) =>{
  return (
    <>
    <div className="max-w-screen-xl mx-auto px-4 md:px-12 ">

{children}

    </div>
    </>
   
  )
}

export default Wrapper
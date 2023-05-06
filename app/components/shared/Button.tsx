import { FC } from "react"

 const Button:FC<{text:string}> = ({text})=> {
  return (
    <button className="font-bold text-white bg-blue-800 py-4  px-7  hover:scale-105 hover:shadow-lg rounded-full">
        {text}
    </button>
  )
}

export default Button
import Image from "next/image";
import Logo from "/public/Panaverse-Logo.png";
import Wrapper from "../shared/Wrapper";
import Link from "next/link";
import Data from "../shared/Box_data"



function Header() {
  return (
    <>
    <section className="">
    

      <Wrapper>
        <div className="z-50 relative ">
        <header className="flex  justify-between py-4 top-0 sticky items-center  ">
          <div>
            <Image src={Logo} alt="panaverse logo" width="120" height={"120"} />
          </div>
<div className="flex items-center ">

          <ul className="flex items-center space-x-4 text-lg font-medium lg:mx-2">
            <li className="hidden md:inline">Home</li>
            <button className="btn btn-ghost  dropdown dropdown-end">
courses

      <ul
              tabIndex={0}
              className="dropdown-content dropdown-left
             menu p-2 shadow bg-base-100 rounded-lg w-50 md:w-80"
              >
                {Data.map(data=>( 
                  <>

        <li className="">
          <Link href={`../course/`+ data.slug} key={data.slug} > 
          {data.name}
          </Link>
        </li>
          
                  </>
                ))}
              
             
            </ul>
    
</button>

            <li className="hidden md:inline">About </li>
            <li className="hidden md:inline">Syllabus</li>
           
          </ul>
        


          <button className="btn btn-square  btn-ghost dropdown md:hidden dropdown-end ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 28 28" 
              className="inline-block w-5 h-5 stroke-current"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
                ></path>
            </svg>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About </a>
              </li>
              <li>
                <a>Syllabus</a>
              </li>
            </ul>
          </button>
          </div>
        </header>
        </div>
      </Wrapper>
      
              </section>
    </>
  );
}

export default Header;


import useSWR from "swr";

import Wrapper from "../shared/Wrapper";
import Functionality from "../shared/Functionality";


function Specialized_track() {

  //      let a= function(){
  // setcourse(slug)

  return (
    <>
      <section>
        <Wrapper>
          <div className="mt-24">
            {/* text */}
            <div className="max-w-lg">
              <h4 className="text-3xl sm: md:text-3xl font-bold">
                Specialized Tracks :
              </h4>
              <p className="py-3 text-slate-500 text-base leading-7">
                After Compeleting Core Track The Participant Will Have To Choice
                On Choose From One Or More Specialized courses
              </p>
            </div>
<Functionality />
                 
          </div>
        </Wrapper>
      </section>
    </>
  );
}

export default Specialized_track;

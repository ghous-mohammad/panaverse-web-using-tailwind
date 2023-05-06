// pages/courses/[slug].js

import Data from "../shared/Box_data"

function Course({ course }:any) {
    console.log(course);
    
  return (
    <div>
     {course.name}
   
    </div>
  );
}

export async function getStaticPaths() {
  const paths = Data.map((course) => ({
    params: { slug: course.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }:any) {
  const course = Data.find((course) => course.slug === params.slug);

  return { props: { course } };
}

export default Course;

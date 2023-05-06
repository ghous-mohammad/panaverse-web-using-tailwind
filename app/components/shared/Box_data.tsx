
import blockchain from "/public/assets/blockchain.jpg"
import AI from "/assets/artificail-intelligence.png"
import  BIO  from "/assets/bio-informatics.png"
import  CNC from "/assets/cloud-computing.png"
import IOT from "/assets/11.png"
import { ReactNode } from "react"


type Obj_Data = {
  slug:string;
  name:string|any;
  coursepic:Obj_Data|undefined|string|any;
  avatarpic:string|any;
  intitialsal:number;
  coursesal:number;
  skillsyougain:string[]|ReactNode|any;
  Quote:string;
  review:string

}

const Data:  Obj_Data[] = [{
  slug:"bcc",
  name:"Blockchian Development", 
  coursepic:"/assets/blockchain.jpg",
  avatarpic:"/assets/avatar/avatar-pic-9.jpg",
  intitialsal:29909,
  coursesal:1500000,
  skillsyougain:["Smart Contract","Ethereum","Blockchains","Solidity"],
  review:"This was my first time taking a course in this format and it far exceeded my expectations",
  Quote:" Learn how the blockchain is leading to a paradigm shift in decentralized application programming"

},
{  
  slug:"ai",
  name:"Aritificial Intelligence", 
  coursepic:"/assets/artificial-intelligence.png",
  avatarpic:"/assets/avatar/avatar-pic-6.jpg",
  intitialsal:4000,
  coursesal:800000,
   skillsyougain:["Basics of AI","Intoduction to Data Science","GitHub Services","MLOps","Open Ai models","Python","Deep Learning","Machine Learning"],
  review:"I directly applied the concepts and skills I learned from my courses to an exciting new project at work",
  Quote:"Learning from understanding basic of AI to mastry of Deep Learning, Machine Learning"
},{
  slug:"g&b",
  name:"Geonomics And Bionomics", 
  coursepic:"/assets/bio-informatics.png",
  avatarpic:"/assets/avatar/avatar-pic-3.jpg",
  intitialsal:45000,
  coursesal:120000,
   skillsyougain:["Python","Python Libraries","Computer programming","Probability & statistic","Bioinformatics Algorithms "],
  review:"",
  Quote:`This course will focus on learning the basics of the Python programming language through
  genomics examples.`
  

},{
  slug:"na",
  name:"Network Automation", 
  coursepic:"/assets/blockchain.jpg",
  avatarpic:"/assets/avatar/avatar-pic-5.jpg",
  intitialsal:42000,
  coursesal:6700000,
   skillsyougain:["networking","IT Infrastructure","Network Programmability","CCNA"],
  review:`This was a wonderful class. In addition to giving the instructor kudos, I'd like to call out what a nice facility it was.`,
    Quote:`Preparation for CCNA exam and gain expertise in modern networking and IT infrastructure with comprehensive course on networking basics and solutions.`

},{
  slug:"cnc",
  name:"cloud native computing", 
  coursepic:"/assets/cloud-computing.png",
  avatarpic:"/assets/avatar/avatar-pic-9.jpg",
  intitialsal:80000,
  coursesal:900000,
   skillsyougain:["Building Cloud Applications","Cloud Development Kit for Terraform (CDKTF)","Kubernetes","Containers"],
  review:"The instructor was AWESOME! I came to the class already with some knowledge of the program, but learned a good deal more thanks to your class",
  Quote:`This course introduces cloud-native technologies like Kubernetes, Containers, and CDK for Kubernetes, enabling you to build and run scalable applications in modern cloud environments, while CDKTF allows you to define and provision infrastructure with familiar programming languages`

},{
  slug:"iot",
  name:"Internet Of Things", 
  coursepic:"/assets/11.png",
  avatarpic:"/assets/avatar/avatar-pic-8.jpg",
  intitialsal:20,
  coursesal:50,
   skillsyougain:["Build Smart Homes","Amazon Alexa","Matter protocol","C++","Rust","Embedded Programming","microcontrollers","GPIOs  "],
  review:"I found this course very comprehensive and interesting. It was also challenging, but the challenges presented encouraged me to move forward with the course.",
  Quote:"Create Your Own Internet of Things (IoT) Device. Design and create a simple IoT device"
}]





  
  export default Data

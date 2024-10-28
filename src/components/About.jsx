
import { list } from "postcss";
import Comp from "./Comp";

const About = () =>{

  const Achievements = [{title:"Python fundamentals (future skills Prime NASSCOM) ",

    link:"https://drive.google.com/file/d/1JG3Q6cpgfzrkVOMYyXnMWJZu-I_q5yi8/view?usp=sharing"
  },
  {title:"Full Stack Web Development using Python",

    link:"https://drive.google.com/file/d/1u-B1PVeK5qCA_puBFbG_DJgoWcb3HNxL/view?usp=sharing"
  },
  {title:"One month internship in Web Development and Designing at (OASIS INFOBYTE)",

    link:"https://drive.google.com/file/d/1-99mIfi8pXUX7tYTGgM15vl6S9tN4Tdr/view?usp=sharing"
  },
  {title:"Introduction to Internet of Things (Indian Institute of Technology Kharagpur)",

    link:"https://drive.google.com/file/d/1m7H_TmMUMilc2Vi28dCURZ0r4_YuJv7w/view?usp=sharing"
  }]

  return(<>
  <div name='About' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
    <h1 className="text-3xl font-bold">About</h1>
    <p className="text-justify">A passionate Full-Stack Developer with a
              strong background in computer applications, having recently
              completed my MCA from Asansol Engineering College. My technical
              skill set includes proficiency in Python, Java, HTML, CSS, and
              DBMS. I have successfully undertaken several projects, such as a
              Crop Recommendation System using machine learning, a Job Finder
              Portal, and a Hotel Management System, showcasing my abilities in
              full-stack development. I have completed an internship in web
              development and design with Oasis Infobyte and hold a
              certification in Python fundamentals from Future Skills Prime
              NASSCOM. My academic journey is complemented by my keen interest
              in subjects like Operating Systems and the Internet of Things.
              Outside of technology, I enjoy exploring cars and bikes, and I am
              fluent in English, Bengali, and Hindi. You can find more about my
              professional journey on my LinkedIn and GitHub profiles.</p>
    <br />
    <Comp 
  title={'Education'} 
  details={(
    <>
      <span className="font-semibold">Bachelor of Computer Application</span> <br />
      Asansol Engineering College (2019-2022)
      <br />
      <br />
      <span className="font-semibold"> Master of Computer Application </span><br />
      Asansol Engineering College (2022-2024)
    </>
  )} 
/>

<Comp 
  title={'Projects Undertaken'} 
  details={(
    <>
     <span className="font-semibold"> Crop Recommendation System Using Machine Learning</span> <br />
      Duration: 5 Months <br />
      Role: Full-Stack <br />
      Link: <a className="text-blue-500" href="https://github.com/csubham2370/Major-Project-using-ML-and-Python-Framework-Flask.git" target="_blank" rel="noopener noreferrer">GitHub Repository</a> <br />
      Deploy link: <a className="text-blue-500" href="https://crop24.pythonanywhere.com" target="_blank" rel="noopener noreferrer">Live Application</a>

      <br />
      <br />

      <span className="font-semibold">Job Finder Portal</span> <br />
      Duration: 4 Months <br />
      Role: Full-Stack Developer <br />
      Link: <a className="text-blue-500" href="https://github.com/csubham2370/JOB.git" target="_blank" >GitHub Repository</a> <br />
      Deploy link: <a className="text-blue-500" href="https://csubham2370.pythonanywhere.com/" target="_blank" >Live Application</a>

      <br />
      <br />
      <span className="font-semibold">Hotel Management System</span> <br />
      Duration: 5 Months <br />
      Role: Full-Stack Developer <br />
      Link: <a className="text-blue-500" href="https://github.com/csubham2370/BCA-MAJOR-PROJECT-PPT-AND-REPORT.git" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
    
    
    </>

   

    
  )} 
  
/>
<Comp title={"Additional Qualification / Achievements / Certifications"}

details={
  Achievements.map((ach,index) =>(<ul className="list-disc px-4"><li key={index} className="py-2  sm:text-justify ">{ach.title} <br /><a className=" text-blue-500" href={ach.link} target="_blank">Link</a></li></ul>))
}/>



  </div>
  
  
  
  </>)
}

export default About;
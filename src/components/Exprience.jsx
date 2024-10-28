import java from "../assets/java.png"
import python from "../assets/python.webp"
import mongodb from "../assets/mongodb.jpg"
import express from "../assets/express.png"
import reactjs from "../assets/reactjs.png"
import nodejs from "../assets/node.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import tailwind from "../assets/tailwind.png"
import bootstrap from "../assets/bootstrap.png"
import github from "../assets/github.png"
const Exprience = () => {
    
  const items = [
{id:2,
logo:python,
name:"Python"
},
{id:3,
logo:mongodb,
name:"MongoDB"
},
{id:4,
logo:express,
name:"Express"
},
{id:5,
logo:reactjs,
name:"Reactjs"
},
{id:6,
logo:nodejs,
name:"Nodejs"
},
{id:7,
  logo:html,
  name:"HTML"
  },
  {id:8,
    logo:css,
    name:"CSS"
    },
    {id:9,
      logo:tailwind,
      name:"Tailwind"
      },
      {id:10,
        logo:bootstrap,
        name:"Bootstrap"
        },
        {id:11,
          logo:github,
          name:"GitHub"
          }]

return(<>
<div name='Exprience' className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">

<h1 className="text-3xl font-bold mb-5">Exprience</h1>
<span className=" font-semibold">I have more than 6 mounth experience in below technologies.</span>

<div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3 ">
{items.map(({id,logo,name}) =>(

<div key={id} className=" flex flex-col md:w-[200px] md:h-[200px] border-[2px] rounded-full shadow-lg items-center justify-center  cursor-pointer hover:scale-110 duration-300 my-5 ">

<img src={logo} alt="" className="w-[150px]  rounded-full "/>
<div className="font-bold text-xl mb-2 text-center">
{name}
</div>




</div>







))}

</div>











</div>


</>)
}


export default Exprience
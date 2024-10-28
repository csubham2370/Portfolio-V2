


const Comp = ({title, details,index}) =>{

  return(<>

   <br />
   <div className="flex flex-col shadow-slate-500 shadow-md
   p-2 rounded-md">
    <h1 className="text-xl font-bold">{title}</h1>
    <h4  className="text-1">{details}</h4>
    </div>
  </>)
}

export default Comp;
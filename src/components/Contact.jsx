
import { useState } from "react";
import {useForm} from "react-hook-form"

const Contact = () =>{

  const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

//   const [errors, setErrors] = useState({
//     exampleRequired: false // or true depending on validation
// });

  return(<>
  
  <div name='Contact' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>

    <h1 className="text-3xl font-bold mb-4">Contact me</h1>
    <span>Please fill out form below to contact me </span>

    <div className="flex flex-col items-center justify-center mt-5">
     <form onSubmit={handleSubmit(onSubmit)} 
    //  action="https://getform.io/f/awnngqpb" 
    //    method="POST" 
       className="bg-slate-200 w-96 px-6 py-8 rounded-xl">
      <h1 className="text-xl font-semibold mb-4 ">Send Your Message</h1>
      <div className="flex flex-col mb-4">
        <label className="block text-gray-700 " htmlFor="name"> Full Name</label>

        <input type="text" className="shadow appearance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline"
        id='name'
        name="name"
        placeholder="Enter your full name" 
        {...register("name", { required: "Full Name is required", maxLength: 20 })}/>
         {errors.name && <span className="text-red-500 font-bold">{errors.name.message}</span>}
      </div>

      <div className="flex flex-col mb-4">
        <label className="block text-gray-700 " htmlFor="name"> Email Address</label>

        <input type="email" className="shadow appearance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline"
        id='email'
        name="email"
        placeholder="Enter your email address" 
        {...register("email", { required: "Email is required", maxLength: 20 })}/>
         {errors.email && <span className="text-red-500 font-bold">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col mb-4">
        <label className="block text-gray-700 " htmlFor="name"> Message</label>

        <textarea className="shadow appearance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline"
        id='message'
        name='message2'
        placeholder="Enter your message" 
        {...register("message2", { required: "Message is required", maxLength: 20 })}/>
         {errors.message2 && <span className="text-red-500 font-bold">{errors.message2.message}</span>}
      </div>

      <button type="submit"  className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700">Send</button>



     </form>
    
    </div>


  </div>
  
  </>)
}

export default Contact;
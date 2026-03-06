import React,{useState,} from 'react'
import { useForm } from "react-hook-form";

function Query() {
    const [quer, setQuer] = useState("");
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setQuer(data);
    console.log("Submitted Data:", data);
    reset(); 
  };
  return (
    <>
   <form onSubmit={handleSubmit(onSubmit)} className="h-screen flex flex-col justify-center items-center">
  <h2 className="text-xl font-semibold text-gray-800 text-center p-10">Queries</h2>
  
  <div className="flex flex-col space-y-4">
    <input
      type="text"
      placeholder="Name"
       {...register("name", { required: "Name is required" })}
      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
    />
    {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
    <input
      type="email"
      placeholder="mail@example.com"
      {...register("email", {
              required: "Email is required",
            })} 
      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
    />
      {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
    <textarea
      placeholder="Write your Query Here"
      {...register("query", { required: "Query is required" })}
      rows="4"
      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
    ></textarea>
     {errors.query && (
            <p className="text-red-500 text-sm">{errors.query.message}</p>
          )}
  </div>

  <button className="mt-2 px-4 py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-7   00 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition">
    Submit
  </button>
</form>   
<div className=''>
<h2>All Queries Showed Here</h2>
<div className='w-auto h-auto max-w-md rounded-lg border border-gray-300 bg-transparent shadow-md p-6 flex flex-col space-y-4'>
<h3 className=''>{quer.name}</h3>
<h3 className=''>{quer.email}</h3>
<p className=''>{quer.query}</p>
</div>
</div>
     
    </>
  )
}

export default Query

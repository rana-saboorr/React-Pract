import React from 'react'


function WhyUsCard({content={title:"Unknown",content:"Unknown"}}) {
  return (
    <>
      <div   className='w-54 h-60 bg-transparent rounded-lg border border-black flex flex-col justify-center items-center p-4 shadow-md'>
        <h2 className='text-xl font-semibold mb-2 text-center'>{content.title}</h2>
        <p className='text-gray-600 text-center'>{content.content}</p>
      </div>
    </>
  )
}

export default WhyUsCard

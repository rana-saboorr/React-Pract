import React from 'react'
import WhyUsCard from '../Components/WhyUsCard'

function Whyus() {
   const  content1={
        title: "Top-Tir Talent",
        content: "Full-stack developers, AI engineers, and app developers with cutting-edge expertise."
    },
    content2={
        title: "Cost-Effective Solutions",
        content: "Access high-quality professionals at competitive rates."
    },
    content3={
        title: "Flexible & Scalable Hiring",
        content: "Short-term or long-term scale your team as your project demands."
    },
    content4={
        title: "Seamless Managment",
        content: "We handle recruitment, onboarding, payroll, and HR, ensuring hassle-free operations for your business."
    }


  return (
    <>
      <div className='m-w 800px
            m-20-auto
            p-20
            bg-transplant

            color: rgb(0, 19, 77);'>
        <h2 className=''>
            Why-Us?
        </h2>
        <p className=''>PhebSoft is a leading software development company specializing in innovative solutions for businesses worldwide. Our team of experts is dedicated to delivering high-quality software products that meet the unique needs of our clients. From custom application development to cutting-edge technology consulting, we are committed to helping businesses thrive in the digital age. Join us on our journey to transform ideas into reality and drive success through technology.</p>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <WhyUsCard content={content1}/>
        <WhyUsCard content={content2}/>
        <WhyUsCard content={content3}/>
        <WhyUsCard content={content4}/>
      </div>
    </>
  )
}

export default Whyus

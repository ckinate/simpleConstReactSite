import React from 'react'
import { motion } from 'framer-motion'
import {slideUpVariants,zoomInVariants} from './animation'

export default function About() {
  return (
    <div className=' lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]' id='about'>

      <motion.div initial="hidden" whileInView="visible" variants={slideUpVariants}
        className=' lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'>
        
        <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl'>
         WELLCOME TO
        </motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-white uppercase text-[40px] font-bold'>
        ProValiant Construction Ltd

        </motion.h1>
        <div className='w-[120px] h-[6px] bg-yellow-500'></div>
        <p className='text-3xl italic text-gray-50 mt-[60px]'>
        At ProValiant Construction Ltd, our vision is to be a leading force in the construction industry, 
recognized for our commitment to excellence, innovation, and sustainable practices. We aspire to 
reshape skylines, redefine construction standards, and contribute significantly to the built 
environment, leaving a lasting positive impact on the communities we serve.
        </p>

      </motion.div>
      <motion.div initial='hidden' whileInView='visible' variants={slideUpVariants}
        className=' lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
        
        <p className=' text-white text-lg text-justify'>
        Our mission at ProValiant Construction Ltd is to deliver exceptional construction solutions with 
unwavering dedication to quality, safety, and client satisfaction. We strive to bring our clients' 
visions to life by combining cutting-edge technology, skilled craftsmanship, and a client-centric 
approach. We are committed to fostering a culture of integrity, teamwork, and continuous 
improvement, ensuring that every project we undertake reflects our passion for excellence.

        </p>
        <motion.button variants={zoomInVariants} className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-black'>
          READ MORE

        </motion.button>
        
        </motion.div>

    </div>
  )
}

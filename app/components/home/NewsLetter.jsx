"use client"
import React from 'react'
import Container from '../common/Container'
import { motion } from "motion/react"

const NewsLetter = () => {
  return (
    <section className='bg-[url("/images/endSection.png")] bg-no-repeat bg-cover py-12'>
      <Container>
        <motion.div 
          className='flex flex-col md:flex-row items-center justify-between gap-6'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Newsletter Text */}
          <div className='text-center md:text-left'>
            <h2 className='text-white text-2xl font-normal font-roboto'>
              Join our newsletter to
              <br />
              keep up to date With us!
            </h2>
          </div>

          {/* Email Form */}
          <div className='flex flex-col sm:flex-row gap-4 w-full md:w-auto'>
            <input
              type="email"
              placeholder="Enter your gmail"
              className='px-4 py-3 rounded-md bg-white/50 border border-white/50 text-white placeholder-white text-base font-normal font-roboto leading-normal focus:outline-none focus:ring-2 focus:ring-white/50 min-w-[300px]'
            />
            <button className='px-8 py-3 bg-[#1fb9fb] text-white text-base font-medium font-inter rounded-md hover:bg-blue-700 transition-colors duration-300'>
              Submit
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default NewsLetter
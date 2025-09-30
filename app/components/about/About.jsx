"use client"
import React from 'react'
import Container from '../common/Container'
import { motion } from "motion/react"

export const About = () => {
  return (
    <section className='relative h-[510px] overflow-hidden'>
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[3px]"
        style={{
          backgroundImage: "url('/images/aboutUsBg.png')"
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/30" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <Container>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* About Us Title */}
            <motion.h1 
              className="text-[#121212] text-[42px] font-medium font-roboto mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Us
            </motion.h1>
            
            {/* Breadcrumb */}
            <motion.nav 
              className="text-[#121212] text-2xl font-normal font-roboto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="hover:text-teal-600 transition-colors cursor-pointer">Home</span>
              <span className="mx-2">/</span>
              <span className="hover:text-teal-600 transition-colors cursor-pointer">About Us</span>
              <span className="mx-2">/</span>
              <span className="text-teal-600">Overview</span>
            </motion.nav>
          </motion.div>
        </Container>
      </div>
    </section>
  )
}

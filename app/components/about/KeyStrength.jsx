"use client"
import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import { motion } from "motion/react"

const KeyStrength = () => {
  return (
    <section className='py-16 bg-gray-50'>
      <Container>
        {/* Header */}
        <motion.div 
          className="text-center mb-16 "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-[#1e1e1e] text-[44px] font-normal font-roboto mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Key Strengths
          </motion.h2>
          <motion.p 
            className="text-[#1e1e1e] text-xl font-normal font-poppins"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Who are in extremely love with eco friendly system.
          </motion.p>
        </motion.div>

        {/* Strengths Grid */}
        <div className="space-y-16 lg:space-y-24 max-w-7xl mx-auto">
          {/* Clean Rooms */}
          <motion.div 
            className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Image Container */}
            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative max-w-md w-full">
                {/* Border Frame */}
                <div className="absolute -top-[11px] -left-[11px] w-[280px] sm:w-[319px] h-[320px] sm:h-[380px] border-[8px] sm:border-[11px] border-[#079fa5]" />
                {/* Image */}
                <div className="relative w-[260px] sm:w-[300px] h-[300px] sm:h-[350px] ml-[20px] sm:ml-[30px] mt-[20px] sm:mt-[28px]">
                  <Image
                    src="/images/strength-cleanroom.png"
                    alt="Clean Rooms"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              {/* Badge */}
              <div className="mb-4 lg:mb-6">
                <div className="px-3 py-1.5 bg-[#079fa5]/20 rounded-lg inline-flex justify-center items-center">
                  <div className="text-[#323232] text-xs sm:text-[13px] font-medium font-poppins">Classified ISO 7, ISO 8</div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[#1e1e1e] text-2xl sm:text-3xl font-medium font-roboto mb-3 lg:mb-4">
                Clean Rooms
              </h3>

              {/* Description */}
              <p className="text-[#1e1e1e] text-sm sm:text-base font-normal font-poppins leading-relaxed max-w-lg mx-auto lg:mx-0">
                Spread over a total area of 1500 sq meters, Safecare manufacturing takes place in the ISO 7, ISO 8 classified clean room environment that tests two levels of pollution's such as dust, airborne microbes, aerosol particles and chemical vapours.
              </p>
            </div>
          </motion.div>

          {/* Storage System */}
          <motion.div 
            className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8 lg:gap-16"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Image Container */}
            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative max-w-md w-full">
                {/* Border Frame */}
                <div className="absolute -top-[11px] -right-[11px] w-[280px] sm:w-[319px] h-[320px] sm:h-[380px] border-[8px] sm:border-[11px] border-[#079fa5]" />
                {/* Image */}
                <div className="relative w-[260px] sm:w-[300px] h-[300px] sm:h-[350px] mr-[20px] sm:mr-[30px] mt-[20px] sm:mt-[28px]">
                  <Image
                    src="/images/strength-pharma.png"
                    alt="Storage System"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              {/* Badge */}
              <div className="mb-4 lg:mb-6">
                <div className="px-3 py-1.5 bg-[#079fa5]/20 rounded-lg inline-flex justify-center items-center">
                  <div className="text-[#323232] text-xs sm:text-[13px] font-medium font-poppins">High-tech Automated</div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[#1e1e1e] text-2xl sm:text-3xl font-medium font-roboto mb-3 lg:mb-4">
                Storage System
              </h3>

              {/* Description */}
              <p className="text-[#1e1e1e] text-sm sm:text-base font-normal font-poppins leading-relaxed max-w-lg mx-auto lg:mx-0">
                Safecare holds the unique accomplishment of having the world's finest automated storage system spread over a vast area of 30000 sq.ft. The system ensures 100 percent efficiency in storage without involving any manual interventions.
              </p>
            </div>
          </motion.div>

          {/* Pharma Grade */}
          <motion.div 
            className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Image Container */}
            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative max-w-md w-full">
                {/* Border Frame */}
                <div className="absolute -top-[11px] -left-[11px] w-[280px] sm:w-[319px] h-[320px] sm:h-[380px] border-[8px] sm:border-[11px] border-[#079fa5]" />
                {/* Image */}
                <div className="relative w-[260px] sm:w-[300px] h-[300px] sm:h-[350px] ml-[20px] sm:ml-[30px] mt-[20px] sm:mt-[28px]">
                  <Image
                    src="/images/strength-dental.png"
                    alt="Pharma Grade"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              {/* Badge */}
              <div className="mb-4 lg:mb-6">
                <div className="px-3 py-1.5 bg-[#079fa5]/20 rounded-lg inline-flex justify-center items-center">
                  <div className="text-[#323232] text-xs sm:text-[13px] font-medium font-poppins">Made with Supremas</div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[#1e1e1e] text-2xl sm:text-3xl font-medium font-roboto mb-3 lg:mb-4">
                Pharma Grade
              </h3>

              {/* Description */}
              <p className="text-[#1e1e1e] text-sm sm:text-base font-normal font-poppins leading-relaxed max-w-lg mx-auto lg:mx-0">
                Spread over a total area of 1500 sq meters, Safecare manufacturing takes place in the ISO 7, ISO 8 classified clean room environment that has a low level of pollutants such as dust, airborne microbes, aerosol particles and chemical vapours.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default KeyStrength
"use client"
import React from 'react'
import Container from '../common/Container'
import { motion } from "motion/react"

const WhoWeAre = () => {
  return (
    <section className='relative z-20 -top-28 overflow-x-hidden'>
      <Container>
        <motion.div 
          className="max-w-7xl mx-auto pt-8 p-2.5 sm:p-5 lg:p-16  bg-white shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <motion.h2 
            className="text-[#1e1e1e] text-[44px] font-normal font-roboto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            who we are?
          </motion.h2>

          {/* Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-[#1e1e1e] text-base font-normal font-poppins leading-relaxed">
              Safecare Medical Industries was conceived and established in the year of 2016 by Bin Ali group that plans to give a different dimension to the medical industries all across the Middle East.
            </p>

            <p className="text-[#1e1e1e] text-base font-normal font-poppins leading-relaxed">
              Headquartered in Abu Dhabi UAE, SafeCare is a Domestic Profit Corporation providing quality Medical plastic consumable products across all GCC countries. With its registered subsidiary factories and subsidiary offices across the UK, USA, Germany, and China, SafeCare thrives on producing and providing quality medical products across the globe.
            </p>

            <p className="text-[#1e1e1e] text-base font-normal font-poppins leading-relaxed">
              Safe care Medical Industries has built a worldwide reputation for providing high quality plastic consumables over the years. With a production area of 6000 square meters, we manufacture all of our products in a controlled environment called Clean Room of class 10000(ISO 7) and 100000(ISO 8). Our manufacturing includes a wide variety of processes including Injection moulding, Blow Moulding, Thermoforming etc. and all those that are required for a world class medical manufacturing facility.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default WhoWeAre
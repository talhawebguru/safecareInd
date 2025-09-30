"use client"
import React from 'react'
import Container from '../common/Container'
import { motion } from "motion/react"

const OurMissionOurVision = () => {
  return (
    <section className='py-16'>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Our Mission */}
          <motion.div 
            className="bg-[#079fa5] p-12 lg:p-16 flex flex-col justify-center min-h-[402px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-white text-[44px] font-normal font-roboto mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="text-white text-base font-normal font-poppins leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our mission is to transform our company into an admired, customer-friendly, and innovative medical solutions provider.
            </motion.p>
          </motion.div>

          {/* Our Vision */}
          <motion.div 
            className="p-12 lg:p-16 flex flex-col justify-center min-h-[402px] relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              backgroundImage: "url('/images/ourVisionBg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            
            <div className="relative z-10">
              <motion.h2 
                className="text-[#1e1e1e] text-[44px] font-normal font-roboto mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our Vission
              </motion.h2>
              <motion.p 
                className="text-[#1e1e1e] text-base font-normal font-poppins leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Safecare Medical Industries exists to improve the quality of human life by providing affordable, reliable, and innovative products.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default OurMissionOurVision
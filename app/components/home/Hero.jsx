import React from 'react'
import Container from '../common/Container'
import * as motion from "motion/react-client"

const Hero = () => {
  return (
    <section className="overflow-hidden bg-[url('/images/heroBg.png')] bg-cover bg-center bg-no-repeat h-auto lg:h-[663px] flex items-center min-h-[400px]">
      <Container>
        <div className="flex items-center min-h-[663px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative w-full max-w-[623px]"
          >
            {/* Welcome Badge */}
            <div className="absolute left-0 top-0 z-10">
              <div className="bg-[#02c8b0] rounded-tl-[4px] rounded-tr-[4px] rounded-bl-[0px] rounded-br-[0px] px-6 py-2 min-w-[167px] min-h-[57px] flex items-center">
                <span className="text-white text-[28.75px] font-normal font-roboto leading-none">Welcome!</span>
              </div>
            </div>
            {/* Glass Card */}
            <div className="mt-[45px] pl-[14px]">
              <div className="bg-white/50 border-l-[6px] border-[#02c8b0] backdrop-blur-[7px] p-8 pt-12 relative">
                <h1 className="text-[#1e1e1e] text-4xl font-normal font-roboto mb-6">
                  Revolutionise care.<br />For people and planet.
                </h1>
                <div className="mt-2">
                  <p className="text-[#323232] text-xl font-medium font-poppins">Safecare Medical Industries  was conceived and established in the year of 2016.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
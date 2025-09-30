import React from 'react'
import Container from '../common/Container'
import * as motion from 'motion/react-client'

const OurHistory = () => {
  return (
    <section className='bg-[url("/images/ourHistory.png")] bg-cover lg:bg-center bg-no-repeat h-auto lg:h-[663px] flex items-center min-h-[400px] overflow-hidden'>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-start max-w-2xl py-16 px-4 md:px-0"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="text-white text-[44px] font-normal font-['Roboto'] leading-tight mb-2"
          >
            Safecare Medical<br />Industries
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="mb-6"
          >
            <span className="text-white text-2xl font-medium font-['Poppins']">Our History</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="text-white text-xl font-normal font-['Poppins'] max-w-xl"
          >
            Headquartered in Abu Dhabi UAE. Safecare is a Domestic Profit Corporation providing quality Medical plastic consumable products across all GCC countries. With its registered subsidiary factories and subsidiary offices across UK, USA, Germany, and China, Safecare thrives on producing and providing quality medical products across the globe.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}

export default OurHistory
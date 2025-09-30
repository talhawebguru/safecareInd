import React from "react";
import Container from "../common/Container";
import Image from "next/image";
import * as motion from "motion/react-client"

const WhoWeAre = () => {
  return (
    <section className="overflow-hidden py-0 -mt-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-[url('/images/whoWeAreBg.png')] bg-no-repeat bg-cover flex flex-col lg:flex-row items-center justify-between min-h-[623px] py-10 lg:py-10 px-3 md:px-14"
          >
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex-shrink-0 w-full max-w-[527px] h-[400px] lg:h-[622px] mb-8 lg:mb-0 lg:mr-10 rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/whoWeAre.png"
                alt="Medical professional"
                width={527}
                height={622}
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="flex-1 flex flex-col justify-center items-start max-w-xl"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-white text-[44px] font-normal font-['Roboto'] mb-6 leading-tight"
              >
                who we are?
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mb-8"
              >
                <span className="text-white text-xl font-medium font-['Poppins']">Safecare Medical Industries</span>
                <span className="text-white text-xl font-normal font-['Poppins']"> was conceived and established in the year of 2016 that plans to give a different dimension to the medical industries all across the Middle East</span>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.07, backgroundColor: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.4 }}
                className="px-[26px] py-[11px] cursor-pointer rounded outline-[1.5px] outline-offset-[-1.5px] outline-white inline-flex justify-center items-center gap-2.5 hover:bg-white/10 transition"
              >
                <span className="text-white text-base font-medium font-['Poppins']">Contact Us</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </Container>
    </section>
  );
};

export default WhoWeAre;

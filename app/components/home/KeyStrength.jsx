import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import * as motion from 'motion/react-client'

const strengths = [
  {
    type: 'badge',
    badge: 'Classified ISO 7, ISO 8',
    title: 'Clean Rooms',
    desc: 'Spread over a total area of 1500 sq meters. Safecare manufacturing takes places in the ISO 7, ISO 8 classified clean room environment that has a low level of pollutants such as dust, airborne microbes, aerosol particles and chemical vapours.',
    img: null,
  },
  {
    type: 'img',
    img: '/images/strength-cleanroom.png',
    alt: 'Clean Room',
  },
  {
    type: 'badge',
    badge: 'Made with Supreme',
    title: 'Pharma Grade',
    desc: 'Spread over a total area of 1500 sq meters. Safecare manufacturing takes places in the ISO 7, ISO 8 classified clean room environment that has a low level of pollutants such as dust, airborne microbes, aerosol particles and chemical vapours.',
    img: null,
  },
  {
    type: 'img',
    img: '/images/strength-dental.png',
    alt: 'Dental Room',
  },
  {
    type: 'badge',
    badge: 'High Tech Automated',
    title: 'Storage System',
    desc: `Safecare holds the unique accomplishment of having the world's finest automated storage system spread over a vast area of 30000 sq ft. The system ensures 100 percent efficiency in storage without involving any manual interventions`,
    img: null,
  },
  {
    type: 'img',
    img: '/images/strength-pharma.png',
    alt: 'Pharma',
  },
]

const KeyStrength = () => {
  return (
    <section className="overflow-hidden py-16 lg:py-24">
      <Container>
        <h2 className="text-[#1e1e1e] text-[44px] font-normal font-['Roboto'] text-center mb-14">Our Key Strengths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {strengths.map((item, idx) => (
            item.type === 'badge' ? (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: 'easeOut' }}
                className="bg-[#079fa5]/10 rounded-2xl p-8 flex flex-col justify-start"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-b from-[#0898a3]/80 to-[#00d3b3]/80 rounded-lg text-white text-[13px] font-medium font-['Poppins']">{item.badge}</span>
                </div>
                <h3 className="text-[#323232] text-[28px] font-medium font-['Poppins'] mb-4">{item.title}</h3>
                <p className="text-[#323232] text-xl font-normal font-['Poppins']">{item.desc}</p>
              </motion.div>
            ) : (
              <motion.div
                key={item.img}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: 'easeOut' }}
                className="rounded-2xl overflow-hidden flex items-center justify-center bg-white shadow"
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={408}
                  height={409}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )
          ))}
        </div>
      </Container>
    </section>
  )
}

export default KeyStrength
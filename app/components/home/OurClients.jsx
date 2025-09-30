import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import * as motion from 'motion/react-client'

const clients = [
  {
    name: 'SEHA',
    img: '/images/Logo1.png',
    alt: 'SEHA Abu Dhabi Health Services',
  },
  {
    name: 'Dubai Municipality',
    img: '/images/Logo2.png',
    alt: 'Dubai Municipality',
  },
  {
    name: 'Cleveland Clinic',
    img: '/images/Logo3.png',
    alt: 'Cleveland Clinic Abu Dhabi',
  },
  {
    name: 'Burjeel Hospital',
    img: '/images/Logo4.png',
    alt: 'Burjeel Hospital',
  },
  {
    name: 'NMC',
    img: '/images/Logo5.png',
    alt: 'NMC',
  },
  {
    name: 'American Hospital',
    img: '/images/Logo6.png',
    alt: 'American Hospital',
  },
]

const OurClients = () => {
  return (
    <section className="overflow-hidden py-16 lg:py-24">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-[#1e1e1e] text-[44px] font-medium font-['Roboto'] text-center mb-12"
        >
          Our Clients
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {clients.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: 'easeOut' }}
              className="bg-[#f9f9f9] rounded-lg flex items-center justify-center h-[142px] shadow group hover:shadow-lg transition overflow-hidden"
            >
              <Image
                src={client.img}
                alt={client.alt}
                width={271}
                height={108}
                className="object-contain max-h-[108px] max-w-[271px]"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default OurClients
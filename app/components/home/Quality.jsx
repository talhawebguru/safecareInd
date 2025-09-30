import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import * as motion from 'motion/react-client'

const certifications = [
  {
    img: '/images/cert-ce.png',
    alt: 'CE Certification',
  },
  {
    img: '/images/cert-iso.png',
    alt: 'ISO 13485:2016',
  },
  {
    img: '/images/cert-gmp.png',
    alt: 'GMP Certification',
  },
]

const Quality = () => {
  return (
    <section className="overflow-hidden bg-[url('/images/quality-bg.png')] bg-cover bg-center bg-no-repeat py-16 lg:py-24">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-[#1e1e1e] text-[44px] font-normal font-['Roboto'] mb-2">Quality & Certifications</h2>
          <p className="text-[#323232] text-xl font-normal font-['Poppins']">We do care, for your better tomorrow.</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
          {certifications.map((cert, idx) => (
            <React.Fragment key={cert.alt}>
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: 'easeOut' }}
                className="w-[158px] h-[183px] flex items-center justify-center"
              >
                <div className="flex items-center justify-center">
                  <Image
                    src={cert.img}
                    alt={cert.alt}
                    width={153}
                    height={183}
                    className="object-contain"
                  />
                </div>
              </motion.div>
              {idx < certifications.length - 1 && (
                <div className="hidden md:block h-[103px] w-px bg-black/10 mx-4" aria-hidden="true"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Quality
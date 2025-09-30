import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import * as motion from 'motion/react-client'

const news = [
  {
    img: '/images/news1.png',
    alt: 'News 1',
    title: 'Improve Workflow With Agile yoga',
    desc: 'Safecare manufacturing takes places in the ISO 7, ISO 8 classified clean room environment that has a low level of pollutants such as dust and chemical vapours.',
    link: '#',
  },
  {
    img: '/images/news2.png',
    alt: 'News 2',
    title: 'Improve Workflow With Agile yoga',
    desc: 'Safecare manufacturing takes places in the ISO 7, ISO 8 classified clean room environment.',
    link: '#',
  },
  {
    img: '/images/news3.png',
    alt: 'News 3',
    title: 'Improve Workflow With Agile yoga',
    desc: 'Safecare manufacturing takes places in the ISO 7, ISO 8 classified clean room environment.',
    link: '#',
  },
]

const News = () => {
  return (
    <section className="overflow-hidden bg-[url('/images/newsBgimage.png')] bg-cover bg-center bg-no-repeat py-16 lg:py-24">
      <Container>
        <h2 className="text-white text-[44px] font-normal font-['Roboto'] mb-12">News & Events</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-white p-4 md:p-8 rounded shadow-lg overflow-hidden flex flex-col h-full"
          >
            <div className="relative w-full aspect-[3/2] md:aspect-[596/320]">
              <Image
                src={news[0].img}
                alt={news[0].alt}
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 596px"
                priority={true}
              />
            </div>
            <div className=" mt-8 flex flex-col flex-1">
              <h3 className="text-[#323232] text-[28px] font-medium font-['Poppins'] mb-2">{news[0].title}</h3>
              <p className="text-[#323232] text-xl font-normal font-['Poppins'] mb-6">{news[0].desc}</p>
              <a href={news[0].link} className="text-[#0c0c0c] text-base font-medium font-['Poppins'] leading-normal flex items-center gap-2 group">
                Read More
                <span className="inline-block group-hover:translate-x-1 transition-transform">
                  <svg width="20" height="20" fill="none" stroke="#0c0c0c" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </span>
              </a>
            </div>
          </motion.div>
          {/* Side cards */}
          <div className="flex flex-col gap-8">
            {news.slice(1).map((item, idx) => (
              <motion.div
                key={item.title + idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.15 * (idx + 1), ease: 'easeOut' }}
                className="bg-white p-4 md:p-8 rounded shadow-lg overflow-hidden flex flex-col md:flex-row h-full"
              >
                <div className="relative w-full aspect-[3/2] mb-6 md:mb-0 md:w-[160px] md:min-w-[160px] md:aspect-[1/1] flex-shrink-0">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    className="object-cover w-full h-full rounded"
                    sizes="(max-width: 768px) 100vw, 160px"
                  />
                </div>
                <div className="flex flex-col flex-1 justify-center md:ml-8">
                  <h3 className="text-[#323232] text-[28px] font-medium font-['Poppins'] mb-2">{item.title}</h3>
                  <p className="text-[#323232] text-xl font-normal font-['Poppins'] mb-4">{item.desc}</p>
                  <a href={item.link} className="text-[#0c0c0c] text-base font-medium font-['Poppins'] leading-normal flex items-center gap-2 group">
                    Read More
                    <span className="inline-block group-hover:translate-x-1 transition-transform">
                      <svg width="20" height="20" fill="none" stroke="#0c0c0c" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                    </span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button className="bg-white px-8 py-2 rounded text-[#323232] text-base font-normal font-['Poppins'] shadow hover:bg-gray-100 transition">View all</button>
        </div>
      </Container>
    </section>
  )
}

export default News
import building1 from "@/public/images/gallery/building1.png";
import building2 from "@/public/images/gallery/building2.png";
import Link from "next/link";
import Image from "next/image";
import * as motion from "motion/react-client"


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const GalleryGrid = () => {
  return (
    <>
      {/* Banner */}
      <section className="relative z-0 h-[510px] py-20 px-5 lg:px-32 xl:px-40 bg-[#F5F5F5] flex justify-center items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h1
            className="lg:text-[44px] text-4xl font-medium mb-5"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Gallery
          </motion.h1>
          <motion.div
            className="space-x-2 cursor-pointer text-2xl font-roboto font-normal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/">Home /</Link>
            <span>Gallery</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="relative z-10 -top-40 px-5 lg:px-32 xl:px-40 py-10">
        <div className="bg-white p-4 max-w-6xl mx-auto grid grid-cols-3 grid-rows-3 gap-8">
          {/* Top left: spans 2 rows */}
          <motion.div
            className="col-span-1 shadow-md rounded-md hover:shadow-[#1E3D69] overflow-hidden"
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
          >
            <Image src={building1} alt="Building 1" className="w-full h-full object-cover" />
          </motion.div>
          {/* Top middle: normal */}
          <motion.div
            className="row-span-2 col-span-1 shadow-md rounded-md hover:shadow-[#1E3D69] overflow-hidden"
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
          >
            <Image src={building2} alt="Building 2" className="w-full h-full object-cover" />
          </motion.div>
          {/* Top right: spans 2 rows */}
          <motion.div
            className=" col-span-1 shadow-md rounded-md hover:shadow-[#1E3D69] overflow-hidden"
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
          >
            <Image src={building1} alt="Building 3" className="w-full h-full object-cover" />
          </motion.div>

          {/* Middle left: normal */}
          <motion.div
            className="row-span-2 col-span-1 shadow-md rounded-md hover:shadow-[#1E3D69] overflow-hidden"
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
          >
            <Image src={building2} alt="Building 4" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            className="row-span-2 col-span-1 shadow-md rounded-md hover:shadow-[#1E3D69] overflow-hidden"
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
          >
            <Image src={building2} alt="Building 6" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            className="row-span-1 col-span-1 shadow-md rounded-md hover:shadow-[#1E3D69] overflow-hidden"
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
          >
            <Image src={building1} alt="Building 9" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GalleryGrid;
import React from "react";
import Container from "../common/Container";
import Image from "next/image";
import * as motion from "motion/react-client";
import OurMissionGirl from "@/public/images/ourMissionGirl.png";
import ourMissionVector from "@/public/images/ourMissionVector.png";

const OurMission = () => {
  return (
    <section className="overflow-hidden relative">
      <Container>
        <div className="bg-[#f8f8f8] flex flex-col lg:flex-row items-center justify-between min-h-[623px] pt-10 px-3 md:px-14 relative z-20 overflow-hidden">
          {/* Left: Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 flex flex-col justify-center items-start max-w-[623px] z-10"
          >
            {/* Card from Hero section */}
            <div className="relative z-40 w-full max-w-[623px]">
              {/* Badge */}
              <div className="absolute left-0 top-0 z-10">
                <div className="bg-[#02c8b0] rounded-tl-[4px] rounded-tr-[4px] px-6 py-2 min-w-[167px] min-h-[57px] flex items-center">
                  <span className="text-white text-[28.75px] font-normal font-roboto leading-none">
                    Our Mission
                  </span>
                </div>
              </div>
              {/* Glass Card */}
              <div className="mt-[45px] pl-[14px]">
                <div className="bg-white/50 border-l-[6px] border-[#02c8b0] backdrop-blur-[7px] p-8 pt-12 relative">
                  <h3 className="text-[#1e1e1e] text-lg font-bold font-poppins mb-2">
                    Advancing Life
                  </h3>
                  <p className="text-[#323232] text-base font-normal font-poppins">
                    <span className="font-semibold">-</span> That's what we at
                    Safecare are all about. We put ourselves to the test day in,
                    day out. All together. All over the world. With enthusiasm for
                    new ideas.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Right: Girl Image and Vector */}
          <div className="flex-1 flex items-center justify-end self-end w-full h-full mt-10 lg:mt-0">
            {/* Vector in center, behind girl */}
            <Image
              src={ourMissionVector}
              alt="Molecule vector"
              className="absolute object-contain left-[65%] top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none -z-20"
              draggable={false}
            />
            {/* Girl image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className=" flex items-end"
            >
              <Image
                src={OurMissionGirl}
                alt="Medical professional"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurMission;

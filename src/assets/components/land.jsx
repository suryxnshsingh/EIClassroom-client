import { motion } from 'framer-motion';
import React from 'react';

const BackgroundVideo = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
                autoPlay
                muted
                loop
            >
                <source src="circuit.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <motion.div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-opacity-50 backdrop-blur-sm text-center" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img src="GS LOGO.png" alt="logo" height={"100rem"} width={"100rem"} />
                <div className="text-xl sm:text-3xl chakra-petch-semibold relative text-neutral-300 py-2 mb-16 mt-4">
                    Shri G. S. Institute of Tech. and Science
                </div>
                <div className="text-xl sm:text-3xl chakra-petch-medium relative text-neutral-300 py-2">
                    Department of
                </div>
                <div className="text-3xl sm:text-5xl chakra-petch-bold relative text-neutral-300 py-2 px-2">
                    Electronics and Instrumentation Engineering
                </div>
                <img src="mouse.png" alt="logo" height={"50rem"} width={"50rem"} className='absolute bottom-10'/>
            </motion.div>
        </div>
    );
};

export default BackgroundVideo;

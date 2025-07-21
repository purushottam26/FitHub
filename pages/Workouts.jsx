import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import homeworkout from '/assets/homeworkout.png';
import gymworkout from '/assets/gymworkout.png';
import yogaimg from '/assets/yogaasanas.jpeg';
import aerobic from '/assets/aerobic.png';
import workoutVideo from '/assets/workoutvideo.mp4'; // ✅ Import the video

const workoutTypes = [
  { name: '🏠 Home Workout', img: homeworkout, link: '/homeexercises' },
  { name: '🏋️ Gym Workout', img: gymworkout, link: '/gymworkouts' },
  { name: '🧘 Yoga Asanas', img: yogaimg, link: '/yoga' },
  { name: '💃 Aerobic', img: aerobic, link: '/aerobic' }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  })
};

const Class = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={workoutVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔲 Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* 🌟 Main Content */}
      <div className="relative z-20 px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-white text-center mb-14 mt-20 tracking-wide"
        >
          Workout Categories
          <div className="w-32 h-1 bg-teal-400 mx-auto mt-3 rounded-full" />
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {workoutTypes.map((type, index) => {
            const card = (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  rotate: [-1, 1, -1],
                  transition: { duration: 0.4 }
                }}
                className="w-60 h-72 p-4 bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-[0_0_25px_5px_rgba(0,255,255,0.3)] transition-all duration-300 flex flex-col justify-between"
              >
                <img
                  src={type.img}
                  alt={type.name}
                  className="w-full h-44 object-cover rounded-lg shadow-md"
                />
                <p className="text-lg font-semibold text-white text-center mt-3">
                  {type.name}
                </p>
              </motion.div>
            );

            return type.link ? (
              <Link to={type.link} key={index}>
                {card}
              </Link>
            ) : (
              <div key={index}>{card}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Class;

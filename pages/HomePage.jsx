import React from 'react';
import { Link } from 'react-router-dom';
import workoutVideo from '/assets/workoutvideo.mp4';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="relative bg-[#1D3557] min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        autoPlay
        loop
      >
        <source src={workoutVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Welcome to FitHub 💪
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl mb-6"
        >
          Your Personal Guide to Fitness Workouts at Home & Gym
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/workouts">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg shadow-lg transition-all duration-300">
              Start Workout
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;

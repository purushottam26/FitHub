import React from 'react';
import { motion } from 'framer-motion';

import pushup from '/assets/pushup.avif';
import feetpushup from '/assets/feetelevatedpushup.avif';
import handspushup from '/assets/handelevatedpressup.avif';
import closepusup from "/assets/closegrippushup.avif";
import pikepushup from "/assets/pikepushup.avif";
import benchdip from "/assets/benchdips.avif";
import downup from "/assets/downup.avif";
import burpee from "/assets/burpee.avif";
import handstandpushup from "/assets/stricthandstandpushup.avif";

const Upperbody = () => {
  const upperBodyExercises = [
    { name: 'Push-up', muscles: 'Chest, Shoulders, Triceps', image: pushup },
    { name: 'Feet elevated push-up', muscles: 'Chest, Shoulders, Triceps', image: feetpushup },
    { name: 'Hands elevated push-up', muscles: 'Chest, Shoulders, Triceps', image: handspushup },
    { name: 'Close-grip Push-up', muscles: 'Triceps', image: closepusup },
    { name: 'Pike Push-up', muscles: 'Shoulders, Triceps', image: pikepushup },
    { name: 'Bench/Box dip', muscles: 'Triceps', image: benchdip },
    { name: 'Down-up', muscles: 'Full body, cardio', image: downup },
    { name: 'Burpee', muscles: 'Full body, cardio', image: burpee },
    { name: 'Strict handstand push-up', muscles: 'Shoulders, Triceps', image: handstandpushup },
  ];

  return (
    
    <div className="mb-20 px-6 py-10 min-h-screen bg-gradient-to-br from-[#4c5a6e] to-[#090909]">
      <h2 className="text-3xl font-bold mb-8 mt-20 text-center text-white">🔥 Upper Body Workouts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {upperBodyExercises.map((exercise, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-white text-black rounded-xl shadow-lg overflow-hidden cursor-pointer"
          >
            <img
              src={exercise.image}
              alt={exercise.name}
              className="w-full h-48 object-contain"
            />
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-lg font-bold text-red-600 mb-2">{exercise.name}</h3>
              <p className="text-sm text-center text-gray-700">
                <strong>Muscles:</strong> {exercise.muscles}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Upperbody;

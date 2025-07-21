import React from 'react';
import { motion } from 'framer-motion';

import airsquart from "/assets/airsquat.avif";
import jumpsquat from "/assets/SquatJump.avif";
import forwardlung from "/assets/forwardlunge.avif";
import squardjump from "/assets/squardjump.avif";
import pistolsquat from "/assets/pistolsquat.avif";
import cyclistsquat from "/assets/cyclistsquard.avif";

const Lowerbody = () => {
  const lowerBodyExercises = [
    { name: 'Air squat', muscles: 'Quads, glutes', image: airsquart },
    { name: 'Jump squat', muscles: 'Quads, glutes', image: jumpsquat },
    { name: 'Forward lunge', muscles: 'Quads, glutes', image: forwardlung },
    { name: 'Split Squat jump', muscles: 'Quads, glutes, cardio', image: squardjump },
    { name: 'Pistol squat', muscles: 'Quads, glutes', image: pistolsquat },
    { name: 'Cyclist squat', muscles: 'Quads, glutes', image: cyclistsquat },
  ];

  return (
    <div className="mb-20  px-6 py-10 min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <h2 className="mt-20 text-3xl font-bold mb-8 text-center text-cyan-400">🦵 Lower Body Workouts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {lowerBodyExercises.map((exercise, index) => (
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
              className=" w-full h-48 object-contain top-2.5"
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

export default Lowerbody;

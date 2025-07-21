import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

import pushup from '/assets/gym_images/tricepsWorkOut/ Push-up.webp';
import tricepskickback from '/assets/gym_images/tricepsWorkOut/ Triceps_kickback.webp';
import lateral from '/assets/gym_images/tricepsWorkOut/Lateral arm raise.webp';
import overheadcable from '/assets/gym_images/tricepsWorkOut/Overhead cable tricep extension.webp';
import parallel from '/assets/gym_images/tricepsWorkOut/Parallel bar dips.webp';
import ropecabletricep from '/assets/gym_images/tricepsWorkOut/Rope cable tricep extension.webp';
import seated from '/assets/gym_images/tricepsWorkOut/Seated machine tricep extension.webp';
import skullcrusher from '/assets/gym_images/tricepsWorkOut/Skull crusher.webp';
import standingtriceps from '/assets/gym_images/tricepsWorkOut/Standing triceps extension.webp';
import tricepsdips from '/assets/gym_images/tricepsWorkOut/Tricep dips.webp';
import tricepscable from '/assets/gym_images/tricepsWorkOut/triceps cable kickback.webp';

const tricepsWorkouts = [
  { image: pushup, name: "Push-up" },
  { image: tricepskickback, name: "Triceps Kickback" },
  { image: lateral, name: "Lateral Arm Raise" },
  { image: overheadcable, name: "Overhead Cable Tricep Extension" },
  { image: parallel, name: "Parallel Bar Dips" },
  { image: ropecabletricep, name: "Rope Cable Tricep Extension" },
  { image: seated, name: "Seated Machine Tricep Extension" },
  { image: skullcrusher, name: "Skullcrusher" },
  { image: standingtriceps, name: "Standing Triceps Extension" },
  { image: tricepsdips, name: "Tricep Dips" },
  { image: tricepscable, name: "Triceps Cable Kickback" },
];

const Tricepspage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const bgColor = "bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#023e8a]";

  return (
    <div className={`${bgColor} min-h-screen pt-20 mt-15 p-6`}>
      <Navbar bgColor={bgColor} />
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Triceps Workouts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tricepsWorkouts.map((workout, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={workout.image}
              alt={workout.name}
              className="w-full h-60 object-contain p-2"
              loading="lazy"
            />
            <div className="p-4 text-center font-semibold text-[#4A148C]">
              {workout.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tricepspage;

import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

import frontdumbbell from '/assets/gym_images/shoulderWorkOut/front-dumbbell-raise.webp';
import lateralraise from '/assets/gym_images/shoulderWorkOut/lateral-raise.webp';
import machinepumpshoulder from '/assets/gym_images/shoulderWorkOut/machine-pump-shoulder.webp';
import reardeltfly from '/assets/gym_images/shoulderWorkOut/Rear Delt Fly.webp';
import reardeltrow from '/assets/gym_images/shoulderWorkOut/Rear Delt Row.webp';
import seatedbarbell from '/assets/gym_images/shoulderWorkOut/Seated Barbell Press.webp';
import seateddumbell from '/assets/gym_images/shoulderWorkOut/Seated Dumbbell Press.webp';
import standingbarbell from '/assets/gym_images/shoulderWorkOut/standing-barbell-military-press.webp';
import uprightrow from '/assets/gym_images/shoulderWorkOut/upright-row.webp';

const shoulderWorkouts = [
  { image: frontdumbbell, name: "Front Dumbbell Raise" },
  { image: lateralraise, name: "Lateral Raise" },
  { image: machinepumpshoulder, name: "Machine Shoulder Pump" },
  { image: reardeltfly, name: "Rear Delt Fly" },
  { image: reardeltrow, name: "Rear Delt Row" },
  { image: seatedbarbell, name: "Seated Barbell Press" },
  { image: seateddumbell, name: "Seated Dumbbell Press" },
  { image: standingbarbell, name: "Standing Barbell Press" },
  { image: uprightrow, name: "Upright Row" },
];

const Shoulderpage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const bgColor = "bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500";

  return (
    <div className={`${bgColor} min-h-screen  mt-15 pt-20 p-6`}>
      <Navbar bgColor={bgColor} />
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Shoulder Workouts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {shoulderWorkouts.map((workout, index) => (
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
            <div className="p-4 text-center font-semibold text-orange-700">
              {workout.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoulderpage;

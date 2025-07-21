import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

import adduction from '/assets/gym_images/legsWorkOut/Adduction machine.webp';
import barbell from '/assets/gym_images/legsWorkOut/Barbell deadlift.webp';
import bridges from '/assets/gym_images/legsWorkOut/Bridges.webp';
import bulgarian from '/assets/gym_images/legsWorkOut/Bulgarian split squat.webp';
import calf from '/assets/gym_images/legsWorkOut/Calf raises.webp';
import deadlift from '/assets/gym_images/legsWorkOut/Deadlift.webp';
import hipabduction from '/assets/gym_images/legsWorkOut/Hip abduction on the floor.webp';
import legcurl from '/assets/gym_images/legsWorkOut/Leg curls.webp';
import legextensions from '/assets/gym_images/legsWorkOut/Leg extensions.webp';
import legpress from '/assets/gym_images/legsWorkOut/Leg press.webp';
import lunges from '/assets/gym_images/legsWorkOut/Lunges.webp';
import nordic from '/assets/gym_images/legsWorkOut/Nordic curl.webp';
import squat from '/assets/gym_images/legsWorkOut/Squat.webp';
import sumo from '/assets/gym_images/legsWorkOut/Sumo squat.webp';

const legWorkouts = [
  { name: 'Adduction Machine', image: adduction },
  { name: 'Barbell Deadlift', image: barbell },
  { name: 'Bridges', image: bridges },
  { name: 'Bulgarian Split Squat', image: bulgarian },
  { name: 'Calf Raises', image: calf },
  { name: 'Deadlift', image: deadlift },
  { name: 'Hip Abduction', image: hipabduction },
  { name: 'Leg Curl', image: legcurl },
  { name: 'Leg Extensions', image: legextensions },
  { name: 'Leg Press', image: legpress },
  { name: 'Lunges', image: lunges },
  { name: 'Nordic Curl', image: nordic },
  { name: 'Squat', image: squat },
  { name: 'Sumo Squat', image: sumo },
];

const Legpage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const bgColor = "bg-gradient-to-br from-[#344e41] via-[#3a5a40] to-[#1b4332]";

  return (
    <div className={`${bgColor} min-h-screen mt-14 pt-20 p-6`}>
      <Navbar bgColor={bgColor} />
      <h1 className="text-4xl font-bold text-center mb-8 text-green-100">Leg Workouts</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {legWorkouts.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-52 object-contain p-2"
              loading="lazy"
            />
            <div className="p-3 text-center font-semibold text-[#1D3557]">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legpage;

import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

import bandresisted from '/assets/gym_images/chestWorkOuts/band-resisted-press-up.avif';
import benchpress from '/assets/gym_images/chestWorkOuts/bench press.avif';
import chestfly from '/assets/gym_images/chestWorkOuts/bench press.avif'; // Consider replacing with a unique fly image
import closegrip from '/assets/gym_images/chestWorkOuts/close-grip-bench-press.avif';
import diamondpushup from '/assets/gym_images/chestWorkOuts/diamond-press-up.avif';
import eccentricpushup from '/assets/gym_images/chestWorkOuts/eccentric-press-up-.avif';
import flatdumpbell from '/assets/gym_images/chestWorkOuts/Flat dumbbell press.avif';
import inclinebenchpress from '/assets/gym_images/chestWorkOuts/Incline bench press.avif';
import inclinedumpbellpress from '/assets/gym_images/chestWorkOuts/incline dumpbell push.avif';
import squezzerdump from '/assets/gym_images/chestWorkOuts/squezzer dumpdell push.gif';
import tempopressup from '/assets/gym_images/chestWorkOuts/tempopressup.avif';
import dipspress from '/assets/gym_images/chestWorkOuts/dipspress.avif';

const exercises = [
  { name: "Band Resisted Press-Up", img: bandresisted },
  { name: "Bench Press", img: benchpress },
  { name: "Chest Fly", img: chestfly },
  { name: "Close Grip Bench Press", img: closegrip },
  { name: "Diamond Push-Up", img: diamondpushup },
  { name: "Dips", img: dipspress },
  { name: "Eccentric Push-Up", img: eccentricpushup },
  { name: "Flat Dumbbell Press", img: flatdumpbell },
  { name: "Incline Bench Press", img: inclinebenchpress },
  { name: "Incline Dumbbell Press", img: inclinedumpbellpress },
  { name: "Squeeze Dumbbell Press", img: squezzerdump },
  { name: "Tempo Press-Up", img: tempopressup },
];

const Chestpage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const bgColor = "bg-gradient-to-br from-[#257da3] via-[#404d52] to-[#000000]";

  return (
    <div className={`${bgColor} p-8 mt-10 min-h-screen pt-20`}>
      <Navbar bgColor={bgColor} />
      <h1 className="text-4xl font-bold text-center mb-8 text-red-800">Chest Workouts</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {exercises.map((exercise, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-white"
          >
            <img
              src={exercise.img}
              alt={exercise.name}
              className="w-full h-60 object-contain p-2"
            />
            <div className="px-4 py-2 text-center font-semibold bg-gray-100 text-[#1D3557]">
              {exercise.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chestpage;

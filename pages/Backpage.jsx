import React from 'react'
import Navbar from '../components/Navbar';
import assistedpullup from '/assets/gym_images/backWorkOuts/Assisted pull ups.webp'
import bentoverrows from '/assets/gym_images/backWorkOuts/Bent-over rows with barbell .webp'
import cablelatpull from '/assets/gym_images/backWorkOuts/Cable lat pull down.webp'
import cablepullover from '/assets/gym_images/backWorkOuts/Cable pullover.webp'
import highrowmachine from '/assets/gym_images/backWorkOuts/High row machine .webp'
import landminerow from '/assets/gym_images/backWorkOuts/Landmine row.webp'
import leverseated from '/assets/gym_images/backWorkOuts/Lever seated reverse fly.webp'
import onearmdumbbell from '/assets/gym_images/backWorkOuts/One arm dumbbell row.webp'
import pullup from '/assets/gym_images/backWorkOuts/Pull ups.webp'
import seatedcablerows from '/assets/gym_images/backWorkOuts/Seated cable row.webp'
import uprightbarbell from '/assets/gym_images/backWorkOuts/Upright barbell row.webp'

const backWorkouts = [
  { image: assistedpullup, name: "Assisted Pull Ups" },
  { image: bentoverrows, name: "Bent-over Rows" },
  { image: cablelatpull, name: "Cable Lat Pull Down" },
  { image: cablepullover, name: "Cable Pullover" },
  { image: highrowmachine, name: "High Row Machine" },
  { image: landminerow, name: "Landmine Row" },
  { image: leverseated, name: "Lever Seated Reverse Fly" },
  { image: onearmdumbbell, name: "One Arm Dumbbell Row" },
  { image: pullup, name: "Pull Ups" },
  { image: seatedcablerows, name: "Seated Cable Rows" },
  { image: uprightbarbell, name: "Upright Barbell Row" },
];

const Backpage = () => {
   const bgColor = "bg-gradient-to-br from-[#257da3] via-[#404d52] to-[#000000]";

  return (
    <div className={`${bgColor} p-8 mt-10 min-h-screen pt-20`}>
      <Navbar bgColor={bgColor} />
      <h1 className="text-3xl font-bold mb-6 text-center">Back Workouts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {backWorkouts.map((workout, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={workout.image}
              alt={workout.name}
              className="w-full h-60 object-contain"
            />
            <div className="p-4 text-center rounded-2xl font-medium text-lg">{workout.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Backpage

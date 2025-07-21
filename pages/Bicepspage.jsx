import React, { useEffect } from 'react'

// Workouts images
import Navbar from '../components/Navbar'
import invertedrow from '/assets/gym_images/bicepsWorkOut/ Inverted Row.gif'
import bandedbicep from '/assets/gym_images/bicepsWorkOut/Banded Bicep Curl.avif'
import chinup from '/assets/gym_images/bicepsWorkOut/chin-up.gif'
import concentrationcurl from '/assets/gym_images/bicepsWorkOut/concentrationcurl.avif'
import hammercurl from '/assets/gym_images/bicepsWorkOut/Hammer curl.gif'
import leantforwardezbarcurl from '/assets/gym_images/bicepsWorkOut/Leant-Forward EZ Bar Curl.gif'
import preachercurls from '/assets/gym_images/bicepsWorkOut/Preacher Curls .avif'
import pronedumbbellspidercurl from '/assets/gym_images/bicepsWorkOut/Prone Dumbbell Spider Curl.gif'
import regularezbarbarcurl from '/assets/gym_images/bicepsWorkOut/regular ez bar curl.gif'
import reversecurlstrand from '/assets/gym_images/bicepsWorkOut/Reverse Curl Straight Bar .gif'
import standingdumb from '/assets/gym_images/bicepsWorkOut/Standing Dumbbell Curl.avif'
import twisting from '/assets/gym_images/bicepsWorkOut/twisting-bicep-curl.gif'
import zottmen from '/assets/gym_images/bicepsWorkOut/Zottman curl.gif'

// Workout data
const bicepsWorkouts = [
  { name: 'Inverted Row', image: invertedrow },
  { name: 'Banded Bicep Curl', image: bandedbicep },
  { name: 'Chin Up', image: chinup },
  { name: 'Concentration Curl', image: concentrationcurl },
  { name: 'Hammer Curl', image: hammercurl },
  { name: 'Leant Forward EZ Bar Curl', image: leantforwardezbarcurl },
  { name: 'Preacher Curls', image: preachercurls },
  { name: 'Prone Dumbbell Spider Curl', image: pronedumbbellspidercurl },
  { name: 'Regular EZ Bar Curl', image: regularezbarbarcurl },
  { name: 'Reverse Curl Straight Bar', image: reversecurlstrand },
  { name: 'Standing Dumbbell Curl', image: standingdumb },
  { name: 'Twisting Bicep Curl', image: twisting },
  { name: 'Zottman Curl', image: zottmen },
]

const Bicepspage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  const bgColor = "bg-gradient-to-br from-[#257da3] via-[#404d52] to-[#000000]";

  return (
     <div className={`${bgColor} p-8 mt-10 min-h-screen pt-20`}>
      <Navbar bgColor={bgColor} />
      <h1 className="text-4xl font-bold text-center mb-8 text-black">Biceps Workouts</h1>
      
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {bicepsWorkouts.map((workout, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-white"
          >
            <img
              src={workout.image}
              alt={workout.name}
              className="w-full h-60 object-contain p-2"
            />
            <div className="px-4 py-2 text-center font-semibold bg-gray-100">
              {workout.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bicepspage

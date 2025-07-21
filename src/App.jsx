import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Loader from '../components/Loader';
import Navbar from '../components/Navbar';

import Home from '../pages/HomePage';
import Workout from '../pages/Workouts';
import Homeexercises from '../pages/Homeexercises';
import Gympage from '../pages/Gympage';

import AbsPage from '../pages/AbsPage';
import Upperbody from '../pages/Upperbody';
import Lowerbody from '../pages/Lowerbody';
import Backpage from '../pages/Backpage';
import Bicepspage from '../pages/Bicepspage'
import Chestpage from '../pages/Chestpage';
import Tricepspage from '../pages/Tricepspage';
import Legpage from '../pages/Legpage';
import Shoulderpage from '../pages/Shoulderpage';
import Yogapage from '../pages/Yogapagae';
import Aerobicpage from '../pages/Aerobicpage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts" element={<Workout />} />
            <Route path="/homeexercises" element={<Homeexercises />} />
            <Route path="/gymworkouts" element={<Gympage />} />
            <Route path="/yoga" element={<Yogapage />} />
            <Route path="/aerobic" element={<Aerobicpage />} />
            
            {/* Workout pages */}
            <Route path="/abspage" element={<AbsPage />} />
            <Route path="/upperbody" element={<Upperbody />} />
            <Route path="/lowerbody" element={<Lowerbody />} />
            <Route path="/back" element={<Backpage />} />
            <Route path="/biceps" element={<Bicepspage />} />
            <Route path="/shoulders" element={<Shoulderpage />} />
            <Route path="/chest" element={<Chestpage />} />
            <Route path="/triceps" element={<Tricepspage />} />
            <Route path="/legs" element={<Legpage />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;

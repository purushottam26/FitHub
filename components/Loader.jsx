import React, { useEffect } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete(); // Callback when animation finishes
      }
    });

    // Initial state
    tl.set('#fit', { opacity: 0, x: 200 });
    tl.set('#hub', { opacity: 0, x: -200 });

    // Animate in text
    tl.to('#fit', {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power4.out',
      color: '#DC143C' // crimson
    }, 0);

    tl.to('#hub', {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power4.out'
    }, 0);

    // Slide out title
    tl.to('#titlediv', {
      opacity: 0,
      y: -200,
      duration: 1,
      ease: 'power4.out'
    }, '+=0.5');

    // Shrink top section
    tl.to('#fs', {
      height: 0,
      duration: 0.6,
      ease: 'expo.inOut'
    });

    // Expand bottom color element
    tl.to('#elem', {
      height: '100%',
      duration: 1,
      ease: 'power4.inOut'
    }, '-=0.5');
  }, [onComplete]);

  return (
    <div id="main" className="w-full h-screen relative z-50">
      <div id="fs" className="w-full h-full bg-[#151515] overflow-hidden">
        <div
          id="titlediv"
          className="flex text-white text-8xl font-serif justify-center items-center h-full gap-4"
        >
          <div id="fit" className="opacity-0">Fit</div>
          <div id="hub" className="opacity-0">Hub</div>
        </div>
      </div>

      <div
        id="elem"
        className="absolute bottom-0 w-full h-0 bg-[#14CF92]"
      />
    </div>
  );
};

export default Loader;

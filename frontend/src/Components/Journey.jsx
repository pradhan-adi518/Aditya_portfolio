import React, { useState, useRef, useEffect } from 'react';
import { line, curveBasis } from 'd3-shape';
import { scaleLinear } from 'd3-scale';
import car from '../assets/car.gif'
const milestones = [
  { position: 1000, description: 'Milestone 1: Project A' },
  { position: 2000, description: 'Milestone 2: Project B' },
  { position: 3000, description: 'Milestone 3: Project C' },
  { position: 4000, description: 'Milestone 1: Project A' },
  { position: 5000, description: 'Milestone 2: Project B' },
  { position: 6000, description: 'Milestone 3: Project C' },
  // Add more milestones as needed
];

const Journey = () => {
  const [carPosition, setCarPosition] = useState(0);
  const [activeMilestone, setActiveMilestone] = useState(null);
  const containerRef = useRef(null);

  const pathData = [
    { x: 0, y: 80 },
    { x: 250, y: 350 },
    { x: 700, y: 140 },
    { x: 1250, y: 250 },
    { x: 1800, y: 50 },
    { x: 2450, y: 220 },
    { x: 3000, y: 340 },
    { x: 3900, y: 4},
    { x: 4900, y: 440 },
    { x: 5500, y: 80 },
  ];

  const xScale = scaleLinear()
    .domain([0, pathData[pathData.length - 1].x])
    .range([0, 6400]);

  const lineGenerator = line()
    .x(d => xScale(d.x))
    .y(d => d.y)
    .curve(curveBasis);

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = containerRef.current.scrollLeft+500;
      setCarPosition(scrollLeft);

      const active = milestones.find(
        (milestone) => scrollLeft >= milestone.position && scrollLeft < milestone.position + 100
      );
      setActiveMilestone(active);
    };

    const scrollContainer = containerRef.current;
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overflow-x-scroll w-full h-96" ref={containerRef}>
      <div className="relative w-[6000px] h-full">
        <svg className="absolute top-0 left-0 w-full h-full">
          <path
            d={lineGenerator(pathData)}
            stroke="white"
            opacity={0.5}
            fill="transparent"
            strokeWidth="20"
          />
        </svg>
        <div
          className="absolute h-32 w-32 car"
          style={{
            left: `${carPosition}px`,
            transform: `translate(${getTranslateX(carPosition)}px, ${getTranslateY(carPosition)}px)`,
          }}
        >
            <img src={car} alt="" />
        </div>
        {milestones.map((milestone, index) => (
         
          <div
            key={index}
            className="absolute top-0"
            style={{ left: milestone.position - 50 }}
          >
            {/* {console.log(milestone.position)} */}
            <div className="arrow" style={{ left: -10, top: getArrowTopPosition(milestone.position) }}>hi</div>
            {activeMilestone && activeMilestone.position === milestone.position && (
              <div className="absolute top-20 w-48 p-4 bg-white shadow-lg rounded-md description">
                {milestone.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  function getTranslateX(x) {
    // Interpolate x position on the path
    const interpolatedX = lineGenerator.x(xScale(x));
    return interpolatedX;
  }

  function getTranslateY(x) {
    // Interpolate y position on the path
    const interpolatedY = lineGenerator.y(xScale(x));
    return interpolatedY;
  }
  function getArrowTopPosition(x) {
    // Calculate y position on the path for the given x coordinate
    const y = lineGenerator(xScale(x));
    console.log(y);
    return y - 10; // Adjust the arrow's position as needed
  }
};

export default Journey;

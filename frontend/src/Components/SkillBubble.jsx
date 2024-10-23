import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const SkillBubble = ({ percentage, description, icon, color }) => {
  const [hovered, setHovered] = React.useState(false);

  const styles = useSpring({
    transform: hovered ? 'scale(1.1)' : 'scale(0.9)',
    boxShadow: hovered ? '0px 15px 30px rgba(0, 0, 0, 0.2)' : '0px 10px 20px rgba(0, 0, 0, 0.1)',
    config: { mass: 1, tension: 170, friction: 26 },
  });

  return (
    <animated.div
      style={styles}
      className="relative flex items-center justify-center  m-6 md:w-64 md:h-64 w-44 h-44 md:hover:w-80 hover:w-72    rounded-full shadow-white/20 bg-gray-300/10 text-white shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full h-full flex items-center justify-center hover:rounded-3xl rounded-full shadow-xl shadow-white/20 ring ring-white/20">
        <div
          className="absolute inset-0 rounded-full shadow-xl"
          style={{
            background: `url(${icon}) no-repeat center center`,
            backgroundSize: '50%',
          }}
        ></div>
        {hovered ? (
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-lg font-semibold transition-transform p-4 bg-black bg-opacity-60 backdrop-blur-sm rounded-full">
       <img src={icon} className='md:w-24 md:h-24 w-16 rounded-md h-16'/>
          <p className="mb-2">{description}</p>
        
          <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
          </div>
         
        </div>
        ) : (
          <div className="relative z-10">{}</div>
        )}
      </div>
    </animated.div>
  );
};

export default SkillBubble;

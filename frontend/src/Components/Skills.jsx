import React from 'react';
import SkillBubble from './SkillBubble';
import { useSpring, animated } from '@react-spring/web';
import Typewriter from 'react-typewriter-effect';
import { useInView } from 'react-intersection-observer';

const skills = [
  { 
    skill: 'JavaScript', 
    percentage: 70, 
    description: 'Expert in JavaScript.', 
    color: '#F7DF1E', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' 
  },
  { 
    skill: 'React', 
    percentage: 65, 
    description: 'Proficient in React. ', 
    color: '#61DAFB', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' 
  },
  { 
    skill: 'CSS', 
    percentage: 80, 
    description: 'Excellent in CSS. ', 
    color: '#2965F1', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' 
  },
  { 
    skill: 'HTML', 
    percentage: 75, 
    description: 'Excellent in HTML. ', 
    color: '#E44D26', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' 
  },
  { 
    skill: 'Python', 
    percentage: 65, 
    description: 'Proficient in Python.', 
    color: '#3776AB', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' 
  },
  
  
  { 
    skill: 'SQL', 
    percentage: 65, 
    description: 'Excellent in SQL.', 
    color: '#4479A1', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' 
  },
  { 
    skill: 'Git', 
    percentage: 50, 
    description: 'Excellent in Git.', 
    color: '#F05032', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' 
  },
  { 
    skill: 'Tailwind CSS', 
    percentage: 80, 
    description: 'Proficient in Tailwind CSS.', 
    color: '#38B2AC', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' 
  },
  
];



const SkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headingStyles = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
  });

  return (
    <div ref={ref} style={{ minHeight: '75vh' }} className="relative">
      <animated.h1 style={headingStyles} className='text-center py-2 mb-3 mt-24 font-semibold text-7xl'>
        Skills
      </animated.h1>
      <animated.h2 style={headingStyles} className='text-center py-2 mt-5 mb-3'>
        <Typewriter
          onTypingEnd={() => {}}
          options={{
            strings: ['Proficiencies in various technologies'],
            autoStart: true,
            loop: false,
          }}
        />
      </animated.h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
      
          <AnimatedBubble 
            key={index} 
            skill={skill.skill} 
            percentage={skill.percentage} 
            description={skill.description} 
            icon={skill.icon} 
            color={skill.color}
           
          />
        ))}
      </div>
    </div>
  );
};

const AnimatedBubble = ({ skill, percentage, description, icon }) => {
  const [hovered, setHovered] = React.useState(false);

  const { x, y } = useSpring({
    from: { x: 0, y: 0 },
    to: { x: Math.random() * 50 - 25, y: Math.random() * 50 - 25 },
    config: { duration: 2000 },
    reset: true,
    reverse: hovered,
    onRest: () => !hovered && setHovered(false),
  });

  return (
    <animated.div
      style={{
        transform: x.to((x) => `translate3d(${x}%, ${y}%, 0)`),
      }}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <SkillBubble skill={skill} percentage={percentage} description={description} icon={icon} />
    </animated.div>
  );
};

export default SkillsSection;

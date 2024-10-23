import React, { useEffect, useState } from "react";
import Typewriter from "react-typewriter-effect";
import { useInView } from "react-intersection-observer";
import profilepic from '../assets/avatar.png'
function SocialMediaLinks() {
  const links = [
   { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce7a5392200faa7795d7c982290d739a4ea5d3c612c145679fe027eef2dccb8a?apiKey=78edfb5432bb454ba45341ffa54eb21f&", alt: "Social Icon 1", url:"https://instagram.com/the_silent_boy_1101"  },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ca41ebe800be25472bc5e9a4c5d34ecce6e4cf15a807a340e84a6d0744c9b80?apiKey=78edfb5432bb454ba45341ffa54eb21f&", alt: "Social Icon 3", url:"https://www.linkedin.com/in/karan-gangwar-59aa8b225/"  },
  ];

  return (
    <div className="flex gap-4 self-start">
      {links.map((link, index) => (
       <a href={link.url}>
         <img
          key={index}
          loading="lazy"
          src={link.src}
          alt={link.alt}
          className="shrink-0 w-6 aspect-square"
        />
       </a>
      ))}
    </div>
  );
}

function Header() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartTyping(true); // Set startTyping to true when inView is true
    }
  }, [inView]);

  return (
    <header className="flex md:h-screen h-fit  overflow-hidden flex-col items-center px-16 pt-12 max-md:px-5">
      <div className="w-full max-w-[1478px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <article className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-4 text-2xl text-right text-gray-50 max-md:flex-wrap"></div>
              <h1 className="mt-2 text-7xl font-bold text-gray-50 max-md:max-w-full max-md:text-4xl">
                Hi I’m,
              </h1>
              <div ref={ref} className="text-lg h-96 gradient2-text about-me-section">
                {startTyping && (
                  <Typewriter
                    text="Hi, I'm Karan Gangwar, a passionate B.Tech student in Computer Science and Engineering at IET Lucknow. With a knack for turning ideas into reality, I have developed projects like Mzone, GrievEase, and SignLanguageReader. I excel in Java, C++, JavaScript, SQL, Python, and HTML, always striving to enhance my skills. I love crafting intuitive and engaging user experiences using modern frameworks like ReactJS and Tailwind CSS. I thrive on challenges and enjoy problem-solving, ensuring high-quality solutions in every project. Let's collaborate and bring digital dreams to life."
                    textStyle={{ color: 'gray-50', fontSize: '1.1em', lineHeight: '1.6' }}
                    typeSpeed={40}
                    cursor
                  />
                )}
              </div>
              <div className="flex gap-4 pr-20 mt-16 max-md:flex-wrap max-md:pr-5 max-md:mt-10">
                <div className="text-2xl text-gray-50">Find me on:</div>
                <SocialMediaLinks />
              </div>
            </article>
          </section>
          <section className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <div className="relative">
              <img
                loading="lazy"
                src={profilepic} alt="Shree portrait"
                className="grow w-full aspect-[1] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </section>
        </div>
      </div>
    </header>
  );
}

function AboutMe() {
  return <Header />;
}

export default AboutMe;

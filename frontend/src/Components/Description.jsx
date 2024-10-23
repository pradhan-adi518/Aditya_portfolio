import React from "react";
import "./Ds.css";
import Typewriter from "typewriter-effect";

const Description = () => {
  return (
    <div className="flex flex-col h-screen px-10 py-24 align-middle justify-center">
      <h1 className=" gradient-text py-12 text-7xl px-8s font-medium text- ">
        One pixel at a time
      </h1>
      <p className="text-lg gradient2-text">
      <Typewriter
        options={{
          strings: [
            "<strong>Welcome to my Creative Hub!</strong>: Explore my world of code, design, and innovation—a place where pixels dance and ideas come to life",
            "<strong>Crafting Digital Experiences:</strong> With React, Java, and a touch of magic, I’ve conjured up Mzone (a revolutionary music app) and GrievEase (a transparent complaint portal)",
            "<strong>Signs Speak Louder:</strong> Witness my Python-powered sign language reader—bridging gaps with accuracy and empathy, one gesture at a time",
            "<strong>Let’s Code Together!</strong>: Connect via GitHub, LinkedIn, or email—I’m eager to collaborate and learn from fellow tech enthusiasts",
          ],
          autoStart: true,
          loop: true,
          delay: 40, 
          deleteSpeed: 10,
          changeDelay: 12,
        }}
      />
      </p>
     
    </div>
  );
};

export default Description;

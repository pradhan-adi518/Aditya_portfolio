import React from "react";
import { Link, useLocation } from "react-router-dom";
import ServiceCard from "./ServiceCard.jsx";

function Services() {
  const serviceData = [
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", // Figma logo
      title: "UI/UX Designing",
      description: "Crafting intuitive and visually appealing designs using Figma, Adobe XD, and Framer to enhance user engagement and satisfaction.",
      readMoreAlt: "Read more about UI/UX Designing",
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // React logo
      title: "Frontend Development",
      description: "Developing responsive and dynamic web applications using React, Tailwind CSS, Material UI, and Bootstrap for seamless user experiences.",
      readMoreAlt: "Read more about Frontend Development",
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", // Java logo
      title: "Java Full Stack Development",
      description: "Building robust full-stack applications with Java, including backend development, database management, and frontend integration.",
      readMoreAlt: "Read more about Java Full Stack Development",
    },
    // Add more service items as needed
  ];

  const location = useLocation();

  const handleReadMoreClick = (title) => {
    alert(`Read more about ${title}`);
  };

  const handleContactClick = () => {
    if (location.pathname === "/home") {
      scrollToContactForm();
    } else {
      // Navigate to home page and scroll to contact form
      window.location.href = "/home#contactForm";
    }
  };

  const scrollToContactForm = () => {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center px-16 py-20 max-md:px-5">
      <div className="flex flex-col mt-5 w-full max-w-[1480px] max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col">
            <div className="flex gap-4 text-2xl text-right text-gray-50">
              <div className="flex-1 shrink-0 my-auto h-0.5 bg-gray-50" />
            </div>
            <div className="gradient-text py-12 text-5xl px-8s font-medium">
              What Can
              <br />
              <span className="text-orange-600">I Do?</span>
            </div>
          </div>
          <div className="flex gap-5 my-auto max-md:flex-wrap max-md:max-w-full">
            <div className="flex-1 my-auto text-xl md:w-2/3 text-right text-white max-md:max-w-full">
              Whether you need a stunning UI/UX design, a dynamic frontend, or a robust Java full stack development, I've got you covered. Let's create something amazing together.
            </div>
            <Link
              to="#"
              className="text-white hover:text-gray-300"
              onClick={handleContactClick}
            >
              <button className="flex justify-center items-center px-16 py-3 text-2xl font-semibold text-center text-orange-600 bg-gray-50 rounded-lg max-md:px-5 hover:scale-110 transition-transform">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
        <div className="flex gap-5 justify-between pr-6 mt-16 w-full max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              imgSrc={service.imgSrc}
              title={service.title}
              description={service.description}
              readMoreAlt={service.readMoreAlt}
              onReadMoreClick={() => handleReadMoreClick(service.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

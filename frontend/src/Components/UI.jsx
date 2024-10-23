import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Ds.css";

const items = [
  {
    id: 7,
    title: "UI Project 1",
    subtitle: "UI/UX Design",
    description: "Description of UI Project 1",
    figmaEmbedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FFyGIW5UpIsPSxjSMROD1as%2FDSW-website%3Fpage-id%3D0%253A1%26node-id%3D1-2%26viewport%3D-430%252C-691%252C0.44%26t%3DDVf7XJOtcrRdmepf-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A28",
    timeline: [
      { date: "2023-01-01", event: "Project Initiation" },
      { date: "2023-02-01", event: "Wireframing" },
      { date: "2023-03-01", event: "Design Prototyping" },
      { date: "2023-04-01", event: "User Testing" },
      { date: "2023-05-01", event: "Final Design Delivery" },
    ],
    images: ["https://via.placeholder.com/400x300.png?text=UI+Project+1+Image1"],
  },
  {
    id: 8,
    title: "UI Project 2",
    subtitle: "UI/UX Design",
    description: "Description of UI Project 2",
    figmaEmbedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FFyGIW5UpIsPSxjSMROD1as%2FDSW-website%3Fpage-id%3D0%253A1%26node-id%3D1-2%26viewport%3D-430%252C-691%252C0.44%26t%3DDVf7XJOtcrRdmepf-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A28",
    timeline: [
      { date: "2023-06-01", event: "Project Initiation" },
      { date: "2023-07-01", event: "Wireframing" },
      { date: "2023-08-01", event: "Design Prototyping" },
      { date: "2023-09-01", event: "User Testing" },
      { date: "2023-10-01", event: "Final Design Delivery" },
    ],
    images: ["https://via.placeholder.com/400x300.png?text=UI+Project+2+Image1"],
  },
  // Add other project items similarly
];

const Work2 = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const totalImages = items.reduce(
    (total, item) => total + item.images.length,
    0
  );

  const containerRef = useRef(null);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
    }, Math.random() * 30000);

    return () => clearInterval(timer);
  }, [selectedId, totalImages]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalImages - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < totalImages - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const items = Array.from(container.children);
      const center = container.scrollLeft + container.offsetWidth / 2;

      items.forEach((item) => {
        const distanceFromCenter = Math.abs(
          item.offsetLeft + item.offsetWidth / 2 - center
        );
        const scale = Math.max(0.5, 1 - Math.min(0.5, distanceFromCenter / 700));
        item.style.transform = `scale(${scale})`;
      });
    };

    const container = containerRef.current;
    const items = Array.from(container.children);
    const center = container.scrollLeft + container.offsetWidth / 2;

    items.forEach((item) => {
      const distanceFromCenter = Math.abs(
        item.offsetLeft + item.offsetWidth / 2 - center
      );
      const scale = Math.max(0.5, 1 - 2.2 * Math.min(0.5, distanceFromCenter / 1000));
      item.style.transform = `scale(${scale})`;
    });

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bbbbb h-screen z-40 w-screen ">
      <Header />
      <h1 className="text-4xl mb-3 pt-24 flex items-center justify-center text-center font-semibold">
        UI Designing Projects
      </h1>
      <main
        style={{ height: "75vh", zIndex: 0 }}
        className="mx-1 px-0 pt-24 h-full z-0 overflow-hidden"
      >
        <section className="mb-16 z-0 h-full overflow-y-auto">
          <style>
            {`
              ::-webkit-scrollbar {
                width: 0px; /* Safari and Chrome */
              }
              ::-webkit-scrollbar-thumb {
                background: transparent;
              }
            `}
          </style>

          <div
            ref={containerRef}
            className="ml-3 flex overflow-x-scroll py-12 px-0 mx-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="p-6 z-0 shadow-2xl hover:shadow-white/40 rounded-xl shadow-white/20 cursor-pointer transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex-shrink-0"
                style={{ minWidth: "400px" }}
                onClick={() => {
                  setSelectedId(item.id);
                  setCurrentImageIndex(0);
                }}
              >
                <img
                  src={item.images[currentImageIndex]}
                  alt={item.title}
                  className="w-full h-60 object-cover rounded-lg transition-all duration-300 ease-in-out"
                />
                <h5 className="text-xl font-semibold mt-2">{item.subtitle}</h5>
                <h2 className="text-2xl font-bold mt-2">{item.title}</h2>
              </div>
            ))}
          </div>
        </section>

        {selectedId && (
          <div
            className={`fixed backdrop-blur-lg inset-0 bg-black/70 flex items-center justify-center z-50 ${
              selectedId ? "modal-fade-in" : "modal-fade-out"
            }`}
          >
            <article className="flex-col w-full bg-white/20 backdrop:blur-2xl rounded-xl  md:w-1/2 md:h-3/4 shadow-lg p-8 mx-auto">
              <iframe className="
              w-full h-2/3"
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
               
                src={items.find((item) => item.id === selectedId).figmaEmbedUrl}
                allowFullScreen
              ></iframe>
              <h5 className="text-xl font-semibold mt-4">
                {items.find((item) => item.id === selectedId).subtitle}
              </h5>
              <h2 className="text-2xl font-bold mt-2">
                {items.find((item) => item.id === selectedId).title}
              </h2>
              <p className="mt-4">
                {items.find((item) => item.id === selectedId).description}
              </p>
              <button
                onClick={() => setSelectedId(null)}
                className="mt-6 px-4 py-2 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 absolute top-4 right-4"
              >
                Close
              </button>
            </article>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Work2;

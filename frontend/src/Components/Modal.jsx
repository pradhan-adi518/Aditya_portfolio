import {React, useState} from "react";
const [currentImageIndex, setCurrentImageIndex] = useState(0);
const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0
       ? prevIndex - 1
        : totalImages - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < totalImages - 1
       ? prevIndex + 1
        : 0
    );
  };
const Modal = ({
  items,
  selectedId,

}) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 ${
        selectedId ? "modal-fade-in" : ""
      }`}
    >
      <article className="bg-white rounded-lg shadow-lg p-8 max-w-sm mx-auto relative">
        <img
          src={
            items.find((item) => item.id === selectedId).images[
              currentImageIndex
            ]
          }
          alt={items.find((item) => item.id === selectedId).title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h5 className="text-xl font-semibold text-gray-800 mt-4">
          {items.find((item) => item.id === selectedId).subtitle}
        </h5>
        <h2 className="text-2xl font-bold mt-2">
          {items.find((item) => item.id === selectedId).title}
        </h2>
        <p className="mt-4">
          {items.find((item) => item.id === selectedId).description}
        </p>
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevImage}
            className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            Previous
          </button>
          <button
            onClick={handleNextImage}
            className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            Next
          </button>
        </div>
        <button
          onClick={() => setSelectedId(null)}
          className="mt-6 px-4 py-2 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 absolute top-4 right-4"
        >
          Close
        </button>
      </article>
    </div>
  );
};

export default Modal;

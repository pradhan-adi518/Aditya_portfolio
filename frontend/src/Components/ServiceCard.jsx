import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ServiceCard = ({
  imgSrc,
  title,
  description,

  onReadMoreClick,
}) => {
  return (
    <div className="flex hover:scale-105 items-center gap-3 transition-transform md:flex-col md:p-8 grow justify-center px-auto py-14 hover:shadow-2xl hover:shadow-white/40 m-4 mx-auto w-full text-white rounded-lg border-2 border-white/30 bg-white/5 shadow-lg shadow-white/20 max-md:px-5 max-md:mt-8">
     <div className="md:flex p-3 pl-0">
     <img
        loading="lazy"
        src={imgSrc}
        alt="hi"
        className="aspect-square w-[93px]"
      />
      <div className="mt-5 text-lg md:text-xl max-md:text-3xl">{title}</div>
     
     </div>
     <div className="md:flex"> <div className="mt-2 text-sm md:text-base">{description}</div>
      <div className="flex gap-4 pr-9 mt-5 text-sm max-md:pr-5">
        <div className="my-auto">
          <button className="text-white hover:text-blue-500 hover:border-0 border-0 font-semibold flex p-2 gap-3 text-nowrap bg-transparent">
            Read more{" "}
            <FaLongArrowAltRight className="pt-1 text-xl"></FaLongArrowAltRight>
          </button>
        </div>
      </div></div>
    </div>
  );
};

export default ServiceCard;

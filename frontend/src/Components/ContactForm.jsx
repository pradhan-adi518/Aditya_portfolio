import * as React from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment, AiOutlineInstagram } from "react-icons/ai";
import { RiFileDownloadLine } from "react-icons/ri";
import image from "../assets/contactphoto.png";
import resume from "../assets/karan_resume.pdf";

function SocialIcon({ src, alt,url }) {
  return <a href={url} className="hover:scale-105"> <img loading="lazy" src={src} alt={alt} className="shrink-0 aspect-square w-[50px]" />
</a>
}

const ContactForm = ({ onClose }) => {
  const email = "karangangwar341@gmail.com";
  const phoneNumber = "+919520569400";
  const address = "Lucknow, Uttar Pradesh, India";
  const instagramLink = "https://instagram.com/the_silent_boy_1101"; 
  const resumePdfPath = resume; // Update this path according to where your resume PDF is located

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 bg-opacity-70 backdrop-blur-xl z-50">
      <div className="w-full md:w-3/5 p-10 bg-white/5 border-2 border-white/20 shadow-white/20 shadow-2xl md:rounded-xl text-center space-y-6 backdrop-filter backdrop-blur-lg">
        <h1 className="text-4xl text-white mb-8 font-bold">Contact Me</h1>

        <div className="flex justify-center">
          <div className="w-1/2 mr-4">
            <img
              src={image}
              alt="Contact Form"
              className="w-full rounded-lg shadow-md mb-8"
            />
          </div>
          <div className="w-1/2 ml-4 flex flex-col justify-center">
            <div className="space-y-6 text-left">
              <ContactMethod
                icon={<AiOutlineMail className="w-12 h-12" />}
                text={` ${email}`}
                link={`mailto:${email}`}
              />
              <ContactMethod
                icon={<AiOutlinePhone className="w-12 h-12" />}
                text={`${phoneNumber}`}
                link={`tel:${phoneNumber}`}
              />
              <ContactMethod
                icon={<AiOutlineEnvironment className="w-12 h-12" />}
                text={`${address}`}
                link={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  address
                )}`}
              />
              <ContactMethod
                icon={<AiOutlineInstagram className="w-12 h-12" />}
                text="Follow me on Instagram"
                link={instagramLink}
              />
              <div className="flex items-center space-x-4 mt-6">
                <a
                  href={resume}
                  download="Your_Name_Resume.pdf"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  <RiFileDownloadLine className="inline-block mr-2 -mt-1" />
                  Download Resume
                </a>
              </div>
              <p className="text-sm text-gray-500">
                Download my professional resume for more details about my skills and experiences.
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const ContactMethod = ({ icon, text, link }) => (
  <div className="flex items-center space-x-4">
    {icon}
    <a href={link} className="text-lg text-white hover:underline">
      {text}
    </a>
  </div>
);

function MyComponent() {
  const [isContactFormOpen, setIsContactFormOpen] = React.useState(false);

  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce7a5392200faa7795d7c982290d739a4ea5d3c612c145679fe027eef2dccb8a?apiKey=78edfb5432bb454ba45341ffa54eb21f&", alt: "Social Icon 1", url:"https://instagram.com/the_silent_boy_1101"  },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ca41ebe800be25472bc5e9a4c5d34ecce6e4cf15a807a340e84a6d0744c9b80?apiKey=78edfb5432bb454ba45341ffa54eb21f&", alt: "Social Icon 3", url:"https://www.linkedin.com/in/karan-gangwar-59aa8b225/"  },
  ];

  const handleOpenContactForm = () => {
    setIsContactFormOpen(true);
  };

  const handleCloseContactForm = () => {
    setIsContactFormOpen(false);
  };

  return (
    <div className="w-screen flex justify-center items-center">
      <main className="flex flex-col items-center shadow-xl shadow-white/15 px-5 max-w-[878px] bg-white/10 border border-white/20 rounded-lg backdrop-blur-md  p-10">
        <h1 className="self-stretch w-full text-5xl font-bold text-center text-white leading-[90px] tracking-[2.49px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Interested to work with me?
        </h1>
        <button
          onClick={handleOpenContactForm}
          className="justify-center px-14 py-4 mt-28 text-base font-semibold tracking-wide border border-white border-solid rounded-[50px] text-neutral-100 max-md:px-5 max-md:mt-10"
        >
          LET’S TALK
        </button>
        <section className="flex gap-5 justify-between mt-24 max-md:mt-10">
          {socialIcons.map((icon) => (
            <SocialIcon key={icon.src} src={icon.src} alt={icon.alt} url={icon.url} />
          ))}
        </section>
      </main>
      {isContactFormOpen && <ContactForm onClose={handleCloseContactForm} />}
    </div>
  );
}

export default MyComponent;

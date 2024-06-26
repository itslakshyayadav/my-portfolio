import {
  HiMapPin,
  HiPhone,
  HiEnvelope,
  HiGlobeEuropeAfrica,
} from "react-icons/hi2";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSendWhatsApp = () => {
    const message = `
    Name: ${formData.name},
    Email: ${formData.email},
    Phone: ${formData.phone},
    Subject: ${formData.subject}
    Message: ${formData.message}`;

    const whatsappLink = `https://wa.me/9929209856/?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };
  return (
    <div id="Contact" className=" py-20 px-6 lg:px-10">
      <h1 className="text-4xl lg:text-4xl font-bold text-center text-white mb-8">
        Contact Me
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-12 text-white px-4 sm:px-10 py-10">
        <div className=" flex flex-col gap-5 py-5 px-5 ">
          <div className="bg-neutral-900 px-12 py-11 m-auto rounded-full">
            <HiMapPin className="h-7 w-7 text-yellow-500"></HiMapPin>
          </div>
          <h1 className="text-center text-sm text-gray-300"> ADDRESS</h1>
          <h1 className="text-center font-semibold text-lg">
            {" "}
            Royal Garden Estate{" "}
          </h1>
        </div>
        <div className=" flex flex-col gap-5 py-5 px-5">
          <div className="bg-neutral-900 px-12 py-11 m-auto rounded-full">
            <HiPhone className="h-7 w-7 text-yellow-500"></HiPhone>
          </div>
          <h1 className="text-center text-sm text-gray-300"> CONTACT</h1>
          <h1 className="text-center font-semibold text-lg"> +91 9929209856</h1>
        </div>
        <div className=" flex flex-col gap-5 py-5 px-5">
          <div className="bg-neutral-900 px-12 py-11 m-auto rounded-full">
            <HiEnvelope className="h-7 w-7 text-yellow-500"></HiEnvelope>
          </div>
          <h1 className="text-center text-sm text-gray-300"> EMAIL ADDRESS</h1>
          <h1 className="text-center font-semibold text-lg">
            {" "}
            itslakshyayadav@gmail.com
          </h1>
        </div>
        <div className=" flex flex-col gap-5 py-5 px-5">
          <div className="bg-neutral-900 px-12 py-11 m-auto rounded-full">
            <HiGlobeEuropeAfrica className="h-7 w-7 text-yellow-500"></HiGlobeEuropeAfrica>
          </div>
          <h1 className="text-center text-sm text-gray-300"> WEBSITE</h1>
          <a
            href="http://justvegan.fit/"
            target="_blank"
            rel="noreferrer"
            className="text-center font-semibold text-lg"
          >
            justvegan.fit
          </a>
        </div>
      </div>

      <div className="w-full sm:w-4/6 bg-slate-900 px-4 sm:px-10 py-6 lg:py-6 m-auto rounded-md">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 flex flex-col justify-center items-center gap-5">
            <img
              src="https://github.com/AswinBarath/AswinBarath/blob/master/coding.gif?raw=true"
              className="w-full object-cover rounded-lg"
              alt=""
            />
            <div className="text-white flex gap-12 justify-center py-6 px-5">
              <Link
                to="https://www.instagram.com/itslakshyayadav9856/"
                target="_blank"
              >
                <FaInstagram className="h-10 w-10 hover:text-yellow-300 text-yellow-500"></FaInstagram>
              </Link>
              <Link
                to="https://www.facebook.com/laksh.yadav.10420"
                target="_blank"
              >
                <FaFacebookF className="h-10 w-10 hover:text-yellow-300 text-yellow-500"></FaFacebookF>
              </Link>
              <Link to="https://github.com/itslakshyayadav" target="_blank">
                <FaGithub className="h-10 w-10 hover:text-yellow-300 text-yellow-500"></FaGithub>
              </Link>
              <Link
                to="https://www.linkedin.com/in/lakshya-yadav-482a68247"
                target="_blank"
              >
                <FaLinkedin className="h-10 w-10 hover:text-yellow-300 text-yellow-500"></FaLinkedin>
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h1 className="text-amber-400 py-2 font-mono font-semibold text-3xl lg:text-4xl text-center lg:text-center">
              Get In Touch
            </h1>
            <form
              onSubmit={handleSendWhatsApp}
              className="flex flex-col gap-6 m-auto "
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-3 py-2 mt-6 rounded-md tracking-widest border border-neutral-400 outline-none bg-transparent text-white"
              />
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-3 py-2 rounded-md tracking-widest border border-neutral-400 outline-none bg-transparent text-white"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-3 py-2 rounded-md tracking-widest border border-neutral-400 outline-none bg-transparent text-white"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-3 py-2 rounded-md tracking-widest border border-neutral-400 outline-none bg-transparent text-white"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                cols="30"
                rows="5"
                className="border border-neutral-400 tracking-widest px-4 py-2 outline-none rounded-md bg-transparent text-white
          "
              ></textarea>
              <button
                type="submit"
                className="animate-bounce mt-1 mb-2 py-3 font-semibold rounded-3xl bg-yellow-400 uppercase tracking-widest text-md hover:bg-yellow-300 hover:text-black"
              >
                send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

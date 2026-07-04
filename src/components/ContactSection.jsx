import React, { useRef } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();

  const contactInfo = [
    {
      id: 1,
      icon: FaEnvelope,
      title: "Email",
      value: "iqradero2022@gmail.com",
      link: "mailto:iqradero2022@gmail.com",
    },
    {
      id: 2,
      icon: FaPhoneAlt,
      title: "Phone",
      value: "+92 315 377 9587",
      link: "tel:+923153779587",
    },
    {
      id: 3,
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "Iqra Dero",
      link: "https://www.linkedin.com/",
    },
    {
      id: 4,
      icon: FaGithub,
      title: "GitHub",
      value: "IqraDero",
      link: "https://github.com/",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5a96qq4",
        "template_3gpjklm",
        form.current,
        "nvKIUZChnZKACNTSD"
      )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch(() => {
        alert("Failed to send message!");
      });

    e.target.reset();
  };

  return (
    <section className="py-20 px-6 bg-[#050816] relative" id="contact">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm">
            Contact Me
          </span>

          <h2 className="text-5xl font-bold text-white mt-6">
            Let's <span className="text-primary">Connect</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-xl mx-auto">
            Have a project, internship, or freelance opportunity? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
               className="group bg-[#0B1220] border border-slate-700 rounded-2xl p-5 h-full flex flex-col ..."
              >
                <div className="w-14 h-14 rounded-xl bg-[#050816] border border-slate-700 flex items-center justify-center mb-4 group-hover:border-primary">
                  <Icon className="text-primary text-2xl" />
                </div>

                <h3 className="text-white font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-2 break-all">{item.value}</p>
              </a>
            );
          })}
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
         className="w-full max-w-lg mx-auto bg-[#0B1220] border border-slate-700 rounded-2xl p-6 hover:border-primary transition-all duration-300"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full bg-[#050816] border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="your@gmail.com"
                className="w-full bg-[#050816] border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary outline-none"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-300 text-sm mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              required
              placeholder="Let's discuss your project"
              className="w-full bg-[#050816] border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary outline-none"
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-300 text-sm mb-2">
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              required
              placeholder="Write your message..."
              className="w-full bg-[#050816] border border-slate-700 rounded-lg px-4 py-3 text-white resize-none focus:border-primary outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-5 bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            Send Message <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
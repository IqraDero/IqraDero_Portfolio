import React from "react";
import {
  Award,
  ExternalLink,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import googleAi from "../assets/certificates/GoogleAI.pdf"
import webCertificate from "../assets/certificates/muet.jpeg";
import webCertificate2 from "../assets/certificates/dotcom.jpeg";



const Certificates = () => {
  const certifications = [
    {
      id: 1,
      title: "Google AI Professional",
      issuer: "Coursera",
      date: "Jun 2026",
      link: googleAi,
      desc: "Completed the Google AI Professional course, gaining practical knowledge of generative AI, large language models (LLMs), prompt engineering, and responsible AI. Learned to use AI tools to improve productivity, problem-solving, and software development workflows.",
      },
    {
      id: 2,
      title: "Web Development",
      issuer: "MEUT/PITP",
      date: "Mar 2025",
      link: webCertificate,
      desc: "Completed a hands-on full-stack web development course covering HTML, CSS, JavaScript, React.js, Node.js, Express.js.",
},
    {
      id: 3,
      title: "Web design",
      issuer: "DotCom Academy",
      date: "Nov 2024",
      link: webCertificate2,
      desc: "Built responsive web pages using HTML, CSS, and modern web design techniques.",
    },
  ];

  return (
    <section
      id="certificates"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0f24]"
    >
       <div className='max-w-7xl mx-auto px-6 lg:px-16'>
            <div className='mb-16'>
                <p className='text-primary text-sm uppercase tracking-widest mb-2 font-smibold'>
                    Achievements
                </p>
                <h2 className='text-4xl md:test-5xl font-extrabold text-white'>
                 Certifications.
                </h2>
            </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              data-aos="zoom-in"
              className="group relative bg-[#111a3e] border border-[#1f1641] p-6 rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]"
            >
              {/* Award Icon */}
              <div className="absolute -top-4 -right-4 bg-primary p-3 rounded-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <Award className="text-white" size={24} />
              </div>

              {/* Issuer & Date */}
              <div className="flex items-center justify-between mb-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} className="text-primary" />
                  {cert.issuer}
                </span>

                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {cert.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                {cert.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                {cert.desc}
              </p>

              {/* Link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
              >
                View Certificate
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
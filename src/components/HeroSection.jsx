import React from 'react';
import Myimage from '../assets/myimage.jpeg';
import Resume from '../assets/CV.pdf'

const HeroSection = () => {
    return (
        <section className="min-h-[80vh] flex items-center justify-center px-6 py-12">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col space-y-6 max-w-xl">
                    <h1 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                        Hi, I'm <span className="text-cyan-400">Iqra Dero</span> <span className="inline-block animate-pulse">👋</span>
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      An Information Technology Engineer, Web Developer, and MERN Stack Developer passionate about building modern, responsive, and scalable web applications. With a strong foundation in software engineering, database management, programming, and modern web technologies, I specialize in React.js, Node.js, Express.js, MongoDB, JavaScript, and Tailwind CSS. I enjoy creating clean, user-friendly digital solutions and continuously expanding my technical expertise.

</p>
                    <div className="flex gap-4 pt-2">
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-cyan-500/20">
                            Hire Me
                        </button>
                     <a
                    href={Resume}
                         download="CV.pdf"
              className="border border-gray-600 hover:border-cyan-400 text-white hover:text-cyan-400 px-6 py-3.5 rounded-xl font-bold transition-all inline-flex items-center justify-center">
                       Download Resume
                     </a>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end">
                  <div className="flex justify-center items-center">
    <div className="relative w-[430px] h-[430px]">
       <div className="flex justify-center items-center">
    <div className="relative w-80 h-80 md:w-96 md:h-96">
        <img
            src={Myimage}
            alt="Iqra Dero"
            className="w-full h-full object-cover rounded-full border-4 border-cyan-400 shadow-2xl  object-[center_63%]"
        />
    </div>
</div>
    </div>
</div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import Img3Dmatic from '../img/img_3d_web.jpg';
import ImgEcom from '../img/img_ecommerce.jpg';
import ImgTodo from '../img/img_todo_web.jpg';
import ImgPortfo from '../img/img_portfo_web.jpg';
import Img3Design from '../img/img_3d_design.jpg';
import ImgLogo from '../img/img_logo.jpg';
import ImgPortfoDesign from '../img/img_portfo_design.jpg';
import ImgGoldenFish from '../img/img_goldenfish.jpg';
import ImgStock from '../img/img_stock.jpg';
import ecomSys from '../img/E-commerceSystem.rar';
import stock from '../img/stock_manangement.rar';

const webDevelopment = [
  {
    icon: Img3Dmatic,
    skills: [
      {
        name: "3D Marketplace info Website",
        desc: "I made this info website for a presentation to my instructor of the project practicum.",
        btn_github: "View Github",
        btn_demo: "View demo",
        view:"https://github.com/Nathan-Pongs/3dmatics",
        link: "https://nathan-pongs.github.io/3dmatics/",
      }
    ],
  },
  {
    icon: ImgPortfo,
    skills: [
      {
        name: "My first portfolio",
        desc: "I created my first portfolio to be demonstrated for the interview.",
        btn_github: "View Github",
        btn_demo: "View demo",
        view:"https://github.com/Nathan-Pongs/Pongs-portfolio",
        link: "https://nathan-pongs.github.io/Pongs-portfolio/",
      }
    ],
  },
  {
    icon: ImgTodo,
    skills: [
      {
        name: "To-Do application",
        desc: "I created this application to practice my development skills",
        btn_github: "View Github",
        btn_demo: "View demo",
        view:"https://github.com/Nathan-Pongs/todo-app",
        link: "https://nathan-pongs.github.io/todo-app/",
      }
    ],
  },
];

const UxDesign = [
  {
    icon: Img3Design,
    skills: [
      {
        name: "3D Marketplace WEB DESIGN",
        desc: "I designed this project to be a structure for website development",
        btn_design: "View Design",
        link: "https://www.figma.com/proto/znIOjvgnWGujpMZDAAslkw/Project-Practicum?node-id=14-4693&starting-point-node-id=14%3A4693&t=khV0PuBWZ267nHcf-1"
      }
    ],
  },
  {
    icon: ImgPortfoDesign,
    skills: [
      {
        name: "My 2nd portfolio design",
        desc: "I design my 2nd personal portfolio to be demonstrated at an interviewing.",
        btn_design: "View Design",
        link: "https://www.figma.com/proto/brdrzkPmgFyXuUQNkSe2OU/personal_website?node-id=1-2&t=tPDC6g7pFvSBnc7b-1"
      }
    ],
  },
];
const GraphicDesign = [
  {
    icon: ImgGoldenFish,
    skills: [
      {
        name: "3D Marketplace WEB DESIGN",
        desc: "I designed this project to be a structure for website development",
        btn_download: "Download",
        download :ImgGoldenFish
      }
    ],
  },
  {
    icon: ImgLogo,
    skills: [
      {
        name: "P&P online store",
        desc: "I created this logo to identify my business page.",
        btn_download: "Download",
        download : ImgLogo
      }
    ],
  },
];
const AdditionalProject = [
  {
    icon: ImgEcom,
    skills: [
      {
        name: "JAVA E-COMMERCE PROJECT",
        desc: "I created this project to submit for a final assignment of the JAVA programming.",
        btn_download: "Download",
        btn_github : "View Github",
        view: "https://github.com/Nathan-Pongs/E-commerceSystem-Java",
        download: ecomSys
      }
    ],
  },
  {
    icon: ImgStock,
    skills: [
      {
        name: "C++ STOCK MANAGEMENT SYSTEM",
        desc: "I created this project to submit for a final assignment of the C++ programming.",
        btn_download: "Download",
        btn_github : "View Github",
        view : "https://github.com/Nathan-Pongs/Stock_management-cpp",
        download: stock
      }
    ],
  },
];

const Project = () => {
  return (
    <div className="grid grid-cols-1">      
        <div className="flex flex-col justify-center items-center text-center pt-[100px]">
            {/* Page title */}
                <h1 className="text-4xl font-bold mb-8">My Projects</h1>
                <h1 className="font-semibold text-xl bg-[#106B92]">WEB DEVELOPMENT</h1>
            {/* Grid Layout for Larger Screens */}
            <div className="hidden lg:flex flex-col md:flex-row justify-center gap-8 pt-10 px-10">
                {webDevelopment.map((category, index) => (
                <div
                    key={index}
                    className="rounded-lg shadow-lg w-[350px] md:w-1/3 h-auto p-2"
                >
                    <h2 className="text-xl font-bold mb-4 flex items-center justify-center">
                    <img src={category.icon} alt={category.category} className="" />             
                    </h2>
                    <div className="items-center">
                    {category.skills.map((skill, skillIndex) => (
                        <div
                            key={skillIndex}
                            className="flex flex-col justify-center items-center"
                            >                  
                            <p className="text-xl font-semibold">{skill.name}</p>
                            <p>{skill.desc}</p>
                            <button className="bg-[#2C2C2C] text-white p-2 m-5"><a href={skill.view}>{skill.btn_github}</a></button>
                            <button className="bg-[#2C2C2C] text-white p-2"><a href={skill.link}>{skill.btn_demo}</a></button>
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </div>

            {/* Swiper for Mobile Screens */}
            <div className="lg:hidden w-full">
                <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                breakpoints={{
                    0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    },
                    768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    },
                }}
                className="p-[10px] pb-[30px] h-auto"
                >
                {webDevelopment.map((category, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center">
                    <div
                            key={index}
                            className="rounded-lg shadow-lg p-2 m-8"
                        >
                            <h2 className="text-xl font-bold mb-4 flex items-center justify-center">
                                <img src={category.icon} alt={category.category} className="" />             
                            </h2>
                            <div className="items-center">
                            {category.skills.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="flex flex-col justify-center items-center"
                                >                  
                                    <p className="text-xl font-semibold">{skill.name}</p>
                                    <p>{skill.desc}</p>
                                    <button className="bg-[#2C2C2C] text-white p-2 m-5"><a href={skill.view}>{skill.btn_github}</a></button>
                                    <button className="bg-[#2C2C2C] text-white p-2"><a href={skill.link}>{skill.btn_demo}</a></button>
                                </div>
                            ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </div>
        
        {/* Ux / Ui design */}
        
        <div className="flex flex-col justify-center items-center text-center pt-[100px]">
            {/* Page title */}
                <h1 className="font-semibold text-xl bg-[#106B92]">UX / UI DESIGN</h1>
            {/* Grid Layout for Larger Screens */}
            <div className="hidden lg:flex flex-col md:flex-row gap-8 pt-10 px-10">
                {UxDesign.map((category, index) => (
                <div
                    key={index}
                    className="rounded-lg shadow-lg w-[350px] md:w-1/3 h-auto p-2"
                >
                    <h2 className="text-xl font-bold mb-4 flex items-center justify-center">
                    <img src={category.icon} alt={category.category} className="" />             
                    </h2>
                    <div className="items-center">
                    {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex flex-col justify-center items-center"
                        >                  
                          <p className="text-xl font-semibold">{skill.name}</p>
                          <p>{skill.desc}</p>
                          <button className="bg-[#2C2C2C] text-white p-2 m-5"><a href={skill.link}>{skill.btn_design}</a></button>
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </div>

            {/* Swiper for Mobile Screens */}
            <div className="lg:hidden w-full">
                <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                breakpoints={{
                    0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    },
                    768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    },
                }}
                className="p-[10px] pb-[30px] h-auto"
                >
                {UxDesign.map((category, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center">
                    <div
                            key={index}
                            className="rounded-lg shadow-lg p-2 m-8"
                        >
                            <h2 className="text-xl font-bold mb-4 flex items-center justify-center">
                                <img src={category.icon} alt={category.category} className="" />             
                            </h2>
                            <div className="items-center">
                            {category.skills.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="flex flex-col justify-center items-center"
                                >                  
                                    <p className="text-xl font-semibold">{skill.name}</p>
                                    <p>{skill.desc}</p>
                                    <button className="bg-[#2C2C2C] text-white p-2 m-5"><a href={skill.link}>{skill.btn_design}</a></button>
                                </div>
                            ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </div>

        {/*Graphic Design*/}
        <div className="flex flex-col justify-center items-center text-center pt-[100px]">
            {/* Page title */}
                <h1 className="font-semibold text-xl bg-[#106B92]">GRAPHIC DESIGN</h1>
            {/* Grid Layout for Larger Screens */}
            <div className="hidden lg:flex flex-col md:flex-row gap-8 pt-10 px-10">
                {GraphicDesign.map((category, index) => (
                <div
                    key={index}
                    className="rounded-lg shadow-lg w-[350px] md:w-1/3 h-auto p-2"
                >
                    <h2 className="text-xl font-bold mb-4 flex items-center justify-center">
                    <img src={category.icon} alt={category.category} className="" />             
                    </h2>
                    <div className="items-center">
                    {category.skills.map((skill, skillIndex) => (
                        <div
                        key={skillIndex}
                        className="flex flex-col justify-center items-center"
                        >                  
                        <p className="text-xl font-semibold">{skill.name}</p>
                        <p>{skill.desc}</p>
                        <button className="bg-[#2C2C2C] text-white p-2 m-5"><a download={skill.download}>{skill.btn_download}</a></button>
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </div>

            {/* Swiper for Mobile Screens */}
            <div className="lg:hidden w-full">
                <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                breakpoints={{
                    0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    },
                    768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    },
                }}
                className="p-[10px] pb-[30px] h-auto"
                >
                {GraphicDesign.map((category, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center">
                    <div
                            key={index}
                            className="rounded-lg shadow-lg p-2 m-8"
                        >
                            <h2 className="text-xl font-bold mb-4 flex items-center justify-center">
                                <img src={category.icon} alt={category.category} className="" />             
                            </h2>
                            <div className="items-center">
                            {category.skills.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="flex flex-col justify-center items-center"
                                >                  
                                    <p className="text-xl font-semibold">{skill.name}</p>
                                    <p>{skill.desc}</p>
                                    <button className="bg-[#2C2C2C] text-white p-2 m-5"><a>{skill.btn_download}</a></button>
                                </div>
                            ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </div>

        {/*Additional Project*/}
        <div className="flex flex-col justify-center items-center text-center pt-[100px]">
            {/* Page title */}
                <h1 className="font-semibold text-xl bg-[#106B92]">ADDITIONAL PROJECT</h1>
            {/* Grid Layout for Larger Screens */}
            <div className="hidden lg:flex flex-col md:flex-row gap-8 pt-10 px-10">
                {AdditionalProject.map((category, index) => (
                <div
                    key={index}
                    className="rounded-lg shadow-lg w-[350px] md:w-1/3 h-auto p-2"
                >
                    <h2 className="text-xl font-bold mb-4 flex items-center justify-center">
                    <img src={category.icon} alt={category.category} className="" />             
                    </h2>
                    <div className="items-center">
                    {category.skills.map((skill, skillIndex) => (
                        <div
                        key={skillIndex}
                        className="flex flex-col justify-center items-center"
                        >                  
                          <p className="text-xl font-semibold">{skill.name}</p>
                          <p>{skill.desc}</p>
                          <button className="bg-[#2C2C2C] text-white p-2 m-5"><a href={skill.download}>{skill.btn_download}</a></button>
                          <button className="bg-[#2C2C2C] text-white p-2"><a href={skill.view}>{skill.btn_github}</a></button>
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </div>

            {/* Swiper for Mobile Screens */}
            <div className="lg:hidden w-full">
                <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                breakpoints={{
                    0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    },
                    768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    },
                }}
                className="p-[10px] pb-[30px] h-auto"
                >
                {AdditionalProject.map((category, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center">
                    <div
                            key={index}
                            className="rounded-lg shadow-lg p-2 m-8"
                        >
                            <h2 className="text-xl font-bold mb-4 flex items-center justify-center">
                                <img src={category.icon} alt={category.category} className="" />             
                            </h2>
                            <div className="items-center">
                            {category.skills.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="flex flex-col justify-center items-center"
                                >                  
                                    <p className="text-xl font-semibold">{skill.name}</p>
                                    <p>{skill.desc}</p>
                                    <button className="bg-[#2C2C2C] text-white p-2 m-5"><a href={skill.download}>{skill.btn_download}</a></button>
                                    <button className="bg-[#2C2C2C] text-white p-2"><a href={skill.view}>{skill.btn_github}</a></button>
                                </div>
                            ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </div>
    </div>
  );
};

export default Project;
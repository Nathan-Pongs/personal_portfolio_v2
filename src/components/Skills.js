import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';

const skillsData = [
  {
    category: "UX / UI Design",
    icon: "https://img.icons8.com/?size=100&id=53451&format=png&color=000000",
    skills: [
      {
        name: "Figma",
        icon: "https://img.icons8.com/?size=100&id=W0YEwBDDfTeu&format=png&color=000000",
      },
      {
        name: "Sketch",
        icon: "https://img.icons8.com/?size=100&id=37iEIiYKRoDs&format=png&color=000000",
      },
    ],
  },
  {
    category: "Front-End",
    icon: "https://img.icons8.com/?size=100&id=2778&format=png&color=000000",
    skills: [
      {
        name: "HTML",
        icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
      },
      {
        name: "CSS",
        icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
      },
      {
        name: "JavaScript",
        icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
      },
      {
        name: "JQuery",
        icon: "https://img.icons8.com/?size=100&id=XH6rVkDQCZ9U&format=png&color=000000",
      },
      {
        name: "React JS",
        icon: "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000",
      },
      {
        name: "Tailwind CSS",
        icon: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
      },
      {
        name: "Bootstrap",
        icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
      },
    ],
  },
  {
    category: "Back-End",
    icon: "https://img.icons8.com/?size=100&id=lBuqhXfGV2RT&format=png&color=000000",
    skills: [
      {
        name: "ExpressJS",
        icon: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
      },
      {
        name: "NodeJS",
        icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
      },
      {
        name: "NextJS",
        icon: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
      },
      {
        name: "Laravel",
        icon: "https://img.icons8.com/?size=100&id=lRjcvhvtR81o&format=png&color=000000",
      },
      {
        name: "MongoDB",
        icon: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
      },
      {
        name: "MySQL",
        icon: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
      },
    ],
  },
];

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center text-white pt-[100px]">
      {/* Page title */}
      <h1 className="text-4xl font-bold mb-8">My Skills</h1>

      {/* Grid Layout for Larger Screens */}
      <div className="hidden lg:flex flex-col md:flex-row justify-center gap-8">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="border-[#0452B0] border-2 p-6 rounded-lg shadow-lg w-[350px] md:w-1/3 h-[500px]"
          >
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <img src={category.icon} alt={category.category} className="w-10 mr-2" />
              {category.category}
            </h2>
            <div className="grid grid-cols-3 gap-4 items-center">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex flex-col justify-center items-center"
                >
                  <img src={skill.icon} alt={skill.name} className="w-14" />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Swiper for Mobile Screens */}
      <div className="lg:hidden w-full px-10">
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
          {skillsData.map((category, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="border-[#0452B0] border-2 p-6 rounded-lg shadow-lg w-full h-[75vh] flex flex-col items-center">
                <div className="flex items-center justify-center mb-4">
                  <img className="w-[50px] mr-4" src={category.icon} alt={`${category.category} icon`} />
                  <h1 className="text-xl font-bold">{category.category}</h1>
                </div>
                <div className="grid grid-cols-3 gap-4 place-items-center w-full py-[20px]">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex flex-col justify-center items-center">
                      <img src={skill.icon} className="w-14 mx-[10px]" alt={skill.name} />
                      <p>{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;
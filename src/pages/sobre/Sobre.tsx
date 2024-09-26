import React from 'react';
import { LinkedinLogo } from "@phosphor-icons/react";
import { GithubLogo } from "@phosphor-icons/react";

function Sobre() {

  const images = [
    "https://i.imgur.com/carogxF.jpeg",
    "https://i.imgur.com/8LTojv8.jpeg",
    "https://i.imgur.com/LE8xD0u.jpeg",
    "https://i.imgur.com/MXB3dVf.jpeg",
    "https://i.imgur.com/WNzm6vU.jpeg",
    "https://i.imgur.com/6g1Q2J4.jpeg",
  ];

  
  const profiles = [
    { name: "Ana Paola", github: "https://github.com/Ana-Paola24", linkedin: "https://www.linkedin.com/in/ana-paola-condori/", img: images[0] },
    { name: "Ellen Silva", github: "https://github.com/Ellenmape", linkedin: "https://www.linkedin.com/in/ellen-silva-40b78b186/", img: images[1] },
    { name: "Ingrid Alkimim", github: "https://github.com/indialkm", linkedin: "https://www.linkedin.com/in/ingridalkimim/", img: images[2] },
    { name: "Matheus Alcântara", github: "https://github.com/MatheusAlcn", linkedin: "https://www.linkedin.com/in/matheus-alcântara-/", img: images[3] },
    { name: "Renan Ramos", github: "https://github.com/renansramos#", linkedin: "https://www.linkedin.com/in/renan-da-silva-ramos/", img: images[4] },
    { name: "Victor Santos", github: "https://github.com/V1ctorSantos", linkedin: "https://www.linkedin.com/in/victorsanntos/", img: images[5] },
  ];

  return (
    <div className="bg-gradient-to-br from-green-200 to-white flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-4xl text-center mb-8">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Sobre Nossa Equipe</h1>
        <p className="text-lg font-semibold text-gray-700">
          Nossa equipe é formada por desenvolvedores engajados, comprometidos e recém-formados pela Generation Brasil. Juntos, transformamos códigos em soluções extraordinárias, combinando inovação, criatividade e dedicação para entregar resultados excepcionais.
        </p>
      </div>
      <div className="flex space-x-2.5">
        {profiles.map((profile, index) => (
          <div key={index} className="flex flex-col items-center">
            <img 
              src={profile.img} 
              alt={`Profile ${index + 1}`} 
              className="w-40 h-40 rounded-full object-cover transition-transform duration-200 ease-in-out hover:scale-110"
            />
            <div className="mt-2">
              <p className="font-semibold">{profile.name}</p>
            </div>
            <div className="mt-1">
              <a href={profile.github} className="text-black-300 hover:underline" target="_blank" rel="noopener noreferrer"><GithubLogo size={32} weight="fill" /></a>
            </div>
            <div className="mt-1 flex items-center">
              <a href={profile.linkedin} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer"><LinkedinLogo size={32} weight="fill" /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sobre;

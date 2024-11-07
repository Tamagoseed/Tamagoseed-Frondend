import React from 'react';
import { LinkedinLogo } from "@phosphor-icons/react";
import { GithubLogo } from "@phosphor-icons/react";

// Importando as imagens diretamente da pasta assets
import dev1 from '../../assets/melissa.jpg';  
import dev2 from '../../assets/natasha.jpg';  
import dev3 from '../../assets/joao.jpg';
import dev4 from '../../assets/matheus.jpg';  
import dev5 from '../../assets/duda.jpg';  
import dev6 from '../../assets/gabriel.jpg';  
import dev7 from '../../assets/fe.jpg';  
import dev8 from '../../assets/gustavo.jpg';  
import dev9 from '../../assets/felipe.jpg'; 
  

function Sobre() {
  // Colocando as imagens importadas na lista
  const images = [dev1, dev2, dev3, dev4, dev5, dev6, dev7, dev8, dev9];

  const profiles = [
    { name: "Melissa Duarte", github: "https://github.com/melissa-duarte", linkedin: "https://www.linkedin.com/in/melissa-duarte-4820ba2b6", img: images[0] },
    { name: "Natasha Lorenzano", github: "https://github.com/NatashaLorenzano", linkedin: "https://www.linkedin.com/in/natasha-lorenzano-04018b236/", img: images[1] },
    { name: "João Lirio", github: "https://github.com/JLirio", linkedin: "https://www.linkedin.com/in/joaovlirio", img: images[2] },
    { name: "Matheus Alcântara", github: "https://github.com/MatheusAlcn", linkedin: "https://www.linkedin.com/in/matheus-alcântara-", img: images[3] },
    { name: "Maria Eduarda", github: "https://github.com/madualbuquerque", linkedin: "https://www.linkedin.com/in/msalbuquerque", img: images[4] },
    { name: "Gabriel Angelo", github: "https://github.com/gabrielangeelo", linkedin: "https://www.linkedin.com/in/gabrielangeloti", img: images[5] },
    { name: "Felipe Teixeira", github: "https://github.com/Ihaate", linkedin: "https://br.linkedin.com/in/felipe-oliveira-7b4ba9141", img: images[6] },
    { name: "Gustavo Lira", github: "https://github.com/GHLira", linkedin: "https://www.linkedin.com/in/gustavo-lira-816b85220", img: images[7] },
    { name: "Felipe Andrew", github: "https://github.com/felipes-afk", linkedin: "https://www.linkedin.com/in/felipe-andrew-495825264", img: images[8] },
  ];

  return (
    <div className="bg-gradient-to-br from-green-200 to-white flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-4xl text-center mb-8">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Sobre Nossa Equipe</h1>
        <p className="text-lg font-semibold text-gray-700">
          Nossa equipe é composta por desenvolvedores altamente comprometidos, atualmente cursando a faculdade na UNICID. Cada membro desempenha um papel específico, abrangendo áreas como desenvolvimento de back-end, front-end e testes. Juntos, nos dedicamos a transformar conceitos em soluções inovadoras, integrando criatividade e comprometimento para alcançar resultados de excelência.
        </p>
      </div>
      <div className="flex flex-wrap justify-center space-x-2.5">
        {profiles.map((profile, index) => (
          <div key={index} className="flex flex-col items-center mb-8">
            <img 
              src={profile.img} 
              alt={`Profile ${profile.name}`} 
              className="w-40 h-40 rounded-full object-cover transition-transform duration-200 ease-in-out hover:scale-110"
            />
            <div className="mt-2">
              <p className="font-semibold">{profile.name}</p>
            </div>
            <div className="mt-1">
              <a href={profile.github} className="text-black-300 hover:underline" target="_blank" rel="noopener noreferrer">
                <GithubLogo size={32} weight="fill" />
              </a>
            </div>
            <div className="mt-1 flex items-center">
              <a href={profile.linkedin} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                <LinkedinLogo size={32} weight="fill" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sobre;

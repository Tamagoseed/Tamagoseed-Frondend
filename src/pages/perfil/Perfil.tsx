import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import loginLogo from '../../assets/logo-renovatech.png';
import { toastAlerta } from '../../util/toastAlerta';
import Servicos from '../../models/Servicos';

function Perfil() {

  const [servico, setServico] = useState<Servicos>({} as Servicos)
  let navigate = useNavigate();

  const { cliente } = useContext(AuthContext);

  useEffect(() => {
    if (cliente.token === "") {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro');
      navigate("/login");
    }
  }, [cliente.token, navigate]);

  return (
    <div className="containerPrincipal bg-green-200 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto bg-white border border-gray-200 rounded-lg shadow-lg p-6">
        <div className="flex justify-end px-4 pt-4">
          <div id="dropdown" className="z-10 hidden text-base list-none bg-gray-200 divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Edit</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 ">Export Data</a>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center pb-10">
          <img className="w-24 h-24 mb-3 border-2 border-gray-300 rounded-full shadow-lg" src={cliente.foto || 'https://i.imgur.com/cLoiHis.png'} alt="Imagem de perfil" />
          <h5 className="mb-1 text-xl font-medium text-gray-900">Razão social:  {cliente.razaoSocial}</h5>
          <span className="text-sm text-gray-500 ">Email:  {cliente.email}</span>
          <span className="text-sm text-gray-500 ">Telefone: (99)99999999{servico.contato}</span>
          <span className="text-sm text-gray-500 ">Endereço: Rua Bela Vista, 300 - SP</span>
          <p className="mt-3 text-sm text-center text-gray-500"><span className='font-bold text-lg'>Descrição:</span> Na <span className='font-semibold text-lg'>{cliente.razaoSocial}</span>, acreditamos que a inovação e a sustentabilidade caminham lado a lado. Nossa missão é transformar o mercado com soluções criativas que respeitam o meio ambiente e promovem um futuro mais verde para todos. Estamos dedicados a desenvolver produtos e serviços que não só atendem às necessidades de nossos clientes, mas também protegem e valorizam nosso planeta. Junte-se a nós nessa jornada para construir um mundo mais sustentável e inovador!</p>
          <div className="flex mt-4 md:mt-6">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300">Atualizar Perfil</a>
          </div>
          <div className="flex space-x-3 mt-6">
            <a href='' className="text-blue-600 hover:text-blue-800">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.675 0H1.326C.593 0 0 .592 0 1.324v21.351C0 23.407.592 24 1.326 24h11.491v-9.294H9.692v-3.622h3.125V8.413c0-3.1 1.892-4.787 4.659-4.787 1.325 0 2.463.099 2.797.143v3.24l-1.917.001c-1.504 0-1.796.715-1.796 1.764v2.31h3.591l-.468 3.622h-3.123V24h6.116C23.407 24 24 23.407 24 22.675V1.324C24 .593 23.408 0 22.675 0z"/>
              </svg>
            </a>
            <a href='' className="text-blue-400 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.95.564-2.005.974-3.127 1.195-.896-.957-2.173-1.555-3.591-1.555-2.717 0-4.918 2.201-4.918 4.917 0 .39.043.765.128 1.124C7.69 8.094 4.066 6.13 1.64 3.161c-.427.729-.666 1.575-.666 2.476 0 1.71.87 3.213 2.188 4.096-.806-.026-1.566-.248-2.229-.616v.062c0 2.385 1.693 4.374 3.946 4.828-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.316-3.809 2.101-6.104 2.101-.395 0-.787-.023-1.175-.069 2.179 1.396 4.768 2.211 7.548 2.211 9.056 0 14.01-7.514 14.01-14.01 0-.213-.005-.426-.014-.637.961-.695 1.8-1.56 2.462-2.548l-.047-.02z"/>
              </svg>
            </a>
            <a href='' className="text-blue-700 hover:text-blue-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.999 0H4.002C1.791 0 0 1.793 0 4.004v15.991C0 22.209 1.791 24 4.002 24H19.998C22.21 24 24 22.207 24 19.995V4.004C24 1.793 22.21 0 19.999 0zM7.119 20.452H3.772V9.132h3.347v11.32zM5.445 7.741c-1.071 0-1.94-.871-1.94-1.944 0-1.072.87-1.943 1.94-1.943 1.073 0 1.943.871 1.943 1.943 0 1.072-.87 1.944-1.943 1.944zm15.007 12.711h-3.345v-5.522c0-1.316-.027-3.009-1.832-3.009-1.834 0-2.114 1.431-2.114 2.911v5.62h-3.345V9.132h3.214v1.541h.046c.447-.843 1.54-1.731 3.166-1.731 3.386 0 4.013 2.23 4.013 5.128v6.382z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;

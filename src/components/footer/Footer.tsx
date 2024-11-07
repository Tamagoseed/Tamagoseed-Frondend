import React from 'react';
import { Link } from 'react-router-dom';
import logoPreto from '../../assets/logo-pretonovo.png';

console.log('Logo importado:', logoPreto);

function Footer() {
  return (
    <>
      <footer className="bg-green-700 pt-10">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img
                  className="h-8 mr-3"
                  src={logoPreto}
                  alt="Logo TamagoSeed Preto"
                />
                <p className="self-center text-2xl font-bold text-white whitespace-nowrap">
                  TAMAGOSEED
                </p>
              </Link>

              <div className="sm:flex sm:items-center sm:justify-between py-8">
                <span className="text-sm sm:text-center text-white">
                  © 2024{' '}
                  <a
                    href="https://linktr.ee/nutri_vidas"
                    target="_blank"
                    className="hover:underline"
                    rel="noopener noreferrer"
                  >
                    Tamagoseed
                  </a>
                  . All Rights Reserved.
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Social Mídias
                </h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <a
                      href="#"
                      target="_blank"
                      className="hover:underline"
                      rel="noopener noreferrer"
                    >
                      TamagoSeed
                    </a>
                  </li>
                  <li>
                    <Link to="/sobre" className="hover:underline">
                      Desenvolvedores
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  ODS
                </h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <a
                      href="https://www.unicid.edu.br/processo-seletivo/?utm_source=google-search-perf&utm_medium=search&utm_campaign=perf_conversao_regular_marca_aquisicao_graduacao_unicid_regular-presencial_2025-1&utm_content=null_cpc_palavra-chave_null_null_marca_texto_null_null_null&gad_source=1&gclid=Cj0KCQjw05i4BhDiARIsAB_2wfCQJO0aZxfLCdLAIZKimgJueXw9RYUHOBBwxWMk5MB6k4KE5xmTmxgaAqJ_EALw_wcB"
                      target="_blank"
                      className="hover:underline"
                      rel="noopener noreferrer"
                    >
                      Faculdade Unicid
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brasil.un.org/pt-br/sdgs/9"
                      target="_blank"
                      className="hover:underline"
                      rel="noopener noreferrer"
                    >
                      ONU
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

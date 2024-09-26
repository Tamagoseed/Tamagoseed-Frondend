import React from 'react';
import { Link } from 'react-router-dom';
import logoBranco from '../../assets/logo-branco.png'

function Footer() {
  
      return (
          <>
  
              <footer className="bg-green-700 pt-10">
                  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                      <div className="md:flex md:justify-between">
                          <div className="mb-6 md:mb-0">
                              <Link to='/' className="flex items-center">
                                  <img
                                      className="h-8 mr-3"
                                      src={logoBranco}
                                      alt="Renovatech logo"
                                  />
                                  <p className='self-center text-2xl font-bold whitespace-nowrap text-white'>RENOVATECH</p>
                              </Link>
                              
                              <div className="sm:flex sm:items-center sm:justify-between py-8">
                                  <span className="text-sm sm:text-center text-white">© 2023 <a href="https://linktr.ee/nutri_vidas" target='_blank' className="hover:underline">RenovaTech</a>. All Rights Reserved.
                                  </span>
                                  
                      </div>
                          </div>
                          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                              
                              <div>
                                  <h2 className="mb-6 text-sm font-semibold uppercase text-white">Social Midias</h2>
                                  <ul className="text-white font-medium">
                                      <li className="mb-4">
                                          <a href="https://linktr.ee/renansramos" target='_blank' className="hover:underline ">Renovatech</a>
                                      </li>
                                      <li>
                                          <Link to='/sobre' className="hover:underline">Desenvolvedores</Link>
                                      </li>
                                  </ul>
                              </div>
                              <div>
                                  <h2 className="mb-6 text-sm font-semibold uppercase text-white">ODS</h2>
                                  <ul className="text-white font-medium">
                                      <li className="mb-4">
                                          <a href="https://brazil.generation.org/" target='_blank' className="hover:underline">Generation</a>
                                      </li>
                                      <li>
                                          <a href="https://brasil.un.org/pt-br/sdgs/9" target='_blank' className="hover:underline">ONU</a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                   
                      
                  </div>
              </footer>
  
          </>
      )
  }
  
  export default Footer

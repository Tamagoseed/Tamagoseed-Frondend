import React from 'react';
import FormularioServico from '../formularioServico/formularioServico';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalServico.css'

function ModalServico() {
  return (
    <>
      <Popup 
      trigger={<button className='inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-900 transition-colors duration-300'>Novo Serviço</button>} modal>
        <div>
          <FormularioServico />
        </div>
      </Popup>
    </>
  );
}

export default ModalServico;
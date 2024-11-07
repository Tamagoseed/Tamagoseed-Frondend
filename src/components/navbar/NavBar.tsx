import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../util/toastAlerta';
import logoBranco from '../../assets/logo-branco.png';
import logoPreto from '../../assets/logo-pretonovo.png';

function Navbar() {
  let navigate = useNavigate();
  const location = useLocation(); // Adicionado
  const [isOpen, setIsOpen] = useState(false);

  const { cliente, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta('Usuário deslogado com sucesso', 'sucesso');
    navigate('/');
  }

  let navBarComponent;

  // Verifica se a localização é a página feed
  if (location.pathname === '/feed') {
    navBarComponent = (
      <div className='w-full bg-green-700 text-white flex justify-center py-4'>
        <div className="container flex justify-between items-center text-lg">
          <Link to='/' className="flex items-center">
            <img className="h-32 mr-3" src={logoPreto} alt="TamagoSeed" />
            <div className='text-2xl font-bold uppercase'>TamagoSeed</div>
          </Link>

          <div className="hidden md:flex gap-4">
            <Link to='/' className='hover:underline font-semibold underline-offset-4'>Home</Link>
            <Link to='/sobre' className='hover:underline font-semibold underline-offset-4'>Sobre</Link>
            <Link to='/#contato' className='hover:underline font-semibold underline-offset-4'>Fale Conosco</Link>
            <Link to='' onClick={logout} className='hover:underline font-semibold underline-offset-4'>Sair</Link>
          </div>

          {/* Menu Hamburguer */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Collapsable */}
        {isOpen && (
          <div className="md:hidden bg-green-700 p-4 flex flex-col items-center">
            <Link to='/' className='hover:underline font-semibold mb-2'>Home</Link>
            <Link to='/sobre' className='hover:underline font-semibold mb-2'>Sobre</Link>
            <Link to='/#contato' className='hover:underline font-semibold mb-2'>Fale Conosco</Link>
            <Link to='' onClick={logout} className='hover:underline font-semibold'>Sair</Link>
          </div>
        )}
      </div>
    );
  } else if (cliente.token !== '') {
    navBarComponent = (
      <div className='w-full bg-green-700 text-white flex justify-center py-4'>
        <div className="container flex justify-between items-center text-lg">
          <Link to='/' className="flex items-center">
            <img className="h-32 mr-3" src={logoPreto} alt="TamagoSeed" />
            <div className='text-2xl font-bold uppercase'>TamagoSeed</div>
          </Link>

          <div className="hidden md:flex gap-4">
            <Link to='/' className='hover:underline font-semibold underline-offset-4'>Home</Link>
            <Link to='/servicos' className='hover:underline font-semibold underline-offset-4'>Serviços</Link>
            <Link to='/setoratuacao' className='hover:underline font-semibold underline-offset-4'>Setor de Atuação</Link>
            <Link to='/cadastroSetorAtuacao' className='hover:underline font-semibold underline-offset-4'>Cadastrar Setor</Link>
            <Link to='/perfil' className='hover:underline font-semibold underline-offset-4'>Perfil</Link>
            <Link to='' onClick={logout} className='hover:underline font-semibold underline-offset-4'>Sair</Link>
          </div>

          {/* Menu Hamburguer */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Collapsable */}
        {isOpen && (
          <div className="md:hidden bg-green-700 p-4 flex flex-col items-center">
            <Link to='/' className='hover:underline font-semibold mb-2'>Home</Link>
            <Link to='/servicos' className='hover:underline font-semibold mb-2'>Serviços</Link>
            <Link to='/setoratuacao' className='hover:underline font-semibold mb-2'>Setor de Atuação</Link>
            <Link to='/cadastroSetorAtuacao' className='hover:underline font-semibold mb-2'>Cadastrar Setor</Link>
            <Link to='/perfil' className='hover:underline font-semibold mb-2'>Perfil</Link>
            <Link to='' onClick={logout} className='hover:underline font-semibold'>Sair</Link>
          </div>
        )}
      </div>
    );
  } else {
    navBarComponent = (
      <div className='w-full bg-green-700 text-white flex justify-center py-4'>
        <div className="container flex justify-between items-center text-lg">
          <Link to='/' className="flex items-center">
            <img className="h-8 mr-3" src={logoPreto} alt="TamagoSeed" />
            <div className='text-2xl font-bold uppercase'>TamagoSeed</div>
          </Link>

          <div className="hidden md:flex gap-4">
            <Link to='/' className='hover:underline font-semibold underline-offset-4'>Home</Link>
            <Link to='/servicos' className='hover:underline font-semibold underline-offset-4'>Serviços</Link>
            <Link to='/login' className='hover:underline font-semibold underline-offset-4'>Entrar</Link>
            <Link to='/cadastro' className='hover:underline font-semibold underline-offset-4'>Cadastro</Link>
          </div>

          {/* Menu Hamburguer */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Collapsable */}
        {isOpen && (
          <div className="md:hidden bg-green-700 p-4 flex flex-col items-center">
            <Link to='/' className='hover:underline font-semibold mb-2'>Home</Link>
            <Link to='/servicos' className='hover:underline font-semibold mb-2'>Serviços</Link>
            <Link to='/login' className='hover:underline font-semibold mb-2'>Entrar</Link>
            <Link to='/cadastro' className='hover:underline font-semibold'>Cadastro</Link>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      {navBarComponent}
    </>
  );
}

export default Navbar

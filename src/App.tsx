import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Contato from './pages/contato/Contato';
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';
import ListaSetorAtuacao from './components/setorAtuacao/listaSetor/ListaSetorAtuacao';
import FormularioSetor from './components/setorAtuacao/formularioSetor/FormularioSetor';
import DeletarSetorAtuacao from './components/setorAtuacao/deletarSetor/DeletarSetorAtuacao';
import ListaServicos from './components/servicos/listarServico/listarServico';
import FormularioServico from './components/servicos/formularioServico/formularioServico';
import DeletarServico from './components/servicos/deletarServico/deletarServico';
import Perfil from './pages/perfil/Perfil';
import Feed from './pages/feed/Feed'; // Importe o componente Feed
import Avaliacao from './pages/avaliacao/Avaliacao'; // Importe a página de avaliação
import Catalogo from './pages/catalogo/Catalogo'; // Importe a página de catálogo
import ServicosPorSetor from './components/servicos/servicosPorSetor/ServicosPorSetor';
import { AuthProvider } from './contexts/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/setoratuacao" element={<ListaSetorAtuacao />} />
            <Route path="/cadastroSetorAtuacao" element={<FormularioSetor />} />
            <Route path="/editarSetorAtuacao/:id" element={<FormularioSetor />} />
            <Route path="/deletarSetorAtuacao/:id" element={<DeletarSetorAtuacao />} />
            <Route path="/servicos" element={<ListaServicos />} />
            <Route path="/cadastroServico" element={<FormularioServico />} />
            <Route path="/deletarServico/:id" element={<DeletarServico />} />
            <Route path="/editarServico/:id" element={<FormularioServico />} />
            <Route path="/servicosSetor/:id" element={<ServicosPorSetor />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/avaliacao" element={<Avaliacao />} />
            <Route path="/catalogo" element={<Catalogo />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

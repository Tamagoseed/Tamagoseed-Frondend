import Navbar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contato from './pages/contato/Contato'
import { AuthProvider } from './contexts/AuthContext';
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import ListaSetorAtuacao from './components/setorAtuacao/listaSetor/ListaSetorAtuacao'
import FormularioSetor from './components/setorAtuacao/formularioSetor/FormularioSetor'
import DeletarSetorAtuacao from './components/setorAtuacao/deletarSetor/DeletarSetorAtuacao'
import ListaServicos from './components/servicos/listarServico/listarServico'
import FormularioServico from './components/servicos/formularioServico/formularioServico'
import DeletarServico from './components/servicos/deletarServico/deletarServico'
import Perfil from './pages/perfil/Perfil'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { ToastContainer } from 'react-toastify'
import ServicosPorSetor from './components/servicos/servicosPorSetor/ServicosPorSetor'


function App() {
  return (
    <>
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
              <Route path="/servicos" element={<ListaServicos/>} />
              <Route path="/cadastroServico" element={<FormularioServico/>} />
              <Route path="/deletarServico/:id" element={<DeletarServico />} />
              <Route path="/editarServico/:id" element={<FormularioServico />} />
              <Route path="/servicosSetor/:id" element={<ServicosPorSetor />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
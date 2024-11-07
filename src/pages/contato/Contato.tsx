import React, { useState } from 'react';

interface ContatoProps {
  id?: string; // Permite que o id seja opcional
}

const Contato: React.FC<ContatoProps> = ({ id = "contato" }) => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    username: '',
    about: '',
    email: ''
  });
  
  // Estado de erro de validação
  const [errors, setErrors] = useState({
    username: '',
    about: '',
    email: ''
  });
  
  // Estado para controle de carregamento e sucesso
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Função para atualizar o estado do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Função para validar o formulário
  const validateForm = () => {
    let formErrors = { username: '', about: '', email: '' };
    let isValid = true;

    if (!formData.username) {
      formErrors.username = 'Nome é obrigatório';
      isValid = false;
    }

    if (!formData.about) {
      formErrors.about = 'Mensagem é obrigatória';
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = 'Email é obrigatório';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email inválido';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Função para enviar o formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulando envio
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ username: '', about: '', email: '' }); // Limpa o formulário
      }, 1500);
    }
  };

  return (
    <div id={id} className="container mx-auto px-4 py-12 max-w-9xl rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 space-x-4 md:grid-cols-2 gap-8">
          <div className="flex bg-green-100 ps-4 rounded-lg flex-col justify-center space-y-8">
            <h2 className="text-3xl font-bold text-green-700">Entre em Contato</h2>
            <p className="text-lg text-black">
              Agradecemos seu interesse! Se você tiver alguma dúvida, sugestão ou gostaria de saber mais sobre os serviços, por favor, não hesite em nos contatar. Estamos aqui para ajudar e ficaremos felizes em ouvir você.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-900">Nome</label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-gray-900 placeholder-gray-400"
                placeholder="Seu nome"
                aria-describedby="username-error"
              />
              {errors.username && <span id="username-error" className="text-red-600 text-xs">{errors.username}</span>}
            </div>

            <div>
              <label htmlFor="about" className="block text-sm font-medium text-gray-900">Sobre</label>
              <textarea
                id="about"
                name="about"
                rows={4}
                value={formData.about}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-gray-900 placeholder-gray-400"
                placeholder="Escreva sua dúvida ou sugestão."
                aria-describedby="about-error"
              />
              {errors.about && <span id="about-error" className="text-red-600 text-xs">{errors.about}</span>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-gray-900 placeholder-gray-400"
                placeholder="Seu email"
                aria-describedby="email-error"
              />
              {errors.email && <span id="email-error" className="text-red-600 text-xs">{errors.email}</span>}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-x-4">
          <button
            type="button"
            className="text-sm font-medium text-gray-600 hover:text-gray-800"
            onClick={() => setFormData({ username: '', about: '', email: '' })}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-green-700 text-white text-sm font-semibold rounded-md shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
      </form>

      {submitSuccess && (
        <div className="mt-4 text-center text-green-600">
          <p>Formulário enviado com sucesso!</p>
        </div>
      )}
    </div>
  );
}

export default Contato;

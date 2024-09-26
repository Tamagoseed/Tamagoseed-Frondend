import React from 'react'

function Contato() {
  return (
    <>
    <div className="container mx-auto px-4 py-12 max-w-9xl  rounded-lg">
      <form>
        <div className="grid grid-cols-1 space-x-4 md:grid-cols-2 gap-8">
          
          <div className="flex bg-green-100 ps-4 rounded-lg flex-col justify-center space-y-8 ">
            <h2 className="text-3xl  font-bold text-green-700">Entre em Contato</h2>
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
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-gray-900 placeholder-gray-400"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="about" className="block text-sm font-medium text-gray-900">Sobre</label>
              <textarea
                id="about"
                name="about"
                rows={4}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-gray-900 placeholder-gray-400"
                placeholder="Escreva sua dúvida ou sugestão."
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-gray-900 placeholder-gray-400"
                placeholder="Seu email"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-x-4">
          <button
            type="button"
            className="text-sm font-medium text-gray-600 hover:text-gray-800"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-green-700 text-white text-sm font-semibold rounded-md shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
            Enviar
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Contato

import Link from 'next/link'
import Image from 'next/image';
import { withTranslation } from '../services/i18n'

const Boleham = () => {
  return (
    <div>
      <div className="flex">
        <div className="bg-gray-xforte px-2 py-2 w-15 flex-none flex flex-col min-h-screen h-screen">
          <div className="overflow-y-hidden">
            <ul className="text-center">
              <li className="border-b border-gray-medio"><Link href="/"><img src="assets/favicon.png" alt="sv" className="w-12 h-12 rounded-full mx-auto cursor-pointer" /></Link></li>
              <li className="mt-3"><a href=""><img src="assets/favicon.ico" alt="sv" className="w-12 h-12 rounded-full mx-auto" /></a></li>
              <li className="mt-3"><a href=""><img src="assets/MOON.png" alt="sv" className="w-12 h-12 rounded-full mx-auto" /></a></li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex flex-col min-h-screen h-screen ">
          <div className="flex text-white h-12">
            <div className='bg-gray-forte w-56 flex-none flex items-center border-b border-gray-900 justify-between px-3 py-2'>
              <div>World of Boleham</div>
              <button>
                <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
              </button>
            </div>
            <div className="flex-1 bg-gray-medio flex items-center border-b border-gray-900 justify-between px-4">
              <div className="flex items-center">
                <div className="text-gray-500 text-2xl">#</div>
                <div className="ml-2 text-ms text-white">Configurando seu SSL</div>
                <div className="border-l pl-3 ml-3 border-gray-600 text-sm text-gray-400">Como configurar um servidor SSL com Bash e Wsl</div>
              </div>
              <div className="flex items-center">
                <a href="#" className="ml-4">Contato</a>
                <form action="#" className="relative ml-4">
                  <input type="text" placeholder="Pesquisar" className="rounded bg-gray-900 text-gray-200 text-sm px-2 py-1" />
                  <span className="absolute right-0 top-0 mr-1" style={{ top: '6px' }}>
                    <svg className="w-4 h-4 text-gray-500 hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
                  </span>
                </form>
                <a href="#" className="ml-4">GitHub</a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex overflow-y-hidden">
            <div className="bg-gray-forte w-56 flex-none flex flex-col justify-between">
              <div className="overflow-y-auto">
                <ul className="px-2 py-3">
                  <li className="px-2 mb-1 hover:bg-gray-fraco">
                    <a href="#" className="flex items-center text-gray-400 hover:text-gray-200">
                      <span className="text-xl text-gray-400">#</span>
                      <span className="ml-2 text-current">Bem-Vindo</span>
                    </a>
                  </li>
                  <li className="px-2 mb-1 hover:bg-gray-fraco">
                    <a href="#" className="flex items-center text-gray-400 hover:text-gray-200">
                      <span className="text-xl text-gray-400">#</span>
                      <span className="ml-2 text-current">Adicionar</span>
                    </a>
                  </li>
                </ul>
                <button className="flex items-center text-gray-500 hover:text-gray-200">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
                  <h3>World of Boleham</h3>
                </button>
              </div>
              <div className="bg-gray-usr px-2 py-2 flex items-center justify-between">
                <div className="flex items-center">
                  <Image className="rounded-full" src="/assets/discord.png" width="32" height="32" alt="user" />
                  <div className="text-white">Luxanna</div>
                  <div className="text-gray-500 text-xs">#5757</div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-between">
              <div className="bg-gray-medio flex-1 flex flex-col justify-between">
                <div className="text-sm overflow-y-auto chat">

                  <div className="flex py-1 mb-3 hover:bg-gray-usr">
                    <div className="flex-none">
                      <img className="ml-3 rounded-full w-10 h-10" src="/assets/favicon.png" alt="user" />
                    </div>
                    <div className="ml-2">
                      <p className="text-red-600 hover:underline">Luxanna</p>
                      {/*TEXT GO HERE */ } OWO
                    </div>
                  </div>

                  <div className="flex py-1 mb-3 hover:bg-gray-usr">
                    <div className="flex-none">
                      <img className="ml-3 rounded-full w-10 h-10" src="/assets/eua.png" alt="user" />
                    </div>
                    <div className="ml-2">
                      <p className="text-blue-600 hover:underline">Tsugami</p>
                      {/*TEXT GO HERE */ } Sim
                    </div>
                  </div>

                  <div className="flex py-1 mb-3 hover:bg-gray-usr ">
                    <div className="flex-none">
                      <img className="ml-3 rounded-full w-10 h-10" src="/assets/MOON.png" alt="user" />
                    </div>
                    <div className="ml-2">
                      <p className="text-yellow-600 hover:underline">Sou puta</p>
                      {/*TEXT GO HERE */ } Quems ao voces
                      caralo
                      gaksd
                      kasddask kasdk sakdsasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasa
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default withTranslation('common')(Boleham)


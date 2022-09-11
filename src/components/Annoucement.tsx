import { HiSpeakerphone } from 'react-icons/hi';

export const Announcement = (): JSX.Element => {
  return (
    <div className='bg-primary'>
      <div className='max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between flex-wrap'>
          <div className='w-0 flex-1 flex items-center'>
            <span className='flex p-2 rounded-lg bg-purple-600'>
              <HiSpeakerphone className='h-6 w-6 text-white' aria-hidden='true' />
            </span>
            <p className='ml-3 font-medium text-white truncate'>
              <span className='md:hidden'>Inoperabilidade</span>
              <span className='hidden md:inline'>A Menhera está offline! Entre no servidor do Discord para mais informações</span>
            </p>
          </div>
          <div className='order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto'>
            <a
              href='https://discord.gg/fZMdQbA'
              className='flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50'
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

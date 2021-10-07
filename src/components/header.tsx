import { useState } from 'react';
import { Transition } from '@headlessui/react';

import { HiTranslate } from 'react-icons/hi';
import { RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const NewHeader = (): JSX.Element => {
  const { t } = useTranslation('header');
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  const setLang = (lang: string) => {
    router.push(router.asPath, undefined, { locale: lang });
  };

  return (
    <nav>
      <div className='mx-7 px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='cursor-pointer relative w-44 h-8'>
              <Link href='/' passHref>
                <Image src='/assets/logo.png' layout='fill' alt='Logo' />
              </Link>
            </div>
            <div className='hidden md:block w-full max-w-max justify-items-end'>
              <div className='ml-10 flex items-baseline space-x-4'>
                <a className='cursor-pointer hover:text-purple-500 capitalize font-medium'>
                  <Link href='/commands'>{t('commands')}</Link>
                </a>
                <a className='cursor-pointer hover:text-purple-500 capitalize font-medium'>
                  <Link href='/status'>Status</Link>
                </a>
                {/*  <a className="cursor-pointer hover:text-purple-500 capitalize font-medium">
                  <Link href="/boleham">Boleham</Link>
                </a> */}
                <a className='cursor-pointer hover:text-purple-500 capitalize font-medium'>
                  <Link href='/donate'>{t('donate')}</Link>
                </a>
                <a className='cursor-pointer hover:text-purple-500 capitalize font-medium'>
                  <Link href='/privacy'>{t('privacy')}</Link>
                </a>
                <a className='cursor-pointer hover:text-purple-500 capitalize font-medium'>
                  <Link href={process.env.NEXT_PUBLIC_GITHUB_URL} passHref>
                    Github
                  </Link>
                </a>
                <a className='cursor-pointer hover:text-purple-500 capitalize font-medium'>
                  <Link href={process.env.NEXT_PUBLIC_BOT_INVITE_URL} passHref>
                    {t('add')}
                  </Link>
                </a>
                <div
                  className='relative cursor-pointer'
                  onClick={() => setShowLanguages(!showLanguages)}
                >
                  <div className='ml-2 flex flex-row gap-1 sm:ml-0'>
                    <HiTranslate size={25} />
                    <RiArrowDownSLine size={15} />
                  </div>
                  {showLanguages && (
                    <div className='absolute bg-white shadow w-28 h-20 mt-2 right-0 rounded-lg'>
                      <ul className='flex flex-col gap-2 justify-center p-2'>
                        <li
                          className='text-gray-600 font-semibold hover:bg-gray-300 hover:text-purple-500 flex flex-row items-center gap-2'
                          onClick={() => setLang('pt')}
                        >
                          <Image
                            src='/assets/brazil-flag.svg'
                            height={20}
                            width={30}
                            alt='Brazil'
                          />
                          PT-BR
                        </li>
                        <li
                          className='text-gray-600 font-semibold hover:bg-gray-300 hover:text-purple-500 flex flex-row items-center gap-2'
                          onClick={() => setLang('en')}
                        >
                          <Image
                            src='/assets/united-states-flag.svg'
                            height={20}
                            width={30}
                            alt='United Sttes'
                          />
                          EN
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type='button'
              className='bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {!isOpen ? (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              ) : (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter='transition ease-out duration-100 transform'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in duration-75 transform'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        {(ref) => (
          <div className='md:hidden' id='mobile-menu'>
            <div ref={ref} className='px-2 pt-2 pb-3 flex flex-col space-y-1 sm:px-3 text-center'>
              <Link href='/comandos'>
                <a className='bg-gray-700 justify-center cursor-pointer block px-3 py-2 rounded-md hover:text-purple-500 capitalize font-medium'>
                  {t('commands')}
                </a>
              </Link>
              <Link href='/status'>
                <a className='bg-gray-700 cursor-pointer px-3 py-2 rounded-md hover:text-purple-500 capitalize font-medium'>
                  Status
                </a>
              </Link>
              <Link href='/donate'>
                <a className='bg-gray-700 cursor-pointer px-3 py-2 rounded-md hover:text-purple-500 capitalize font-medium'>
                  {t('donate')}
                </a>
              </Link>
              <Link href='/privacy'>
                <a className='bg-gray-700 cursor-pointer px-3 py-2 rounded-md hover:text-purple-500 capitalize font-medium'>
                  {t('privacy')}
                </a>
              </Link>
              <Link href={process.env.NEXT_PUBLIC_GITHUB_URL}>
                <a className='bg-gray-700 cursor-pointer px-3 py-2 rounded-md hover:text-purple-500 capitalize font-medium'>
                  Github
                </a>
              </Link>
              <Link href={process.env.NEXT_PUBLIC_BOT_INVITE_URL}>
                <a className='bg-gray-700 cursor-pointer px-3 py-2 rounded-md hover:text-purple-500 capitalize font-medium'>
                  {t('add')}
                </a>
              </Link>
              <div
                className='bg-gray-700 flex py-2 rounded-md cursor-pointer'
                onClick={() => setShowLanguages(!showLanguages)}
              >
                <div className='ml-2 flex flex-row gap-1 sm:ml-0'>
                  <HiTranslate size={25} />
                  <RiArrowRightSLine size={15} />
                </div>
                {showLanguages && (
                  <div className='flex bg-gray-600 shadow w-28 h-20 mt-2 right-0 rounded-lg'>
                    <ul className='flex flex-col gap-2 justify-center p-2'>
                      <li
                        className='text-white font-semibold flex flex-row items-center gap-2'
                        onClick={() => setLang('pt')}
                      >
                        <Image
                          src='/assets/brazil-flag.svg'
                          height={20}
                          width={30}
                          alt='Brazil Flag'
                        />
                        PT-BR
                      </li>
                      <li
                        className='text-white font-semibold flex flex-row items-center gap-2'
                        onClick={() => setLang('en')}
                      >
                        <Image
                          src='/assets/united-states-flag.svg'
                          height={20}
                          width={30}
                          alt='United States Flag'
                        />
                        EN
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default NewHeader;

import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX, HiHome, HiStar } from 'react-icons/hi';
import { useTranslation } from 'next-i18next';
import { Button } from './Button';

export function useNavbarItems() {
  const { t } = useTranslation('header');

  const navbarItems = [
    {
      name: t('home'),
      href: '/',
      icon: HiHome,
    },
    {
      name: t('ranking'),
      href: '/ranking',
      icon: HiStar,
    },
    {
      name: t('commands'),
      href: '/commands',
      icon: HiStar,
    },
    {
      name: t('contribute'),
      href: '/contribute',
      icon: HiStar,
    },
    {
      name: t('status'),
      href: '/status',
      icon: HiStar,
    },
    {
      name: t('about-me'),
      href: '/about',
      icon: HiStar,
    },
  ];

  return navbarItems;
}

export function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const navbarItems = useNavbarItems();

  return (
    <header className='flex justify-between md:justify-center items-center p-5 container mx-auto max-w-7xl'>
      <h1 className='font-bold text-md text-white'>MenheraBot</h1>
      <nav className='flex-1 mr-14 hidden md:flex flex-row-reverse'>
        <ul className='flex gap-3'>
          {navbarItems.map((item) => (
            <li
              key={item.name}
              className='font-bold text-md hover:text-primary hover:cursor-pointer text-white'
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button className='hidden md:block'>Login</Button>
      <HiMenu color='white' size={25} className='md:hidden' onClick={() => setIsOpen(true)} />
      {isOpen && (
        <div className='bg-primary-bg absolute w-full h-screen md:hidden top-0 bottom-0 left-0'>
          <div className='mx-2 p-2'>
            <div className='mt-6 flex-1 flex flex-row-reverse w-full'>
              <HiX color='#975AFF' size={25} onClick={() => setIsOpen(false)} />
            </div>
            <h1 className='font-bold text-xl mt-3 text-white'>Navegação</h1>
            <nav className='mt-6'>
              <ul className='flex flex-col font-medium'>
                {navbarItems.map((item) => (
                  <li
                    key={item.name}
                    className='border-b last:border-none border-border-color py-3 text-white'
                  >
                    <Link href={item.href}>
                      <a className='flex'>
                        {<item.icon color='#975AFF' size={25} className='mr-3' />}
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

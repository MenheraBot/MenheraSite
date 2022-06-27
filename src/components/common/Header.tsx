import { useState } from 'react';
import Link from 'next/link';

import {
  HiMenu,
  HiX,
  HiHome,
  HiStar,
  HiHeart,
  HiOutlineStatusOnline,
  HiTranslate,
} from 'react-icons/hi';
import { FaClipboardList } from 'react-icons/fa';

import { useTranslation } from 'next-i18next';

import { IconType } from 'react-icons';
import { Button } from './Button';
import { useRouter } from 'next/router';

interface NavbarItem {
  name: string;
  href: string;
  icon: IconType;
  redirect: boolean;
}

export function useNavbarItems(): NavbarItem[] {
  const { t } = useTranslation('header');

  const navbarItems = [
    {
      name: t('home'),
      href: '/',
      icon: HiHome,
      redirect: true,
    },
    {
      name: t('commands'),
      href: '/commands',
      icon: FaClipboardList,
      redirect: true,
    },
    {
      name: t('donate'),
      href: '/donate',
      icon: HiHeart,
      redirect: true,
    },
    {
      name: t('status'),
      href: '/status',
      icon: HiOutlineStatusOnline,
      redirect: true,
    },
    {
      name: t('privacy'),
      href: '/privacy',
      icon: HiStar,
      redirect: true,
    },
    {
      name: t('language'),
      href: '/',
      icon: HiTranslate,
      redirect: false,
    },
  ];

  return navbarItems;
}

export function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const navbarItems = useNavbarItems();
  const router = useRouter();
  const { i18n } = useTranslation('header');

  const changeLocale = () => {
    router.push(router.asPath, undefined, {
      locale: i18n.language === 'pt-BR' ? 'en-US' : 'pt-BR',
    });
  };

  return (
    <header className='flex justify-between md:justify-center items-center p-5 container mx-auto max-w-7xl'>
      <Link href='/' passHref>
        <h1 className='font-bold text-md text-white cursor-pointer'>MenheraBot</h1>
      </Link>
      <nav className='flex-1 hidden md:flex flex-row-reverse'>
        <ul className='flex gap-10'>
          {navbarItems.map((item) => (
            <li
              key={item.name}
              className='font-bold text-md hover:text-primary hover:cursor-pointer text-white'
            >
              {item.redirect ? (
                <Link href={item.href}>{item.name}</Link>
              ) : (
                <span onClick={changeLocale}>{item.name}</span>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <Button className='hidden ml-14 md:block'>Login</Button>
      <HiMenu color='white' size={25} className='md:hidden' onClick={() => setIsOpen(true)} />
      {isOpen && (
        <div className='bg-primary-bg absolute w-full h-screen md:hidden top-0 bottom-0 left-0 z-40'>
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
                    {item.redirect ? (
                      <Link href={item.href}>
                        <a className='flex'>
                          {<item.icon color='#975AFF' size={25} className='mr-3' />}
                          {item.name}
                        </a>
                      </Link>
                    ) : (
                      <span className='flex cursor-pointer' onClick={changeLocale}>
                        {<item.icon color='#975AFF' size={25} className='mr-3' />}
                        {item.name}
                      </span>
                    )}
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

import Link from 'next/link';
import { useNavbarItems } from './Header';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';

const socialMedia = [
  {
    alt: 'Discord',
    href: 'https://discord.gg/jQWQQQ',
    icon: FaDiscord,
  },
  {
    alt: 'Twitter',
    href: 'https://twitter.com/MenheraBot',
    icon: FaTwitter,
  },
  {
    alt: 'Github',
    href: 'https://github.com/MenheraBot/MenheraBot',
    icon: FaGithub,
  },
];

export function Footer(): JSX.Element {
  const navbarItems = useNavbarItems();

  return (
    <footer className='bg-secondary-bg'>
      <div className='container mx-auto p-6 max-w-7xl md:pt-16'>
        <div className='flex items-center justify-between'>
          <div className='hidden md:block max-w-xl'>
            <h1 className='font-bold text-white text-4xl'>Menhera BOT</h1>
            <p className='text-describe text-xl mt-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet pulvinar
              lacinia. Mauris ut elit orci. Integer nec erat maximus, accumsan neque sed, fringilla
              felis.
            </p>
          </div>
          <div>
            <h3 className='text-white text-xl md:text-2xl font-bold mt-6 md:mt-0'>Menu</h3>
            <ul className='grid grid-cols-3 flex-wrap justify-between mt-6'>
              {navbarItems.map((item) => (
                <li key={item.name} className='text-describe p-3 md:text-lg md:pl-0'>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='md:flex flex-row-reverse justify-between md:border-t border-t-separate-color md:mt-6 md:py-6'>
          <ul className='flex items-center justify-center gap-6 my-6 md:my-0'>
            {socialMedia.map((item) => (
              <li key={item.alt} className='text-describe'>
                <Link href={item.href} passHref>
                  {<item.icon size={25} />}
                </Link>
              </li>
            ))}
          </ul>
          <span className='text-describe text-center'>
            © 2022 Menhera Bot, Inc. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

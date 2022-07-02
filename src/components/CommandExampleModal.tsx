import { useTranslation } from 'next-i18next';
import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef } from 'react';
import { Command } from '../services/api/api.types';

type CommandExampleProps = {
  command?: Command;
  showing: boolean;
  setOpen: Dispatch<
    SetStateAction<{
      show: boolean;
      command?: Command;
    }>
  >;
};

const CommandExampleModal = ({ command, setOpen, showing }: CommandExampleProps): JSX.Element => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const isOutside = (e: MouseEvent): void => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen({ show: false });
    };

    document.addEventListener('mousedown', isOutside);

    return () => {
      document.removeEventListener('mousedown', isOutside);
    };
  }, [setOpen]);

  const { t } = useTranslation('commands');

  if (!command || !showing) return <></>;

  return (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-opacity-70 bg-black outline-none focus:outline-none'>
        <div ref={ref} className='relative w-auto my-6 mx-auto max-w-3xl'>
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#171717] outline-none focus:outline-none'>
            <div className='flex flex-row justify-between p-5 rounded-t'>
              <h3 className='text-3xl pt-3 font-semibold text-white'>
                {t('modal.command')}{' '}
                <span className='text-primary capitalize font-bold'>{command.name}</span>
              </h3>{' '}
              <span
                className='h-3 w-3 cursor-pointer text-xl text-white hover:text-neutral-500 fill-current'
                onClick={() => setOpen({ show: false })}
              >
                x
              </span>
            </div>
            <div className='relative p-6 flex-auto'>
              <p className='my-4 text-describe text-lg leading-relaxed'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit qui molestiae, cum
                exercitationem quis temporibus sed porro maiores in obcaecati voluptatem! Iste, quam
                magni ab eum ducimus est voluptate quisquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommandExampleModal;

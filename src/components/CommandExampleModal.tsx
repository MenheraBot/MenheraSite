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

  if (!command || !showing) return <></>;

  return (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div ref={ref} className='relative w-auto my-6 mx-auto max-w-3xl'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-3xl font-semibold'>{command.name}</h3>
              <button className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'>
                <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                  x
                </span>
              </button>
            </div>
            {/*body*/}
            <div className='relative p-6 flex-auto'>
              <p className='my-4 text-slate-500 text-lg leading-relaxed'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit qui molestiae, cum
                exercitationem quis temporibus sed porro maiores in obcaecati voluptatem! Iste, quam
                magni ab eum ducimus est voluptate quisquam.
              </p>
            </div>
            {/*footer*/}
            <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
              <button
                className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={() => setOpen({ show: false })}
              >
                Lorem
              </button>
              <button
                className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={() => setOpen({ show: false })}
              >
                Lorem, ipsum.
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  );
};

export default CommandExampleModal;

import type { ComponentProps } from 'react';
import { BsSearch } from 'react-icons/bs';
import classnames from 'classnames';

type SearchInputProps = ComponentProps<'input'>;

export function SearchInput({ className, ...props }: SearchInputProps): JSX.Element {
  return (
    <div className='relative flex items-center h-10'>
      <input
        placeholder='Digite o ID do seu servidor'
        className={classnames(
          'bg-transparent text-base flex-1 placeholder:text-separate-color pr-10 text-white border-2 border-separate-color rounded-3xl py-2 px-4 outline-none focus:border-2 focus:border-primary caret-primary',
          className,
        )}
        {...props}
      />
      <BsSearch
        className='text-separate-color hover:text-primary absolute right-0 mr-4'
        size={25}
      />
    </div>
  );
}

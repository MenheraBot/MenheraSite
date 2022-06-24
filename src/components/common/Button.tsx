import type { ComponentProps } from 'react';
import classnames from 'classnames';

type ButtonProps = ComponentProps<'button'>;

export function Button({ className, ...props }: ButtonProps): JSX.Element {
  return (
    <button
      className={classnames(
        'bg-primary hover:cursor-pointer p-2 px-5 h-12 text-white rounded-full font-bold',
        className,
      )}
      {...props}
    ></button>
  );
}

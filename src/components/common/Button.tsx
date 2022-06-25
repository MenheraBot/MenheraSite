import type { ComponentProps } from 'react';
import classnames from 'classnames';

const variants = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
} as const;

interface ButtonProps extends ComponentProps<'button'> {
  variant?: keyof typeof variants;
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps): JSX.Element {
  return (
    <button
      className={classnames(
        className,
        variants[variant],
        'hover:cursor-pointer p-2 px-5 h-12 text-white rounded-full font-bold',
      )}
      {...props}
    ></button>
  );
}

import type { ComponentProps } from 'react';
import classnames from 'classnames';

const variants = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
} as const;

interface ButtonProps extends ComponentProps<'button'> {
  variant?: keyof typeof variants;
  isDisabled?: boolean;
  className: string;
}

export function Button({
  className,
  variant = 'primary',
  isDisabled = false,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={classnames({
        [className]: true,
        [variants[variant]]: true,
        'hover:cursor-pointer hover:brightness-75': !isDisabled,
        'brightness-75': isDisabled,
        'hover:cursor-default': isDisabled,
        'p-2 px-5 h-12 text-white rounded-full font-bold': true,
      })}
      {...props}
    ></button>
  );
}

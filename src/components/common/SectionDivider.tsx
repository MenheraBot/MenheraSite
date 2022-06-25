import classnames from 'classnames';

interface SectionDividerProps {
  title?: string;
  className?: string;
  withoutSpace?: boolean;
}

export const SectionDivider = ({
  className = '',
  withoutSpace = false,
  title,
}: SectionDividerProps): JSX.Element => {
  return (
    <div
      className={classnames(
        'flex items-center gap-2 container min-h-fit mx-auto max-w-7xl',
        className,
        { 'p-6 md:p-0 md:my-28': !withoutSpace },
      )}
    >
      {title && <span className='text-primary font-bold md:hidden lg:block'>{title}</span>}
      <div className='bg-secondary-bg h-1 flex-1 px-2' />
    </div>
  );
};

interface ErrorViewProps {
  statusCode: number;
  title: string;
  text: string;
}

export function ErrorView({ statusCode, title, text }: ErrorViewProps): JSX.Element {
  return (
    <div className='my-10'>
      <span className='text-primary text-3xl font-bold md:text-7xl'>{statusCode}</span>
      <h1 className='text-white text-3xl font-bold mt-4 mb-6'>
        {title} <span className='text-primary'>:(</span>
      </h1>
      <p className='text-describe text-xl max-w-2xl'>{text}</p>
    </div>
  );
}

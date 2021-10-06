import style from '../styles/components/maintenance.module.css';
import Head from './head';
import Link from 'next/link';
import Image from 'next/image';

export default function Maintenance(): JSX.Element {
  return (
    <div className={style.container}>
      <Head title="Manutenção | Menhera's Site" favicon='assets/icon404.png' />
      <Image
        alt='Menhera chorando'
        src='assets/sorry.png'
        width={512}
        height={512}
        layout='responsive'
      />
      <h1>🚧 Está página está indisponível 🚧</h1>
      <p>Desculpe, mas esta página encontra-se em manutenção atualmente :(</p>
      <Link href='/' passHref>
        <b>Voltar para o início</b>
      </Link>
    </div>
  );
}

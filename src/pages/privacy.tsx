import { useTranslation } from 'react-i18next';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';

const PrivacyPage = (): JSX.Element => {
  const { t } = useTranslation('footer');

  return (
    <>
      <Header />
      <main className='container p-6 mx-auto max-w-7xl'>
        <div>
          <h1 id='privacy' className='text-white font-bold text-3xl md:text-4x'>
            {t('h1')}
          </h1>
          <small className='text-white'>{t('last-change')}: 23/08/2021</small>
          <p className='mt-6 text-white'>
            <span className='text-yellow-600'>
              Para disponibilizar nossos serviços, precisamos coletar alguns dados de nossos
              usuários. Nós não coletamos dados que não serão necessários para o funcionamento de
              nossos serviços. Precisamos deixar claro que, este documento pode ser alteado a
              qualquer momento, por isso, auxiliamos que sempre que for utilizar de nossos serviços,
              cheque este documento para entender como nós tratamos o que usamos.
            </span>
            <ul className='text-describe'>
              <li>
                <h2 className='text-2xl mt-1 text-white'>Dados que Coletamos</h2>
                <p>
                  Nós armazenamos somente seu ID do Discord, que é uma informação pública que todos
                  possuem acesso. Este é o único dado dos usuários que nós coletamos e armazenamos
                  para conseguir identificar e ordenar informações do banco de dados referentes a
                  cada perfil.
                </p>
              </li>
              <li>
                <h2 className='text-2xl mt-1 text-white'>Proteção de Dados</h2>
                <p>
                  Todos os dados são acessíveis por e somente Luxanna (Luxanna#5757 - Dona da
                  Menhera). Ela garante que nenhum dado será distribuído, vendido ou doado para
                  terceiros. Ela também garante que os dados estão salvos de forma segura em um
                  Banco de Dados robusto em questões de segurança.
                </p>
              </li>
              <li>
                <h2 className='text-2xl mt-1 text-white'>Serviços de Terceiros</h2>
                <p>
                  A Menhera é um aplicativo que roda dentro do Discord, por isso, segue as regras e
                  normas de lá, assim como seus usuários o devem fazer.
                </p>
              </li>
              <li>
                <h2 className='text-2xl mt-1 text-white'>Exclusão de Dados</h2>
                <p>
                  O usuário pode ter seus dados apagados da Menhera a qualquer momento diretamente
                  pela aplicação, ou enviando um email para <b>support@menherabot.xyz</b>
                </p>
              </li>
            </ul>
          </p>
        </div>
        <div className='mt-10'>
          <h1 id='terms-of-service' className='text-white font-bold text-3xl md:text-4x'>
            {t('h1-2')}{' '}
          </h1>
          <small className='text-white'>{t('last-change')}: 23/08/2021</small>
          <div className='text-describe mt-6'>
            <span className='text-yellow-600'>
              Ao utilizar qualquer serviço da Menhera, você deve ter a conciência de tudo que você
              pode e não pode fazer. Ao utilizá-la, levamos em conta que você <b>LEU</b> e{' '}
              <b>CONCORDA</b> com todos estes termos
            </span>
            <ul>
              <li>
                <h2 className='text-2xl mt-1 text-white'>Abuso de Bugs</h2>
                <p>
                  Ao descobrir um bug, e ao invés de reportá-lo, você abusa dele e, até compartilha
                  ele, você está sujeito a perder o acesso à todas funcionalidades da Menhera
                </p>
              </li>
              <li>
                <h2 className='text-2xl mt-1 text-white'>Idade</h2>
                <p>
                  Para utilizar à Menhera, você deve ter no mínimo 13 anos de idade. Pessoas menores
                  da idade legal devem ter o
                </p>
                consentimento do guardião legal sobre estes termos antes de utilizá-lo.
              </li>
              <li>
                <h2 className='text-2xl mt-1 text-white'>Diretrizes da Comunidade</h2>
                <p>
                  Como a Menhera é uma aplicação dependente de uma aplicação principal (Discord), o
                  usuário deve, além de seguir as seguintes regras, seguir também as diretrizes
                  desta. Veja as{' '}
                </p>
              </li>
              <a href='https://discord.com/guidelines' className='text-primary underline'>
                diretrizes do Discord
              </a>
              <ol className='list-disc'>
                <li>
                  Não utilize conteúdos NSFW em comandos da Menhera. Nós não queremos nenhum tipo de
                  vínculo com este tipo de conteúdo.
                </li>
                <li>
                  Não toleramos qualquer tipo de atitude racista, homofóbica, xenofóbica,
                  preconceituosa, entre outros com qualquer pessoa. Nossa missão com a Menhera é
                  divertir os servidores, caso seu servidor promove ou possui vínculo com atitudes
                  que denigrem a imagem de alguém, então nós não queremos vínculos com você.
                </li>
                <li>
                  Tentar burlar restições impostas pela Menhera, como algo que desvia de um tempo de
                  recarga, ou utilizar outras contas para melhorar uma conta principal é proibído.
                </li>
              </ol>
              <h2>Apelo de Banimento</h2>
              Caso queira rever o seu banimento, você pode fazê-lo seguindo os modelos{' '}
              <a
                href='https://github.com/MenheraBot/MenheraBot/discussions/132'
                className='text-primary underline'
              >
                desta discussão no GitHub
              </a>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        /*   'common',
        'privacy', */
        'header',
        'footer',
      ])),
    },
  };
};

export default PrivacyPage;

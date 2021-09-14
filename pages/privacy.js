import Head from '../components/head';
import Footer from '../components/footer';
import Header from '../components/header';
import { withTranslation } from '../services/i18n';

const Privacy = ({ t }) => (
  <>
    <Head title={t('title')} favicon='/assets/privacy.png' />
    <Header />
    <h1 id='privacy' className='text-center text-purple-700 pt-12 text-5xl font-bold text-shadow'>
      {t('h1')}{' '}
      <span className='text-base'>
        <br />
        {t('last-change')}: 23/08/2021
      </span>
    </h1>
    <div className='mt-8 container mx-auto px-7'>
      <span className='text-yellow-600'>
        Para disponibilizar nossos serviços, precisamos coletar alguns dados de nossos usuários. Nós
        não coletamos dados que não serão necessários para o funcionamento de nossos serviços.
        Precisamos deixar claro que, este documento pode ser alteado a qualquer momento, por isso,
        auxiliamos que sempre que for utilizar de nossos serviços, cheque este documento para
        entender como nós tratamos o que usamos.
      </span>
      <h2 className='text-2xl mt-1'>Dados que Coletamos</h2>
      Nós armazenamos somente seu ID do Discord, que é uma informação pública que todos possuem
      acesso. Este é o único dado dos usuários que nós coletamos e armazenamos para conseguir
      identificar e ordenar informações do banco de dados referentes a cada perfil.
      <h2 className='text-2xl mt-1'>Proteção de Dados</h2>
      Todos os dados são acessíveis por e somente Luxanna (Luxanna#5757 - Dona da Menhera). Ela
      garante que nenhum dado será distribuído, vendido ou doado para terceiros. Ela também garante
      que os dados estão salvos de forma segura em um Banco de Dados robusto em questões de
      segurança.
      <h2 className='text-2xl mt-1'>Serviços de Terceiros</h2>A Menhera é um aplicativo que roda
      dentro do Discord, por isso, segue as regras e normas de lá, assim como seus usuários o devem
      fazer.
      <h2 className='text-2xl mt-1'>Exclusão de Dados</h2>O usuário pode ter seus dados apagados da
      Menhera a qualquer momento diretamente pela aplicação, ou enviando um email para{' '}
      <b>support@menherabot.xyz</b>
    </div>
    <h1
      id='terms-of-service'
      className='text-center text-purple-700 pt-12 text-5xl font-bold text-shadow'>
      {t('h1-2')}{' '}
      <span className='text-base'>
        <br />
        {t('last-change')}: 23/08/2021
      </span>
    </h1>
    <div className='mt-8 container mx-auto px-7'>
      <span className='text-yellow-600'>
        Ao utilizar qualquer serviço da Menhera, você deve ter a conciência de tudo que você pode e
        não pode fazer. Ao utilizá-la, levamos em conta que você <b>LEU</b> e <b>CONCORDA</b> com
        todos estes termos
      </span>
      <h2 className='text-2xl mt-1'>Abuso de Bugs</h2>
      Ao descobrir um bug, e ao invés de reportá-lo, você abusa dele e, até compartilha ele, você
      está sujeito a perder o acesso à todas funcionalidades da Menhera
      <h2 className='text-2xl mt-1'>Idade</h2> Para utilizar à Menhera, você deve ter no mínimo 13
      anos de idade. Pessoas menores da idade legal devem ter o consentimento do guardião legal
      sobre estes termos antes de utilizá-lo.
      <h2 className='text-2xl mt-1'>Diretrizes da Comunidade</h2>
      Como a Menhera é uma aplicação dependente de uma aplicação principal (Discord), o usuário
      deve, além de seguir as seguintes regras, seguir também as diretrizes desta. Veja as{' '}
      <a href='https://discord.com/guidelines' className='underline'>
        diretrizes do Discord
      </a>
      <ol className='list-disc'>
        <li>
          Não utilize conteúdos NSFW em comandos da Menhera. Nós não queremos nenhum tipo de vínculo
          com este tipo de conteúdo.
        </li>
        <li>
          Não toleramos qualquer tipo de atitude racista, homofóbica, xenofóbica, preconceituosa,
          entre outros com qualquer pessoa. Nossa missão com a Menhera é divertir os servidores,
          caso seu servidor promove ou possui vínculo com atitudes que denigrem a imagem de alguém,
          então nós não queremos vínculos com você.
        </li>
        <li>
          Tentar burlar restições impostas pela Menhera, como algo que desvia de um tempo de
          recarga, ou utilizar outras contas para melhorar uma conta principal é proibído.
        </li>
      </ol>
    </div>
    <Footer />
  </>
);

Privacy.getInitialProps = async () => ({
  namespacesRequired: ['privacy', 'header', 'footer'],
});

export default withTranslation('privacy')(Privacy);

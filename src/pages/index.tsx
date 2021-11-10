import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useTranslation } from 'react-i18next';
import Layout from '../components/ui/layout';

import { Heading, Text, Flex, Container, Box } from '@chakra-ui/react';

const HomePage = (): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Container maxW='container.lg' py={14} minH='container.sm'>
        <Flex justifyContent='space-around' mt={14}>
          <Box pos='relative' w='52' h='96' display={{ base: 'none', sm: 'flex' }}>
            <Image src='/assets/men.png' layout='fill' alt='Menhera' />
          </Box>
          <Container maxW='container.sm'>
            <Heading fontWeight='extrabold'>{t('h1')}</Heading>
            <Text fontSize={{ base: 'lg', sm: 'xl' }} color='text' my='10'>
              {t('p')}
            </Text>
            <a href={process.env.NEXT_PUBLIC_BOT_INVITE_URL}>
              <button className='animate-wiggle p-4 rounded-2xl ' type='submit'>
                {t('b')}
              </button>
            </a>
          </Container>
        </Flex>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'header', 'footer'])),
    },
  };
};

export default HomePage;

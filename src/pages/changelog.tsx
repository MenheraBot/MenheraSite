/* eslint-disable react/no-children-prop */
import { fetchGithub } from '../services/api/api';

import { Button, Flex, Text, Heading } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Layout from '../components/ui/layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { ChangelogVersion, parseChangelog } from '../services/changelogParser';

import { useState } from 'react';

type Props = {
  versions: ChangelogVersion[];
};

const ChangelogPage = ({ versions }: Props): JSX.Element => {
  const [selectedVersion, setSelectedVersion] = useState(versions[0]);
  const { t } = useTranslation('changelog');

  const changeVersion = (version: ChangelogVersion): void => {
    setSelectedVersion(version);
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  };

  return (
    <Layout title={t('title')}>
      <Flex marginX='5' flexDir='row' overflow='hidden' maxW='2000px'>
        <>
          {/* SIDEBAR */}
          <Flex
            w='15%'
            flexDir='column'
            alignItems='center'
            borderRadius='20px'
            borderRightColor={'gray'}
            borderRightWidth='1px'
            color='#fff'
            overflowY='scroll'
          >
            <Flex flexDir='column' justifyContent='space-between' minH='100vh'>
              <Flex flexDir='column' as='nav'>
                <Flex flexDir='column' align='center' justifyContent='center'>
                  {versions.map((a) => (
                    <Flex key={a.versionName} paddingY='.75em' textAlign='center'>
                      <Button onClick={() => changeVersion(a)}>
                        <Text
                          textColor={
                            a.versionName === selectedVersion.versionName ? '#9c5ddb' : 'white'
                          }
                          fontSize='large'
                        >
                          {a.versionName}
                        </Text>
                      </Button>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </>
        <Flex w='75%' marginX='auto' overflowY='scroll' borderRadius='10px'>
          <Flex flexDir='column'>
            <Heading textColor='#9c5ddb'>{`${selectedVersion.versionName}`}</Heading>
            <Heading size='md'>{`${t('date')} ${selectedVersion.date}`}</Heading>
            {selectedVersion.info.added && (
              <Text margin='5'>
                <Text fontSize='2xl'>{t('added')}</Text>
                <ReactMarkdown children={selectedVersion.info.added} />
              </Text>
            )}
            {selectedVersion.info.changed && (
              <Text margin='5'>
                <Text fontSize='2xl'>{t('changed')}</Text>
                <ReactMarkdown children={selectedVersion.info.changed} />
              </Text>
            )}
            {selectedVersion.info.deprecated && (
              <Text margin='5'>
                <Text fontSize='2xl'>{t('deprecated')}</Text>
                <ReactMarkdown children={selectedVersion.info.deprecated} />
              </Text>
            )}
            {selectedVersion.info.removed && (
              <Text margin='5'>
                <Text fontSize='2xl'>{t('removed')}</Text>
                <ReactMarkdown children={selectedVersion.info.removed} />
              </Text>
            )}
            {selectedVersion.info.fixed && (
              <Text margin='5'>
                <Text fontSize='2xl'>{t('fixed')}</Text>
                <ReactMarkdown children={selectedVersion.info.fixed} />
              </Text>
            )}
            {selectedVersion.info.security && (
              <Text margin='5'>
                <Text fontSize='2xl'>{t('security')}</Text>
                <ReactMarkdown children={selectedVersion.info.security} />
              </Text>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const log = await fetchGithub();

  const versions = parseChangelog(log, locale ?? 'pt-BR');

  return {
    props: {
      versions,
      ...(await serverSideTranslations(locale as string, ['changelog', 'header', 'footer'])),
    },
    revalidate: 500,
  };
};

export default ChangelogPage;

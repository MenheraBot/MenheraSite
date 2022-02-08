/* eslint-disable react/no-children-prop */
import type { ChangelogVersion } from '../../services/changelogParser';
import { ImAttachment } from 'react-icons/im';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import ReactMarkdown from 'react-markdown';

type Props = {
  version: ChangelogVersion;
};

export const ChangelogMarkdown = ({ version }: Props): JSX.Element => {
  const { t } = useTranslation('changelog');

  return (
    <Flex w='75%' marginX='auto' overflowY='scroll' borderRadius='10px'>
      <Flex flexDir='column'>
        <Heading textColor='#9c5ddb'>{`${version.versionName}`}</Heading>
        <Heading size='md'>{`${t('date')} ${version.date}`}</Heading>
        {version.info.added && <Markdown header={t('added')} markdown={version.info.added} />}
        {version.info.changed && <Markdown header={t('changed')} markdown={version.info.changed} />}
        {version.info.deprecated && (
          <Markdown header={t('deprecated')} markdown={version.info.deprecated} />
        )}
        {version.info.removed && <Markdown header={t('removed')} markdown={version.info.removed} />}
        {version.info.fixed && <Markdown header={t('fixed')} markdown={version.info.fixed} />}
        {version.info.security && (
          <Markdown header={t('security')} markdown={version.info.security} />
        )}
      </Flex>
    </Flex>
  );
};

type MarkdownProps = {
  markdown: string;
  header: string;
};

const Markdown = ({ markdown, header }: MarkdownProps): JSX.Element => {
  const classNameHeader = 'markdown-header' + header;
  return (
    <>
      <Text
        fontSize='2xl'
        minW='100%'
        borderBottom='1px solid #9c5ddb'
        mt='1em'
        display='flex'
        alignItems='center'
        className={classNameHeader}
      >
        {header}

        <Box
          marginLeft='1'
          as='a'
          href={'#' + header}
          aria-label='anchor'
          opacity='0'
          _hover={{ opacity: '1' }}
          sx={{ [`.${classNameHeader}:hover &`]: { opacity: '1' } }}
        >
          <ImAttachment size={18} />
        </Box>
      </Text>
      <ReactMarkdown children={markdown} />
    </>
  );
};

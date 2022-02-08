import { Button, Flex, Text } from '@chakra-ui/react';
import type { ChangelogVersion } from '../../services/changelogParser';
import NextLink from 'next/link';

type Prop = {
  versions: ChangelogVersion[];
  currentVersion: string;
};

export const ChangelogSidebar = ({ versions = [], currentVersion }: Prop): JSX.Element => {
  return (
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
              {versions.map((version) => (
                <Flex key={version.versionName} paddingY='.75em' textAlign='center'>
                  <NextLink href={`/changelog/${version.versionName}`}>
                    <Button as='a' _hover={{ cursor: 'pointer', opacity: 0.7 }}>
                      <Text
                        as='span'
                        textColor={version.versionName === currentVersion ? '#9c5ddb' : 'white'}
                        fontSize='large'
                      >
                        {version.versionName}
                      </Text>
                    </Button>
                  </NextLink>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

import { Button, Flex, Text } from '@chakra-ui/react';
import type { ChangelogVersion } from '../../services/changelogParser';
import NextLink from 'next/link';

type Prop = {
  versions: ChangelogVersion[];
  currentVersion: string;
};

export const ChangelogSidebar = ({ versions, currentVersion }: Prop): JSX.Element => {
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
              {versions.map((a) => (
                <Flex key={a.versionName} paddingY='.75em' textAlign='center'>
                  <NextLink href={`/changelog/${a.versionName}`}>
                    <Button as='a'>
                      <Text
                        textColor={a.versionName === currentVersion ? '#9c5ddb' : 'white'}
                        fontSize='large'
                      >
                        {a.versionName}
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

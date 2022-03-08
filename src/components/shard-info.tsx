import 'moment-duration-format';
import { Box, Flex, Stat, Text, StatLabel, StatNumber, Center } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { ShardData } from '../services/api/api.types';
import ReactTooltip from 'react-tooltip';
import moment from 'moment';
import { TFunction } from 'next-i18next';

// https://www.youtube.com/watch?v=BpK6Gp3607I

type Props = {
  shard: ShardData;
  t: TFunction;
};

interface StatsCardProps {
  title: string;
  stat: number | string;
  icon: ReactNode;
}

const StatisticCard = ({ title, stat, icon }: StatsCardProps): JSX.Element => {
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      color={'#9c5ddb'}
      borderColor={'#9c5ddb'}
      rounded={'lg'}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'bold'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box my={'auto'} alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
};

const ShardInfo = ({ shard, t }: Props): JSX.Element => {
  const tipId = shard.id * 100;
  return (
    <>
      {!shard.isOff && (
        <ReactTooltip
          id={`${tipId}`}
          effect='solid'
          place='top'
          backgroundColor='#343536'
          textColor='white'
        >
          <Text fontWeight={'semibold'}>Cluster: {shard.clusterId}</Text>
          <Text>Uptime: {moment.duration(shard.uptime).format('D[d], H[h], m[m], s[s]')}</Text>
          <Text>
            {t('connected')}: {moment.duration(shard.connected).format('D[d], H[h], m[m], s[s]')}
          </Text>
          <Text>
            {t('guilds')}: {shard.guilds}
          </Text>
          <Text fontWeight={'bold'}>
            {shard.unavailable > 0
              ? t('unavailable', { guilds: shard.unavailable })
              : t('no-issues')}
          </Text>
          <Text>
            {t('members')}: {shard.members}
          </Text>
          <Text>
            {t('ping')}: {`${shard.ping}ms`}
          </Text>
        </ReactTooltip>
      )}
      <Box
        data-tip
        data-for={tipId}
        width={'60px'}
        height={'60px'}
        rounded={'lg'}
        fontSize={'2xl'}
        fontWeight={'medium'}
        textAlign={'center'}
        border={'1px solid'}
        borderColor={'#9c5ddb'}
      >
        <Center
          width={'60px'}
          height={'60px'}
          color={
            shard.isOff
              ? 'red.600'
              : shard.ping < 100 && shard.unavailable === 0
              ? 'green.400'
              : 'yellow.300'
          }
        >
          {shard.id}
        </Center>
      </Box>
    </>
  );
};

export { StatisticCard, ShardInfo };

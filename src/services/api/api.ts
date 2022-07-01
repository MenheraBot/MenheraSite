import axios from 'axios';
import { Command, ShardData } from './api.types';

const fetch = async <R>(route: string): Promise<R> => {
  const res = await axios.get<R>(process.env.NEXT_PUBLIC_API_URL + route, {
    headers: {
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_API_URL,
    },
  });

  return res.data;
};

export const fetchGithub = async (): Promise<string> => {
  const res = await axios.get(
    'https://raw.githubusercontent.com/MenheraBot/MenheraBot/master/CHANGELOG',
  );

  return res.data;
};

export const fetchCommands = (): Promise<Command[]> => fetch('/commands');

export const fetchShardStatus = (): Promise<ShardData[]> =>
  fetch<ShardData[]>('/shards').then((res) =>
    res.map((shard) => ({ ...shard, isOff: shard.lastPingAt < Date.now() - 25_000 })),
  );

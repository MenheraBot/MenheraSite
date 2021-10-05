import axios from 'axios';
import { Command, Shard } from './api.types';

const fetch = <R>(route: string): (() => Promise<R>) => {
  return async () => {
    const res = await axios.get<R>(process.env.API_URL + route);
    return res.data;
  };
};

export const fetchCommands = fetch<Command[]>('/commands');
export const fetchStatus = fetch<Shard[]>('/shards');

import axios from 'axios';
import { Command, Shard } from './api.types';

const fetch = async <R>(route: string): Promise<R> => {
  const res = await axios.get<R>(process.env.API_URL + route);
  return res.data;
};

export const fetchCommands = (): Promise<Command[]> => fetch('/commands');
export const fetchStatus = (): Promise<Shard[]> => fetch('/shards');

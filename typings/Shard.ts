interface Top {
  commandName: string;
  uses: number;
}

export interface Shard {
  id: number;
  memoryUsed: number;
  uptime: number;
  guilds: number;
  unavailable: number;
  ping: number;
  lastPingAt: number;
  members: number;
  executedCommands: number;
  top: Top[];
}

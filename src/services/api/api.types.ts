export interface Choice {
  name: string;
  value: string;
}

export interface Option {
  name: string;
  type: string;
  description: string;
  required: boolean;
  choices: Choice[];
  options: Option[];
}

export interface Disabled {
  isDisabled: boolean;
  reason?: string;
}

export interface Command {
  name: string;
  category: string;
  cooldown: number;
  description: string;
  options: Option[];
  disabled: Disabled;
}

export interface Top {
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
  isOff: boolean;
  members: number;
  executedCommands: number;
  top: Top[];
}

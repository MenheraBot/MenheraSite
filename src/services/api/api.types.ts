export interface Choice {
  name: string;
  nameLocalizations?: { 'en-US': string };
  value: string;
}

export interface Option {
  name: string;
  nameLocalizations?: { 'en-US': string };
  type: string;
  description: string;
  descriptionLocalizations?: { 'en-US': string };
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
  nameLocalizations?: { 'en-US': string };
  descriptionLocalizations?: { 'en-US': string };
  disabled: Disabled;
}

export interface Top {
  commandName: string;
  uses: number;
}

export interface ShardData {
  id: number;
  memoryUsed: number;
  uptime: number;
  connected: number;
  guilds: number;
  unavailable: number;
  ping: number;
  lastPingAt: number;
  isOff: boolean;
  members: number;
  clusterId: number;
}

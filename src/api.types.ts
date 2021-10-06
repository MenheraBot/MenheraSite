export interface Choice {
  name: string;
  value: string;
}

export interface Option3 {
  name: string;
  description: string;
  type: string;
  required: boolean;
  choices: Choice[];
}

export interface Option2 {
  name: string;
  description: string;
  type: string;
  options: Option3[];
  required?: boolean;
  choices: Choice[];
}

export interface Option {
  name: string;
  type: string;
  description: string;
  required: boolean;
  choices: Choice[];
  options: Option2[];
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
  lastPingAt?: number;
  members: number;
  executedCommands: number;
  top: Top[];
}

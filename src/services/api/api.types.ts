type i18nObj = Record<string, string>;

export interface Choice {
  name: string;
  nameLocalizations?: { 'en-US': string };
  value: string;
}

type CommandType =
  | 'STRING'
  | 'NUMBER'
  | 'BOOLEAN'
  | 'CHANNEL'
  | 'USER'
  | 'ROLE'
  | 'integer'
  | 'SUB_COMMAND'
  | 'SUB_COMMAND_GROUP';

export interface Option {
  type: CommandType;
  name: string;
  nameLocalizations?: i18nObj | null;
  description: string;
  descriptionLocalizations?: i18nObj | null;
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
  nameLocalizations?: i18nObj | null;
  description: string;
  descriptionLocalizations?: i18nObj | null;
  options: Option[];
  disabled: Disabled;
  category: string;
  cooldown: number;
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

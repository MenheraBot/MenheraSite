interface Choice {
  name: string;
  value: string;
}

export interface Option {
  name: string;
  type: string;
  description: string;
  required: boolean;
  choices?: Choice[];
}

export interface Command {
  name: string;
  description: string;
  category: string;
  cooldown: number;

  options: Option[];

  disabled: {
    isDisabled: boolean;
    reason?: string;
  };
}

export interface CommandDisabled {
  name: string;
  reason?: string;
}

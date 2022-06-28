import { fetchCommands } from './api';
import { Command, Option } from './api.types';

const isParentCommand = (options: Option[]) =>
  options?.some((option) => option.type === 'SUB_COMMAND' || option.type === 'SUB_COMMAND_GROUP') ??
  false;

const extractSubcommands = (data: Command[], locale: string): Command[] => {
  return data.reduce<Command[]>((commands, command) => {
    function extractOptions(parent: string, options: Option[]): Option[] {
      const newOptions: Option[] = [];

      for (const index in options) {
        const option = options[index];
        const optionName = option.nameLocalizations?.[locale] ?? option.name;
        const optionDesc = option.descriptionLocalizations?.[locale] ?? option.description;

        const subName = `${parent} ${optionName}`;

        if (option.type === 'SUB_COMMAND_GROUP') {
          extractOptions(subName, option.options);
        } else if (option.type === 'SUB_COMMAND') {
          const subcommand = {
            ...command,
            description: optionDesc,
            name: subName,
            options: extractOptions(subName, option.options),
          };

          commands.push(subcommand);
        } else {
          newOptions.push({ ...option, name: optionName, description: optionDesc });
        }
      }

      return newOptions;
    }

    const cmdName = command.nameLocalizations?.[locale] ?? command.name;

    if (isParentCommand(command.options)) {
      extractOptions(cmdName, command.options);
    } else {
      const cmd: Command = {
        ...command,
        name: cmdName,
        description: command.descriptionLocalizations?.[locale] ?? command.description,
        options: extractOptions(cmdName, command.options),
      };
      commands.push(cmd);
    }

    return commands;
  }, []);
};

export async function getCommands(locale: string): Promise<Command[]> {
  const commands = await fetchCommands();
  const extractedCommands = extractSubcommands(commands, locale);

  return extractedCommands;
}

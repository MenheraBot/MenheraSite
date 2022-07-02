import { fetchCommands } from './api';
import { Command, Option } from './api.types';

const isParentCommand = (options: Option[]) =>
  options?.some((option) => option.type === 'SUB_COMMAND' || option.type === 'SUB_COMMAND_GROUP') ??
  false;

const extractSubcommands = (data: Command[], locale: string): Command[] => {
  return data.reduce<Command[]>((commands, command) => {
    function extractOptions(parent: string, options: Option[], originalParent: string): Option[] {
      const newOptions: Option[] = [];

      for (const index in options) {
        const option = options[index];
        const optionName = option.nameLocalizations?.[locale] ?? option.name;
        const optionDesc = option.descriptionLocalizations?.[locale] ?? option.description;

        const subName = `${parent} ${optionName}`;
        const originalSubName = `${originalParent} ${option.name}`;

        if (option.type === 'SUB_COMMAND_GROUP') {
          extractOptions(subName, option.options, originalSubName);
        } else if (option.type === 'SUB_COMMAND') {
          const subcommand = {
            ...command,
            description: optionDesc,
            name: subName,
            originalName: originalSubName,
            options: extractOptions(subName, option.options, originalSubName),
          };

          commands.push(subcommand);
        } else {
          newOptions.push({
            ...option,
            originalName: option.name,
            name: optionName,
            description: optionDesc,
          });
        }
      }

      return newOptions;
    }

    const cmdName = command.nameLocalizations?.[locale] ?? command.name;

    if (isParentCommand(command.options)) {
      extractOptions(cmdName, command.options, command.name);
    } else {
      const cmd: Command = {
        ...command,
        name: cmdName,
        originalName: command.name,
        description: command.descriptionLocalizations?.[locale] ?? command.description,
        options: extractOptions(cmdName, command.options, command.name),
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

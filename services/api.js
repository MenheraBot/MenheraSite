import commands from '../database/commands.json'
export async function getCommands(language) {
  if (language === 'en') return commands.en;
  return commands.pt;
}

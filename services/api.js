import commands from '../database/commands.json'
import axios from 'axios'
export async function getCommands(language) {
  if (language === 'en') return commands.en;
  return commands.pt;
}

export async function getStatus() {
  const res = await axios.get(process.env.API_URL)
  return res.data
}


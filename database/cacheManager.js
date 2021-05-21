import axios from 'axios'
import cacheData from 'memory-cache'

class CacheManager {
  async getStatus() {
    const status = await this.fetchDataFromAPI(true);
    return status
  }

  async getCommands(langague) {
    const cmds = await cacheData.get('cmds')
    if (cmds) return cmds[langague];

    const fetchedCommands = await this.fetchDataFromAPI()
    cacheData.put('cmds', fetchedCommands, 1000 * 60 * 60)
    return fetchedCommands[langague]
  }

  async fetchDataFromAPI(wannaStatus = false) {
    const res = await axios.get(process.env.API_URL)

    if (wannaStatus) return res.data.status

    const ptCommands = []
    const enCommands = []

    res.data.commands.forEach(a => {
      ptCommands.push({ name: a.name, description: a.pt_description, category: a.category })
      enCommands.push({ name: a.name, description: a.us_description, category: a.category })
    })

    return { pt: ptCommands, en: enCommands }
  }
}

const cacheManagerInstance = new CacheManager()
export default cacheManagerInstance

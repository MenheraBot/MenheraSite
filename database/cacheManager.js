import axios from 'axios'

class CacheManager {
  constructor() {
    this.commands = {}
    this.lastCommandFetch = 0;

    setInterval(() => {
      this.fetchDataFromAPI()
    }, 1000 * 60 * 10)
  }

  async getStatus() {
    const status = await this.fetchDataFromAPI(true);
    return status
  }

  async getCommands(language) {
    if (language === 'en') return this.commands.en
    return this.commands.pt
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

    this.commands = { pt: ptCommands, en: enCommands }
    this.lastCommandFetch = Date.now()
  }
}

const cacheManagerInstance = new CacheManager();

export default cacheManagerInstance

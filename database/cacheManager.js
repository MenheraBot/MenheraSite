import axios from 'axios'

class CacheManager {
  constructor() {
    this.status = []
    this.commands = {}
    this.lastFetch = 0;

    this.fetchDataFromAPI()
    setInterval(() => {
      this.fetchDataFromAPI()
    }, 1000 * 60 * 60)
  }

  getStatus() {
    return this.status
  }

  getCommands(language) {
    if (language === 'en') return this.commands.en
    return this.commands.pt
  }

  async fetchDataFromAPI() {
    const res = await axios.get(process.env.API_URL)

    const ptCommands = []
    const enCommands = []
    res.data.commands.forEach(a => {
      ptCommands.push({ name: a.name, description: a.pt_description, category: a.category })
      enCommands.push({ name: a.name, description: a.en_description, category: a.category })
    })

    this.status = res.data.status
    this.commands = { pt: ptCommands, en: enCommands }
    this.lastFetch = Date.now()
  }
}

const cacheManagerInstance = new CacheManager();

export default cacheManagerInstance

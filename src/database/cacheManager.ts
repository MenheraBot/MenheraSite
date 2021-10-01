import axios from 'axios'
import cacheData from 'memory-cache'

class CacheManager {
  async getStatus() {
    const status = await this.fetchDataFromAPI(true);
    return status
  }

  async getCommands() {
    const cmds = await cacheData.get('cmds')
    if (cmds) return cmds;

    const fetchedCommands = await this.fetchDataFromAPI()
    cacheData.put('cmds', fetchedCommands, 1000 * 60 * 15)
    return fetchedCommands
  }

  async fetchDataFromAPI(fetchShards = false) {
    const res = await axios.get(`${process.env.API_URL}/${fetchShards ? 'shards' : 'commands'}`, {
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": process.env.API_URL,
      }
    })

    return res.data
  }
}

const cacheManagerInstance = new CacheManager()
export default cacheManagerInstance

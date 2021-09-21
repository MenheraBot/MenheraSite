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
    cacheData.put('cmds', fetchedCommands, 1000 * 60 * 60)
    return fetchedCommands
  }

  async fetchDataFromAPI(wannaStatus = false) {
    const res = await axios.get(process.env.API_URL, {
      withCredentials: false,
        
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",

        "Access-Control-Allow-Methods":
          "GET,OPTIONS,PATCH,DELETE,POST,PUT",

        "Access-Control-Allow-Headers":
          "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
      }
    })

    if (wannaStatus) return res.data.status

    return res.data.commands
  }
}

const cacheManagerInstance = new CacheManager()
export default cacheManagerInstance

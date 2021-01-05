import axios from 'axios';

const api = axios.create({
  baseURL: `http://${process.env.API_IP}/api/site`,
})

export async function getCommands() {
  return api.get('/commands').then(res => res.data);
}

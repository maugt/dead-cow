import { apiKey } from '../constants/credentials/backend.json'
const baseUrl = '35.227.190.205'
export const buildUrl = (url) => {
  return `http://${baseUrl}/api/${url}?token=${apiKey}`
}

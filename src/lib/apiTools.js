import { apiKey } from '../constants/credentials/backend.json'

export const buildUrl = (url) => {
  return `http://35.188.15.61/api/${url}?token=${apiKey}`
}

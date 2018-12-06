import axios from 'axios'

export const telegramApi = axios.create({
  baseURL: `https://api.telegram.org`,
  withCredentials: false,
  headers: {
    post: {
      'Content-Type': 'application/json'
    },
    put: {
      'Content-Type': 'application/json'
    }
  },
  crossDomain: true
})

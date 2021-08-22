import axios from 'axios'
import { BACKEND_URL } from '../constants'

const client = async (endPoint, { ...configs }) => {
  let data = localStorage.getItem('token')
  let token = JSON.parse(data)
  const headers = { 'Content-Type': 'application/json' }
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  const config = {
    ...configs,
    headers: headers,
  }
  config.url = `${BACKEND_URL}${endPoint}`
  const res = await axios(config)

  if (res.statusText === 'OK') {
    return Promise.resolve(res.data)
  } else {
    return Promise.reject(res)
  }
}
export default client

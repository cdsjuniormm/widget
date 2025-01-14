import axios from 'axios'

const API_ENVS = {
  local: 'http://localhost:3000',
  development: '',
  production: 'https://backend-treinamento-vue3-cdsjuniormm.vercel.app/'
}

const httpClient = axios.create({
  baseURL: API_ENVS[process.env.NODE_ENV] || API_ENVS.local
})

httpClient.interceptors.response.use((response) => {
  return response
}, (error) => {
  const canThrowAnError = error.request.status === 0 || error.request.status === 500
  if (canThrowAnError) {
    throw new Error(error.message)
  }
  return error
})

export default {}

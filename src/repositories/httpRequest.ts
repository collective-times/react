import axios from 'axios'

const apiUrl = 'https://collective-times-api.herokuapp.com'

// params is key value map.
export const get = (path: string, params?: any) =>
  axios.get(`${apiUrl}${path}`, {
    withCredentials: true,
    params,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
  }).then(response => {
    if (response.status !== 200) {
      throw new Error()
    }
    return response
  })

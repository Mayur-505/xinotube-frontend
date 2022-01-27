import axios from 'axios'
// import * as qs from 'qs'

const api = (url = '', method, data = {}) => {
  const options = {
    method,
    headers: {
      'content-type': 'multipart/form-data'
    },
     data,
    url: `${process.env.REACT_APP_BASE_URL}=${url}`,
  }
  return axios(options)
}

export default api

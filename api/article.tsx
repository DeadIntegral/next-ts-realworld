import axios from 'axios'

import { BASE_URL } from 'utils/constant'

const limitQuery = (limit: number, page: number) => `limit=${limit}&offset=${page ? page * limit : 0}`
const ArticleAPI = {
  all: (page: number, limit: number = 10) => axios.get(`${BASE_URL}/articles?${limitQuery(limit, page)}`),
  get: (slug: string) => axios.get(`${BASE_URL}/articles/${encodeURIComponent(slug)}`),
}

export default ArticleAPI

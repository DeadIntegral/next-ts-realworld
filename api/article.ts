import { requests } from './wrapperAPI'

const limitQuery = (limit: number, page: number) => `limit=${limit}&offset=${page ? page * limit : 0}`
const ArticleAPI = {
  all: (page: number, limit: number = 10) => requests.get(`/articles?${limitQuery(limit, page)}`),
  get: (slug: string) => requests.get(`/articles/${encodeURIComponent(slug)}`),
}

export default ArticleAPI

import { requests } from './wrapperAPI'
import { articleWriteType } from 'types/ArticleTypes'

const limitQuery = (limit: number, page: number) => `limit=${limit}&offset=${page ? page * limit : 0}`
const ArticleAPI = {
  all: (page: number, limit: number = 10) => requests.get(`/articles?${limitQuery(limit, page)}`),
  get: (slug: string) => requests.get(`/articles/${encodeURIComponent(slug)}`),
  create: (article: articleWriteType) => requests.post(`/articles`, { ...article }),
  update: (article: articleWriteType, slug: string) => requests.put(`/articles/${slug}`, { ...article }),
}

export default ArticleAPI

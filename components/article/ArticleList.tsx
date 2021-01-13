import useSWR from 'swr'
import { articleReadType } from 'types/ArticleTypes'
import { fetcher } from 'utils/fetcher'
import { BASE_URL } from 'utils/constant'

const ArticleList = () => {
  const { data, error } = useSWR(`${BASE_URL}/articles`, fetcher)

  if (error) return <div>error</div>
  if (!data) return <div>loading...</div>
  const { articles, articlesCount } = data
  return articles.map((article: articleReadType) => <div key={article.slug}>{article.title}</div>)
}
export default ArticleList

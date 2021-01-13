import useSWR from 'swr'
import axios from 'axios'
import { articleReadType } from 'types/articleTypes'
const fetcher = async function (url: string) {
  const { data } = await axios.get(url, {})
  return data
}
const ArticleList = () => {
  const { data, error } = useSWR(`https://conduit.productionready.io/api/articles`, fetcher)

  if (error) return <div>error</div>
  if (!data) return <div>loading...</div>
  const { articles, articlesCount } = data
  return articles.map((article: articleReadType) => <div key={article.slug}>{article.title}</div>)
}
export default ArticleList

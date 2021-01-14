import { GetStaticProps, GetStaticPaths } from 'next'

import { articleReadType } from 'types/ArticleTypes'
import ArticleAPI from 'api/article'
import ArticleMeta from 'components/article/ArticleMeta'

interface ArticleDetailProps {
  article: articleReadType
}
const ArticleDetail = ({ article }: ArticleDetailProps) => {
  if (!article) return <div>Loading...</div>
  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>
          <ArticleMeta article={article} />
        </div>
      </div>
      <div className="container page">
        <div className="row article-content">
          <div className="col-xs-12">
            <div>
              <p>{article.description}</p>
              <ul className="tag-list"></ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="article-actions"></div>
        <div className="row"></div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const { pid } = params
    const { data } = await ArticleAPI.get(pid.toString())
    return {
      props: {
        article: data.article,
      },
      revalidate: 1,
    }
  } else {
    return {
      props: {
        article: {},
      },
      revalidate: 1,
    }
  }
}

export default ArticleDetail

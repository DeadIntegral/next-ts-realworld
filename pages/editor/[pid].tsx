import { GetStaticProps, GetStaticPaths } from 'next'

import EditorWrapper from 'components/article/EditorWrapper'
import { articleReadType } from 'types/ArticleTypes'
import ArticleAPI from 'api/article'

interface UpdatePostProps {
  article: articleReadType
}
const UpdatePost = ({ article }: UpdatePostProps) => {
  if (!article) {
    return <div>Loading...</div>
  } else if (JSON.stringify(article) === '{}') {
    return <div>worng url</div>
  }
  return <EditorWrapper article={article} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = {
    props: {
      article: {},
    },
    revalidate: 1,
  }
  if (params) {
    const { pid } = params
    const { data, status } = await ArticleAPI.get(`${pid}`)
    if (status === 200) {
      res.props.article = data.article
    }
  }
  return res
}

export default UpdatePost

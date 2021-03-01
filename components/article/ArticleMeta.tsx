import useSWR from 'swr'

import { getLocalStorage } from 'utils/mutator'
import CustomLink from 'components/common/CustomLink'
import ArticleActions from './ArticleActions'

import { articleReadType } from 'types/ArticleTypes'
import { UserFullType } from 'types/UserTypes'

interface ArticleMetaProps {
  article: articleReadType
}
const ArticleMeta = ({ article }: ArticleMetaProps) => {
  const { author } = article
  const { data } = useSWR('user', getLocalStorage)
  const currentUser: UserFullType = data
  const owner = currentUser?.username === author.username
  return (
    <div className="article-meta">
      <CustomLink href="/profile/[pid]" as={`/profile/${author.username}`}>
        <img src={author.image} />
      </CustomLink>
      <CustomLink href="/profile/[pid]" as={`/profile/${author.username}`}>
        <div className="info">
          <span className="author">{author.username}</span>
          <span className="date">{new Date(article.createdAt).toDateString()}</span>
        </div>
      </CustomLink>
      {owner ? <ArticleActions slug={article.slug} /> : null}
    </div>
  )
}

export default ArticleMeta

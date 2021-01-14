import CustomLink from 'components/common/CustomLink'
import { articleReadType } from 'types/ArticleTypes'

interface ArticleMetaProps {
  article: articleReadType
}
const ArticleMeta = ({ article }: ArticleMetaProps) => {
	const { author } = article
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
    </div>
  )
}

export default ArticleMeta

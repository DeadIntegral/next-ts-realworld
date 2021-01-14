import { articleReadType } from 'types/ArticleTypes'
import CustomLink from 'components/common/CustomLink'

interface ArticlePreviewProps {
  article: articleReadType
}
const ArticlePreview = ({ article }: ArticlePreviewProps) => {
  const { author } = article
  return (
    <div className="article-preview">
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
      <CustomLink href="/article/[pid]" as={`/article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </CustomLink>
    </div>
  )
}

export default ArticlePreview

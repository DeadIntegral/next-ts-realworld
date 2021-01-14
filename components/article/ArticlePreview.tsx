import { articleReadType } from 'types/ArticleTypes'
import CustomLink from 'components/common/CustomLink'
import ArticleMeta from './ArticleMeta'

interface ArticlePreviewProps {
  article: articleReadType
}
const ArticlePreview = ({ article }: ArticlePreviewProps) => {
  return (
    <div className="article-preview">
      <ArticleMeta article={article} />
      <CustomLink href="/article/[pid]" as={`/article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </CustomLink>
    </div>
  )
}

export default ArticlePreview

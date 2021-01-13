import { articleReadType } from 'types/ArticleTypes'
import CustomLink from 'components/common/CustomLink'

interface ArticlePreviewProps {
  article: articleReadType
}
const ArticlePreview = ({ article }: ArticlePreviewProps) => {
	return <div>
		<CustomLink href="/article/[pid]" as={`/article/${article.slug}`}>
			<h1>{article.title}</h1>
			<p>{article.description}</p>
			<span>Read more...</span>
		</CustomLink>
	</div>
}

export default ArticlePreview

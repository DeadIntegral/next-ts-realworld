import CustomLink from 'components/common/CustomLink'

interface ArticleActionsProps {
  slug: string
}
const ArticleActions = ({ slug }: ArticleActionsProps) => {
  return (
    <span>
      <CustomLink className="btn btn-outline-secondary btn-sm" href="/editor/[pid]" as={`/editor/${slug}`}>
        <i className="ion-edit"></i> Edit Article
      </CustomLink>
      <button className="btn btn-outline-danger btn-sm">
        <i className="ion-trash-a"></i> Delete Article
      </button>
    </span>
  )
}

export default ArticleActions

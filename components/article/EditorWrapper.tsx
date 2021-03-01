import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { articleReadType, articleWriteType } from 'types/ArticleTypes'
import ArticleAPI from 'api/article'

interface EditorWrapperProps {
  article?: articleReadType
}
const EditorWrapper = ({ article }: EditorWrapperProps) => {
  const [articleInfo, setArticleInfo] = useState<articleWriteType>({
    title: '',
    description: '',
    body: '',
    tagList: '',
  })
  useEffect(() => {
    if (article) {
      setArticleInfo((_) => ({
        title: article.title,
        description: article.description,
        body: article.body,
        tagList: article?.tagList?.join(' '),
      }))
    }
  }, [article])
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setArticleInfo((origin) => ({ ...origin, [name]: value }))
  }
  const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setArticleInfo((origin) => ({ ...origin, [name]: value }))
  }
  const router = useRouter()
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const slug = router?.query?.pid
    if (slug) {
      // update
      const { data, status } = await ArticleAPI.update(articleInfo, `${slug}`)
      if (status === 200) {
        router.push(`/article/${data.article.slug}`)
      }
    } else {
      // create
      const { data, status } = await ArticleAPI.create(articleInfo)
      if (status === 200) {
        router.push(`/article/${data.article.slug}`)
      }
    }
  }
  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <form onSubmit={handleSubmit}>
              <fieldset className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Article Title"
                  name="title"
                  value={articleInfo.title}
                  onChange={handleInput}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="What's this article about?"
                  name="description"
                  value={articleInfo.description}
                  onChange={handleInput}
                />
              </fieldset>
              <fieldset className="form-group">
                <textarea
                  className="form-control"
                  rows={8}
                  placeholder="Write your article (in markdown)"
                  name="body"
                  value={articleInfo.body}
                  onChange={handleTextarea}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter tags"
                  name="tagList"
                  value={articleInfo.tagList}
                  onChange={handleInput}
                />
                <div className="tag-list"></div>
              </fieldset>
              <button className="btn btn-lg pull-xs-right btn-primary">Publish Article</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditorWrapper

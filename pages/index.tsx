import Link from 'next/link'
import Layout from 'components/Layout'
import ArticleList from 'components/article/ArticleList'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Next TS Realworld</h1>
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
      <ArticleList />
    </div>
  </Layout>
)

export default IndexPage

import Layout from 'components/Layout'
import ArticleList from 'components/article/ArticleList'
import Banner from 'components/home/Banner'

const IndexPage = () => (
  <Layout title="Nextjs TS Realworld">
    <h1>Next TS Realworld</h1>
    <div className="home-page">
      <Banner />
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <ArticleList />
          </div>
          <div className="col-md-3">sidebar</div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

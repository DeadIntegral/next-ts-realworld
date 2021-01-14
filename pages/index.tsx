import ArticleList from 'components/article/ArticleList'
import Banner from 'components/home/Banner'
import Header from 'components/common/Header'

const IndexPage = () => (
  <>
    <Header />
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
  </>
)

export default IndexPage

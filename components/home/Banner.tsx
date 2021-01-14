import { APP_NAME } from 'utils/constant'

const Banner = () => {
	return <div className="banner">
		<div className="container">
			<h1 className="logo-font">{APP_NAME}</h1>
			<p>A place to share your knowledge.</p>
		</div>
	</div>
}

export default Banner
import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import Main from '../components/main'
import MainBottom  from '../components/main-bottom'
import Newsletter  from '../components/newsletter'
import Banner from "../components/banner"

const IndexPage = (props) => {
	

	const bannerText = (
		<>
			<span className="banr-tagline-fx">Tagline</span>

			<h1 className="front-banr-header-fx">
			The United Stated of America has
				<span className="banr-spn-highlight">changed over the last century</span>

				<p className="paragraph-content">
				from one operating on godly principles to one in which many people have fallen into sinful behaviors:  pride, idolatry, pornography, sexual promiscuity, and on and on.
				</p>

				<Link
					key="banr-btn"
					className="btn-link-banr button is-link" 
					to="/about-the-book">Read More
				</Link>
			</h1>
		</>
	)

	return (
	  	<Layout>
	  		 <Banner bannerContext={bannerText}  defProps={props} />
			 <Main/>
			 <MainBottom />
			 <Newsletter />
	  	</Layout>
  	)

}

export default IndexPage

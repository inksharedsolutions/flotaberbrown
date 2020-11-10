import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/non-banner"
import { useStaticQuery, graphql } from "gatsby"
import Parser from 'html-react-parser';

const Pp = (props) =>{


	const bannerText = (
		<>
			<span className="banr-tagline-fx">
				Flo Taber-Brown
			</span>

			<h1 className="banr-header-fx">
				Privacy
				<span className="banr-spn-highlight">Policy</span>
			</h1>
		</>
	)


	const FetchMarkDown = useStaticQuery(graphql`
		 query PrivacyPolicyPageQuery  {
			  markdownRemark(fileAbsolutePath: {regex: "/privacy-policy.md/" }) {
			    frontmatter {
			      author 
			      date
			      title
			    }
			    html
			}
		}
	`)

	const data = {...FetchMarkDown.markdownRemark};

	return(
		<>
		 	<Layout>
		 		
	 			<Banner bannerContext={bannerText} defProps={props} />
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>


	 			<div className="container">
					<div id="privacy-policy-content">
	 					<div className="">{Parser(data.html)}</div>
 					</div>
 				</div>
	 		</Layout>
		</>
	)
}

export default Pp;
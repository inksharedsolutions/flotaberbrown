import React from 'react'
import Layout from "../components/layout"
import Banner from '../components/non-banner'
import icon from '../assets/icon/author_icon.jpg'


const abouttheauthor= (props) =>{


	const bannerText = (
		<>
			<span className="banr-tagline-fx">Flo Taber-Brown</span>
			<h1 className="banr-header-fx">
				About the
				<span className="banr-spn-highlight">Author</span>
			</h1>
		</>
	)

	return(
		<Layout>

			<Banner bannerContext={bannerText} defProps={props} />

			<div className="container">
				<section className="body-author-contents columns">
					 	<div className="column">
					 		<div className="heading-quote">

					 			<div className="author-image-container">
					 				<img src={icon} />
					 				<span className="author-name">
					 					<span className="author-span-ft">Author |  Writer </span>
					 					Flo Taber-Brown
					 				</span>
					 			</div>

					 			<h4>
								 “We need to return in our beliefs of yesteryear and live according to the Lord’s commands and to grow in our faith and sanctification or we will receive His wrath!”
					 			</h4>

					 			<span className="ata-span-fx">author quote</span>
					 		</div>
					 	</div>

					 	 <div className="column">
					 	 	<article className="article-section">

					 	 		<p>
								  I was born in Detroit in 1936 when in was 24 degrees below zero.  I grew up in Kalamazoo Michigan until my family moved to Detroit when I was in the fourth grade.  I graduated from Redford Union High School in 1954 third in my class.  Then I went to the University of Michigan for two years and then transferred to Eastern Michigan University because they had my major in Special Education.  While there I did my student teaching at a local mental institution.  After graduation I taught special education at Fuhrmann Junior High School near Detroit.
								</p>
								<p>
									
									After I was married, we moved to Clarksdale, Mississippi where I again taught Special Education and started my Master’s Degree at Old Miss.  We moved back to Michigan and settled in a town called Stevensville.  Besides teaching and having four beautiful daughters, I attended Western Michigan where I received my Master’s Degree in Special Education and also completed a Doctorate in the same area.

								</p>
								<p>	
									
									After receiving my Doctorate, I taught at Nazareth College in Kalamazoo where I was Chair of Special Education for a number of years.  Meanwhile, I became President of the Technology and Media Division of the National Council for Special Education.  I also wrote the first book on the use of technology for children with Disabilities, “Microcomputers in Special Education” and co-authored with Edward J. Cain, Jr. the book, “Educating Disabled People for the21st Century.”  I also wrote several articles on the subject and a chapter in another book.

								</p>
								<p>	
								Besides teaching Special Education and being involved with teacher training, I was involved with a project in Indiana to train all special educators in that state of using computers in special education and how to modify access to the computer.
								In 1993 my husband and I moved to South Florida where I did teacher training and ran a library for special education teachers in Miami Florida.  I also taught in the Special Education Department at St. Thomas University in Miami.
								</p>
								<p>	
									
									Throughout my life, I have always been involved in the church.  My grandmother on my father’s side was very involved in her Presbyterian Church and I learned much from her.  In addition, I was in the choir in almost every church I attended.  My parents rarely attended church so I went with friends to many different denomination churches.  When we moved to South Florida I was in the choir at an Episcopal Church.  After I retired from teaching, I felt the Lord telling me to go to seminary.  I went to an on-line seminary in Little Rock, Arkansas; Knox Seminary in Ft. Lauderdale, Florida; and ended up getting a Master’s Degree in Theology from Trinity Seminary in Pennsylvania.  I am now a Deacon in the Anglican Church in Davie, Florida.  During the week, I am a Chaplain in two hospitals, although the main Chaplain in one of them.  I visit parishioners and am busy with Deacon duties.  I am also involved with the Red Cross and am on the Florida State Board for Kairos Prison Ministry.

								</p>
								<p>	
								I felt the Lord asking me to write “God is NOT Happy” and He was very much involved in the writing.
								</p>
	
					 	 	</article>
					 	</div>
				</section>
			</div>
	  	</Layout>
	)
}

export default abouttheauthor
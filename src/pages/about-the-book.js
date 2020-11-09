import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import Book from '../assets/img/books/book_main.png'
import Book2 from '../assets/img/books/book2.png'
import { DiscussionEmbed } from "disqus-react"


const abouttheauthor= (props) =>{


	const slug =(props.location.href);

	const disqusConfig = {
	  shortname: 'flo-taber-brown',
	  config: { identifier:  12, slug}
	}

	const bannerText = (
		<>
			<span className="banr-tagline-fx">Flo Taber-Brown</span>
			<h1 className="banr-header-fx">
				About the
				<span className="banr-spn-highlight">Book</span>
			</h1>
		</>
	)


	return(
		<Layout>
		
			<Banner bannerContext={bannerText} defProps={props} />

			<main className="wrapperMain">
				<div className='container'>
						<div className="columns">

							<div className="column">
								<div className="bookImgContainer">
									<img alt="main-book" src={Book} />
								</div>
							</div>

							<div className="column">
								<section className="contentBook">
									
									<p>
									 This book is written so that people will realize many of the behaviors and thinking what our hearts feel is contrary to what is our operating manual. 
									 </p>
									 <p>
									 Flo Taber-Brown taught special education for many years before going to seminary to be a clergy member. She previously wrote a book entitled Microcomputers in Special Education. Flo and her husband have nine children, twenty-seven grandchildren, and twelve great-grandchildren. She is a hospital chaplain and a deacon in her church.
									 </p>
									
										<nav className="booklinkBlocks">
										    <span>Ebooks :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/God-NOT-Happy-Flo-Taber-Brown-ebook/dp/B084CVNJRY/ref=sr_1_1?keywords=9781643458601&qid=1580495858&sr=8-1">Amazon</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/god-is-not-happy/">Stratton Press</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/god-is-not-happy-flo-taber-brown/1121077987?ean=9781643458601">Barnes & Noble</a></li>
										</nav>

										<nav className="booklinkBlocks">
											<span>Purchase Paperback :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/dp/1643456431/ref=sr_1_1?keywords=9781643456430&qid=1580495876&sr=8-1">Amazon</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/god-is-not-happy-flo-taber-brown/1121077987?ean=9781643456430">Barnes & Noble </a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/God-NOT-Happy/Flo-Taber-Brown/9781643456430?id=8043669718198">Books A Million</a></li>
										</nav>

								</section>
							</div>
							
						</div>
							
						
						<div className="columns">

							<div className="column">
								<div className="bookImgContainer">
									<img alt="main-book" src={Book2} />
								</div>
							</div>

							<div className="column">
								<section className="contentBook">
									
									 <p>
									 This book is a collection of messages and prayers sent to members of a church during the covid-19 pandemic designed to provide comfort and guidance during based on the power of our Lord Father, Son, and Holy Spirit. 
									 </p>
									
										<nav className="booklinkBlocks">
										    <span>Coming Soon...</span>
										</nav>

								</section>
							</div>
							
						</div>

						<div className="commentSection" >
						  <DiscussionEmbed {...disqusConfig} />
						</div>

				</div>	
			</main>


	  	</Layout>
	)
}

export default abouttheauthor
 import React from 'react'
 import {Link} from 'gatsby'
 import icon from '../assets/icon/author_icon.jpg'


 const main = () =>{
 	return(
 		<section className="main-section container">
 			<div className="columns">

 				 <div className="column">
 				 	 <div className="wrapper-heading-content">
 				 	 	<h1>About Me</h1>
 				 	 </div>
 				 </div>

 				 <div className="column is-three-fifths section-main-contents">
 				  	<p>
 				  	   <span className="icon-auhtor">
 				  			<img alt="author_icon" src={icon} />
 				  			<span className="author-name-tagline">Flo Taber-Brown
 				  				<span className="author-fx">/ author & writer</span>
 				  			</span>
 				  		</span>
 				  	</p>

 				  	<p>
 					  I was born in Detroit in 1936 when in was 24 degrees below zero.  I grew up in Kalamazoo Michigan until my family moved to Detroit when I was in the fourth grade.  I graduated from Redford Union High School in 1954 third in my class.
					</p>

					<button className="btn-main-customize"><Link to="/about-the-author"> Read More</Link></button>

 				 </div>
 			</div>
 		</section>
 	)
 }

 export default main;
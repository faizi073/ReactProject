import React from 'react';
import './App.css';


class App extends React.Component {
  render() {
    return (
<div id="page">
	<div id="content">
		<div class="post greenbox">
			<div class="title">
				<h1>Welcome to My Website</h1>
			</div>
			<div class="entry"> <img src="images/img17.jpg" alt="" width="120" height="120" class="left" />
				A product description is the copy that describes the features and benefits of a product to a customer. The goal of the product description is to provide the customer with enough information to compel them to want to buy the product immediately
			</div>
			<div class="btm">
				<div class="l">
					<div class="r">
						<p class="meta"><a href="#" class="more">Read More</a> &nbsp;&nbsp;&nbsp; <a href="#" class="comments">Comments (33)</a></p>
					</div>
				</div>
			</div>
		</div>
		<div class="two-columns">
			<div class="columnA">
				<div class="title red">
					<h2>Product Sites</h2>
				</div>
				<div class="content">
					<ul>
						<li><a href="#">Amazon</a></li>
						<li><a href="#">Ali express</a></li>
						<li><a href="#">Ali Baba</a></li>
						<li><a href="#">Dara.pk</a></li>
					</ul>
				</div>
			</div>
			<div class="columnB">
				<div class="title blue">
					<h2>Shirts</h2>
				</div>
				<div class="content">
					<ul>
						<li><a href="#">Check Shirts</a></li>
						<li><a href="#">T Shirts</a></li>
						<li><a href="#">Prome Shirts</a></li>
						<li><a href="#">Plan Shirts</a></li>
						<li><a href="#">Dress Shirts</a></li>
					</ul>
				</div>
			</div>
			<div class="btm">&nbsp;</div>
		</div>
	</div>
	<div id="sidebar">
		<ul>
			<li>
				<h2>Categories</h2>
				<ul>
					<li><a href="#">Shirts</a></li>
					<li><a href="#">Pents</a></li>
					<li><a href="#">Under Garments</a></li>
					<li><a href="#">Coats</a></li>
					<li><a href="#">Shalwar Qamez</a></li>
					<li><a href="#">Jackets</a></li>
				</ul>
			</li>
			<li>
				<h2>Archives</h2>
				<ul>
					<li><a href="#">September</a> (23)</li>
					<li><a href="#">August</a> (31)</li>
					<li><a href="#">July</a> (31)</li>
					<li><a href="#">June</a> (30)</li>
					<li><a href="#">May</a> (31)</li>
				</ul>
			</li>
		</ul>
	</div>
</div>    
);
  }
}

export default App;

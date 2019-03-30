import React from "react";
import {Link} from "react-router-dom";


class Service extends React.Component {


  render() {
    return (

<div id="page">
	<div id="content">
		<div class="post greenbox">
			<div class="title">
				<h1>Services</h1>
			</div>
			<div class="entry"> <img src="images/img17.jpg" alt="" width="120" height="120" class="left" />
"Servicizing" is a transaction through which value is provided by a combination of products and services in which the satisfaction of customer needs is achieved either by selling the function of the product rather than the product itself, or by increasing the service component of a product offer			</div>
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
					<h2>Product Services</h2>
				</div>
				<div class="content">
					<ul>
						<li><a href="#">Plan</a></li>
						<li><a href="#">Mix Cotton</a></li>
						<li><a href="#">karandi</a></li>
						<li><a href="#">Bosci</a></li>
						<li><a href="#">Latha</a></li>
						<li><a href="#">Looan</a></li>
						<li><a href="#">Cotton</a></li>
						
					</ul>
				</div>
			</div>
			<div class="columnB">
				<div class="title blue">
					<h2>Delivery</h2>
				</div>
				<div class="content">
					<ul>
						<li><a href="#">Home Services</a></li>
						<li><a href="#">Payment Method</a></li>
						<li><a href="#">Builty</a></li>
						<li><a href="#">Rent</a></li>
						<li><a href="#">On Demand</a></li>
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

export default Service;

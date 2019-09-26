import React, { Component } from 'react'
import './_header.scss';
import Icon from './icon.png';
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <div className="header">
               <div >
                    <ul >
                        <li><a className="btn" href="#menuAnchor">Menu</a></li>
                        <li><a className="btn" href="#reservationsAnchor">Reservations</a></li>
                        <img className="acorn" src={Icon}/>
                        <li><Link to="/private-dining" className="btn">Private Dining</Link></li>
                        <li><Link to="/about" className="btn" href="/">About</Link></li>
                    </ul>
                </div> 
                <h1 className="heroHeading">It's time for a new experience.</h1>
                <h2 className="heading5280">"Acorn is such a good restaurant, for so many different kinds of diners..."</h2>
                <p className="quote5280">-5280 Magazine 2017-</p>
                <h2 className="headingYelp">"4.5 Stars on Yelp"</h2>
                <p className="quoteYelp">-1012 Reviews and Counting-</p>
                <img className="acornHeading" src={Icon}/>
            </div>
        )
    }
}
export default Header
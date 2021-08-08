import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1 shadblue">
                        <h5 className="text-info shadbue"><u>Pages</u></h5>
                        <ul className="list-unstyled">
                            <li><Link className="text-white" to='/Home' >Home</Link></li>
                            <li><Link className="text-white" to='/About'  >About</Link></li>
                            <li><Link className="text-white" to='/Contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center shad">
                        <h5 className="text-info"><u>Follow us</u></h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-4 text-center shadblue">
                        <h5 className="text-info"><u>Contact-us</u></h5>
                        <a role="button" className="text-white" href="tel:+12065551234"><i className="fa fa-phone" /> 1-718-674-4990</a><br />
                        <a role="button" className="text-white" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> salmoonsamuel08@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
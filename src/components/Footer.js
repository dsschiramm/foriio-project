import React from 'react';
import logo from '../assets/img/icon.png';

const Footer = () => {

	return (
		<div className="fixed-bottom pt-4 border-top bg-white">
			<div className="row">
				<div className="col-md ml-5 mr-5">
					<img className="mb-2" src={logo} alt="" width="50" height="50"/>
					<small className="d-block mb-3 text-muted">Portfolio made easy</small>
				</div>

                <div className="col-md d-inline-flex">
                    <div className="custom-link"><small className="d-block ml-3 text-muted align-baseline">Terms of use</small></div>
                    <div className="custom-link"><small className="d-block ml-3 text-muted align-baseline">Privacy policy</small></div>
                    <div className="custom-link"><small className="d-block ml-3 text-muted align-baseline">Discover</small></div>
                    <div className="custom-link"><small className="d-block ml-3 text-muted align-baseline">Blog</small></div>
                    <div className="custom-link"><small className="d-block ml-3 text-muted align-baseline">What's is foriio?</small></div>
                    <div className="custom-link"><small className="d-block ml-3 text-muted align-baseline">©2019 1ne studio, Inc</small></div>
                </div>
    		</div>
		</div>
	);
};

export default Footer;
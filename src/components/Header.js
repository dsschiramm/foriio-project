import React, { Fragment } from 'react';
import SearchPage from './SearchPage';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import defaultAvatar from '../assets/img/default_avatar_v2.png';
import { useHistory } from "react-router-dom";

const Header = () => {

	const history = useHistory();
	const userHistoryList = useSelector(state => state.userHistory);

	const historyList = userHistoryList.map((it) => {
		return {
			id: it.id,
			parameterLink: it.user ? it.user.screen_name : it.id,
			type: it.type,
			name: it.title ? it.title : it.name,
			image: it.thumbnail ? it.thumbnail : it.avatar.thumb ? it.avatar.thumb : defaultAvatar
		}
	});

	const openHistory = (id, type) => {
		if (type === 'USER') {
			history.push(`/users/${id}/profile`);
		} else if (type === 'WORK') {
			history.push(`/works/${id}`);
		}
	};

	return (
		<div className="d-flex flex-column flex-md-row align-items-center p-3 bg-white border-bottom shadow-sm fixed-top">
			<Link to="/">
				<h5 className="my-0 mr-3 font-weight-normal">Foriio</h5>
			</Link>

			<div className="float-left mr-md-auto w-50">
				<SearchPage />
			</div>

			<div className="dropdown w-20">
				<button className="btn text-white bg-info mr-2 custom-button custom-link w-90" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">What you saw?</button>
				<div className="dropdown-menu w-90 custom-dropdown-scroll">

					{historyList.map((history) => {
						return (
							<Fragment key={`${history.id}${history.type}`}>
								<button onClick={() => openHistory(history.parameterLink, history.type)} className="dropdown-item custom-link">
									<div className="float-left">
										<img className="custom-icon-img" src={history.image} alt="" />
									</div>
									<div className="float-right">
										<span className="text-wrap custom-font-small">{history.name}</span>
									</div>
								</button>
								<div role="separator" className="dropdown-divider"></div>
							</Fragment>
						);
					})}

				</div>
			</div>

			<div className="dropdown">
				<button className="btn btn-outline-secondary mr-2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">EN</button>
				<div className="dropdown-menu">
					<button className="dropdown-item custom-link">EN</button>
					<div role="separator" className="dropdown-divider"></div>
					<button className="dropdown-item custom-link">JP</button>
				</div>
			</div>

			<button className="btn btn-outline-primary custom-link">Sign up</button>

		</div>
	);
};

export default Header;
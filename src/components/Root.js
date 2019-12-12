import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import UserList from './UserList';
import User from './User';
import Work from './Work';

const Root = () => {

	return (
		<Fragment>
			<Header />
			<div className="container-fluid pt-7 pl-5 mb-4">
				<Switch>
					<Route path={`/users/:id`} component={User}/>
					<Route path={`/works/:id`} component={Work}/>
					<Route component={UserList}/>
				</Switch>
			</div>
			<Footer />
		</Fragment>
	);
};

export default Root;

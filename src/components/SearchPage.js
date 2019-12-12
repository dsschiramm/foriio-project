import React from 'react';

const SearchPage = () => {
	return (
		<div className="input-group">
			<input type="text" className="form-control my-0 py-1" placeholder="Let's discover greate creatives" aria-label="Let's discover greate creatives" aria-describedby="basic-addon2" />
			<div className="input-group-append">
				<button className="btn btn-outline-secondary" type="button">Search</button>
			</div>
		</div>
	);
};

export default SearchPage;
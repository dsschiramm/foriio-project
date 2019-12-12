import React, { useState, Fragment } from "react";
import defaultAvatar from '../assets/img/default_avatar_v2.png';
import useFetchUserList from '../actions/useFetchUserList';
import UserListPagination from './UserListPagination';
import { useHistory } from "react-router-dom";

const UserList = () => {

	const history = useHistory();
	const [page, setPage] = useState(1);
	const { data: userList, total } = useFetchUserList({ page });

	if (!userList || userList.length === 0) {
        return ( <div><span className="custom-loader"></span></div> );
	}

	const handlePageChange = newPage => {

		if (!newPage || newPage < 1) {
			newPage = 1;
		} else if (newPage > total) {
			newPage = total;
		}

        setPage(newPage);
	};

	const linkToUser = (user) => {
		history.push(`/users/${user.screen_name}`);
	};

	const linkToWork = (work) => {
		history.push(`/works/${work.id}`);
	};

	return (
		<Fragment>
		{userList.map((user, index) => {

			return (
				<div key={user.id} className="row">

					<div className="card custom-card-h w-25 align-middle flex-md-row mb-4 box-shadow h-md-250 pb-7">
						<div className="custom-link" onClick={() => linkToUser(user)}>
							<img className="card-img-right custom-avatar flex-auto d-none d-md-block" src={user.avatar ? user.avatar : defaultAvatar} alt="" />
						</div>

						<div className="card-body d-flex flex-column align-items-start">
							<h6 className="mb-0">
								<div className="custom-link" onClick={() => linkToUser(user)}>
									<span className="text-dark remove-link">{user.name}</span>
								</div>
							</h6>
							<div className="mb-1 text-muted text-break small">{user.profession}</div>
						</div>
					</div>

					{user.works.map((work, index) => {
						return (
							<div key={work.id} className="custom-link ml-3" onClick={() => linkToWork(work)} target="_blank" draggable="false" data-tooltip={work.title}>
								<img className="custom-img" src={work.thumbnail} alt="" />
							</div>
						);
					})}
				</div>
			)
		})}

		<UserListPagination
			handlePageChange={handlePageChange}
			total={total}
			page={page}
		/>
		</Fragment>
	);
};

export default UserList;

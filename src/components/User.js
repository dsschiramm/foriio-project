import React from "react";
import useFetch from '../actions/useFetch';
import { useParams } from 'react-router-dom';
import Profile from './Profile';
import Carousel from './Carousel';
import { useDispatch } from "react-redux";

const User = () => {

	const { id } = useParams();
	const dispatch = useDispatch();
	const jsonProfile = useFetch(`users/${id}/profile`);
	const jsonWorks = useFetch(`users/${id}/works`);

	if (!jsonProfile) {
        return (
			<span className="custom-loader"></span>
        );
	}

	dispatch({ type: "FETCH_HISTORY_USER", payload: jsonProfile.profile });

	const profile = {
		link: false,
		...jsonProfile.profile
	};

	return (
		<div className="row">
			<div className="col-md-3 col-12">
				<Profile profile={profile} />
			</div>

			{(() => {

				if (jsonWorks) {

					const carousel = {
						flLink: true,
						images: jsonWorks.works.map((it) => {
							return { title: it.title, urls: { detail: [it.thumbnail] }, id: it.id }
						})
					};

					return (
						<div className="col-md-9 pl-5">
							<div className="col-md-9">
				                <Carousel carousel={carousel} />
							</div>
						</div>
					);
				}
			})()}
		</div>
    );
};

export default User;

import React from "react";
import useFetchWork from '../actions/useFetch';
import { useParams } from 'react-router-dom';
import Profile from './Profile';
import Carousel from './Carousel';
import { useDispatch } from "react-redux";

const Work = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
	const jsonWork = useFetchWork(`works/${id}`);

	if (!jsonWork) {
        return (
            <span className="custom-loader"></span>
        );
    }

    const work = jsonWork.work;
    dispatch({ type: "FETCH_HISTORY_WORK", payload: work });

    const profile = {
        flLink: true,
        user: { screen_name: work.author.screen_name },
        ...work.author.profile
    };

    const carousel = {
        flLink: false,
        ...work
    };

	return (
		<div className="row">

			<div className="col-md-3 col-12">
                <Profile profile={profile} />
			</div>

			<div className="col-md-9">
                <Carousel carousel={carousel} />
			</div>
		</div>
    );
};

export default Work;

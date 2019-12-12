import React from "react";
import defaultAvatar from '../assets/img/default_avatar_v2.png';
import { useHistory } from "react-router-dom";

const Profile = props => {

    const history = useHistory();

    const { flLink, name, profession, bio, avatar: { thumb }, user: { screen_name } } = props.profile;

    const linkToUser = (name, flRedirect) => {

        if (flRedirect) {
            history.push(`/users/${name}`);
        }
    };

    return (
        <div className="bio-info">
            <div className="row custom-center-img pl-3 pr-3 pt-3">
                <div className="bio-image">
                    <img onClick={() => linkToUser(screen_name, flLink)} className="custom-link card-img-right custom-avatar flex-auto d-none d-md-block"
                        src={thumb ? thumb : defaultAvatar} alt="" />
                </div>
            </div>

            <div className="row pl-3 pr-3 pb-3">
                <div className="bio-content">
                    <h1 className={flLink ? "custom-link" : ""} onClick={() => linkToUser(screen_name, flLink)}>{screen_name}</h1>
                    <h6>{name}</h6>
                    <h6>{profession}</h6>
                    <span>{bio}</span>
                </div>
            </div>
        </div>
    );
};

export default Profile;

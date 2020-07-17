import React from "react";
import  p from './profile.module.scss';
import state from "../../localData";


const ProfileContainer = props => {
    return (
        <div>
            <div key={props.id}>
                <img
                    src={props.profileImg}
                    alt="avatar"
                />
            </div>
            <div>
                <p>Status: {props.status}</p>
                <p>Birth Day: {props.birthDay}</p>
                <p>About: {props.about}</p>
            </div>
        </div>
    )
};

const profileItem = state.profileData.profile.map(item => (
        <ProfileContainer
            id={item.id}
            profileImg={item.profileImg}
            status={item.status}
            birthDay={item.birthDay}
            about={item.about}
        />
    )
);

const Profile = () => <article className={p.profileItems}>{profileItem}</article>;

export default Profile;

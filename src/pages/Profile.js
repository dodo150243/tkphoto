import React from 'react';
import ProfileForm from "../components/ProfileForm";
import { useParams } from 'react-router-dom';
import PhotoList from '../components/PhotoList';

function Profile() {
    const param = useParams();
    console.log(param.username);
    return (
        <>
            
                <ProfileForm username={param.username} />
                <PhotoList username={param.username} />
            
        </>
    )
}

export default Profile;

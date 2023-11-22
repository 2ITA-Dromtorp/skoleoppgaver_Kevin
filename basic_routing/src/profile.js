import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import profileIMG from './images/profile-image.jpg';
import json from './profiles';
import { useState } from 'react';

export default function Profile() {

    const { profile } = useParams();
    const navigate = useNavigate();
    console.log(profile);


    const [student, setStudent] = useState({
            "navn" : "Kevin",
            "email" : "kevin@viken.no",
            "tlf": "40515763",
            "klasse": "lærer"
    });

        json.elever.map((student, index) => {
        if (profile == student.navn) {
            console.log(student);
        }
    })
    return (
        <>
            <div className="profile">
                <div className="profilecard">
                    <h1> {profile} </h1>
                    <img src={profileIMG}></img>
                        <p>Klasse: {profile.klasse}</p>
                        <p>E-mail: {profile.email}</p>
                        <p>Tlf.: {profile.tlf}</p>
                    <button onClick={() => navigate("/")}>Til hovedmeny</button>
                </div>
            </div>
        </>
    )
}
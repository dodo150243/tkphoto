import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Container, Row, Card, Col, CardImg, CardGroup } from "reactstrap";
import { IoLocationSharp,IoEarth} from 'react-icons/io5';



// import { Table, Container, Row, Button } from "reactstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


function ProfileForm({ username }) {
    const [search, setPhoto] = useState("");
    const [clientId, setClientId] = useState("z4MEN_-nG2OKrQiNRsHy39vww04sJGKcqXUX0COKcW8");
    const [result, setResult] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const searchPhotos = (event) => {
        axios.get("https://api.unsplash.com/search/photos?page=1&query=" +
            search + "&client_id=" + clientId).then((response) => {

                setResult(response.data.results);
                console.log(response);
                setSubmitted(true);

            });
    };
    useEffect(() => {
        searchPhotos();
    }, []);

    const newProduct = () => {
        axios.get("https://api.unsplash.com/search/photos?page=1&query=" +
            search + "&client_id=" + clientId).then((response) => {

                setResult(response.data.results);
                console.log(response);
            });
        setSubmitted(false);
    };


    const [profiles, setProfile] = useState([]);
    //   const [submitted, setSubmitted] = useState(false);
    useEffect(() => {
        // https://api.unsplash.com/search/users/?query=d&client_id=z4MEN_-nG2OKrQiNRsHy39vww04sJGKcqXUX0COKcW8
        axios.get(`https://api.unsplash.com/search/users?page=1&query=${username}&client_id=${clientId}`)
            .then((response) => {
                setProfile(response.data.results);
                console.log(response);
                setSubmitted(true);
            });
    }, [username]);

    return (
        <>
      

      {submitted ? (<>
        {profiles.map((d) => {
                return (

                    <Container>
                        <div className='Profile'>
                            <div className='Profile-img'>
                                <img src={d.profile_image.large} />
                            </div>
                            <div className='Profile-detail'>
                                <h2>{d.username} </h2>
                                <p>{d.bio}</p>
                                <div id='location-url'>
                                    <IoLocationSharp id='locat' />
                                    <p>{d.location}</p>
                                </div>
                                <div id='location-url'>
                                    <IoEarth id='locat' />
                                    <p><a rel="nofollow" href={d.portfolio_url}>{d.portfolio_url}</a></p>
                                </div>
                            </div>
                        </div>
                    </Container>

                );

            })}
      </>):(
          <>

  
            
           </>
      )}
        </>

    );



}

export default ProfileForm;

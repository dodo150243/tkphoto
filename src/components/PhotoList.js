import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Container, Row, Card, Col, CardImg, CardGroup } from "reactstrap";

function PhotoList({ username }) {

    const [photos, setPhoto] = useState([]);
    useEffect(() => {
        axios.get(`https://api.unsplash.com/users/${username}/photos?per_page=30&client_id=${process.env.REACT_APP_CLIENT_ID}`)
            .then((response) => {
                setPhoto(response.data);
                console.log(response);
            });
    }, [username]);

    return (
        <>
            <div className='container'>
                {photos.map((p) => {
                    return (
                        <>
                            <div id="card-photo-list">
                                <Card>
                                    <CardImg key={p.id} src={p.urls.small} />
                                </Card>
                            </div>
                        </>
                    );

                })}
            </div>

        </>

    );
}

export default PhotoList

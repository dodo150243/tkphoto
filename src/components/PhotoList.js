import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Container, Row, Card, Col, CardImg, CardGroup } from "reactstrap";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
function PhotoList({ username }) {

    const [photos, setPhoto] = useState([]);
    const [clientId, setClientId] = useState("z4MEN_-nG2OKrQiNRsHy39vww04sJGKcqXUX0COKcW8");
    //   const [submitted, setSubmitted] = useState(false);
    useEffect(() => {
        // https://api.unsplash.com/users/ev25/photos?client_id=z4MEN_-nG2OKrQiNRsHy39vww04sJGKcqXUX0COKcW8
        axios.get(`https://api.unsplash.com/users/${username}/photos?per_page=30&client_id=${clientId}`)
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

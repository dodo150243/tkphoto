import React, { useState, useEffect } from 'react';
import { Container,  Row} from "reactstrap";
import axios from 'axios';

function Search() {
    // const [products, setProduct] = useState([]);
    // const updateProduct = () => {
    //     axios.get("http://localhost:5000/api/products").then((response) => {
    //         setProduct(response.data);
    //         console.log("Updateing Product list ......");
    //     });
    // };
    // useEffect(() => {
    //     updateProduct();
    // }, []);

    const [search, setPhoto] = useState("");
    const [clientId, setClientId] = useState("z4MEN_-nG2OKrQiNRsHy39vww04sJGKcqXUX0COKcW8");
    const [result, setResult] = useState([]);

    function handleChange(event) {
        setPhoto(event.target.value);
    }
  //  function handleSubmit(event) {
        // console.log(search);
        // const url = "https://api.unsplash.com/search/photos?page=1&query=" +
        // search + "&client_id=" + clientId;

        // axios.get(url).then(response => {
        //     console.log(response);
        //     setResult(response.data.results);
        // })
        
        const searchPhotos =  (event) => {
        axios.get("https://api.unsplash.com/search/photos?page=1&query="+
        search + "&client_id=" + clientId).then((response) => {
            setResult(response.data.results);
            console.log(response);
            });
    };

    useEffect(() => {
        searchPhotos();
    }, []);
        
   // }
    return (
        <div className='cont-search'>
            
        </div>
    )
}
export default Search
import React, { useEffect, useState } from "react";
import Axios from "axios";
import {random, commerce} from "faker";
import {Container, Row, Col} from "reactstrap";
import CardItem from "./CardItem";

const apiKey = "563492ad6f917000010000017d0e4de0e4494ade98bf50a776f1e7ff";
const pexelUrl = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const sampleUrl = "https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json";

const BuyPage = ({addInCart}) => {

    const [products, setProducts] = useState([]);

    const fetchPhotos = async () => {
        const {data} = await Axios.get(pexelUrl, {
            headers: {
                Authorization: apiKey
            }
        });
        
        const {photos} = data;
        
        const allProduct = photos.map(eachPhoto => ({
            smallImage: eachPhoto.src.medium,
            tinyImage: eachPhoto.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: random.uuid()
        }));
        setProducts(allProduct);
    }

    // const fetchPhotos = async () => {
    //     const {data} = await Axios.get(sampleUrl);

    //     const {photos} = data;
        
    //     const allProduct = photos.map(eachPhoto => ({
    //         smallImage: eachPhoto.src.medium,
    //         tinyImage: eachPhoto.src.tiny,
    //         productName: random.word(),
    //         productPrice: commerce.price(),
    //         id: random.uuid()
    //     }));
    //     console.log(allProduct);
    //     setProducts(allProduct);
    // }

    useEffect(() => {
        fetchPhotos();
    }, []);

    return(
        <Container fluid>
            <h1 className="text-center text-success">
                Products
            </h1>
            <Row>
                {products.map(product => (
                    <Col md={4} key={product.id}>
                        <CardItem product={product} addInCart={addInCart}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default BuyPage;

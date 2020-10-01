import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from "reactstrap";

const CardItem = ({product, addInCart}) => {

    return (
        <Card className="mt-2 mb-1">
            <CardImg top height="250" width="100%" src={product.smallImage} />
            <CardBody className="text-center">
                <CardTitle>{product.productName}</CardTitle>
                <CardText className="secondary">Rs. {product.productPrice}</CardText>
                <Button className="btn btn-primary" onClick={()=>addInCart(product)}>Add to cart</Button>
            </CardBody>
        </Card>
    )
}

export default CardItem;
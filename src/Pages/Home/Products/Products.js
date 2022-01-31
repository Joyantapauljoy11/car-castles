
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://frozen-bayou-91058.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="py-5">
            <Container>
                <div className="w-100 mx-auto">
                    <h3 className="text-center">Everything in life is somewhere else, and you get there in a car.</h3>
                    <p className="text-center">It's a never ending battle of making your cars better and also trying to be better yourself. ...</p>
                </div>
                {
                    products.length ? <Row xs={1} md={3} className="g-4">
                        {
                            products.slice(0, 6).map(product => <Col key={product?._id}>
                                <Card>
                                    <Card.Img style={{ height: '250px' }} variant="top" src={product?.img} />
                                    <div className="p-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <Card.Title>{product?.productName}</Card.Title>
                                        </div>
                                        <p className="p-0 m-0">{product?.des}</p>
                                        <div>
                                            <h2>$ 50</h2>
                                            <Link to={`/purchase/${product._id}`}><Button >Order now</Button></Link>
                                        </div>
                                    </div>
                                </Card>
                            </Col>)
                        }
                    </Row> : <h2>Loading...</h2>
                }
            </Container>
        </div>
    );
};

export default Products;
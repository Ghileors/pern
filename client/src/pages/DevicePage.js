import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import rate from '../assets/rate.png';

const DevicePage = () => {
  const device = {
    id: 3,
    name: 'Xiaomi Mi 10T 8/128GB',
    price: 13699,
    rating: 0,
    img:
      'https://avic.ua/assets/cache/products/234257/smartfon-xiaomi-mi-10t-pro-5g-8-128gb-lunar-silver-prod_md.jpg',
  };

  const description = [
    { id: 1, title: 'RAM', description: '5 gb' },
    { id: 2, title: 'Camera', description: '12 mpx' },
    { id: 3, title: 'Processor', description: 'SnapDragoh 765' },
    { id: 4, title: 'Cores', description: '8' },
    { id: 5, title: 'Battery', description: '4000 Amp' },
  ];

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: `url(${rate}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column justify-content-around align-items-center"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h3>From: {device.price} UAH</h3>
            <Button variant={'outline-dark'}>Add to Shopping Cart</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Specifications:</h1>
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              bacgroundColor: index % 2 === 0 ? 'lightgray' : 'transparent',
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;

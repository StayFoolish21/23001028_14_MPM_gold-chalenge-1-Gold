import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";
import CarImage from "../../assets/img_car.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={6} sm={12}>
            <div className="hero-left">
              <h1>Sewa & Rental Mobil Terbaik di kawasan(lokasimu)</h1>
              <p>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhan untuk sewa mobil selama 24 jam .
              </p>
              <Link to="/cars">
                <button>Mulai Sewa Mobil</button>
              </Link>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="hero-right">
              <img src={CarImage} alt="img-car" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;

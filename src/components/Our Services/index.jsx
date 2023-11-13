import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../assets/img_service.png";
import "./style.css";

const OurService = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={6} sm={12}>
            <div className="content-left">
              <img src={img1} alt="img-service" />
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="content-right">
              <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
              <p className="body-content">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminann harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata,bisnis,
                wedding,meeting,dll.
              </p>
              <div className="services-list">
                <p className="pe-2">
                  <i className="bi bi-check-lg me-3"></i>Sewa Mobil Dengan Supir
                  di Bali 12 Jam
                </p>
                <p className=" pe-2">
                  <i className="bi bi-check-lg me-3"></i>Sewa Mobil Lepas Kunci
                  di Bali 24 Jam
                </p>
                <p className="pe-2">
                  <i className="bi bi-check-lg me-3"></i>Sewa Mobil Jangka
                  Panjang Bulanan
                </p>
                <p className="pe-2">
                  <i className="bi bi-check-lg me-3"></i>Gratis Antar - Jemput
                  Mobil di Bandara
                </p>
                <p className="pe-2">
                  <i className="bi bi-check-lg me-3"></i>Layanan Airport
                  Transfer / Drop In Out
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurService;

import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import CardWhyUs from "./card";
import img1 from "./../../assets/card1.png";
import img2 from "./../../assets/card2.png";
import img3 from "./../../assets/card3.png";
import img4 from "./../../assets/card4.png";

const WhyUs = () => {
  const data = [
    {
      title: "Mobil Lengkap",
      description:
        "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
      icon: img1,
    },

    {
      title: "Harga Murah",
      description:
        "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
      icon: img2,
    },
    {
      title: "Layanan 24 Jam",
      description:
        "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
      icon: img3,
    },
    {
      title: "Sopir Profesional",
      description:
        "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
      icon: img4,
    },
  ];

  return (
    <section id="whyus" className="why-section">
      <div className="whyus-title">
        <h1>Why Us ?</h1>
        <p>Mengapa harus pilih Binar Car Rental</p>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="whyus-card-container">
              {data.map((item, index) => {
                return (
                  <CardWhyUs
                    key={index}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                  />
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyUs;

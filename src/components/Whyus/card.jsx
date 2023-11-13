import React from "react";
import { Card, Col } from "react-bootstrap";
import "./style.css";

const CardWhyUs = (props) => {
  const { title, description, icon } = props;

  return (
    <Col sm={12} md={6} lg={3} className="p-2">
      <Card className="whyus-card-content">
        <img src={icon} />
        <h1 className="pb-2">{title}</h1>
        <p>{description}</p>
      </Card>
    </Col>
  );
};

export default CardWhyUs;

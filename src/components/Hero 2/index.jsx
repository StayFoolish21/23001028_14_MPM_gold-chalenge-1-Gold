import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardHero2 = () => {
  return (
    <div>
      <section className="rent-section">
        <div className="rent-container">
          <h1>Sewa Mobil di Jawa Timur Sekarang</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio
            blanditiis voluptatem libero sit quam nisi deserunt quas,
            exercitationem, rem porro quia atque aspernatur cum, ipsum nemo
            nihil vel sed.
          </p>
          <Link to="/cars">
            <Button variant="success">Mulai Sewa Mobil</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CardHero2;

import React from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";

const CariMobil = () => {
  const BASE_URL = "https://api-car-rental.binaracademy.org/customer/car";

  const [savedCars, setSavedCars] = useState([]);
  const [mobil, setMobil] = useState([]);
  const [loading, setLoading] = useState(true);
  const [namaMobil, setNamaMobil] = useState("");
  const [kategoriMobil, setKategoriMobil] = useState("");
  const [hargaMobil, setHargaMobil] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [catchVisible, setCatchVisible] = useState(false);

  useEffect(() => {
    setCarsList(BASE_URL);
  }, []);

  function setCarsList(URL) {
    axios
      .get(URL)
      .then((response) => {
        const filterNull = response.data.filter(
          (items) =>
            items.name !== null &&
            items.category !== null &&
            items.price !== null
        );
        setMobil(filterNull);
        setSavedCars(filterNull);
        setLoading(false);
      })
      .catch((error) => {
        setCatchVisible(true);
        setLoading(false);
      });
  }

  const handleNotData = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 2000);
  };

  function handlePayment(id) {
    navigate(`/cars/${id}`);
  }

  const handleCariMobil = (e) => {
    e.preventDefault();
    if (savedCars) {
      const filterData = savedCars.filter(
        (items) =>
          items.name.toLowerCase().includes(namaMobil.toLowerCase()) &&
          items.category.includes(kategoriMobil)
      );

      if (filterData.length > 0) {
        setMobil(filterData);
      } else {
        handleNotData();
      }
    }
    setNamaMobil("");
    setKategoriMobil("");
    setHargaMobil("");
  };

  return (
    <div>
      <Hero />
      <Form className="cari-content">
        <Form.Group controlId="formNama" className="mt-3">
          <Form.Label>Nama Mobil</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ketik Nama/Tipe Mobil"
            autoComplete="off"
            onChange={(e) => setNamaMobil(e.target.value)}
            value={namaMobil}
          />
        </Form.Group>
        <Form.Group controlId="formKategori" className="mt-3">
          <Form.Label>Kategori</Form.Label>
          <Form.Select onChange={(e) => setKategoriMobil(e.target.value)}>
            <option key="blankChoice" hidden selected={!kategoriMobil && true}>
              Masukan Kapasitas Mobil
            </option>
            <option value="2 - 4 orang">2 - 4 Orang</option>
            <option value="4 - 6 orang">4 - 6 Orang</option>
            <option value="6 - 8 orang">6 - 8 Orang</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formHarga" className="mt-3">
          <Form.Label>Harga</Form.Label>
          <Form.Select onChange={(e) => setHargaMobil(e.target.value)}>
            <option key="blankChoice" hidden selected={!hargaMobil && true}>
              Masukan Harga Sewa per Hari
            </option>
            <option value="400000"> &#60; Rp.400.000 </option>
            <option value="500000">Rp.400.000 - Rp. 600.000</option>
            <option value="600000"> &#62; Rp. 600.000</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formSewa" className="mt-3">
          <Form.Label>Status</Form.Label>
          <Form.Select disabled>
            <option key="blankChoice" hidden>
              Status Mobil
            </option>
            <option value="sedia">Sedia</option>
            <option value="sewa">Disewa</option>
          </Form.Select>
        </Form.Group>

        <Button
          variant="success"
          type="submit"
          className="mt-4"
          onClick={handleCariMobil}
          disabled={!namaMobil && !kategoriMobil && !hargaMobil}
        >
          Cari Mobil
        </Button>
      </Form>

      <div className="mt-5 hasil-card">
        <div className="d-flex flex-wrap align-items-stretch justify-content-around">
          {mobil.map((result) => {
            return (
              <Card key={result.id} style={{ width: "18rem", margin: "1rem" }}>
                <Card.Img variant="top" src={result.image} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{result.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="d-grid mt-auto">
                    <Button
                      variant="success"
                      onClick={() => handlePayment(result.id)}
                    >
                      Pilih Mobil
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CariMobil;

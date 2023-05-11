import React from "react";

import pressure from "../assets/pressure.svg";
import wind_speed from "../assets/wind_speed.svg";
import humidity from "../assets/humidity.svg";
import sunrise from "../assets/sunrise.svg";
import sunset from "../assets/sunset.svg";
import { Card, Col, Row, Container } from "react-bootstrap";
import Font from 'react-font'
function Today({ today }) {
  return (
    <>
       <Font family='Ubuntu'>
      <Row className="border bg-light p-2">
        <Col className="fs-2 fw-bolder bg-info  text-light">{today.temp}°C</Col>
        <Col className=" bg-primary text-light">
          {today.main}, {today.desc}
        </Col>
        <Col className="fs-4 fw-bolder">
          {" "}
          <img src={sunrise} alt="Logo" className="img-fluid col-6" />{" "}
          {today.sunrise} A.M{" "}
        </Col>
        <Col className="fs-4 fw-bolder">
          <img src={sunset} alt="Logo" className="img-fluid col-6" />{" "}
          {today.sunset} P.M
        </Col>

       
      </Row>
      <Row className="mt-1 border p-5 bg-light ">
      <Col>
          <img src={pressure} alt="Logo" className="img-fluid col-4 " />
          <span className="fs-2 fw-bolder">{today.pressure} hPa</span>
        </Col>
        <Col>  
          <img src={humidity} alt="Logo" className="img-fluid col-4 " xs={12} />
          <span className="fs-2 fw-bolder">{today.humidity} %</span>
        </Col>
        <Col>
          <img src={wind_speed} alt="Logo" className="img-fluid col-4" />
          <span className="fs-2 fw-bolder">{today.wind} m/s N</span>
        </Col>
      </Row>
      </Font>
    </>
  );
}

export default Today;

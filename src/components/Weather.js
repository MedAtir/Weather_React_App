import React from "react";

import LocalInfo from "./LocalInfo";
import Today from "./Today";
import Weekly from "./Weekly";

import { Card, Col, Row, Container } from "react-bootstrap";

function Weather({ today, weekly }) {
  return (   
      <Container className="mt-5 mb-5 bg-opacity-50">
        <Row>
          <Col xs={{ order: "last" }}>
            <Card className="bg-opacity-50">
              <LocalInfo today={today} />              
            </Card>
          </Col>
          <Col xs>
            {" "}
            <Today today={today} />
          </Col>         
        </Row>
        <Row className="bg-light bg-opacity-50">
          <Col>
          <Weekly weekData={weekly}   className="Overflox"/>
          </Col>      
        </Row>
      </Container>     
    
  );
}
export default Weather;

import React, { FC } from "react";
import { Col, Row } from "antd";
import "antd/dist/reset.css";
import "./insertPets.css";
import { PetsForm } from "../../components/PetsForm";
import { PetsImg } from "../../components/PetsImg";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";

export const InsertPets: FC = () => (
  <Container>
    <Card>
      <Row className="card">
        <Col sm={24} md={12} lg={12} xl={12} className="md">
          <PetsImg />
        </Col>
        <Col sm={24} md={12} lg={12} xl={12} className="ud">
          <PetsForm />
        </Col>
      </Row>
    </Card>
  </Container>
);

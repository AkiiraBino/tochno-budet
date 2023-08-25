import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import styles from './Label.module.css'

export default function Label() {
  return (
    <Container>
      <Row>
        <Col className={styles.main}>
              <a href="#" className={styles.font_style}>
                <h1>By Tochno Budet</h1>
              </a>
        </Col>
      </Row>
    </Container>
  )
}
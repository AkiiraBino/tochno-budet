import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import styles from './Navigate.module.css'


export default function Navigate() {
  return (
      <Container>
        <Row>
          <Col md={4} sm={4} className={styles.main}>
            <a href='#' className={styles.font_style}>Music</a>
          </Col>
          <Col md={4} sm={4} className={styles.main}>
            <a href='#' className={styles.font_style}>Photo</a>
          </Col>
          <Col md={4} sm={4} className={styles.main}>
            <a href='#' className={styles.font_style}>Video</a>
          </Col>
        </Row>
      </Container>
  )
}
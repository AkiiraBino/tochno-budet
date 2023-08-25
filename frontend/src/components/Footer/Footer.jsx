import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import styles from './Footer.module.css'

export default function Main() {
  return (
    <Container className={styles.main}>
      <Row md={12} sm="auto" xs={12}>
        <Col xs={{offset: 1}}>
            <a href="https://vk.com/exxxsy">
              <img src='media/icons/vk.png' className={styles.icon_style}/>
            </a>
        </Col>
        <Col>
            <a href="https://web.telegram.org/k/#@artoyma">
              <img src='media/icons/tg.png' className={styles.icon_style}/>
            </a>
        </Col>
        <Col>
            <a href="https://vk.com/exxxsy">
              <img src='media/icons/insta.png' className={styles.icon_style}/>
            </a>
        </Col>
      </Row>
    </Container>
  )
}
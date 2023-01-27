import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Zoom from "react-reveal/Zoom"

const Items = ({ itemsData }) => {
    return (
        <Row>
        <Zoom>
            {
                itemsData.length >= 1 ? (itemsData.map((item) => {
                    return (
                        <Col key={item.id} sm="12" className='mb-3'>
                            <Card className="d-flex flex-row" style={{ backgroundColor: "#f8f8f8f8" }}>
                                <Card.Img className="img-item" variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title className='d-flex justify-content-between'>
                                        <div className='item-title'>{item.title}</div>
                                        <div className='item-price'>{item.price}</div>
                                    </Card.Title>
                                    <Card.Text className='py-2'>
                                        <div className='item-description'>
                                            {item.description}
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })) : <h3 className='test-center'> Hiç Menü Yok</h3>
            }
        </Zoom>
        </Row>
    )
}

export default Items

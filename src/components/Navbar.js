import React, { useState } from 'react'
import { Row, Nav,  Container, Form, Navbar } from 'react-bootstrap';


const NavBar = ({filterBySearch }) => {

    const [searchVal, setSearchVal] = useState("")
    const onSearch =(searchVal)=>{
        filterBySearch(searchVal)
        
    }

    return (
        <Row>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container >
                    <Navbar.Brand href="#">
                    <div className='brand-color'>Leo'nun Lokantası</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="text"
                                placeholder="Ara"
                                className="mx-2"
                                onChange={(e)=> setSearchVal(e.target.value)}
                                value={searchVal}
                            />
                            <button onClick={()=> onSearch(searchVal)} className='btn-search'>Ara</button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Row>
    )
}

export default NavBar

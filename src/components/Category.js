import React from 'react'
import {Row, Col } from 'react-bootstrap'
import Jump from "react-reveal/Jump"
import { items } from '../Data'

const Category = ({filterByCategory, allCategory}) => {

    //to filter by category
    const onFilter= (cat) =>{
        filterByCategory(cat)
    }
    return (
        <Row className='my-2 mb-5'>
            <Col key={items.id} sm="12" className="d-flex justify-content-center">
                <Jump>
            {
                allCategory.length >= 1 ? (allCategory.map((cat)=> {
                    return (
                        <div>
                        <button onClick={()=>onFilter(cat)} style={{border:"1px solid #b45b35"}} className='btn mx-2'> {cat} </button>
                    </div>
                    )
                })) : <h4> Hiç Category Yok </h4>
            }
            </Jump>
             
               
            </Col>
        </Row>
    )
}

export default Category

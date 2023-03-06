import React from 'react'
import { Card, Form } from 'react-bootstrap'
import './Filters.css'

export default function Filters() {
    return (
        <div className='filters'>
            <Card className='filterCard' border='info'>
                <Card.Body>
                    <span className='section'>
                        <Form.Label>Sort By Price</Form.Label>
                        <Form.Check label="Assending" type='radio' name='priceGrp' id='inline-1' />
                        <Form.Check label="Descending" type='radio' name='priceGrp' id='inline-2' />
                    </span>
                    <span>
                        <span className='section'>
                            <Form.Label>Filter By Brand</Form.Label>
                            <Form.Check label="Apple" type='checkbox' name='priceGrp' />
                            <Form.Check label="Samsung" type='checkbox' name='priceGrp' />
                            <Form.Check label="Google" type='checkbox' name='priceGrp' />
                            <Form.Check label="Royal_Mirage" type='checkbox' name='priceGrp' />
                        </span>
                    </span>
                </Card.Body>
            </Card>

        </div>
    )
}

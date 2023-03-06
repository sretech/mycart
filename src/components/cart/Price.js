import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { AppContext } from '../../context/AppContext';


export default function Price() {
    const { state } = useContext(AppContext);
    const [total, setTotal ] = useState(0);
    useEffect(() => {
        let totPrice = state.cart.reduce((tot, item) => {
            tot = tot + item.price;
            return tot;
        }, 0)
        setTotal(totPrice);

    }, [state.cart])
    return (
        <div>
            <Card className='priceCard' border='info'>
                <Card.Body>
                    <span>
                        <label>Total Price : ${total}</label>
                    </span>
                    <Button style={{marginTop:'30px'}} varient="primary" > Proceed to checkout</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

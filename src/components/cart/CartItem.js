import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { ACTION_TYPES } from '../../actions/actionsTypes';
import { AppContext } from '../../context/AppContext';
import "./Cart.css"

export default function CartItem({ item }) {
    const {dispatch} = useContext(AppContext)
    return (
        <div>
            <main className='item-container'>
                <span><img style={{ height: '100px', width: '100px' }} src={item.thumbnail} alt={item.name} /></span>
                <span style={{margin:'0 10px 0 10px', fontWeight:'bold'}}>Quantity:{item.qty}</span>
                <span>
                    <Button onClick={()=>{
                        dispatch({type:ACTION_TYPES.ADD_TO_CART, payload:item});
                    }}> + </Button>
                </span>
                <span>
                    <Button style={{marginLeft:'10px', width:'38px'}} onClick={()=>{
                        dispatch({type:ACTION_TYPES.REMOVE_FROM_CART, payload:item});
                    }}> - </Button>
                </span>
            </main>
        </div>
    )
}

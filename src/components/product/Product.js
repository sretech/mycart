import React, { useContext } from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import './Product.css'
import { AppContext } from '../../context/AppContext'
import { ACTION_TYPES } from '../../actions/actionsTypes'
import { FcRating } from 'react-icons/fc'

export default function Product({ product }) {
  const {dispatch } = useContext(AppContext);
  return (
    <div>
      <Card className='productCard' style={{border:"0px"}}>
        <Card.Img style={{ height: "240px", borderRadius:"3%" }}
          variant='top' src={product.thumbnail} alt={product.title}></Card.Img>
        <Card.Body style={{ height: "100px", fontSize: "8px", padding:"3px" }}>
          <Card.Title style={{ fontSize: "15px" }}>
            {product.title}
          </Card.Title>

          <Card.Subtitle style={{ fontSize: "12px" }}>
            <span style={{ fontSize: "14px" }}>${`${product.price} `} 
            
            <Badge bg="warning" style={{ fontSize: "8px", verticalAlign:"middle"}} text="dark">
              {`${product.rating} `}<FcRating></FcRating>
            </Badge></span>{` `}

            <Badge bg="light" style={{fontSize: "8px", verticalAlign:"middle"}} text="dark">
              <span className='discount'>SAVE-{`${product.discountPercentage}% `}</span>
            </Badge>


            <Button text="dark" style={{ fontSize: "8px" }} size="sm" variant="info" onClick={() => {
              dispatch({ type: ACTION_TYPES.ADD_TO_CART, payload: product });
            }}>Add to cart</Button>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  )
}


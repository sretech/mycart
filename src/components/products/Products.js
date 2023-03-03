import React, { useContext } from 'react'
import { Spinner } from 'react-bootstrap';
import { AppContext } from '../../context/AppContext'
import Filters from '../filters/Filters';
import Product from '../product/Product';
import './Products.css'

export default function Products() {
  const { state } = useContext(AppContext);
  return (
    <div className='parentContainer'>
      <div className='filterContainer'>
        <Filters></Filters>
      </div>
      <div className='productContainer'>
        {
          state.isLoading && 
          <div className='spinner-container' style={{verticalAlign:"middle"}}>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
          </div>}
        {
          state.products.map(product => (
            <Product product={product} key={product.id}></Product>
          ))}
      </div>
    </div>
  )
}
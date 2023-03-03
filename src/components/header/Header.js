import React, { useContext } from 'react'
import { Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'
import {SiShopify} from 'react-icons/si'
import {HiShoppingCart} from 'react-icons/hi'
import { AppContext } from '../../context/AppContext'

export default function Header() {
    const {state} = useContext(AppContext);
    return (
        <Navbar className='navHeight' bg="dark" variant='dark'>
            <Container>
                <Navbar.Brand>
                <SiShopify color="white" style={{height:50, width:50}}></SiShopify>
                 <Link to='/'>E-Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl placeholder='Search a product' style={{width:"500px"}} className='m-auto formControll'></FormControl>
                </Navbar.Text>
                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant="success">
                        <HiShoppingCart color="white" style={{height:20, width:20}}></HiShoppingCart>
                           {state.cart?state.cart.length:0}
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{minWidth:320}}>
                        {state.cart ? state.cart.length>0?state.cart.length:"Cart is empty..":"Cart is empty.."}
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}
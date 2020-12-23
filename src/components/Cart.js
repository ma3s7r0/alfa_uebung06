import React from 'react';
import Table from './Table';

function Cart({cart, clickFunction, clickText}) {
    return (
        <>
            <h2>Warenkorb</h2>
            {cart.length !== 0 && <Table data={cart} clickFunction={clickFunction} clickText={clickText}/>}
            {cart.length === 0 && <p>Der Warenkorb ist leer.</p>}          
        </>
    );
}

export default Cart;
import React from 'react';
import Table from './Table';

function Cart({cart, clickFunction, clickText}) {
    return (
        <>

            {cart.length !== 0 && <Table data={cart} clickFunction={clickFunction} clickText={clickText}/>}
            {cart.length === 0 && <p>Der Warenkorb ist leer.</p>}
            <h2>Warenkorb</h2>
            <table>
                <thead>
                    <tr>
                        <th>Titel</th>
                        <th>Preis</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((ele, index) => (
                        <tr>
                            <td>ele.titel</td>
                            <td>ele.preis</td>
                            <td onClick={clickFunction(index)}>{clickText}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            
        </>
    );
}

export default Cart;
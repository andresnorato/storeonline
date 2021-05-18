import React,{useContext} from 'react';
import AppContext from '../context/AppContext';
import {useHistory}  from 'react-router-dom';
import {PayPalButton} from 'react-paypal-button';
import {handleSumTotal} from '../utils/handleTotal';
import '../styles/components/Payment.css';


const Payment = () => {

    const {state, addNewOrder} = useContext (AppContext);
    const {cart, buyer} = state;
    const history  = useHistory();

    const paypalOptions = {
        clientId: 'ASlNhq0IWWpqL5rnlPwAI2SzsbODLzVLXU0xLNdiGvRLcgiWCw8VGvS0ArrlRz3iTpDf5zWTI2aIeC5s',
        intent: 'capture',
        currency: 'USD',

    }
    const buttonStyles = {
        layout:'vertical',
        shape: 'rect',
        color: 'white'
    }

    const handlePaymentSuccess = (data) =>{
        console.log(buyer);
        console.log(data);
        if(data.status === 'COMPLETED'){
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
            addNewOrder(newOrder);
            history.push('/checkout/success');  
        }
    }

    const handlePayemntCancel = (data) => {
        alert('La trasaccion no fue completada');
        history.push('/');

    }

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                    {cart.map((item)=>(
                        <div className="Payment-item" key={item.title}>
                            <div className="Payment-element">
                                <h4>{item.title}</h4>
                                <span>${item.price}</span>
                            </div>
                        </div>    
                    ))}
                    <h3>Total:{handleSumTotal(cart)} </h3>
                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal(cart)}
                        onPaymentStart={()=> console.log('Start Payment')}
                        onPaymentSuccess={data => handlePaymentSuccess(data) }
                        onPaymentError={err => console.log(err)}
                        onPaymentCancel={data => handlePayemntCancel(data)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Payment;
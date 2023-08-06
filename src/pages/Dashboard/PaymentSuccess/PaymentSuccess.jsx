import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const {tranId} = useParams()
    return (
        <div>
            <h2 className='text-2xl'>Payment Success {tranId}</h2>
        </div>
    );
};

export default PaymentSuccess;
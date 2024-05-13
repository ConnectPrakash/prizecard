import React from 'react';
import PriceCard from './PrizeCard';
import './App.css';
// Assuming PriceCard component is in a separate file

const App = () => {
    const plans = [
        {
            plan: <h2>Free</h2>,
            price: '0/Month',
            features: ['single user', '50 GB storage', 'Unlimited Public Projects', 'community Access','Unlimited Private Projects'],
        },
        {
            plan: <h3>Plus</h3>,
            price: '9/month',
            features: ['5 users', '5o GB storage', 'Unlimited Public Projects','Community Access','Unlimited Private Projects'],
        },
        {
            plan: <h2>Pro</h2>,

            price: '49/Month',
            features: ['Unlimited User', '5o GB storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects'],
        },
    ];

    return (
        <div className="app">
           {/* {plans.map((plan, index) => (
                <PriceCard key={index} plan={plan.plan} price={plan.price} features={plan.features} />
            ))}  */}
            <div className='box 1'>
                <PriceCard plan={plans[0].plan} price={plans[0].price} features={plans[0].features} />
            </div>
            <div className='box 2'>
                <PriceCard plan={plans[1].plan} price={plans[1].price} features={plans[1].features} />
            </div>
            <div className='box 3'>
                <PriceCard plan={plans[2].plan} price={plans[2].price} features={plans[2].features} />
            </div>
            
               
              
            
        </div>
    );
};

export default App;
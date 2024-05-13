import React from 'react';

import PropTypes from 'prop-types';

const PriceCard = ({ plan, price, features}) => {
    const Handler = () => {
        {
            alert("Subscripe button Clicked")
        }
    }
   
    return (
        <div className="price-card">
        

            <h5>{plan}</h5>
            
            
            <div className="price">${price}</div>
            <ul>
                {features.map((feature, index) => (
                    <li key={index} className='tick'><span className="material-symbols-outlined">
                    done_all
                    </span>{feature}</li>
                ))}
            </ul>
            <button className="subscribe-button" onClick={Handler}>Button</button>
        </div>
    );
};

PriceCard.propTypes = {
    plan: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PriceCard;
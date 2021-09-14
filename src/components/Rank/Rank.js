import React from 'react';
import 'tachyons';
import './Rank.css';

const Rank = () => {
    return (
        <div className="tc">
            <div className='white f3'>
                {'Andrei, your current rank is ...'}
            </div>
            <div className='white f1'>
                {'#5'}
            </div>
        </div>
    )
}

export default Rank;
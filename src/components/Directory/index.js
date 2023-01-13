import React from 'react';
import Homi from './../../assets/Homineces.jpeg'
import './styles.scss';

const Directory = props => {
    return (
        <div className="Directory">
            <div className="wrap">
                <div className="item" style={{backgroundImage: `url(${Homi})`}}>
                    <a href="#">Shop Now</a>
                </div>
            </div>
        </div>
    );
};

export default Directory;
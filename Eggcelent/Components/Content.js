import React from 'react';
import ImageOne from '../images/egg1.jpeg';
import ImageTwo from '../images/Egg2.jpg';
import { Link } from 'react-router-dom';


const Content = () => {
    return(
        <>
        <div className='menu-card'>
            <img src={ImageOne} alt='egg' className='h-full rounded'mb-20 shadow />
            <div className='center-content'>
            <h2 className="text-2xl mb-2">Egg Muffins</h2>
            <p className='mb-2'>Crispy, delisious, and nutritious</p>
            <span>$16</span>
        </div>
        </div>
        <div className='menu-card'>
            <img src={ImageTwo} alt='egg' className='h-full rounded'mb-20 shadow />
            <div className='center-content'>
            <h2 className="text-2xl mb-2">Egg Bonda</h2>
            <p className='mb-2'>Crispy, spicy, and Tasty</p>
            <span>$12</span>
        </div>
        </div>
       </> 
    )
}

export default Content;

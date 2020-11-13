import React from 'react';
import BeerCard from './BeerCard';

export default function BeerList(props) {
    const { listofBeers } = props;

    return (
        <div className='div-beercard'>
            {
                listofBeers.map(x  => {
                    return <BeerCard key={x.id} details={x} />
                })
            }
        </div>
    )
}
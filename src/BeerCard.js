import React from 'react';
// import { useParams } from 'react-router-dom';



export default function BeerCard({ details }) {
    // const { details } = props;

    // const { itemId } = useParams();

    // const findBeer = details.find(x => {
    //     return x.id = itemId
    // })

    if (!details) {
        return ('Finding, please wait')
    }

    return(
        <div className='div-beer'>
            <h1>{details.name} </h1>
            <p>Street: {details.street} <br/></p>
            <p>City: {details.city} <br/></p>
            <p>State: {details.state} <br/></p>
            <p>Zip code: {details.postal_code} <br/></p>
            <p>Phone: {details.phone} <br/></p>
            <p>Url: {details.website_url}<br/></p>
        </div>

    )
}
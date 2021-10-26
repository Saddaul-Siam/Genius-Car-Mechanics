import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const [services, setServices] = useState({});
    const { name, img, description } = services;
    useEffect(() => {
        fetch(`https://shrouded-dawn-74183.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const { serviceId } = useParams();
    return (
        <div>
            <img src={img} alt="" />
            <h1>Details of :{name}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Booking;
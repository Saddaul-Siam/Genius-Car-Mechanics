import React, { useEffect, useState } from 'react';

const ManegeServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://shrouded-dawn-74183.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);

  const handleDelete = id => {
    const url = `https://shrouded-dawn-74183.herokuapp.com/services/${id}`
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setServices(data)
      })
  }
  return (
    <div>
      <h2>This is manege service</h2>
      {
        services.map(service => <div
          key={service._id}>
          <h3>{service.name}</h3>
          <button onClick={() => handleDelete(service._id)}>Delete</button>
        </div>)
      }
    </div>
  );
};

export default ManegeServices;
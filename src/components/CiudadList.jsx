import React from 'react';

export const CiudadList = ({ciudades, onDeleteCiudad}) => (
    <>
      {ciudades.map((elem, idx) => (
          <li key={idx}>
          <h3>Id: {elem.id} - {elem.name}</h3>
          <button className="btn btn-danger" onClick={() => onDeleteCiudad(elem.id)}>Eliminar</button>
          </li> 
      ))}
    </>
  );

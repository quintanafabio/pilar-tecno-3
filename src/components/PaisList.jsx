import React from 'react';

export const PaisList = ({paises, onDeletePais}) => (
    <>
      {paises.map((elem, idx) => (
          <li key={idx}>
          <h3>Id: {elem.id} - {elem.name}</h3>
          <button className="btn btn-danger" onClick={() => onDeletePais(elem.id)}>Eliminar</button>
          </li> 
      ))}
    </>
  );


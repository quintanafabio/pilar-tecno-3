import React from 'react';

export const PuestoList = ({puestos, onDeletePuesto}) => (
    <>
      {puestos.map((elem, idx) => (
          <li key={idx}>
          <h3>{elem.position} <h5>({elem.description})</h5></h3>
          <button className="btn btn-danger" onClick={() => onDeletePuesto(elem.id)}>Eliminar</button>
          </li> 
      ))}
    </>
  );

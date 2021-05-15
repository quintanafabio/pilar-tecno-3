import React from 'react';

export const PuestoList = ({puestos, onDeletePuesto}) => (
    <>
      {puestos.map((elem, idx) => (
          <li key={idx}>
          <h3>{elem.Puesto}</h3>
          <button className="btn btn-danger" onClick={() => onDeletePuesto(idx)}>Eliminar</button>
          </li> 
      ))}
    </>
  );

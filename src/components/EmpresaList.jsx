import React from 'react';

export const EmpresaList = ({empresas, onDeleteEmpresa}) => (
    <>
      {empresas.map((elem, idx) => (
          <li key={idx}>
          <h3>Id: {elem.id} - {elem.name}</h3>
          <button className="btn btn-danger" onClick={() => onDeleteEmpresa(elem.id)}>Eliminar</button>
          </li> 
      ))}
    </>
  );

import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

export const MainList = (props,{paises, ciudades, empresas, puestos, onDeletePuesto}) => {

	const {countries, places, organizations, jobs} = props.todo;

return(
	
    
	<>
		<table className="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Puesto</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Empresa</th>
					<th scope="col">Ciudad</th>
					<th scope="col">Pais</th>
				</tr>
			</thead>

            <tbody className='tabla__cuerpo' >
                {jobs ? jobs.map(({position, id, description, organizationId}, indice) => {      
					
					let empresa = organizations.length > 0 ? organizations.find(e => Number(e.id) === Number(organizationId)) : null;
            		let ciudad = empresa.placeId ? places.find(e => Number(e.id) === Number(empresa.placeId)) : null;
            		let pais = ciudad.countrieId ? countries.find(e => Number(e.id) === Number(ciudad.countrieId)) : null;

                    return(
                        <tr key={indice}>
                            <td>{id}</td>
                            <td>{position}</td>
                            <td>{description}</td>
                            <td>{empresa.name}</td>
                            <td>{ciudad.name}</td>
                            <td>{pais.name}</td>
                        </tr>
                    )}) : null}
            </tbody>

			{/* <tbody>
				{puestos.map((puestos, index) => (
					<tr key={index+1}>
						<th scope="row">{index}</th>
						<td>{puestos.position}</td>
						<td>{puestos.description}</td>
                        <td>{arregloId(puestos.organizationId, empresas).name}</td>
                        <td>{arregloId(empresas.placeId, ciudades).name}</td>
						<td>
							<button type="button" className="btn btn-danger" onClick={() => onDelete(index)}> Eliminar</button>
						</td>
					</tr>
				))}
			</tbody> */}
		</table>
	</>
)};
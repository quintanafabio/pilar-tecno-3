import React from "react";

export const MainList = ({puestos, onDelete}) => {
	
// const {jobs, organizations, places, countries} = puestos

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
					<th scope="col">Acciones</th>
				</tr>
			</thead>
			<tbody>

				{/* {jobs ? jobs.map(({position, description, id, organizationId}, index) => (
					<tr key={index}>
						<th scope="row">{index+1}</th>
						<td>{position}</td>
						<td>{description}</td>
						<td>{organizations[].name}</td>
						<td>{places.name}</td>
                        <td>{countries.name}</td>
						<td>
							<button type="button" className="btn btn-danger" onClick={() => onDelete(index)}> Eliminar</button>
						</td>
					</tr>
				)): null				
			} */}
			</tbody>
		</table>
	</>
)
};

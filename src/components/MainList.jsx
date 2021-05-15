import React from "react";

export const MainList = ({puestos, onDelete}) => (
	<>
		<table className="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Puesto</th>
                    <th scope="col">Empresa</th>
					<th scope="col">Ciudad</th>
					<th scope="col">Pais</th>
					<th scope="col">Acciones</th>
				</tr>
			</thead>
			<tbody>
				{puestos.map((puestos, index) => (
					<tr key={index}>
						<th scope="row">{index}</th>
						<td>{puestos.Puesto}</td>
						<td>{puestos.Empresa}</td>
						<td>{puestos.Ciudad}</td>
                        <td>{puestos.Pais}</td>
						<td>
							<button type="button" className="btn btn-danger" onClick={() => onDelete(index)}> Eliminar</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</>
);

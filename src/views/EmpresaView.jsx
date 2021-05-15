import React from 'react';
import {EmpresaList} from '../components/EmpresaList';

export class EmpresaView extends React.Component {
  constructor() {
    super();
    this.state = {
      empresas: [],
      newEmpresa: "",
      ciudades: [],
      ciudad: []
    };
  }
      
  componentDidMount() {
    this.setState({
        ciudades: localStorage.getItem('ciudades') ? JSON.parse(localStorage.getItem('ciudades')) : [],
        empresas: localStorage.getItem('empresas') ? JSON.parse(localStorage.getItem('empresas')) : [],
    });
}

  componentDidUpdate(prevProps, prevState){
    if(prevState.empresas !== this.state.empresas){
        localStorage.setItem("empresas", JSON.stringify(this.state.empresas))
    }
  }

  addNewEmpresa = (newEmpresa) => {
    this.setState({
        empresas: [...this.state.empresas, {'Empresa': this.state.newEmpresa, 'Ciudad': this.state.ciudad.Ciudad, 'Pais': this.state.ciudad.Pais}],
        newEmpresa: '',
        ciudad:''
    });
}

  deleteEmpresa = (id) => {
    this.setState({
      empresas: this.state.empresas.filter((_, idx) => idx !== id)
    });
  }

  handleNewEmpresa = (e) => {
    this.setState({
        newEmpresa: e.target.value,
    });
  }

	handleSelect = (e) => {
		e.preventDefault();
		this.setState({
			  ciudad: JSON.parse(e.target.value),
		});
	};

  handleNewEmpresaSubmit = (e) => {
    e.preventDefault();
    if( this.state.newEmpresa.trim() === '')
    {
        return false;
    }
    this.addNewEmpresa(e, this.state.newEmpresa)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleNewEmpresaSubmit}>
          <label
						htmlFor="exampleFormControlInput1"
						className="form-label"
					>
						Empresa
					</label>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput1"
						name="name"
						placeholder="Ingrese una Empresa"
						onChange={(e) => this.handleNewEmpresa(e)}
            required
						value={this.state.newEmpresa}
					/>

          <label>Ciudad:</label>
          <select id="inputGroupSelect01" onChange={(e) => this.handleSelect(e)} value={JSON.stringify(this.state.ciudad)}>
						<option value={JSON.stringify({})}>Elegir Ciudad</option>
                        { this.state.ciudades.map((ciudad, index) => (
                            <option key={index+1} value={JSON.stringify(ciudad)}>{ciudad.Ciudad}</option>
                        ))}
					</select>

          <button type="submit" className="btn btn-primary">Agregar</button>
        </form>
        <ul>
          <EmpresaList empresas={this.state.empresas} onDeleteEmpresa= {this.deleteEmpresa}></EmpresaList>
        </ul>
      </div>
    );
  }
}
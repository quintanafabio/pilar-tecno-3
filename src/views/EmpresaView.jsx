import React from 'react';
import {EmpresaList} from '../components/EmpresaList';
import {getEmpresa, getCiudad, postEmpresa, deleteEmpresa} from '../clients/todoClient';

export class EmpresaView extends React.Component {
  constructor() {
    super();
    this.state = {
      empresas: [],
      newEmpresa: "",
      ciudades: [],
      ciudadId: []
    };
  }
      
  componentDidMount() {
  
    getEmpresa().then(res => {
        this.setState({empresas: res})
    })   
    
    getCiudad().then(res => {
          this.setState({ciudades: res})
    })

    // this.setState({
    //     ciudades: localStorage.getItem('ciudades') ? JSON.parse(localStorage.getItem('ciudades')) : [],
    //     empresas: localStorage.getItem('empresas') ? JSON.parse(localStorage.getItem('empresas')) : [],
    };


  componentDidUpdate(prevProps, prevState){
    getEmpresa().then(res => {
      this.setState({empresas: res})
    }) 
  }

  addNewEmpresa = () => {
    postEmpresa(this.state.newEmpresa, this.state.ciudadId).then(res => this.setState({
      empresas: [...this.state.empresas, res]
    }))
}


borrarEmpresa = (id) => {
  deleteEmpresa(id).then(res => this.setState({
    // empresas: this.state.empresas.filter((_, idx) => idx !== id),

  }))
  
}

  handleNewEmpresa = (e) => {
    this.setState({
        newEmpresa: e.target.value,
    });
  }

	handleSelect = (e) => {
		e.preventDefault();
		this.setState({
      ciudadId: e.target.value,
		});
	};

  handleNewEmpresaSubmit = (e) => {
    e.preventDefault();
    if( this.state.newEmpresa.trim() === '')
    {
        return false;
    }
    this.addNewEmpresa()
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
                            <option key={index+1} value={ciudad.id}>{ciudad.name}</option>
                        ))}
					</select>

          <button type="submit" className="btn btn-primary">Agregar</button>
        </form>
        <ul>
          { <EmpresaList empresas={this.state.empresas} onDeleteEmpresa= {this.borrarEmpresa}></EmpresaList> }
        </ul>
      </div>
    );
  }
}
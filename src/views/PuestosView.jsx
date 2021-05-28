import React from 'react';
import {PuestoList} from '../components/PuestoList';
import {getPuesto, getEmpresa, postPuesto, deletePuesto} from '../clients/todoClient';

export class PuestosView extends React.Component {
  constructor() {
    super();
    this.state = {
      puestos: [],
      newPuesto: "",
      newDescripcion: "",
      empresas: [],
      empresaId: [],
    };
  }

  componentDidMount() {
    
    getEmpresa().then(res => {
      this.setState({empresas: res})
    })

    getPuesto().then(res => {
      this.setState({puestos: res})
    })   




    // this.setState({
    //     puestos: localStorage.getItem('puestos') ? JSON.parse(localStorage.getItem('puestos')) : [],
    //     empresas: localStorage.getItem('empresas') ? JSON.parse(localStorage.getItem('empresas')) : [],
    // });
  }

  componentDidUpdate(prevProps, prevState){
    getPuesto().then(res => {
      this.setState({puestos: res})
    })   
  }

  addNewPuesto = () => {
    postPuesto(this.state.newPuesto, this.state.newDescripcion, this.state.empresaId).then(res => this.setState({
      puestos: [...this.state.puestos, res]
    }))
}

borrarPuesto = (id) => {

  deletePuesto (id).then(res => this.setState({
    // puestos: this.state.puestos.filter((_, idx) => idx !== id),

  }))
  
}


  handleNewPuesto = (e) => {
    this.setState({
        newPuesto: e.target.value,
    });
  }

  handleNewDescripcion = (e) => {
    this.setState({
        newDescripcion: e.target.value,
    });
  }

    handleSelect = (e) => {
        e.preventDefault();
        this.setState({
          empresaId: JSON.parse(e.target.value),
        });
    };

  handleNewPuestoSubmit = (e) => {
    e.preventDefault();
    if( this.state.newPuesto.trim() === '')
    {
        return false;
    }
    this.addNewPuesto()
  }

  handleNewDescripcionSubmit = (e) => {
    e.preventDefault();
    if( this.state.newDescripcion.trim() === '')
    {
        return false;
    }
    this.addNewPuesto()
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleNewPuestoSubmit, this.handleNewDescripcionSubmit}>

        <label
						htmlFor="exampleFormControlInput1"
						className="form-label"
					>
						Puesto
					</label>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput1"
						name="name"
						placeholder="Ingrese un Puesto"
						onChange={(e) => this.handleNewPuesto(e)}
            required
						value={this.state.newPuesto}
					/>


          <label
						htmlFor="exampleFormControlInput1"
						className="form-label"
					>
						Descripcion del puesto
					</label>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput1"
						name="name"
						placeholder="Ingrese una descripcion"
						onChange={(e) => this.handleNewDescripcion(e)}
            required
						value={this.state.newDescripcion}
					/>

          

          <label>Empresa:</label>
          <select id="inputGroupSelect01" onChange={(e) => this.handleSelect(e)} value={JSON.stringify(this.state.empresa)}>
						<option value={JSON.stringify({})}>Elegir Empresa</option>
                        { this.state.empresas.map((empresa, index) => (
                            <option key={index+1} value={empresa.id}>{empresa.name}</option>
                        ))}
					</select>

          <button type="submit" className="btn btn-primary" >Agregar</button>
        </form>
        <ul>
          <PuestoList puestos={this.state.puestos} onDeletePuesto= {this.borrarPuesto}></PuestoList>
        </ul>
      </div>
    );
  }
}
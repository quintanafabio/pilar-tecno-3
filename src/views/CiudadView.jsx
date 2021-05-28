import React from 'react';
import {CiudadList} from '../components/CiudadList';
import {getPais, getCiudad, postCiudad, deleteCiudad } from '../clients/todoClient';
import axios from 'axios';

export class CiudadView extends React.Component {
  constructor() {
    super();
    this.state = {
      ciudades: [],
      newCiudad: "",
      paises: [],
      idPais: [],
    };
  }
      
componentDidMount() {   
    getCiudad().then(res => {
      this.setState({ciudades: res})
    })

    getPais().then(res => {
      this.setState({paises: res})
})

  }
  componentDidUpdate(prevProps, prevState){

    getCiudad().then(res => {
      this.setState({ciudades: res})
    })

  }

  addNewCiudad = () => {

    postCiudad(this.state.newCiudad, this.state.idPais).then(res => this.setState({
      ciudades: [...this.state.ciudades, res]
    }))

  }

  borrarCiudad = (id) => {

    deleteCiudad(id).then(res => this.setState({
      // ciudades: this.state.ciudades.filter((_, idx) => idx !== id),

    }))
    
  }
  
  handleNewCiudad = (e) => {
    this.setState({
        newCiudad: e.target.value,
    });
  }

	handleSelect = (e) => {
		e.preventDefault();
		this.setState({
      idPais: e.target.value,
		});
	};

  handleNewCiudadSubmit = (e) => {
    e.preventDefault();
    if( this.state.newCiudad.trim() === '')
    {
        return false;
    }
    this.addNewCiudad(e, this.state.newCiudad)
  }

  render() {
    return (
      <div class className="mb-3">
        <form onSubmit={this.handleNewCiudadSubmit}>


            <label>Ciudades:</label>

          <input
						type="text"
						className="form-control"
						id="exampleFormControlInput1"
						name="name"
						placeholder="Ingrese una ciudad"
						onChange={(e) => this.handleNewCiudad(e)}
            required
						value={this.state.newCiudad}
					/>

            <select id="inputGroupSelect01"  onChange={(e) => this.handleSelect(e)} value={JSON.stringify(this.state.pais)}>
              <option value={JSON.stringify({})}>Elegir Pais</option>
                          { this.state.paises.map((elemento, index) => (
                              <option key={index+1} value={elemento.id}>{elemento.name}</option>
                          ))}
            </select>

            <button type="submit" className="btn btn-primary">Agregar</button>
          </form>
          <ul>
            {<CiudadList ciudades={this.state.ciudades} onDeleteCiudad= {this.borrarCiudad}></CiudadList>} 
          </ul>
        </div>
    );
  }
}
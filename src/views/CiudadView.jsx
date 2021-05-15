import React from 'react';
import {CiudadList} from '../components/CiudadList';

export class CiudadView extends React.Component {
  constructor() {
    super();
    this.state = {
      ciudades: [],
      newCiudad: "",
      paises: [],
      pais: []
    };
  }
      
  componentDidMount() {
    this.setState({
        paises: localStorage.getItem('paises') ? JSON.parse(localStorage.getItem('paises')) : [],
        ciudades: localStorage.getItem('ciudades') ? JSON.parse(localStorage.getItem('ciudades')) : [],
    });
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.ciudades !== this.state.ciudades){
        localStorage.setItem("ciudades", JSON.stringify(this.state.ciudades))
    }
  }

  addNewCiudad = (newCiudad) => {
    this.setState({
        ciudades: [...this.state.ciudades, {'Ciudad': this.state.newCiudad, 'Pais': this.state.pais.Pais}],
        newCiudad: '',
        pais:''
    });
  }

  deleteCiudad = (id) => {
    this.setState({
      ciudades: this.state.ciudades.filter((_, idx) => idx !== id)
    });
  }

  handleNewCiudad = (e) => {
    this.setState({
        newCiudad: e.target.value,
    });
  }

	handleSelect = (e) => {
		e.preventDefault();
		this.setState({
			  pais: JSON.parse(e.target.value),
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

          <label
              htmlFor="exampleFormControlInput1"
              className="form-label"
            >
              Ciudad
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              name="name"
              placeholder="Ingrese una Ciudad"
              onChange={(e) => this.handleNewCiudad(e)}
              required
              value={this.state.newCiudad}
            />
          
            <label>Pais:</label>
            <select id="inputGroupSelect01" className="form-select" onChange={(e) => this.handleSelect(e)} value={JSON.stringify(this.state.pais)}>
              <option value={JSON.stringify({})}>Elegir Pais</option>
                          { this.state.paises.map((pais, index) => (
                              <option key={index+1} value={JSON.stringify(pais)}>{pais.Pais}</option>
                          ))}
            </select>

            <button type="submit" className="btn btn-primary">Agregar</button>
          </form>
          <ul>
            <CiudadList ciudades={this.state.ciudades} onDeleteCiudad= {this.deleteCiudad}></CiudadList>
          </ul>
        </div>
    );
  }
}
import React from 'react';
import {PaisList} from '../components/PaisList';

export class PaisView extends React.Component {
  constructor() {
    super();
    this.state = {
      paises: [],
      newPais: ''
    };
  }

  componentDidMount() {
    this.setState({
        paises: localStorage.getItem('paises') ? JSON.parse(localStorage.getItem('paises')) : [],
    });
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.paises !== this.state.paises){
        localStorage.setItem('paises', JSON.stringify(this.state.paises))
    }
  }

  addNewPais = (newPais) => {
        this.setState({
            paises: [...this.state.paises, {'Pais': this.state.newPais,}],
            newPais: ''
        });
  }

  deletePais = (id) => {
    this.setState({
      paises: this.state.paises.filter((_, idx) => idx !== id)
    });
  }

  handleNewPais = (e) => {
    this.setState({
        newPais: e.target.value,
      }
    );
  }

  handleNewPaisSubmit = (e) => {
    e.preventDefault();
    if( this.state.newPais.trim() === '')
    {
        return false;
    }
    this.addNewPais(e, this.state.newPais)
  }

  render() {
    return (

      <div>
        <form onSubmit={this.handleNewPaisSubmit}>

        <label
						htmlFor="exampleFormControlInput1"
						className="form-label"
					>
						Pais
					</label>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput1"
						name="name"
						placeholder="Ingrese un pais"
						onChange={(e) => this.handleNewPais(e)}
            required
						value={this.state.newPais}
					/>

          <button type="submit" className="btn btn-primary"> Agregar </button>
        </form>
        <ul>
          <PaisList paises={this.state.paises} onDeletePais= {this.deletePais}></PaisList>
        </ul>
      </div>
    );
  }
}


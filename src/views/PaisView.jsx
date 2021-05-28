import React from 'react';
import {PaisList} from '../components/PaisList';
import {getPais, postPais, deletePais} from '../clients/todoClient';


export class PaisView extends React.Component {
  constructor() {
    super();
    this.state = {
      paises: [],
      newPais: '',
    };
  }

componentDidMount() {
    getPais().then(res => {
      this.setState({paises: res})
    })    
}

  componentDidUpdate(prevProps, prevState){
    
      getPais().then(res => {
        this.setState({paises: res})
      })    

  }

  addNewPais = () => {

        postPais(this.state.newPais).then(res => this.setState({
          paises: [...this.state.paises, res]
        }))
        

  }

  borrarPais = (id) => {

    deletePais(id).then(res => this.setState({
      // paises: this.state.paises.filter((_, idx) => idx !== id),

    }))
    
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

    const pais ={
      nombrePais: this.state.newPais
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

        <button type="submit" className="btn btn-primary">Agregar</button>


        </form>              
        { <ul>
          { <PaisList paises={this.state.paises} onDeletePais= {this.borrarPais}></PaisList>}
        </ul>}
      </div>
   );

  }


}



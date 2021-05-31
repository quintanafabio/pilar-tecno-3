import React from 'react'
import {MainList} from '../components/MainList'
import {getPais, getCiudad, getEmpresa, getPuesto, getAll, deletePuesto} from '../clients/todoClient';

const style = {
    paddingTop: "30px"
}
export class MainView extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            paises: [],
            ciudades: [],
            empresas: [],
            puestos: [],
            getAll: [],
        }
    }

    componentDidMount() {   

        getPais().then(res => {
            this.setState({paises: res})
          }) 
        
        getCiudad().then(res => {
            this.setState({ciudades: res})
          })
        
        
        getEmpresa().then(res => {
            this.setState({empresas: res})
          })
      
        getPuesto().then(res => {
            this.setState({puestos: res})
        })   

        getAll().then(res => {
            this.setState({getAll: res})
          }) 
      
    }


    componentDidUpdate(prevProps, prevState){
        getAll().then(res => {
            this.setState({getAll: res})
          }) 
      }



    // componentDidUpdate(prevProps, prevState){
    //     if(prevState.puestos !== this.state.puestos){
    //         localStorage.setItem("puestos", JSON.stringify(this.state.puestos))
    //     }
    // }

    borrarPuesto = (id) => {

        deletePuesto(id).then(res => this.setState({
          // puestos: this.state.puestos.filter((_, idx) => idx !== id),
      
        }))
        
    }
      
    render(){
        return(
            <>
                <div className="row" style={style}>
                    <div className="col">
                        <MainList todo={this.state.getAll} onDeletePuesto={this.borrarPuesto} /*paises={this.state.paises} ciudades={this.state.ciudades} empresas={this.state.empresas} puestos={this.state.puestos}*/ />
                    </div>
                </div>
            </>
        )
    }
}
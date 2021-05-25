import React from 'react'
import {MainList} from '../components/MainList'

const style = {
    paddingTop: "30px"
}
export class MainView extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            puestos: []
        }
    }

    componentDidMount() {
        if(localStorage.getItem("puestos") != null){
			this.setState({
				puestos: JSON.parse(localStorage.getItem("puestos"))
			})
		}
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.puestos !== this.state.puestos){
            localStorage.setItem("puestos", JSON.stringify(this.state.puestos))
        }
    }

    deletePuesto = (indexPuesto) => {

        const newArr = this.state.puestos.filter((_, index) => index !== indexPuesto)

        this.setState({
            puestos: newArr
        })
    }

    render(){
        return(
            <>
                <div className="row" style={style}>
                    <div className="col">
                        <MainList puestos={this.state.puestos} onDelete={this.deletePuesto}/>
                    </div>
                </div>
            </>
        )
    }
}
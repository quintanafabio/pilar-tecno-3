import React from 'react'
import { Form, Button, ListGroup } from "react-bootstrap";

export class ToDoList extends React.Component{
    constructor() {
        super();
        this.state = {
            listado: []
        }
    }

    addToDo = (event)=> {
        event.preventDefault();
        const data = event.target,
        newTodo = {
            puesto: data.puesto.value,
            empresa: data.empresa.value,
            localidad: data.localidad.value,
            pais: data.pais.value
        }
        this.state.listado.push(newTodo);
        this.setState({
            listado: this.state.listado
        })

        //Limpiar campos
        data.puesto.value = "";
        data.empresa.value = "";
        data.localidad.value = "";
        data.pais.value = "";


    }

    deleteTodo = (event)=> {
        this.state.listado.splice(event.target.value, 1)
        this.setState({
            listado: this.state.listado
        })
    }  

    render() {
        return(
            <>
            <Form onSubmit={this.addToDo}>
                <Form.Group controlId="formBasicpuesto">
                    <Form.Label>Puesto:</Form.Label>
                    <Form.Control required type="text" placeholder="Ingrese nombre de puesto" name="puesto"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmpresa">
                    <Form.Label>Empresa/Organizacion:</Form.Label>
                    <Form.Control required type="text" placeholder="Ingrese nombre de la empresa/organización" name="empresa"/>
                </Form.Group>
                <Form.Group controlId="formBasiclocalidad">
                    <Form.Label>Localidad:</Form.Label>
                    <Form.Control required type="text" placeholder="Ingrese localidad" name="localidad"/>
                </Form.Group>
                <Form.Group controlId="formBasicPais">
                    <Form.Label>Pais:</Form.Label>
                    <Form.Control required type="text" placeholder="Ingrese pais" name="pais"/>
                </Form.Group>
                <Button type="submit" className="btn btn-success">
                    Agregar empleo
                </Button>
            </Form>

            <ListGroup>
                {
                    
                    this.state.listado.map((task, index)=> {
                        return(
                            <ListGroup.Item key={index} variant="info">
                                <ul>
                                    <li>Puesto: {task.puesto} </li>
                                    <li>Empresa: {task.empresa}</li>
                                    <li>Localidad: {task.localidad} </li>
                                    <li>Pais: {task.pais} </li>
                                </ul>
                                 <Button type="button" variant="danger" onClick={this.deleteTodo} value={index}>
                                     Eliminar Propuesta
                                 </Button>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
            </>
        )
    }
}
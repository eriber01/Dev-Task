import React from 'react';

import { Task } from "../../components/Task/Task"


export const Home = () => {


    return (
        <>
            <div className="container-fluid">
                <div className="text-center bg-dark mb-1 rounded">
                    <h2 className="text-white p-2 m-3">Task Management For Dev</h2>
                </div>
                <form className="border rounded p-5 bg-white" action="">
                    <div className="form-group row">
                        <div className="form-group col-md-3">
                            <label htmlFor="modulo">Modulo</label>
                            <input className="form-control" type="text" id="modulo" />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="name">Nombre</label>
                            <input className="form-control" type="text" id="name" />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="start">Fecha de Entrega</label>
                            <input className="form-control" type="datetime-local" name="" id="start" />
                        </div>
                    </div>
                    <div className="d-flex flex-wrap align-items-end mt-5">
                        <div className="form-group me-3">
                            <label htmlFor="nota">Descripcion</label>
                            <textarea className="form-control w-100" name="" id="nota" cols="88" rows="5"></textarea>
                        </div>
                        <div className="d-flex flex-column me-3" style={{ width: 'auto' }}>
                            <label htmlFor="estado">Prioridad</label>
                            <select className="form-select" name="">
                                <option value="1">Alta</option>
                                <option value="1">Normal</option>
                                <option value="1">Baja</option>
                            </select>
                        </div>

                        <button className="btn btn-primary">
                            Agregar
                        </button>
                    </div>
                </form>
                <Task />
            </div>
        </>
    )
}
import React, { useState } from "react";
import { Confirm } from "../Confirm/Confirm";

export const Task = () => {

    const [open, setOpen] = useState(false)

    console.log(open);
    return (
        <>
            <div className="container-fluid mt-5 d-flex flex-column align-items-center">
                <div className="text-center mt-2 mb-4 bg-black w-25 rounded">
                    <h3 className="text-white p-2 w-100">Task</h3>
                </div>
                <div className="border rounded d-flex flex-column w-100 p-5 mb-4 bg-white">

                    <div className="d-flex flex-wrap justify-content-between">
                        <div className="text-center">
                            <label htmlFor="">Fecha de Inicio</label>
                            <p className="border rounded p-1">30-07-2022 10:00 PM</p>
                        </div>
                        <div className="text-center">
                            <label htmlFor="">Fecha de Entrega</label>
                            <p className="border rounded p-1">01-08-2022 10:00 PM</p>
                        </div>
                    </div>

                    <div className="d-flex flex-wrap">
                        <div className="col-md-4 me-3">
                            <label htmlFor="">Modulo</label>
                            <p className="border rounded p-2">Lorem ipsum, dolor sit amet</p>
                        </div>
                        <div className="col-md-4 me-3">
                            <label htmlFor="">Nombre</label>
                            <p className="border rounded p-2">Primera tarea</p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-end flex-wrap">
                        <div className="d-flex flex-wrap align-items-end">
                            <div className="d-flex flex-column me-3">
                                <label htmlFor="">Descripcion</label>
                                <textarea className="form-control bg-white" disabled name="" id="" cols="88" rows="5"></textarea>
                            </div>

                            <div className="">
                                <div className="d-flex flex-column me-3">
                                    <label htmlFor="estado">Estado</label>
                                    <select className="form-select" name="">
                                        <option value="1">Pendiente</option>
                                        <option value="1">En Proceso</option>
                                        <option value="1">Pospuesto</option>
                                    </select>
                                </div>

                                <div className="d-flex flex-column me-3">
                                    <label htmlFor="estado">Prioridad</label>
                                    <select className="form-select" name="">
                                        <option value="1">Alta</option>
                                        <option value="1">Normal</option>
                                        <option value="1">Baja</option>
                                    </select>
                                </div>
                            </div>

                            <div className="d-flex flex-column me-5">
                                <label htmlFor="">Estado de Entrega</label>
                                <label htmlFor="">Estado</label>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-end mt-2" style={{ width: 'auto' }}>
                            <button
                                onClick={() => setOpen(true)}
                                className="btn btn-danger text-white mb-2 w-100"
                            >
                                Cancelar
                            </button>

                            <button
                                className="btn btn-info text-white w-100"
                            >
                                Editar
                            </button>
                        </div>
                    </div>
                </div>

                <Confirm open={open} action={setOpen} />
                {/* nuevo agregado estatico */}
                {/* <div className="border rounded d-flex flex-column w-100 p-5 mb-4 bg-white">

                    <div className="d-flex justify-content-between">
                        <div className="text-center">
                            <label htmlFor="">Fecha de Inicio</label>
                            <p className="border rounded p-1">30-07-2022</p>
                        </div>
                        <div className="text-center">
                            <label htmlFor="">Fecha de Entrega</label>
                            <p className="border rounded p-1">01-08-2022</p>
                        </div>
                    </div>

                    <div className="d-flex flex-wrap">
                        <div className="col-md-4 me-3">
                            <label htmlFor="">Modulo</label>
                            <p className="border rounded p-2">Lorem ipsum, dolor sit amet</p>
                        </div>
                        <div className="col-md-4 me-3">
                            <label htmlFor="">Nombre</label>
                            <p className="border rounded p-2">Primera tarea</p>
                        </div>
                    </div>

                    <div className="d-flex align-items-end">
                        <div className="d-flex flex-column me-3">
                            <label htmlFor="">Descripcion</label>
                            <textarea className="bg-white" disabled name="" id="" cols="88" rows="5"></textarea>
                        </div>

                        <div className="d-flex flex-column me-3" style={{ width: '10%' }}>
                            <label htmlFor="estado">Estado</label>
                            <select className="form-select" name="">
                                <option value="1">Pendiente</option>
                                <option value="1">En Proceso</option>
                                <option value="1">Pospuesto</option>
                            </select>
                        </div>

                        <div className="d-flex flex-column me-3" style={{ width: '10%' }}>
                            <label htmlFor="estado">Prioridad</label>
                            <select className="form-select" name="">
                                <option value="1">Alta</option>
                                <option value="1">Normal</option>
                                <option value="1">Baja</option>
                            </select>
                        </div>

                        <div className="d-flex flex-column">
                            <label htmlFor="">Estado de Entrega</label>
                            <label htmlFor="">Estado</label>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}
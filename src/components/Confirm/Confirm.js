import React from 'react';

export const Confirm = ({ open, action }) => {

    return (
        <>
            {
                open ?
                    <div className="d-flex justify-content-center align-items-center modal bg-dark bg-opacity-10">
                        {/* <button
                    onClick={() => console.log(open2)}
                    className="btn btn-danger text-white mb-2 w-100"
                >
                    Cancelar
                </button> */}

                        <div className="d-flex flex-column text-center border rounded bg-white" style={{ width: '500px', height: '200px' }}>
                            <div className="d-flex justify-content-between  ps-5 p-2 border-bottom">
                                <h3>Cancelar Task</h3>
                                <button
                                    onClick={() => action(false)}
                                    className="btn border">X</button>
                            </div>

                            <div className="border h-50">
                                <p>Estas seguro de que deseas Cancelar la Tarea</p>
                            </div>

                            <div className="d-flex align-items-center justify-content-end h-25">
                                <button
                                    onClick={() => action(false)}
                                    className="btn btn-danger text-white me-3"
                                >
                                    Cancelar
                                </button>

                                <button
                                    className="btn btn-success text-white me-3"
                                >
                                    Aceptar
                                </button>
                            </div>
                        </div>

                    </div>
                    : null
            }

        </>
    )
}
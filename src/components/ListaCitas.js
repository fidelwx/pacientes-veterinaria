import React from 'react'
import Cita from './Cita'
import PropTypes from 'prop-types'

export default function ListaCitas({citas, eliminarCita}) {
    //imprimir mensaje en base a si hay citas o no
    const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra las citas aquí';
    return (
        <div className="mt-2 card py-5">
            <div className="card-body">
                <h2 className="card-title text-center">{mensaje}</h2>
                <div className="lista-citas">
                    {citas.map(citas => (
                        <Cita 
                            key={citas.id}
                            cita={citas}
                            eliminarCita={eliminarCita}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

ListaCitas.propTypes = {
    citas : PropTypes.array.isRequired,
    eliminarCita : PropTypes.func.isRequired
}
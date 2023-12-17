import Link from 'next/link'
import React from 'react'

const CardReservas = ({reservas}) => {


  return (
    <Link href={`/sedes/${reservas._id}`} >
        <p>Nombre: {reservas.nombre}</p>
        <p>Fecha {reservas.fecha}</p>
        <p>Comensales {reservas.comensales}</p>
        <p>Sede {reservas.sede}</p>
    </Link>
  )
}

export default CardReservas
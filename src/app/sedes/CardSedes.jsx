import Link from 'next/link'
import React from 'react'

const CardSedes = ({sedes}) => {


  return (
    <Link href={`/sedes/${sedes.sede}`} className='w-[200px] '>
        <p>{sedes.direccion}</p>
        <p>{sedes.horario}</p>
        <p>{sedes.telefono}</p>
        <p>{sedes.capacidad}</p>
    </Link>
  )
}

export default CardSedes
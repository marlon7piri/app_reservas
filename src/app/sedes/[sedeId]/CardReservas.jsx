

import Link from "next/link";
import React from "react";
import Buttons from "./Buttons";

const CardReservas = ({ reservas }) => {
  

  

  return (
    <div className="flex justify-between flex-col ">
      <div className="h-full  p-4">
        <p>Nombre: {reservas.nombre}</p>
        <p>Fecha: {reservas.fecha}</p>
        <p>Comensales: {reservas.comensales}</p>
        <p>Sede: {reservas.sede}</p>
      </div>
      <Buttons  id ={reservas._id}/>
    </div>
  );
};

export default CardReservas;

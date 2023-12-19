import Link from "next/link";
import React from "react";
import styles from './Busqueda.module.css'

const BusquedaReservas = () => {
  return (
    <div className={styles.busqueda_container}>
      <Link
        href="/dashboard/new"
        className="w-max bg-blue-950 text-slate-50 py-2 px-4 rounded-md flex justify-center items-center hover:bg-slate-600"
      >
        Nueva Reserva
      </Link>
      <input type="text" placeholder="Buscar reserva...." />;
    </div>
  );
};

export default BusquedaReservas;

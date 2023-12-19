import { getReservas } from "@/app/libs/actions";
import React from "react";
import CardReservas from "./CardReservas";
import Link from "next/link";
import BusquedaReservas from "./BusquedaReservas";

const SedeId = async ({ params }) => {
  const reservas = await getReservas();

  const sede = params.sedeId;

  console.log(typeof(sede));


  let reservasfiltradas = []
  if (sede.includes("casco%20antiguo")) {
    reservasfiltradas = reservas.filter((e)=>{
        return e.sede === "casco"
    })
  }else if(sede.includes("costa%20del%20este")){
    reservasfiltradas = reservas.filter((e)=>{
        return e.sede === "san francisco"
    })

  }
  return (
    <div className="p-4">
      <BusquedaReservas />
      <div className="flex flex-wrap gap-4">
        {reservas.length == 0 ? (
          <h1>No hay reservas </h1>
        ) : (
            reservasfiltradas?.map((e) => {
            return (
              <div
                key={e._id}
                className="min-w-min-[300px] w-[300px] min-w-min-[230px] min-h-min-[230px] p-4 bg-slate-50 text-slate-900 shadow-2xl rounded-md flex flex-wrap mt-8"
              >
                <CardReservas reservas={e} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SedeId;

import { getReservas } from "@/app/libs/actions";
import React from "react";
import CardReservas from "./CardReservas";

const SedeId = async ({ params }) => {

    const  reservas = await getReservas()
  return (
    <div className="p-4 flex flex-wrap gap-4 ">
      {reservas.map((e) => {
        return (
          <div className='w-[200px] h-[200px] p-4 bg-slate-900 text-slate-50 rounded-md '>
            <CardReservas key={e._id} reservas={e} />
          </div>
        );
      })}
    </div>
  );
};

export default SedeId;

import React from "react";
import { getSedes } from "../libs/actions";
import CardSedes from "./CardSedes";

const Sedes = async () => {
  const sedes = await getSedes();

  return (
    <div className="w-max p-4 flex gap-4 ">
      {sedes?.map((e) => {
        return (
          <div key={e._id} className='w-full p-4 bg-slate-900 text-slate-50 rounded-md '>
            <CardSedes  sedes={e} />
          </div>
        );
      })}
    </div>
  );
};

export default Sedes;

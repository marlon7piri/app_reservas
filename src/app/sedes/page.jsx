import React from "react";
import { getSedes } from "../libs/actions";
import CardSedes from "./CardSedes";
import styles from './Sedes.module.css'

const Sedes = async () => {
  const sedes = await getSedes();

  return (
    <div className="w-full h-full  text-center  p-4 flex flex-col gap-4 justify-center items-center">
      <h1>Sedes</h1>
      <div className={styles.sede_container}>
        {sedes?.map((e) => {
          return (
            <div
              key={e._id}
              className="w-[300px] h-[200px] min-w-min-[200px] min-h-min-[400px] p-4 bg-slate-50 text-slate-900 text-2xl rounded-md text-left  shadow-2xl hover:cursor-pointer hover:scale-105 transition duration-300 hover:bg-slate-100"
            >
              <CardSedes sedes={e} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sedes;

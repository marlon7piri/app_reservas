import { Reservas } from "@/app/libs/models";
import { connectDb } from "@/app/libs/mongo";
import { NextResponse } from "next/server";

export async function DELETE(req,{params}) {

    const id =  params.idReservas

    console.log(id);
  try {
    connectDb();

    const reservas = await Reservas.findByIdAndDelete(id);

    console.log(reservas);
    return NextResponse.json(reservas,{status:200});
  } catch (error) {
    return NextResponse.json("Error al conectarse a la base de datos").status(
      500
    );
  }
}

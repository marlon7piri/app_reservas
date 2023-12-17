import { Reservas } from "@/app/libs/models";
import { connectDb } from "@/app/libs/mongo";
import { NextResponse } from "next/server";

export  async function GET() {
  try {
    connectDb();

    const reservas = await Reservas.find();
    return NextResponse.json(reservas);
  } catch (error) {
    return NextResponse.json("Error al conectarse a la base de datos").status(500);
  }
}

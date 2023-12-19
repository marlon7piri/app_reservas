import { Reservas } from "@/app/libs/models";
import { connectDb } from "@/app/libs/mongo";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    connectDb();

    const reservas = await Reservas.find();
    return NextResponse.json(reservas);
  } catch (error) {
    return NextResponse.json("Error al conectarse a la base de datos").status(
      500
    );
  }
}

export async function POST(req, res) {
  const body = await req.json();

  console.log(body);

  try {
    connectDb();

    const newreserva = new Reservas({
      ...body,
    });

    if(!newreserva) throw new Error("No se pudo crear la reserva por falta de datos")

    const reservasaved = await newreserva.save()
    return NextResponse.json(reservasaved);
  } catch (error) {
    return NextResponse.json("Error al conectarse a la base de datos").status(
      500
    );
  }
}

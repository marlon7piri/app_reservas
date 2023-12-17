import { Sedes } from "@/app/libs/models";
import { connectDb } from "@/app/libs/mongo";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    connectDb();

    const sedes = await Sedes.find();
    return NextResponse.json(sedes);
  } catch (error) {
    return NextResponse.json("Error al conectarse a la base de datos").status(
      500
    );
  }
}

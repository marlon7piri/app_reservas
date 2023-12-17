import mongoose, {model} from 'mongoose'

const SedeSchemma = new mongoose.Schema({
    capacidad: Number,
    direccion: String,
    horario: String,
  
    imagen: String,
    ruc: String,
    sede: String,
    telefono: String,
  });


const ReservaSchema = new mongoose.Schema({
    nombre: String,
    fecha: String,
    comensales: Number,
    hora: String,
    email: String,
    nota: String,
  
    sede: String,
  });


  export const Reservas = mongoose.models.Reservas || mongoose.model("Reservas",ReservaSchema)
  export const Sedes = mongoose.models.Sedes || mongoose.model("Sedes",SedeSchemma)
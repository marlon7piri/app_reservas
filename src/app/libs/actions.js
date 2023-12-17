export const getSedes = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_URL}/sedes`);

    if (!res.ok) throw new Error("Fallo al realizar la peticion");
    const data = await res.json();

    return data;
  } catch (error) {
    console.log('Error',error);
  }
};



export const getReservas= async () => {
    try {
      const res = await fetch(`${process.env.NEXT_URL}/reservas`);
  
      if (!res.ok) throw new Error("Fallo al realizar la peticion");
      const data = await res.json();
  
      return data;
    } catch (error) {
      console.log('Error',error);
    }
  };

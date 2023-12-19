


export const getSedes = async () => {
  try {
    const res = await fetch(`https://app-reservas.vercel.app/sedes`);

    if (!res.ok) throw new Error("Fallo al realizar la peticion");
    const data = await res.json();

    return data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const getReservas = async () => {
  try {
    const res = await fetch(`https://app-reservas.vercel.app/reservas`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error("Fallo al realizar la peticion");
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const crearReservas = async (formData) => {
  try {
    const res = await fetch(
      `https://app-reservas.vercel.app/reservas`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
      {
        cache: "no-cache",
      }
    );

    if (!res.ok) {
      throw new Error("Fallo al realizar la peticion");
    }

    return res;
  } catch (error) {
    console.log("Error", error);
  }
};

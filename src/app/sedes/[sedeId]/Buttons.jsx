"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useLoading } from "@/app/hooks/useLoading";
import Toaster from "@/app/components/Toaster";
import toast from "react-hot-toast";

const Buttons = ({ id }) => {
  const router = useRouter();

  const [loading, setLoading] = useLoading();

  const deleteReservas = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://app-reservas.vercel.app/api/reservas/${id}`,
        {
          method: "DELETE",
        },
        {
          cache: "no-store",
        }
      );

      if (!res.ok) {
        toast.error("Error!")
        throw new Error("Fallo al realizar la peticion");
      }

      toast.success("Reserva Eliminada")
      router.refresh();

      const reservadeleted = await res.json();

      return reservadeleted;
    } catch (error) {
      console.log("Error", error);
    }

    setLoading(false);
  };

  return (
    <div className="flex gap-2">
      <button onClick={deleteReservas} disabled={loading}>
        {loading ? "cargando...." : "eliminar"}
      </button>
      <button className="bg-sky-500 hover:bg-sky-900">editar</button>
    </div>
  );
};

export default Buttons;

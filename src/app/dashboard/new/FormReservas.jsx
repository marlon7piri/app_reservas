"use client";

import { useLoading } from "@/app/hooks/useLoading";
import { crearReservas } from "@/app/libs/actions";
import { useRouter, redirect } from "next/navigation";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const FormReservas = () => {
  const router = useRouter();
  const [isloading, setLoading] = useLoading();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    try {
      setLoading(true);
      const res = await crearReservas(data);

      if (res.ok) {
        router.refresh();
        toast.success("Reserva creada")

        router.push("/dashboard");
        setLoading(false);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="w-3/4 m-auto h-full p-4" onSubmit={handleSubmit(onsubmit)}>
      <fieldset className="w-full h-full border border-gray-200 p-1 flex gap-4">
        <legend className="text-center text-slate-900 text-2xl p-4">
          <h1>Crear Reserva</h1>
        </legend>
        <div className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="nombre.."
            name="nombre"
            {...register("nombre", {
              required: true,
              validate: "Es obligatorio",
            })}
          />
          <input
            type="date"
            placeholder="fecha.."
            name="fecha"
            {...register("fecha", { required: true })}
          />
          <input
            type="time"
            placeholder="hora.."
            name="hora"
            {...register("hora", { required: true })}
          />
          <input
            type="number"
            placeholder="comensales.."
            name="comensales"
            {...register("comensales", { required: true, valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="telefono.."
            name="phone"
            {...register("telefono", { required: true })}
          />
          <select name="sede" id="" {...register("sede", { required: true })}>
            <option value="san francisco"> </option>
            <option value="casco">casco</option>
            <option value="san francisco">san francisco</option>
          </select>

          <input
            type="submit"
            disabled={isloading}
            value={isloading ? "cargando...": "Crear" }
            className="py-2 text-slate-900 bg-green-400 rounded-md hover:cursor-pointer"
          />
        </div>
      </fieldset>
    </form>
  );
};

export default FormReservas;

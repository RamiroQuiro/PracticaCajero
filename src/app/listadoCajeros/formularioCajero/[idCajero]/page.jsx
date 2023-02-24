"use client";

import { useEffect, useState } from "react";
import { fetchQueryCajero } from "../../../../services/useFetch";
import ButtonFormularioRegistroBilletines from "../../../componente/ButtonFormularioRegistroBilletines";


export default function FormularioIngresoBilletes({ params }) {
  const { idCajero } = params;
  const [cajeroGabetas, setCajeroGabetas] = useState([]);
  const [estadoForm, setEstadoForm] = useState({});
  const [selectGabeta, setSelectGabeta] = useState({});
  useEffect(() => {
    const getquery = async () => {
      const respuesta =await fetchQueryCajero(idCajero);
      setCajeroGabetas(respuesta);
    };
    getquery()
    if (estadoForm.idGabeta) {
      const find = cajeroGabetas[1].find(
        (cajero) => cajero.idGabeta == estadoForm.idGabeta
      );
      setSelectGabeta(find);
    }
  }, [estadoForm]);

  const handleChange = (e) => {
    e.preventDefault();
    setEstadoForm({
      ...estadoForm,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form className=" mx-auto my-4 px-4 lg:px-20  text-neutral-600">
      <div className="w-full p-8 my-4   rounded-2xl shadow-2xl bg-white">
        <div className="flex  flex-col ">
          <h1 className="font-bold uppercase text-xl">
            Ingreso de Billetes - Cajero BSE
          </h1>
          <h1 className="font-semibold uppercase text-lg">
            ID Cajero Nombre Cajero
          </h1>
        </div>
        <div className="flex items-center justify-between  my-5">
          <label htmlFor="idGabeta" className="font-medium md:w-6/12">
            Elegir Gabeta
          </label>
          <select
            name="idGabeta"
            onChange={handleChange}
            className="bg-gray-100 py-2 px-5 md:w-6/12 rounded-lg font-medium text-right"
            id="idGabeta"
          >
            {cajeroGabetas &&
              cajeroGabetas[1]?.map((gabeta) => (
                <option
                key={cajeroGabetas[1].indexOf(gabeta)}
                  value={gabeta.idGabeta}
                  className="bg-gray-100 py-2 px-5  rounded-lg font-medium text-right"
                >
                  N° {gabeta.idGabeta}
                </option>
              ))}
          </select>
        </div>
        <div>
          {estadoForm?.idGabeta ? (
            <div className="w-full text-sm py-1 font-semibold rounded text-neutral-600 bg-gray-100 flex items-center justify-around">
              <div className="flex flex-col items-center justify-center gap-y-1">
                <span>Cant Billetes</span>
                <span>{selectGabeta.cantidadBilletes}</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-1">
                <span>Valor Nominal</span>
                <span>{selectGabeta.valorNominal}</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-1">
                <span>Total Dinero</span>
                <span>
                  ${selectGabeta.cantidadBilletes * selectGabeta.valorNominal}
                </span>
              </div>
            </div>
          ) : (
            <div className="w-full text-sm py-1 font-semibold rounded bg-gray-100 flex items-center justify-around">
              <div className="flex flex-col items-center justify-center gap-y-1">
                <span>Cant Billetes</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-1">
                <span>Valor Nominal</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-1">
                <span>Total Dinero</span>
              </div>
            </div>
          )}
        </div>
        <div className="border-t w-full">
          <div className="flex items-center justify-between  mt-5">
            <label className="font-medium md:w-6/12">
              Cantidad de billetes{" "}
            </label>
            <input
              onChange={handleChange}
              name="cantidadBilletes"
              className=" bg-gray-100 md:w-6/12 text-right text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="ej: 20000"
              required
            />
          </div>
          <div className="flex items-center justify-between  mt-5">
            <label className="font-medium md:w-6/12">
              Valor nominal de los billetines
            </label>
            <input
              onChange={handleChange}
              name="valorNominal"
              required
              className="w-full md:w-6/12 text-right bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="ej: 100 | 200 | 300"
            />
          </div>
        </div>
        <ButtonFormularioRegistroBilletines state={estadoForm} idCajero={idCajero} />
      </div>
      {/*
       */}
    </form>
  );
}

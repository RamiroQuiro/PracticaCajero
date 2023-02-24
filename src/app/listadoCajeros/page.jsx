import React from "react";
import TablaCajeros from "../componente/TablaCajeros";

export default function Cajeros() {
  return (
    <div className="flex justify-center items-start pt-16 mx-auto w-screen h-screen bg-neutral-100">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <TablaCajeros/>
      </div>
    </div>
  );
}

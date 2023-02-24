import { fetchQueryCajero } from "../../services/useFetch";
import ButtonRegistrarBilletes from "./ButtonRegistrarBilletes";
import TablaGabetas from "./TablaGabetas";

export default async function CardCajero({ id }) {

  const [respuesta, gabetas] = await fetchQueryCajero(id);
   const cantidadBilletes = gabetas?.reduce((acc, int) => {
     acc = acc + int.cantidadBilletes;
     return acc;
   }, 0);
   const total = gabetas?.reduce((acc, int) => {
     let tempiral = int.cantidadBilletes * int.valorNominal;
     acc = tempiral + acc;
     return acc;
   }, 0);


    return (
      <div className="w-1/2 m-auto  p-8 my-4   rounded-2xl shadow-2xl bg-blue-900  ">
        <div className="flex flex-col text-white">
          <h1 className="font-bold uppercase text-3xl my-4">
            Id Cajero N°{id} - {respuesta.name}
          </h1>
          <h1 className="font-bold uppercase text-xl my-4">
            Sucursal {respuesta.sucursal}
          </h1>
          <div className="flex items-center justify-around mx-auto  w-full">
            <div className="flex my-4 ">
              {/* imagen */}
              <div className="flex flex-col text-center">
                <h2 className="text-lg">Cantidad de Billetes</h2>
                <p className="text-gray-200 bg-red-600/90 rounded">
                  {cantidadBilletes}
                </p>
              </div>
            </div>

            <div className="flex my-4 ">
              {/* imagen */}
              <div className="flex flex-col text-center">
                <h2 className="text-lg">Valor Total Dinero</h2>
                <p className="text-gray-200 bg-red-600/90 rounded">${total}</p>
              </div>
            </div>
          </div>
          <h2 className="text-lg my-2">Gabetas:</h2>
          <TablaGabetas gabetas={gabetas} />
          <div className="flex w-full my-4 items-center justify-around">
            <ButtonRegistrarBilletes id={id} />
            <button className="rounded-lg bg-gray-500  inline-block mx-1 text-center py-2 px-3">
              Arqueo de caja
            </button>
          </div>
        </div>
      </div>
    );
  }



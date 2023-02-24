import ButtonCrearCajejro from "./componente/ButtonCrearCajejro";

export default function Home() {
  return (
    <div className="h-full w-full ">
      <div className="flex justify- items-center mx-auto  h-full w-full pt-20 flex-col bg-neutral-100">
      <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
         ¿Que Operacion vas a realizar?
        </h1>

        <ul className="text-center  py-10">
         <ButtonCrearCajejro/>
          <li
            className="cursor-pointer hover:bg-blue-700 duration-150 uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 mt-10 rounded-lg w-full 
                          focus:outline-none focus:shadow-outline"
          >
            Registrar Billetes
          </li>
          <li
            className="cursor-pointer hover:bg-blue-700 duration-150 uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 mt-10 rounded-lg w-full 
                          focus:outline-none focus:shadow-outline"
          >
            Arqueo de Cajas
          </li>
        </ul>
      </div>
    </div>
  );
}

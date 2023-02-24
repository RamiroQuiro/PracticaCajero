"use client"
import { useRouter } from 'next/navigation';

export default function ColumnaTablaBodyCajeros({cajero}) {
    const router = useRouter();

    const irACajero=()=>{
        router.push(`/listadoCajeros/cajero/${cajero.idCajero}`)
}
  return (

    <tr 
    onClick={irACajero}
    className=" border-b bg-gray-600 hover:bg-gray-500 duration-150 border-gray-700 cursor-pointer  text-gray-100">
      <td className="px-2 py-3">{cajero.id}</td>
    <th
      scope="row"
      className="px-6 py-2 font-medium text-gray-300 whitespace-nowrap "
    >
      {cajero.name}
    </th>
    <td className="px-6 ">{cajero.idCajero}</td>
    <td className="px-6 ">{cajero.sucursal}</td>
    <td className="px-6 ">{cajero.gabetas}</td>
  </tr>
  )
}

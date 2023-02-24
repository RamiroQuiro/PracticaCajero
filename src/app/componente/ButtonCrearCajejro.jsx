"use client"

import { useRouter } from "next/navigation"

export default function ButtonCrearCajejro() {
    const router=useRouter()
const handleClick=()=>{
    router.push('/CreadorCajero')
}

  return (
    <button
    onClick={handleClick}
    className=" cursor-pointer hover:bg-blue-700 duration-150 uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 mt-10 rounded-lg w-full 
    focus:outline-none focus:shadow-outline"
    > <li
   
  >
    Crear Cajero
  </li></button>
  )
}

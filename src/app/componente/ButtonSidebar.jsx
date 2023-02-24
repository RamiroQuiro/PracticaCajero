"use client";
import  Link  from "next/link";


export default function ButtonSidebar({children,link,svg}) {


  return (
    <button>
      {" "}
      <li className="flex w-full justify-between ring-0 outline-none border-0 focus:outline-none text-gray-300 cursor-pointer hover:text-white duration-150 items-center mb-6">
        <Link
          href={link}
          className="flex gap-3 items-center group "
        >
      {svg}
          <pre className="text-sm ml-3 ">{children}</pre>
        </Link>
      </li>
    </button>
  );
}



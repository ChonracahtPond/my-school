import Link from "next/link";
import React from "react";


const Footer = () => {
  return (
    <footer className=" bg-[#1F306A] w-full font-fontTH">
      <div className="container mx-auto p-7 lg:flex lg:justify-between items-center ">
        <div>
          <Link href="./" className="flex">
            <img
              src="/img/Logo_panomwan.png"
              className="h-[50px]  md:h-[120px] mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-[10px] md:text-lg font-medium text-white">
              <p>PHANOMWAN COLLEGE OF TECHNOLOGY</p>
              <hr className="md:w-full h-[2px] lg:w-[400px] xl:w-full bg-white my-1" />
              <p>198 ถ.มิตรภาพ-จอหอ ต.บ้านโพธิ์ อ.เมือง จ.นครราชสีมา 30310</p>
              <p>TEL : 044-955121-122 &nbsp;FAX : 044-955120</p>
            </span>
          </Link>
        </div>

      </div>


      <div className=" bg-black w-full p-2">
        <div className=" text-white text-center text-[9px] md:text-xs">
          © 2023&nbsp;
          <Link href="" className="hover:underline hover:text-amber-400">
           รับเขียนโปรแกรม
          </Link>
          &nbsp;All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

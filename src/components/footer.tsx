import Link from "next/link";
import React from "react";


const Footer = () => {
  return (
    <footer className=" bg-[#371f6a] w-full font-fontTH">
      <div className="container mx-auto p-7 lg:flex lg:justify-between items-center ">
        <div>
          <Link href="./" className="flex">
            <img
              src="/img/logoschool.png"
              className="h-[50px]  md:h-[120px] mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-[10px] md:text-lg font-medium text-white">
              <p>ศูนย์ส่งเสริมการเรียนรู้อำเภอเมืองอุดรธานี</p>
              <hr className="md:w-full h-[2px] lg:w-[400px] xl:w-full bg-white my-1" />
              <p>ติดต่อได้ที่ตำบลใกล้เคียง หรือ โทร 042-240-197</p>
    
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

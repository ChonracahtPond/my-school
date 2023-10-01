import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import Link from "next/link";
import { HiBars4, HiOutlineXMark, HiChevronDown, HiChevronUp } from "react-icons/hi2";
import Image from "next/image";


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const ComponentsNavbar: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
  };



  return (
    <nav className="bg-[#371f6a] sm/h-[130px] font-fontTH ">
      <div className="flex justify-around gap-5 mx-auto px-2 sm:px-6 lg:px-8 py-3 flex-wrap  h-[100%] drop-shadow-lg" >
        <div className="grid grid-flow-col items-center gap-5" >
          <div >
            <Link href='/' className="flex items-center gap-2">
              <Image
                src="/img/logoschool.png"
                width={100}
                height={100}
                className="w-[65px] md:w-[90px]" alt="" />


              <div className="text-white">
                <p className="text-sm md:text-lg ">ศูนย์ส่งเสริมการเรียนรู้อำเภอเมืองอุดรธานี</p>
                <div className=" bg-white h-[2px] sm/w-[300px]" />
                <p className="text-[10px] mt-0.5 md:text-sm" >Udonthani City Learning Promotion Center.</p>
              </div>
            </Link>
          </div>

          {/* Button Bar */}
          <div onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {
              isOpen ? <HiOutlineXMark size={30} /> : <HiBars4 size={30} />
            }

          </div>
        </div>

        <ul className="md:flex gap-5 hidden font-medium text-sm md:text-md lg:text-lg items-center">
        <Link
            href="/"
            className="text-white  px-3 py-2 rounded-md  font-medium"
          >
            สมัครเรียน
          </Link>
        
        </ul>
      </div>


      {/* nav link for mobile here */}
      <div className={`px-10 pt-5 absolute z-[-1] w-full h-screen bg-[#1F306A] transition-all animate-flip-down text-[14px]
         ${isOpen ? '' : 'hidden'}`}
      >
        <ul className="mt-1.5 text-center ">
            <Link href="/">
            <button className="w-full bg-slate-100 hover:bg-white px-4 py-1.5 rounded-md  ">
              <p className="text-black hover:text-[#1F306A]">สมัครเรียน</p>
              </button>
            </Link>
        </ul>
        
      </div>

    </nav>
  );
};
export default ComponentsNavbar;

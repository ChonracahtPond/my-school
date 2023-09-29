
import { Inter } from 'next/font/google'
import RootLayout from '@/components/layout'
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import useAxios from "axios-hooks";
import Modal from "./modal";
import Loading from './loading';
import Missing from './modalmissing';
import Link from 'next/link'
import Success from './modalsuccess';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [{ error: errorMessage, loading: IndexActivityLoading }, executeIndexActivity] = useAxios({ url: '/api/registerForm', method: 'POST' }, { manual: true });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [id, setId] = useState<string>("")

  const [regIdpersonal, setRegIdpersonal] = useState<string>(""); // Example for an input field
  const [regBirth, setRegBirth] = useState<string>("");
  const [regPrefix, setRegPrefix] = useState<string>("");


  const [regSex, setRegSex] = useState<string>("");
  const [regNation, setRegNation] = useState<string>("");
  const [regName, setRegName] = useState<string>("");
  const [regLastname, setRegLastname] = useState<string>("");
  const [regEname, setRegEname] = useState<string>("");
  const [regElastname, setRegElastname] = useState<string>("");
  const [regPhone, setRegPhone] = useState<string>("");
  const [regEmail, setRegEmail] = useState<string>("");

  const [regImg, setRegImg] = useState<File | null>(null);

  const [regSchool, setRegSchool] = useState<string>("");
  const [regDegree, setRegDegree] = useState<string>("");
  const [regGpa, setRegGpa] = useState<string>("");
  const [regProgram, setRegProgram] = useState<string>("");

  const [regFaculty, setRegFaculty] = useState<string>("");
  const [regMajor, setRegMajor] = useState<string>("");

  const [success, setSuccess] = useState(false);
  const [dataOut, setDataOut] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [isMissingModalOpen, setIsMissingModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [missingFields, setMissingFields] = useState<string[]>([]);


  return (
    <RootLayout>
      {/* <div className=' text-xl'>
        ข้อมูลผู้สมัครเรียน
      </div> */}
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 my-20">
        <h1 className="font-bold text-white capitalize dark:text-white text-2xl">ข้อมูลผู้สมัครเรียน</h1>
        <form>
        <div className=' mt-5'>
            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">กศร.ตำบล</label>
            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
              <option>โปรดเลือกตำบล</option>
              <option>หมากแข้ง</option>
              <option>นิคมสงเคราะห์</option>
              <option>บ้านขาว</option>
              <option>หนองบัว</option>
              <option>บ้านตาด</option>
              <option>โนนสูง</option>
              <option>หมูม่น</option>
              <option>เชียงยืน</option>
              <option>หนองนาคำ</option>
              <option>กุดสระ</option>
              <option>บ้านเลื่อม</option>
              <option>นาดี</option>
              <option>เชียงพิณ</option>
              <option>สามพร้าว</option>
              <option>หนองไฮ</option>
              <option>นาข่า</option>
              <option>บ้านจั่น</option>
              <option>หนองขอนกว้าง</option>
              <option>โคกสะอาด</option>
              <option>นากว้าง</option>
              <option>หนองไผ่</option>
            </select>
          </div>

          {/* <div className='mt-5'>
            <label className="text-white dark:text-gray-200" htmlFor="data">กศร.ตำบล</label>
            <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
          </div> */}
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="fname">ชื่อ</label>
              <input id="fname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">นามสกุล</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">วัน/เดือน/ปี เกิด</label>
              <input id="date" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="password">เลขประจำตัวประชาชน</label>
              <input id="password" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-4">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">ศาสนา</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">สัญชาติ</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">อาชีพ</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">รายได้เฉลี่ยต่อปี</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            </div>
          
          {/* ชื่อพ่อ */}
          <div className=' mt-5'>
            <label className="text-white dark:text-gray-200" htmlFor="lname">ชื่อ-นามสกุล บิดา</label>
            <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">สัญชาติ</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">อาชีพ</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>

          {/* ชื่อแม่ */}
          <div className=' mt-5'>
            <label className="text-white dark:text-gray-200" htmlFor="lname">ชื่อ-นามสกุล มารดา</label>
            <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">สัญชาติ</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">อาชีพ</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>


          <h1 className="mt-10 font-bold text-white capitalize dark:text-white text-2xl">ประวัติการศึกษาเดิม (จบชั้น)</h1>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 ">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">จบชั้น</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">ปี พ.ศ. ที่จบ</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">จากสถานศึกษา</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">อำเภอ/เขต</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">จังหวัด</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>

          {/* วุฒทางธรรม */}
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 ">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">วุฒิทางธรรม (ถ้ามี)</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">ปี พ.ศ. ที่จบ</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">จากสถานศึกษา</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">อำเภอ/เขต</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">จังหวัด</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>

          <h1 className="mt-10 font-bold text-white capitalize dark:text-white text-2xl">ที่อยู่ปัจจุบัน (สามารถติดต่อได้สะดวก) </h1>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-4 ">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">บ้านเลขที่</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">หมู่</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">ซอย</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">ถนน</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 ">
          <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">ตำบล/แขวง</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">อำเภอ/เขต</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">จังหวัด</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
          
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">รหัสไปรษณีย์</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">โทรศัพท์ (มือถือ)</label>
              <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>


          {/* <div>
            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Password Confirmation</label>
            <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
          </div>
          <div>
            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Color</label>
            <input id="color" type="color" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
          </div>
          <div>
            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Select</label>
            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
              <option>Surabaya</option>
              <option>Jakarta</option>
              <option>Tangerang</option>
              <option>Bandung</option>
            </select>
          </div>
          <div>
            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Range</label>
            <input id="range" type="range" className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
          </div>
          <div>
            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Date</label>
            <input id="date" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
          </div>
          <div>
            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Text Area</label>
            <textarea id="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span className="">Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1 text-white">or drag and drop</p>
                </div>
                <p className="text-xs text-white">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div> */}

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
          </div>
        </form>
      </section>

      

    </RootLayout>
  )
}

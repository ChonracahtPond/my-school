
import useAxios from 'axios-hooks';
import { Inter } from 'next/font/google';
import React, { useRef, useState, useEffect, ChangeEvent } from "react";



const inter = Inter({ subsets: ['latin'] })

export default function Regfrom() {

  const [{ error: errorMessage, loading: IndexActivityLoading }, executeIndexActivity] = useAxios(
    { url: '/api/regform', method: 'POST' },
    { manual: true }
  )


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [educationOffice, seteducationOffice] = useState<string>("");
  const [fname, setfname] = useState<string>("");
  const [lname, setlname] = useState<string>("");
  const [birthday, setbirthday] = useState<string>("");
  const [age, setage] = useState<string>("");
  const [idcard, setidcard] = useState<string>("");
  const [religion, setreligion] = useState<string>("");
  const [nationality, setnationality] = useState<string>("");
  const [occupation, setoccupation] = useState<string>("");
  const [avgincome, setavgincome] = useState<string>("");
  const [fathersname, setfathersname] = useState<string>("");
  const [fanationality, setfanationality] = useState<string>("");
  const [faavgincome, setfaavgincome] = useState<string>("");
  const [mothersname, setmothersname] = useState<string>("");
  const [monationality, setmonationality] = useState<string>("");
  const [moavgincome, setmoavgincome] = useState<string>("");
  const [endclass, setendclass] = useState<string>("");
  const [endyear, setendyear] = useState<string>("");
  const [schoolend, setschoolend] = useState<string>("");
  const [enddistrict, setenddistrict] = useState<string>("");
  const [endprovince, setendprovince] = useState<string>("");
  const [dhamma, setdhamma] = useState<string>("");
  const [endyeardhamma, setendyeardhamma] = useState<string>("");
  const [endschooldhamma, setendschooldhamma] = useState<string>("");
  const [enddistrictdhamma, setenddistrictdhamma] = useState<string>("");
  const [endprovincedhamma, setendprovincedhamma] = useState<string>("");
  const [address, setaddress] = useState<string>("");
  const [group, setgroup] = useState<string>("");
  const [alley, setalley] = useState<string>("");
  const [road, setroad] = useState<string>("");
  const [subdistrict, setsubdistrict] = useState<string>("");
  const [district, setdistrict] = useState<string>("");
  const [province, setprovince] = useState<string>("");
  const [zipcode, setzipcode] = useState<string>("");
  const [tel, settel] = useState<string>("");
  const [imgprifile, setimgprifile] = useState<string>("");
  const [imgqualification, setimgqualification] = useState<string>("");
  const [imghouseregistration, setimghouseregistration] = useState<string>("");
  const [imgidcard, setimgidcard] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);
  const [isMissingModalOpen, setIsMissingModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [missingFields, setMissingFields] = useState<string[]>([]);



  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // ตรวจสอบว่าข้อมูลถูกกรอกครบถ้วน
    if (
      !educationOffice
      // || !fname || !lname || !birthday || !idcard || !religion || !nationality
      // || !occupation || !avgincome || !fathersname || !fanationality || !faavgincome || !mothersname || !monationality
      // || !moavgincome || !endclass || !endyear || !schoolend
      // || !enddistrict || !endprovince || !dhamma
      // || !endyeardhamma || !endschooldhamma || !enddistrictdhamma || !endprovincedhamma || !address
      // || !group || !alley || !road || !subdistrict || !district || !province || !zipcode || !tel || 
      // !imgprifile || !imghouseregistration || !imgidcard || !imgqualification
    ) {

      // ถ้าข้อมูลไม่ครบถ้วน ให้แสดง modal แจ้งเตือน
      setIsMissingModalOpen(true);
      return;
    }

    // ส่งข้อมูลไปยัง API
    try {
      setIsLoading(true);
      const response = await executeIndexActivity({
        data: {
          educationOffice, fname, lname, birthday, idcard, religion, nationality, occupation, avgincome, fathersname, fanationality,
          faavgincome, mothersname, monationality, moavgincome, endclass, endyear, schoolend, enddistrict, endprovince, dhamma, endyeardhamma,
          endschooldhamma, enddistrictdhamma, endprovincedhamma, address, group, alley, road, subdistrict, district, province,
          zipcode, tel, imgprifile, imgqualification, imghouseregistration, imgidcard
          // เพิ่มข้อมูลอื่น ๆ ตามที่ต้องการ
        },
      });
      // ประมวลผลเมื่อสำเร็จ
      setIsLoading(false);
      setIsSuccess(true);
      setMessage("สำเร็จ! คุณได้ทำการจองคิวเรียบร้อยแล้ว");

      // setIsDataSent(true); 
      // สร้าง state isDataSent และตั้งค่าเป็น true
      setIsModalOpen(true);
    } catch (error) {
      // ประมวลผลเมื่อเกิดข้อผิดพลาด
      setIsLoading(false);
      setIsSuccess(false);
      setMessage("เกิดข้อผิดพลาดในการจองคิว");
    }
  };

  // เรียกใช้งานฟังก์ชันเมื่อกดปุ่ม "จองคิว"
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // เรียกใช้งานฟังก์ชันเมื่อกดปุ่ม "ยกเลิก"
  const handleCloseModal = () => {

    window.location.reload();
    setIsModalOpen(false);
  };
  const handleConfirm = () => {

    window.location.reload();
    // ทำสิ่งที่คุณต้องการเมื่อยืนยัน
    // ตัวอย่าง: ปิด Modal
    setIsModalOpen(false);

  };

  const handleImageUpload = (files: FileList | null) => {
    if (!files || files.length === 0) {
      return;
    }
    const file = files[0];
    // ตรวจสอบประเภทของไฟล์ (รูปภาพเท่านั้น)
    const allowedFileTypes = ['image/png', 'image/jpeg', 'application/pdf']; // เพิ่มประเภทไฟล์ที่อนุญาต
    if (!allowedFileTypes.includes(file.type)) {
      alert('กรุณาเลือกไฟล์รูปภาพ (PNG, JPEG) หรือ PDF เท่านั้น');
      return;
    }
    // สร้างอ่านไฟล์รูปภาพและเก็บเป็น Base64
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Image = event.target?.result as string;
      setimgprifile(base64Image); // เก็บข้อมูลรูปภาพเป็น Base64
    };

    reader.readAsDataURL(file);
  };
  const handleImageUploadimgidcard = (files: FileList | null) => {
    if (!files || files.length === 0) {
      return;
    }
    const file = files[0];
    // ตรวจสอบประเภทของไฟล์ (รูปภาพเท่านั้น)
    const allowedFileTypes = ['image/png', 'image/jpeg', 'application/pdf']; // เพิ่มประเภทไฟล์ที่อนุญาต
    if (!allowedFileTypes.includes(file.type)) {
      alert('กรุณาเลือกไฟล์รูปภาพ (PNG, JPEG) หรือ PDF เท่านั้น');
      return;
    }
    // สร้างอ่านไฟล์รูปภาพและเก็บเป็น Base64
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Image = event.target?.result as string;
      setimgidcard(base64Image); // เก็บข้อมูลรูปภาพเป็น Base64
    };
    reader.readAsDataURL(file);
  };
  const handleImageUploadimghouse = (files: FileList | null) => {
    if (!files || files.length === 0) {
      return;
    }
    const file = files[0];
    // ตรวจสอบประเภทของไฟล์ (รูปภาพเท่านั้น)
    const allowedFileTypes = ['image/png', 'image/jpeg', 'application/pdf']; // เพิ่มประเภทไฟล์ที่อนุญาต
    if (!allowedFileTypes.includes(file.type)) {
      alert('กรุณาเลือกไฟล์รูปภาพ (PNG, JPEG) หรือ PDF เท่านั้น');
      return;
    }
    // สร้างอ่านไฟล์รูปภาพและเก็บเป็น Base64
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Image = event.target?.result as string;
      setimghouseregistration(base64Image); // เก็บข้อมูลรูปภาพเป็น Base64
    };
    reader.readAsDataURL(file);
  };
  const handleImageUploadimgquali = (files: FileList | null) => {
    if (!files || files.length === 0) {
      return;
    }
    const file = files[0];
    // ตรวจสอบประเภทของไฟล์ (รูปภาพเท่านั้น)
    const allowedFileTypes = ['image/png', 'image/jpeg', 'application/pdf']; // เพิ่มประเภทไฟล์ที่อนุญาต
    if (!allowedFileTypes.includes(file.type)) {
      alert('กรุณาเลือกไฟล์รูปภาพ (PNG, JPEG) หรือ PDF เท่านั้น');
      return;
    }
    // สร้างอ่านไฟล์รูปภาพและเก็บเป็น Base64
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Image = event.target?.result as string;
      setimgqualification(base64Image); // เก็บข้อมูลรูปภาพเป็น Base64
    };
    reader.readAsDataURL(file);
  };



  return (
    <>

      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 my-10">
        <h1 className="font-bold text-white capitalize dark:text-white text-2xl">ข้อมูลผู้สมัครเรียน</h1>
        <form >
          <div className=' mt-5'>
            <label className="text-white dark:text-gray-200" htmlFor="educationOffice">กศร.ตำบล</label>
            <select
              id="educationOffice"
              value={educationOffice}
              onChange={(e) => seteducationOffice(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
              <option>โปรดเลือกตำบล</option>
              <option value="หมากแข้ง" id="หมากแข้ง">หมากแข้ง</option>
              <option value="นิคมสงเคราะห์" id="นิคมสงเคราะห์">นิคมสงเคราะห์</option>
              <option value="บ้านขาว" id="บ้านขาว">บ้านขาว</option>
              <option value="หนองบัว" id="หนองบัว">หนองบัว</option>
              <option value="บ้านตาด" id="บ้านตาด">บ้านตาด</option>
              <option value="โนนสูง" id="โนนสูง">โนนสูง</option>
              <option value="หมูม่น" id="หมูม่น">หมูม่น</option>
              <option value="เชียงยืน" id="เชียงยืน">เชียงยืน</option>
              <option value="หนองนาคำ" id="หนองนาคำ">หนองนาคำ</option>
              <option value="กุดสระ" id="กุดสระ">กุดสระ</option>
              <option value="บ้านเลื่อม" id="บ้านเลื่อม">บ้านเลื่อม</option>
              <option value="นาดี" id="นาดี">นาดี</option>
              <option value="เชียงพิณ" id="เชียงพิณ">เชียงพิณ</option>
              <option value="สามพร้าว" id="สามพร้าว">สามพร้าว</option>
              <option value="หนองไฮ" id="หนองไฮ">หนองไฮ</option>
              <option value="นาข่า" id="นาข่า">นาข่า</option>
              <option value="บ้านจั่น" id="บ้านจั่น">บ้านจั่น</option>
              <option value="หนองขอนกว้าง" id="หนองขอนกว้าง">หนองขอนกว้าง</option>
              <option value="โคกสะอาด" id="โคกสะอาด">โคกสะอาด</option>
              <option value="นากว้าง" id="นากว้าง">นากว้าง</option>
              <option value="หนองไผ่" id="หนองไผ่">หนองไผ่</option>
            </select>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* <div>
              <label className="text-white dark:text-gray-200" htmlFor="fname">ชื่อ</label>
              <input id="fname" value={fname} onChange={(e) => setfname(e.target.value)} type="text"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div> */}
            {/* <div>
              <label className="text-white dark:text-gray-200" htmlFor="fname">ชื่อ</label>
              <input
                id="fname"
                value={fname}
                onChange={(e) => setfname(e.target.value)}
                type="text"
                pattern="^[A-Za-zก-๙\s]*$" title="กรุณากรอกตัวอักษรเท่านั้น" required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div> */}
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="fname">ชื่อ</label>
              <input
                id="fname"
                value={fname}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  if (!/^[A-Za-zก-๙]*$/.test(inputValue)) {
                    alert('กรุณากรอกตัวอักษรเท่านั้น');
                    return;
                  }
                  setfname(inputValue);
                }}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">นามสกุล</label>
              <input id="lname" value={lname} onChange={(e) => setlname(e.target.value)} type="text" pattern="^[A-Za-zก-๙\s]*$" title="กรุณากรอกข้อมูลให้ถูกต้อง" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="birthday">วัน/เดือน/ปี เกิด</label>
              <input id="date" value={birthday} onChange={(e) => setbirthday(e.target.value)} type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="idcard">เลขประจำตัวประชาชน</label>
              <input id="idcard" value={idcard} onChange={(e) => setidcard(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>
          <div className='my-5 '>
            <label className="text-white dark:text-gray-200" htmlFor="image">กรุณาอัพโหลดรูปภาพ บัตรประชาชน</label>
            <input id="image" type="file"
              accept="image/*"
              onChange={(e) => handleImageUploadimgidcard(e.target.files)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
          </div>

          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-4">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="religion">ศาสนา</label>
              <input id="religion" value={religion} onChange={(e) => setreligion(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="nationality">สัญชาติ</label>
              <input id="nationality" value={nationality} onChange={(e) => setnationality(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="occupation">อาชีพ</label>
              <input id="occupation" value={occupation} onChange={(e) => setoccupation(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="avgincome">รายได้เฉลี่ยต่อปี</label>
              <input id="avgincome" value={avgincome} onChange={(e) => setavgincome(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>
          <div className='my-5 '>
            <label className="text-white dark:text-gray-200" htmlFor="image">กรุณาอัพโหลดรูปภาพ 1.5 นิ้ว</label>
            <input id="image" type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e.target.files)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
          </div>




          {/* ชื่อพ่อ */}
          <div className=' mt-5'>
            <label className="text-white dark:text-gray-200" htmlFor="fathersname">ชื่อ-นามสกุล บิดา</label>
            <input id="fathersname" value={fathersname} onChange={(e) => setfathersname(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="fanationality">สัญชาติ</label>
              <input id="fanationality" value={fanationality} onChange={(e) => setfanationality(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="faavgincome">อาชีพ</label>
              <input id="faavgincome" value={faavgincome} onChange={(e) => setfaavgincome(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>

          {/* ชื่อแม่ */}
          <div className=' mt-5'>
            <label className="text-white dark:text-gray-200" htmlFor="mothersname">ชื่อ-นามสกุล มารดา</label>
            <input id="mothersname" value={mothersname} onChange={(e) => setmothersname(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="monationality">สัญชาติ</label>
              <input id="monationality" value={monationality} onChange={(e) => setmonationality(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="moavgincome">อาชีพ</label>
              <input id="moavgincome" value={moavgincome} onChange={(e) => setmoavgincome(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>


          <h1 className="mt-10 font-bold text-white capitalize dark:text-white text-2xl ">ประวัติการศึกษาเดิม (จบชั้น)</h1>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 ">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="endclass">จบชั้น</label>
              <input id="endclass" value={endclass} onChange={(e) => setendclass(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="endyear">ปี พ.ศ. ที่จบ</label>
              <input id="endyear" value={endyear} onChange={(e) => setendyear(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="schoolend">จากสถานศึกษา</label>
              <input id="schoolend" value={schoolend} onChange={(e) => setschoolend(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="enddistrict">อำเภอ/เขต</label>
              <input id="enddistrict" value={enddistrict} onChange={(e) => setenddistrict(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="endprovince">จังหวัด</label>
              <input id="endprovince" value={endprovince} onChange={(e) => setendprovince(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>
          <div className='my-5 '>
            <label className="text-white dark:text-gray-200" htmlFor="image">กรุณาอัพโหลดรูปภาพ วุฒิเดิม</label>
            <input id="image" type="file"
              accept="image/*"
              onChange={(e) => handleImageUploadimgquali(e.target.files)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
          </div>

          {/* วุฒทางธรรม */}
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 ">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="dhamma">วุฒิทางธรรม (ถ้ามี)</label>
              <input id="dhamma" value={dhamma} onChange={(e) => setdhamma(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="endyeardhamma">ปี พ.ศ. ที่จบ</label>
              <input id="endyeardhamma" value={endyeardhamma} onChange={(e) => setendyeardhamma(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="endschooldhamma">จากสถานศึกษา</label>
              <input id="endschooldhamma" value={endschooldhamma} onChange={(e) => setendschooldhamma(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="enddistrictdhamma">อำเภอ/เขต</label>
              <input id="enddistrictdhamma" value={enddistrictdhamma} onChange={(e) => setenddistrictdhamma(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="endprovincedhamma">จังหวัด</label>
              <input id="endprovincedhamma" value={endprovincedhamma} onChange={(e) => setendprovincedhamma(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>

          <h1 className="mt-10 font-bold text-white capitalize dark:text-white text-2xl">ที่อยู่ปัจจุบัน (สามารถติดต่อได้สะดวก) </h1>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-4 ">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="address">บ้านเลขที่</label>
              <input id="address" value={address} onChange={(e) => setaddress(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="group">หมู่</label>
              <input id="group" value={group} onChange={(e) => setgroup(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="alley">ซอย</label>
              <input id="alley" value={alley} onChange={(e) => setalley(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="road">ถนน</label>
              <input id="road" value={road} onChange={(e) => setroad(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 ">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="subdistrict">ตำบล/แขวง</label>
              <input id="subdistrict" value={subdistrict} onChange={(e) => setsubdistrict(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="district">อำเภอ/เขต</label>
              <input id="district" value={district} onChange={(e) => setdistrict(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="province">จังหวัด</label>
              <input id="province" value={province} onChange={(e) => setprovince(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="zipcode">รหัสไปรษณีย์</label>
              <input id="zipcode" value={zipcode} onChange={(e) => setzipcode(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="tel">โทรศัพท์ (มือถือ)</label>
              <input id="tel" value={tel} onChange={(e) => settel(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>

          <div className='my-5 '>
            <label className="text-white dark:text-gray-200" htmlFor="image">กรุณาอัพโหลดรูปภาพ ทะเบียนบ้าน</label>
            <input id="image" type="file"
              accept="image/*"
              onChange={(e) => handleImageUploadimghouse(e.target.files)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
          </div>


          <div className="flex justify-end mt-6">
            <button type="submit"
              disabled={isLoading}
              onClick={handleSubmit} className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
          </div>
          {isMissingModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
              <div className="bg-white p-6 rounded-lg text-center">
                <p className="text-red-500 text-lg mb-4">กรุณากรอกข้อมูลให้ครบถ้วน</p>
                <button
                  onClick={() => setIsMissingModalOpen(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md focus:outline-none"
                >
                  ปิด
                </button>
              </div>
            </div>
          )}
          {isModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
              <div className="bg-white p-6 rounded-lg mx-auto">
                <p className="text-2xl font-semibold mb-4">ยืนยันการสมัคร</p>
                <p>คุณต้องการจองคิวหรือไม่?</p>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleCloseModal} // เรียกใช้งานเมื่อกดปุ่ม "ยกเลิก"
                    className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
                  >
                    ยกเลิก
                  </button>
                  <button
                    onClick={handleConfirm} // เรียกใช้งานเมื่อกดปุ่ม "ยืนยัน"
                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                  >
                    ยืนยัน
                  </button>
                </div>
              </div>
            </div>
          )}

        </form>
      </section>


    </>
  )
}


import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setRegImg(file); // Store the File object
    }
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //event.preventDefault();
    //event.stopPropagation();
    let missingFields = [];
    // Check for missing fields here...
    if (!regIdpersonal) missingFields.push("บัตรประจำตัวประชาชน");
    if (!regBirth) missingFields.push("วันเดือนปีเกิด");
    if (!regPrefix) missingFields.push("คำนำหน้าชื่อ");
    if (!regSex) missingFields.push("เพศ");
    if (!regNation) missingFields.push("สัญชาติ");
    if (!regName) missingFields.push("ชื่อ");
    if (!regLastname) missingFields.push("นามสกุล");
    if (!regEname) missingFields.push("ชื่อภาษาอังกฤษ");
    if (!regElastname) missingFields.push("นามสกุลภาษาอังกฤษ");
    if (!regPhone) missingFields.push("เบอร์โทรศัพท์");
    if (!regEmail) missingFields.push("อีเมล");
    if (!regImg) missingFields.push("รูปภาพ");

    if (!regSchool) missingFields.push("สถาบันการศึกษา");
    if (!regDegree) missingFields.push("ระดับกาสำเร็จการศึกษาระดับ");
    if (!regGpa) missingFields.push("เกรดเฉลี่ย");
    if (!regProgram) missingFields.push("หลักสูตร");

    if (!regFaculty) missingFields.push("คณะ");
    if (!regMajor) missingFields.push("สาขา");


    if (missingFields.length > 0) {
      // Handle missing fields...
      setMissingFields(missingFields);
      setIsMissingModalOpen(true);
      console.log("กรุณากรอกข้อมูลดังต่อไปนี้ให้ครบ :", missingFields.join(', '));
      return; // Exit the function here


      // setAlertForm("warning");
      // setInputForm(true);
      // setCheckBody(`กรอกข้อมูลไม่ครบ: ${missingFields.join(', ')}`);
    } else {
      try {
        //setAlertForm("primary"); // set to loading
        console.log("กำลังอัพ");
        setIsLoading(true);
        // Upload the image
        if (regImg) {
          const formData = new FormData();
          formData.append("file", regImg); // Assuming 'activityImg' is a File object
          const uploadResponse = await axios.post(
            "https://upload-image.me-prompt-technology.com/",
            formData
          );

          if (uploadResponse.status === 200) {
            const responseData = uploadResponse.data;
            const imageId = responseData.result.id;

            // Prepare the data to send
            const data = {


              regImg: imageId, // Use the uploaded image ID


              regIdpersonal: regIdpersonal,
              regBirth: regBirth,
              regPrefix: regPrefix,
              regSex: regSex,
              regNation: regNation,
              regName: regName,
              regLastname: regLastname,
              regEname: regEname,
              regElastname: regElastname,
              regPhone: regPhone,
              regEmail: regEmail,

              regSchool: regSchool,
              regDegree: regDegree,
              regGpa: regGpa,
              regProgram: regProgram,

              regFaculty: regFaculty,
              regMajor: regMajor,
            };

            const response = await executeIndexActivity({ data });
            if (response && response.status === 201) {
              setIsLoading(false);
              setIsSuccess(true);
              setTimeout(() => {
                // clear();
                router.push(`/register/sum?id=${response.data.id}`);
              }, 1000);
            } else {
              // setAlertForm("danger");
              throw new Error('Failed to send data');
            }
          } else {
            // setAlertForm("danger");
            throw new Error('Image upload failed');
          }
        }
      } catch (error) {
        //setAlertForm("danger");
      }
    }
  };




  // ตรงนี้ทำให้ถ้าเลือก คณะ สาขาจะแตกต่างกันไปตามคณะ
  const majorOptionsByFaculty: { [key: string]: string[] } = {
    "คณะบริหารธุรกิจ": [
      "สาขาวิชาการจัดการอุตสาหกรรมและโลจิสติกส์ (บธ.บ)",
      "สาขาวิชาการจัดการโรงแรมและการท่องเที่ยว (บธ.บ.)",
      "สาขาวิชาระบบสารสนเทศ (บธ.บ.)",
      "สาขาวิชาการจัดการ (บธ.บ.)",
      "สาขาวิชาการบัญชี (บช.บ.)",
      // ... Add other options for this faculty ...
    ],
    "คณะวิทยาศาสตร์และเทคโนโลยี": [
      "สาขาวิชาสาธารณสุขศาสตร์ (สบ.)"
      // Add options for this faculty...
    ],
    "คณะศิลปศาสตร์": [
      "สาขาวิชารัฐประศาสนศาสตร์ (รป.บ)"
      // Add options for this faculty...
    ],
    "คณะวิศวกรรมศาสตร์": [
      "สาขาวิชาวิศวกรรมยานยนต์ (วศ.บ.)"
      // Add options for this faculty...
    ],
    // ... Add options for other faculties ...
  };

  // Handle the change event of the faculty select
  const handleFacultyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFaculty = event.target.value;
    setRegFaculty(selectedFaculty);
    setRegMajor(""); // Reset the selected major when changing faculty
  };


  return (
    <RootLayout>

      <div className='container mx-auto md:py-24 py-12'>



        <div className='flex justify-between'>
          <div>
            <h1 className='text-2xl  md:text-5xl text-[#1F306A] ml-1 md:ml-0 '>กรอกข้อมูล</h1>
          </div>

          <div className='self-end'>
            <Link href="/register"> <h1 className=' text-xs  md:text-3xl text-white md:text-[#1F306A]'>กลับ</h1> </Link>
          </div>
        </div>

        <div className='bg-[#1F306A] w-full h-1  mb-7  '>
        </div>
        <div className=''>

          {/* ข้อมูลผู้สมัคร  */}
          <div className=' outline outline-1  drop-shadow-xl shadow-xl'>

            <div className='bg-black bg-opacity-80 w-full h-[40px] md:h-[50px] drop-shadow-md  shadow-md '>
              <h1 className=' text-lg md:text-3xl text-[#FFBF00] p-2'> ข้อมูลผู้สมัคร</h1>
            </div>


            <div className=' md:grid md:grid-cols-12 grid-cols-1 pb-2 pt-4 '>
              {/* บัตรประชาชน กับ วันเดือนปี */}

              <div className='col-start-1 col-end-4 md:md:text-right p-3 my-2'>
                <label className=''>บัตรประจำตัวประชาชน:</label>
              </div>
              <div className=' col-span-2 my-2 mx-2 md:mx-0'>
                <input value={regIdpersonal} onChange={(e) => setRegIdpersonal(e.target.value)} name='regIdpersonal' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white h-12" />
              </div>
              <div className='col-start-6 col-end-8 md:md:text-right p-3 my-2 '>
                <label className=''>วัน/เดือน/ปีเกิด:</label>
              </div>
              <div className='col-span-2 my-2 mx-2 md:mx-0'>
                <input value={regBirth} onChange={(e) => setRegBirth(e.target.value)} name='regBirth' type="date" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-2  leading-tight focus:outline-none focus:bg-white  h-12" />
              </div>


              {/* คำนำหน้า เพศ สัญชาติ */}

              <div className='col-start-2 col-end-4 md:md:text-right p-3 my-2'>
                <label className=''>คำนำหน้าชื่อ:</label>
              </div>
              <div className=' col-span-1 md:col-span-2  md:my-2 mx-2 md:mx-0'>
                <select value={regPrefix} onChange={(e) => setRegPrefix(e.target.value)} name='regPrefix' className=' block w-full md:w-1/2 bg-gray-200 text-gray-700 border border-black rounded py-3 px-2  leading-tight focus:outline-none focus:bg-white h-12'>
                  <option value="">- เลือก -</option>
                  <option value="นาย">นาย</option>
                  <option value="นาง">นาง</option>
                  <option value="นางสาว">นางสาว</option>
                </select>
              </div>
              <div className='col-start-5 md:col-start-6 md:text-right p-3 my-2 '>
                <label className=''>เพศ:</label>
              </div>
              <div className='col-span-1 md:col-span-2 my-2 mx-2 md:mx-0'>
                <select value={regSex} onChange={(e) => setRegSex(e.target.value)} name='regSex' className=' block w-full md:w-28   bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white h-12'>
                  <option value="">- เลือก -</option>
                  <option value="ชาย">ชาย</option>
                  <option value="หญิง">หญิง</option>
                </select>
              </div>

              <div className='col-start-7 md:col-start-9 md:text-right p-3 my-2 '>
                <label className=''>สัญชาติ: </label>
              </div>
              <div className='col-span-2 my-2 md:ml-2 mx-2 md:mx-0'>
                <input value={regNation} onChange={(e) => setRegNation(e.target.value)} name='regNation' type="text" className="appearance-none block w-full md:w-2/3 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white h-12" />
              </div>


              {/* ชื่อ นามสกุล */}

              <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                <label className=''>ชื่อ:</label>
              </div>
              <div className=' col-span-2 my-2 mx-2 md:mx-0'>
                <input value={regName} onChange={(e) => setRegName(e.target.value)} name='regName' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white h-12" />
              </div>
              <div className='col-start-6 col-end-8 md:text-right p-3 my-2 '>
                <label className=''>นามสกุล:</label>
              </div>
              <div className='col-span-2 my-2 mx-2 md:mx-0'>
                <input value={regLastname} onChange={(e) => setRegLastname(e.target.value)} name='regLastname' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white h-12" />
              </div>


              {/* Name Surname */}

              <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                <label className=''>Name:</label>
              </div>
              <div className=' col-span-2 my-2 mx-2 md:mx-0'>
                <input value={regEname} onChange={(e) => setRegEname(e.target.value)} name='regEname' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white h-12" />
              </div>
              <div className='col-start-6 col-end-8 md:text-right p-3 my-2 '>
                <label className=''>Surname:</label>
              </div>
              <div className='col-span-2 my-2 mx-2 md:mx-0'>
                <input value={regElastname} onChange={(e) => setRegElastname(e.target.value)} name='regElastname' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white h-12" />
              </div>

              {/* เบอร์โทร อีเมลล์ */}

              <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                <label className=''>เบอร์โทรศัพท์ติดต่อ:</label>
              </div>
              <div className=' col-span-2 my-2 mx-2 md:mx-0'>
                <input value={regPhone} onChange={(e) => setRegPhone(e.target.value)} name='regPhone' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white h-12" />
              </div>
              <div className='col-start-7 col-end-8 md:text-right p-3 my-2 '>
                <label className=''>Email:</label>
              </div>
              <div className='col-span-2 my-2 mx-2 md:mx-0'>
                <input value={regEmail} onChange={(e) => setRegEmail(e.target.value)} name='regEmail' type="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white h-12" />
              </div>

              {/* รูป */}
              <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                <label className=''>อัพโหลดรูปภาพ :</label>
              </div>
              <div className='md:col-span-4 md:my-2 md:self-center md:flex items-center pb-4 md:pb-0 mx-2 md:mx-0'>
                <input type="file" id='regImg' name="regImg" className='w-full' onChange={handleFileUpload}/>
              </div>



            </div>


          </div>



          {/* ประวัติการศึกษา  */}
          <div className=' outline outline-1  drop-shadow-xl shadow-xl my-10 pb-2 '>



          <div className='bg-black bg-opacity-80 w-full h-[40px] md:h-[50px] drop-shadow-md  shadow-md '>
              <h1 className=' text-lg md:text-3xl text-[#FFBF00] p-2'> ประวัติการศึกษา</h1>
            </div>



            <div className='md:grid md:grid-cols-12 grid-cols-1 pt-4 '>
              {/* สถาบันการศึกษา */}

              <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                <label className=''>สถาบันการศึกษา:</label>
              </div>
              <div className=' col-span-6 my-2 mx-2 md:mx-0'>
                <input value={regSchool} onChange={(e) => setRegSchool(e.target.value)} name='regSchool' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white h-12" />
              </div>



              {/* ระดับการศึกษา */}

              <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                <label className=''>สำเร็จการศึกษาระดับ:</label>
              </div>
              <div className=' col-span-2 my-2 mx-2 md:mx-0'>
                <select value={regDegree} onChange={(e) => setRegDegree(e.target.value)} name='regDegree' className='  text-sm block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white h-12'>
                  <option value="">-- เลือกระดับ --</option>
                  <option value="มัธยมศึกษาปีที่ 6">มัธยมศึกษาปีที่ 6</option>
                  <option value="ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)">ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)</option>
                  <option value="ประกาศนียบัตรวิชาชีพ (ปวช.)">ประกาศนียบัตรวิชาชีพ (ปวช.)</option> 
                </select>
              </div>
              <div className='col-start-6 col-end-8 md:text-right p-3 my-2 '>
                <label className=''>เกรดเฉลี่ย</label>
              </div>
              <div className='col-span-2 my-2 mx-2 md:mx-0'>
                <input value={regGpa} onChange={(e) => setRegGpa(e.target.value)} name='regGpa' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white h-12" />
              </div>
            </div>


          </div>





          {/* คณะ/สาขา  */}
          <div className=' outline outline-1  drop-shadow-xl shadow-xl my-10 pb-2 '>


          <div className='bg-black bg-opacity-80 w-full h-[40px] md:h-[50px] drop-shadow-md  shadow-md '>
              <h1 className=' text-lg md:text-3xl text-[#FFBF00] p-2'> คณะ/สาขา</h1>
            </div>



            <div className='md:grid md:grid-cols-12 grid-cols-1 '>
              {/* หลักสูตร */}

              <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                <label className=''>หลักสูตร:</label>
              </div>
              <div className='md:col-span-1 md:my-2 md:self-center md:flex  ml-5 flex items-center'>
                <input onChange={(e) => setRegProgram(e.target.value)} name='regProgram' value="4ปี" type="radio" className="w-5 h-5" />
                <label className='ml-4 md:ml-1 md:text-sm '>4 ปี</label>
              </div>

              <div className='md:col-span-2 md:my-2 md:self-center md:flex mt-2 ml-5 flex items-center '>
                <input onChange={(e) => setRegProgram(e.target.value)} name='regProgram' value="2 ปี (ต่อเนื่อง)" type="radio" className="w-5 h-5 " />
                <label className='ml-4 md:ml-1 md:text-sm'>2 ปี (ต่อเนื่อง)</label>
              </div>




              {/* คณะ และ สาขา */}

              <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                <label className=''>คณะ:</label>
              </div>
              <div className=' col-span-2 my-2 mx-2 md:mx-0'>
                <select name='regFaculty' className='  text-sm block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white h-12' onChange={handleFacultyChange}>
                  <option value="">-- เลือกคณะ --</option>
                  <option value="คณะบริหารธุรกิจ">คณะบริหารธุรกิจ</option>
                  <option value="คณะวิทยาศาสตร์และเทคโนโลยี">คณะวิทยาศาสตร์และเทคโนโลยี</option>
                  <option value="คณะศิลปศาสตร์">คณะศิลปศาสตร์</option>
                  <option value="คณะวิศวกรรมศาสตร์">คณะวิศวกรรมศาสตร์ </option>
                </select>
              </div>
              <div className='col-start-6 col-end-8 md:text-right p-3 my-2 '>
                <label className=''>สาขา:</label>
              </div>
              <div className='col-span-2 my-2 mx-2 md:mx-0'>
                <select name='regMajor' className='  text-sm block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white h-12'
                  disabled={!regFaculty} // Disable the select if faculty is not selected
                  value={regMajor}
                  onChange={(e) => setRegMajor(e.target.value)}
                >
                  <option value="" disabled>-- เลือกสาขา --</option>
                  {majorOptionsByFaculty[regFaculty]?.map((major) => (
                    <option key={major} value={major}>
                      {major}
                    </option>
                  ))}
                </select>
              </div>







            </div>



          </div>

          {/* ปุ่มส่งใบสมัคร */}
          <div className='flex justify-center'>
            {/* Modal */}
            <Modal onSubmit={handleSubmit} />
          </div>



        </div>



      </div>

      {isLoading ? (
        <Loading />
      ) : (
        null
      )}

      {isMissingModalOpen && (
        <Missing onClose={() => setIsMissingModalOpen(false)} missingFields={missingFields} />
      )}

      {isSuccess ? (
        <Success onClose={() => {
          setIsSuccess(false);
        }} />
      ) : (
        null
      )}


    </RootLayout>
  )
}

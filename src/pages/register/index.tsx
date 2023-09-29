import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import RootLayout from '@/components/layout'
import Link from 'next/link';
import { useState, useEffect } from 'react'; // เพิ่มการ import useEffect
import Loading from '@/components/loading'; // เพิ่มการ import คอมโพเนนต์ Loading

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isLoading, setIsLoading] = useState(true); // เริ่มต้น isLoading เป็น true

  // useEffect สำหรับจำลองการโหลดรูปภาพทุกตัวในหน้า
  useEffect(() => {
    const images = document.querySelectorAll('img'); // เลือกทุก <img> ในหน้า
    let loadedImages = 0;

    function handleImageLoad() {
      loadedImages++;
      if (loadedImages === images.length) {
        setIsLoading(false);
      }
    }

    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
      });
    };
  }, []);
  return (
    <RootLayout>
      {isLoading && <Loading />} {/* แสดงหน้าต่าง Loading ถ้า isLoading เป็น true */}
      <div className='relative'>
        <img className='contrast-50' src="/img/register/17.3.jpg" alt="" />
        <div className='absolute inset-x-0 top-[35%]  md:h-40 text-center'>
          {/* <h1 className=' text-xl md:text-6xl text-yellow-400 drop-shadow-md'>สมัครเข้าศึกษา</h1>
            <h2 className=' text-xl text-white md:text-6xl'>วิทยาลัยเทคโนโลยีพนมวันท์</h2> */}
          <h1 className='text-3xl md:text-4xl lg:text-6xl text-yellow-400 drop-shadow-md'>สมัครเข้าศึกษา</h1>
          <h2 className='text-3xl md:text-4xl lg:text-6xl text-white'>วิทยาลัยเทคโนโลยีพนมวันท์</h2>
        </div>
      </div>




      {/* <div className=' bg-zinc-800 h-[350px]'> */}
      <div className='bg-zinc-800 sm:h-[1000px] md:h-[350px] lg:h-[400px] xl:h-[350px]'>
        <div className='container mx-auto md:py-10 py-7'>
          <div className=' text-yellow-600 text-2xl md:text-4xl drop-shadow-md mx-5 font-semibold mb-2'>สิ่งที่ควรรู้ก่อนสมัครเรียน </div>
          <div className="grid grid-row-2 md:grid-flow-col gap-4 rounded-md bg-yellow-500 p-4 mx-5 ">
            
            
            
            <div className='md:border-r-2 border-black p-2'>
              <h2 className=' text-xl md:text-xl lg:text-2xl xl:text-3xl text-blue-950 font-semibold'>คุณสมบัติของผู้เรียน</h2>
              <span className=' text-sm md:text-md lg:text-xl'>
                <h3 >เป็นผู้สำเร็จการศึกษาดังต่อไปนี้</h3>
                <li>มัธยมศึกษาตอนปลาย(ม.6) หรือ เทียบเท่า</li>
                <li>ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)</li>
                <li>ประกาศนียบัตรวิชาชีพ (ปวช.)</li>
              </span>
            </div>

            <div>
              <h2 className='text-xl md:text-xl lg:text-2xl xl:text-3xl text-blue-950 font-semibold'>หลักฐานในการใช้สมัครเรียน</h2>
              <span className='text-sm md:text-md lg:text-xl'>
                <li>รูปถ่ายหน้าตรงไม่สวมหมวกไม่สวมแว่นตาดำขนาด 1 นิ้วจำนวน 1 รูป</li>
                <li>สำเนาผลการเรียน ม.ปลาย หรือเทียบเท่า จำนวน 1 ชุด</li>
                <li>สำเนาทะเบียนบ้าน จำนวน 1 ชุด ( กรณียังไม่มีใบ รบ. ให้ใช้ใบรับรองผลการเรียนแทน )</li>
                <li>สำเนาบัตรประจำตัวประชาชน จำนวน 1 ชุด</li>
              </span>
            </div>
          </div>

        </div>
      </div>


      <img className='' src="/img/register/b1.png" alt="" />
      <img className='' src="/img/register/b2.png" alt="" />

     
    </RootLayout>
  )
}

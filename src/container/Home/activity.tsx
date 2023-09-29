import Link from "next/link";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useEffect } from 'react';
import Loading from "@/components/loading";

interface IndexNews {
  id: number;
  activityImg: string;
  activityTitle: string;
  activitySubDetail: string;
  // Add other properties if there are more
}


export default function Activity() {
  const initialVisibleItems = 3;
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
  const [activitySchoolData, setIndexNewsData] = useState<IndexNews[]>([]); // Use the defined interface here
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadMore = () => {
    setVisibleItems(visibleItems + 3);
  };

  useEffect(() => {
    fetch('/api/activitySchool')
      .then((response) => response.json())
      .then((data) => {
        setIndexNewsData(data.activitySchool);
        setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์
      });
  }, []);


  return (
    <div>
      {isLoading && <Loading />}
      <div className="bg-[#1F306A]/80 w-full h-[900px] sm:h-[1150px] md:h-[900px] lg:h-[550px] xl:h-[550px]">
        <div className="md:w-full h-2 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>
        <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl mx-5 mt-6 md:ml-0 py-5 text-center text-yellow-400">
          กิจกรรมที่ผ่านมา
        </h1>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {activitySchoolData.slice(0, visibleItems).map((activitySchool) => (
              <Link key={activitySchool.id} href={`/activity/${activitySchool.id}`} passHref>
                {/* <div key={activitySchool.id} className="block p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 w-80"> */}
                <div key={activitySchool.id} className="block p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 w-72 sm:w-50 md:w-72 lg:w-72 xl:w-96 ">
                  <img
                    className="w-full h-32 sm:h-48 md:h-52 object-cover"
                    src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${activitySchool.activityImg ? activitySchool.activityImg : 'f701ce08-7ebe-4af2-c4ec-2b3967392900'}/public`}
                    alt="activitySchool image"
                  />
                  <div className="px-4 py-2 sm:py-3 md:py-4 h-16 sm:h-20 md:h-24">
                    <div className="text-sm sm:text-base md:text-lg lg:text-lg font-bold mb-2">
                      {activitySchool.activityTitle}
                    </div>
                  </div>
                </div>
               

              </Link>
            ))}
          </div>
        </div>



        <div className="md:w-full h-0.5 mt-4 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900  md:h-150 lg:h-190 container mx-auto items-center justify-center mb-5"></div>
        <div className="text-center min-h-[140px] w-full place-items-center overflow-x-auto lg:overflow-visible rounded-lg p-2">
          <Link
            href="news"
            className="text-sm sm:text-base md:text-lg lg:text-lg underline underline-offset-1 middle none center mr-4 rounded-lg bg-blue-900 py-3 px-5 font-sans font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            อ่านทั้งหมด
          </Link>
        </div>
      </div>
      <div className="md:w-full h-2  bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>
    </div>
  );
}




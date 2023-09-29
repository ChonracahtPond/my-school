import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Loading from '@/components/loading';

// ...

interface newsSchool {
  id: number;
  newImg: string;
  newName:string;
  newTitle: string;
  newSubDetail: string;
  // Add other properties if there are more
}

function Activityloader() {
  const initialVisibleItems = 4;
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
  const [newsSchoolData, setnewsSchoolData] = useState<newsSchool[]>([]); // Use the defined interface here
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  const handleLoadMore = () => {
    setVisibleItems(visibleItems + 4);
  };

  useEffect(() => {
    fetch('/api/newsSchool')
      .then((response) => response.json())
      .then((data) => {
        setnewsSchoolData(data.newsSchool);
        setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

      });
  }, []);

  return (
    <>
      {isLoading && <Loading />} {/* แสดงหน้าต่าง Loading ถ้า isLoading เป็น true */}

      <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {newsSchoolData.slice(0, visibleItems).map((newsSchool) => (
            <Link key={newsSchool.id} href={`/news/${newsSchool.id}`} passHref>
              <div key={newsSchool.id} className='max-w-sm rounded overflow-hidden shadow-lg bg-[#E5E4E2]'>
                <img
                  className=' w-full h-24 object-cover'
                  src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${newsSchool.newImg ? newsSchool.newImg : 'f701ce08-7ebe-4af2-c4ec-2b3967392900'}/public`}
                  alt='indexActivity image'
                />
                <div className='px-6 py-4 h-24'>
                  <div className='font-bold text-xl mb-2'>{newsSchool.newName}</div>
                  {/* <p className='text-gray-700 text-base'>{newsSchool.newSubDetail}</p> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className='flex justify-center'>
        {visibleItems < newsSchoolData.length && (
          <button onClick={handleLoadMore} className=" mt-6 group relative h-12 w-40 overflow-hidden rounded-2xl bg-black bg-opacity-80 text-lg font-bold text-white">
            โหลดเพิ่มเติม
            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30" />
          </button>
        )}
      </div>
    </>
  );
}

export default Activityloader;

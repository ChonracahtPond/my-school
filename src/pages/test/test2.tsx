import React, { useState } from "react";
import axios from "axios";

function YourComponent() {
  const [imgprifile, setimgprifile] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result as string;
        setimgprifile(base64String);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (imgprifile) {
      try {
        const response = await axios.post("/api/regform", {
          image: imgprifile, // ส่งรูปภาพในรูปแบบ base64
          // เพิ่มข้อมูลอื่น ๆ ที่คุณต้องการส่งไปกับรูปภาพ
        });

        // ทำสิ่งที่คุณต้องการหลังจากอัพโหลดสำเร็จ เช่น แสดงข้อความคำขอสำเร็จ
        console.log("อัพโหลดรูปภาพสำเร็จ", response.data);
      } catch (error) {
        // จัดการเมื่อมีข้อผิดพลาด เช่น แสดงข้อความข้อผิดพลาด
        console.error("เกิดข้อผิดพลาดในการอัพโหลดรูปภาพ", error);
      }
    }
  };

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div className="rounded-md border border-gray-100 bg-white p-4 shadow-md w-full sm:w-[300px]">
          <label htmlFor="upload" className="flex flex-col items-center gap-2 cursor-pointer">รูปถ่าย 1.5 นิ้ว
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-white stroke-indigo-500" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-gray-600 font-medium">กรุณาอัพโหลดรูปภาพ</span>
          </label>
          <input id="upload" type="file" className="hidden" onChange={handleFileChange} />
        </div>
      </div>
      <div id="image-container" className="mt-4">
        {imgprifile && <img src={imgprifile} alt="Uploaded" className="w-[200px] h-[200px] sm:mx-auto " />}
      </div>
      <button onClick={handleUpload}>ตกลง</button>
    </div>
  );
}

export default YourComponent;

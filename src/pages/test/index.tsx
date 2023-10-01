import React, { useState } from "react";

function App() {
  const [imgprifile, setimgprifile] = useState<string | null>(null);

  // ฟังก์ชันเมื่อผู้ใช้เลือกไฟล์
  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // สร้าง FileReader เพื่ออ่านไฟล์รูปภาพ
      const reader = new FileReader();

      // เมื่ออ่านไฟล์เสร็จสิ้น
      reader.onload = (e) => {
        // ดึงข้อมูล Base64 จาก FileReader
        const base64Data = e.target?.result as string;
        setimgprifile(base64Data);
      };

      // อ่านไฟล์รูปภาพในรูปแบบ Base64
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
      />
      {/* {imgprifile && (
        <div>
          <h2>รูปภาพที่เลือก</h2>
          <img src={imgprifile} alt="รูปภาพ" width="300" />
          <p>Base64 ของรูปภาพ:</p>
          <textarea value={imgprifile} readOnly rows={10} cols={50} />
        </div>
      )} */}
    </div>
  );
}

export default App;

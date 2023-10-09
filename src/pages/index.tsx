import RootLayout from "@/components/layout";
import Regfrom from "./register";


export default function Index() {
  return (
    <>
      <RootLayout>
        {/* <Thesliderbar /> */}
        <p className=" text-center text-3xl my-5">หลักสูตรการศึกษานอกระบบระดับการศึกษาขั้นพื้นฐาน</p>
        <p className=" text-center text-xl text-red-700"> ศูนย์ส่งเสริมการเรียนรู้อําเภอเมืองอุดรธานี จังหวัดอุดรธานี</p>
        <Regfrom/>
  
      </RootLayout>
    </>
  )
}
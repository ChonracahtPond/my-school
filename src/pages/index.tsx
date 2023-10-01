import RootLayout from "@/components/layout";
import Thesliderbar from '@/container/Home/Thesliderbar';
import Activity from "@/container/Home/activity";
import SliderNews from "@/container/Home/sliderNew";
import Statistics from "@/container/Home/statistics";
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
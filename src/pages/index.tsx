import RootLayout from "@/components/layout";
import Thesliderbar from '@/container/Home/Thesliderbar';
import Activity from "@/container/Home/activity";
import Menu from "@/container/Home/menu";
import SliderNews from "@/container/Home/sliderNew";
import Statistics from "@/container/Home/statistics";
import Regfrom from "./register";


export default function Index() {
  return (
    <>
      <RootLayout>
        {/* <Thesliderbar /> */}
        <Regfrom/>
        <Menu/>
      </RootLayout>
    </>
  )
}
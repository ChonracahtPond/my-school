import Link from 'next/link';
export default function Stikey(){
    return(
        <div className="fixed bottom-[150px]  left-0 right-5 z-40 px-4 py-2 ">
      <Link href="https://www.facebook.com/PhanomwanCollege/">
      <p className="text-gray-400 underline"> <img
            className=" absolute inset-y-0 right-0 w-16"
            src="/img/messenger-Logo.png"
          /></p>
          </Link>
    </div>
    )
}
import Visiter from "@/components/visiter";

export default function Statistics() {
    return (
        <>
            <div className=" bg-slate-800 w-full h-[200px]">



                {/* <div className="container mx-auto ">
                    <div className="flex justify-center items-center">
                        <div className="bg-white w-1/4 md:w-20 h-0.5"></div>
                        <div className="text-white text-xl md:text-2xl mx-2 text-center">สถิติ</div>
                        <div className="bg-white w-1/4 md:w-20 h-0.5"></div>
                    </div>
                </div> */}
                <div className="flex justify-center items-center ">
                    <div className=" bg-white w-20 h-0.5 mt-5"></div>
                    <div className=" text-white text-2xl mt-5 mx-2">สถิติ</div>
                    <div className=" bg-white w-20 h-0.5 mt-5"></div>
                </div>





                {/* <div className="md:grid md:grid-flow-col md:auto-cols-max md:gap-2 md:justify-center h-36 text-center">
                    <p className=" pt-3 md:pt-0 my-auto  text-yellow-400 border-r-2 border-gray-500  text-lg md:text-xl lg:text-2xl">
                        4<span className="my-auto  text-white text-lg md:text-xl lg:text-2xl">คณะ</span>
                    </p>
                    <p className=" my-auto  text-yellow-400 border-r-2 border-gray-500 text-lg md:text-xl lg:text-2xl">
                        {" "}
                        20
                        <span className="my-auto  text-white  text-lg md:text-xl lg:text-2xl">หลักสูตร</span>
                    </p>
                    <p className=" my-auto  text-yellow-400 border-r-2 border-gray-500 text-lg md:text-xl lg:text-2xl">
                        {" "}
                        500
                        <span className="my-auto  text-white  text-lg md:text-xl lg:text-2xl">
                            กำลังศึกษา
                        </span>
                    </p>
                    <div className=" my-auto  text-yellow-400  text-lg md:text-xl lg:text-2xl" >
                        <Visiter />


                        <span className="my-auto  text-white  text-lg md:text-xl lg:text-2xl">
                            ผู้เข้าชม
                        </span>

                    </div>
                </div> */}




                {/* <div className="flex justify-center mt-10">
                    <p className="my-auto mx-5 text-yellow-400 text-lg md:text-xl lg:text-2xl "> 4
                        <span className=" my-auto mx-2  text-white  text-lg md:text-xl lg:text-2xl">คณะ</span>
                    </p>

                    <p className=" my-auto mx-5 text-yellow-400 text-lg md:text-xl lg:text-2xl"> 20
                        <span className="my-auto mx-2 text-white  text-lg md:text-xl lg:text-2xl">หลักสูตร</span>
                    </p>


                    <p className=" my-auto mx-5 text-yellow-400 text-lg md:text-xl lg:text-2xl">
                        500
                        <span className="my-auto mx-2 text-white text-lg md:text-xl lg:text-2xl">
                            กำลังศึกษา
                        </span>
                    </p>

                    <div className=" my-auto mx-5  text-yellow-400  text-lg md:text-xl lg:text-2xl" >
                        <Visiter />
                        <span className="my-auto  mx-2 text-white  text-lg md:text-xl lg:text-2xl">
                            ผู้เข้าชม
                        </span>

                    </div>
                </div> */}

                <div className="flex mt-5 sm:mt-5 md:mt-5 lg:mt-5 xl:mt-10 flex-col sm:flex-row justify-center  text-center">

                    <p className=" mx-5 text-yellow-400 text-lg md:text-xl lg:text-2xl">
                        4
                        <span className="mx-2 text-white text-lg md:text-xl lg:text-2xl">คณะ</span>
                    </p>
                   <p className=" mx-5 text-yellow-400 text-lg md:text-xl lg:text-2xl">
                        20
                        <span className=" mx-2 text-white text-lg md:text-xl lg:text-2xl">หลักสูตร</span>
                    </p>
                    <p className=" mx-5 text-yellow-400 text-lg md:text-xl lg:text-2xl">
                        500
                        <span className="mx-2 text-white text-lg md:text-xl lg:text-2xl">
                            กำลังศึกษา
                        </span>
                    </p>
                        <div className=" mx-5 text-yellow-400 text-lg md:text-xl lg:text-2xl">
                            <Visiter />
                            <span className=" mx-2 text-white text-lg md:text-xl lg:text-2xl">
                                ผู้เข้าชม
                            </span>
                        </div>
                    
                </div>






            </div>


            <div className="md:w-full h-2 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>

        </>
    )
}
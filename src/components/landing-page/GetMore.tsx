import { getMore } from "@/constants/landingPage";
import Image from "next/image";
import { CurvedBg } from "@/assets";
import React from "react";
import Button from "../Button";
import PLink from "../PLink";


const events =[
  {
    date:'September, 2020',
    title:'BPM Excellence awards'
  },
  {
    date:'',
    title:'The International BPM Summit'
  },
  {
    date:'30/11/2023',
    title:'Fellows Dinner'
  },
  {
    date:'27/10/2023',
    title:'Induction of New Members'
  },
  {
    title:'Member Compulsory Professional Development Course-Quarterly',
    date:'28/06/2023,25/10/2023'
  },
  {
    title:'Webinar (Monthly)',
    date:'28/07/2023'
  },
  {
    title:'Webinar (Monthly)',
    date:'25/08/2023'
  },
  {
    title:'Webinar (Monthly)',
    date:'29/09/2023'
  },
  {
    title:'Webinar (Monthly)',
    date:'24/11/2023'
  },
]
const GetMore = () => {
  return (
    <div className="flex mt-4 md:mt-24 items-center relative  flex-col xl:flex-row">
      <div className="w-full my-40 relative xl:left-[100px]">
        <h2 className="font-bold text-[30px] md:text-[41px] text-[#00305E]  text-center xl:text-left">
          Get more from The BPMI
        </h2>
        {getMore.map(({ title, text, pic, id }) => (
          <div className="flex flex-col   md:flex-row my-12" key={id}>
            <div className="mb-4">
              <h4 className="text-gray text-[14px] font-bold ">{title}</h4>
              <p className="text-[#6C8AC0] text-[22px] max-w-md mr-16 font-inter ">
                {text}
              </p>
            </div>
            <Image src={`/${pic}.jpg`} width={200} height={200} alt={title} />
          </div>
        ))}
      </div>
      <div className=" w-full xl:flex flex-col items-end hidden absolute z-10 top-[40px] ">
        <Image
          src={"/div.jpg"}
          alt=""
          width={200}
          height={200}
          className="mr-12 md:mr-24 mb-12"
        />
        <div className=" relative">
          <div className="mt-20   w-full flex items-center justify-center  absolute">
            <div className=" ml-20">
              <h2 className="text-primary font-bold text-[39px] font-inter ">
                Join Our Upcoming <br /> Events
              </h2>
              <div className="">
                {events.map((a,index) => (
                  <div
                    key={index}
                    className="flex max-w-[500px] border-b border-[#DBDBDB] py-2"
                  >
                    <div className="font-semibold text-[#00305E] text-[21px] font-inter mr-6">
                      <p className="text-[12px]  border-b-2 border-[#9ACA3C] pb-1 ">
                     {a.date}
                      </p>
                      {/* {a} */}
                    </div>
                    <p className="font-inter font-normal text-[20px] text-gray ">
                   {a.title}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex w-full justify-center p-16">
                <PLink
                  href="services"
                  text="View All"
                  styles="bg-primary text-white rounded-full px-4"
                />
              </div>
            </div>
          </div>
          <CurvedBg className=" max-w-[700px]" />
        </div>
      </div>
      <div className=" w-full flex flex-col items-end xl:hidden   z-10 top-[40px] ">
        <Image
          src={"/div.jpg"}
          alt=""
          width={200}
          height={200}
          className="mr-12 md:mr-24 mb-12"
        />
        <div className=" relative w-full ">
          <div className="mt-20    flex items-center justify-center  ">
            <div className=" ">
              <h2 className="text-primary mb-3 text-center font-bold text-[25px] md:text-[39px] font-inter ">
                Join Our Upcoming Events
              </h2>
              <div className="">
                {events.map((a,index) => (
                  <div key={index} className="flex  border-b border-[#DBDBDB] py-2">
                    <div className="font-semibold text-[#00305E] text-[21px] font-inter mr-6">
                      <p className="text-[12px]  border-b-2 border-[#9ACA3C] pb-1 ">
                       {a.date}
                      </p>
                    </div>
                    <p className="font-inter font-normal text-[20px] text-gray ">
                      {a.title}                    </p>
                  </div>
                ))}
              </div>
              <div className="flex w-full justify-center p-16">
                <PLink
                  href="services"
                  text="View All"
                  styles="bg-primary text-white rounded-full px-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetMore;

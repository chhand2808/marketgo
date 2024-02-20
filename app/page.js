import Navbar from "@/components/Navbar";
import Image from "next/image";
import hero from '@/public/assets/img/hero.jpg'
import brocoli from "@/public/assets/img/brocoli.jpg"
import { GiTrophy, GiTrophyCup } from "react-icons/gi";
import { HiMiniTrophy } from "react-icons/hi2";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-10 ">
        <Navbar/>
      </div>
      <div>
        <Image
          src={hero}
          className="w-fit"
        />
        <div className="text-[60px] font-extrabold text-white absolute top-[40vh] left-[20vh] border-text-2">
          <h1>Welcome to MarketGo</h1>
          <h3>Your Ready to Go Market Platform</h3>
        </div>
      </div>
      <div className="flex flex-col m-10 t-deal text-[60px] justify-self-center align-middle items-center font-extrabold text-white border-text-2">
          <h3>Deal of the day</h3>
          <div className='grid md:grid-cols-3 mt-10 grid-cols-1 gap-4 md:gap-10 justify-center items-center max-w-5xl'>
            <div className="flex flex-col max-w-[45vh] justify-center items-center align-middle bg-[#A9927D]  px-4 py-4 rounded-lg shadow-md hover:bg-[#e7c9ae] md:order-2 hover:scale-[1.05] transition duration-500">
            <Image className='w-fit rounded-lg' src={brocoli} />
              <h2 className="text-2xl text-white font-bold">I Place</h2>              
              <p className="text-[#F2F4F3] text-3xl my-5">SOME SMOL DESCRIPTION</p>
              <div className="grid grid-cols-2 gap-1">
              <div className="mx-auto">
                <button
              className="middle none center rounded-lg bg-[#5E503F] py-3 px-3 font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg hover:shadow-[#F2F4F3]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            
             >Add to Cart
            </button>
            </div>
              <div className="mx-auto">
              <button
                  className="middle none center rounded-lg bg-[#22333B] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#F2F4F3]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  Buy Now
              </button>
              </div>
            </div>
            </div>
            <div className="flex flex-col max-w-[45vh] justify-center items-center align-middle bg-[#A9927D] px-4 py-4 rounded-lg shadow-md hover:bg-[#e7c9ae] hover:scale-[1.05] transition duration-500 md:order-1">
              <Image className='w-fit rounded-lg' src={brocoli} />
              <h2 className="text-2xl text-white font-bold">II Place</h2>
              <p className="text-[#F2F4F3] text-3xl my-5">SOME SMOL DESCRIPTION</p>
              <div className="grid grid-cols-2 gap-1">
              <div className="mx-auto">
                <button
              className="middle none center rounded-lg bg-[#5E503F] py-3 px-3 font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg hover:shadow-[#F2F4F3]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            
             >Add to Cart
            </button>
            </div>
              <div className="mx-auto">
              <button
                  className="middle none center rounded-lg bg-[#22333B] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#F2F4F3]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  Buy Now
              </button>
              </div>
            </div>
            </div>
            <div className="flex flex-col max-w-[45vh] bg-[#A9927D] px-4 py-4 rounded-lg justify-center items-center align-middle shadow-md hover:bg-[#e7c9ae] md:order-3 hover:scale-[1.05] transition duration-500">
              <Image className='w-fit rounded-lg' src={brocoli} />
              <h2 className="text-2xl mx-auto text-white font-bold">III Place</h2>
              <p className="text-[#F2F4F3] text-3xl my-5">SOME SMOL DESCRIPTION</p>
              <div className="grid grid-cols-2 gap-1">
              <div className="mx-auto">
                <button
              className="middle none center rounded-lg bg-[#5E503F] py-3 px-3 font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg hover:shadow-[#F2F4F3]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            
             >Add to Cart
            </button>
            </div>
              <div className="mx-auto">
              <button
                  className="middle none center rounded-lg bg-[#22333B] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#F2F4F3]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  Buy Now
              </button>
              </div>
            </div>
            </div>
          </div>
      </div>
    </>
  );
}

import Navbar from "@/components/Navbar";
import Image from "next/image";
import hero from '@/public/assets/img/hero.jpg'

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
    </>
  );
}

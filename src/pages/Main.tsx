import { Navbar } from "../components/Navbar";

import homeImg from '../assets/homeImg.jpg'

export const Main = () => {
  return (
    <div className="rounded-md">
      <div className="flex flex-col">
        <Navbar />
        <div className="flex justify-center py-25 bg-blue-50">
          <div className="flex gap-25 items-center">
            <div className="flex flex-col gap-5">
              <p className="text-6xl/18 font-[Lora] font-semibold text-nowrap">Hello, my<br/>name is Alex</p>
              <p className="text-2xl font-light">
                I am an <span className="font-semibold">aspiring software<br/> engineer</span> from a <u>little red dot</u>.
              </p>
            </div>
            <img className="w-125 rounded-full object-cover aspect-square" src={homeImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

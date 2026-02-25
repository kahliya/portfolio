import { Navbar } from "../components/Navbar";

import homeImg from '../assets/homeImg.jpg'

export const Main = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex justify-center px-20 py-18 bg-blue-50">
        <div className="flex flex-col gap-15 items-center max-w-5xl lg:flex-row lg:gap-25">
          <div className="order-2 lg:order-1 flex flex-col gap-5">
            <p className="text-6xl/18 font-[Lora] font-semibold text-nowrap">Hello, my<br/>name is Alex</p>
            <p className="text-2xl font-light">
              I am an <span className="font-semibold">aspiring software<br/> engineer</span> from a <u>little red dot</u>.
            </p>
          </div>
          <img className="order-1 lg:order-2 w-full rounded-full object-cover aspect-square" src={homeImg} />
        </div>
      </div>
      <div className="flex justify-center py-10">
        <div className="flex flex-col gap-5 max-w-5xl">
          <p className="text-6xl/18 font-[Lora] font-semibold text-nowrap">My projects</p>
          <p className="text-2xl font-light">
            put carousel here lel
          </p>
        </div>
      </div>
    </div>
  );
}

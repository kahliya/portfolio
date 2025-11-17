import { Navbar } from "../components/Navbar";

export const Main = () => {
  return (
    <div className="p-5">
      <div className="bg-slate-50 p-8 rounded-md">
        <div className="flex flex-col gap-5">
          <Navbar />
          <hr className="border-slate-300"/>
          <p className="text-3xl">test</p>
        </div>
      </div>
    </div>
  );
}

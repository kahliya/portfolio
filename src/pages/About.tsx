import { Navbar } from "../components/Navbar"

export const About = () => {
  return (
    <div className="rounded-md">
      <div className="flex flex-col">
        <Navbar />
        <div className="flex justify-center py-25 px-100 bg-blue-50">
          <div className="flex flex-col gap-15">
            <div className="flex gap-25 items-center">
              <div className="flex flex-col gap-10">
                <p className="text-6xl/18 font-[Lora] font-semibold text-nowrap">A little about me<br/>& my journey so far</p>
                <p className="text-lg font-light">
                  I'm a <span className="font-semibold">software engineer</span> perfecting my craft of clean & elegant code since 2016.<br/>
                  Also an avid <span className="font-semibold">archer</span> in my free time!
                </p>
              </div>
            </div>

            <hr className="text-blue-200" />
            <div className="flex flex-col gap-15">
              {/* Section 1: Coding */}
              <div className="flex gap-10 font-light">
                <p className="w-3/5">
                  My hometown is the Earth’s little red dot, <span className="font-semibold">Singapore</span>.
                  Way too hot & humid for my preference, but hey it’s a safe place to call home.
                  I began my tech journey in Cybersecurity, but found my forever home in <span className="font-semibold">Software Engineering</span>.
                  <br/><br/>
                  I’m currently pursuing my bachelor’s degree in <span className="font-semibold">Computer Science</span>, and plan to graduate in mid-2026, 
                  where I get to join the workforce as a <span className="line-through text-xs">corporate slave</span> full-fledged engineer.
                </p>
                <img className="w-2/5 object-cover rounded-md bg-red-100" />
              </div>

              {/* Section 2: Archery */}
              <div className="flex gap-10 font-light">
                <div className="w-2/5 flex flex-col gap-10">
                  <img className="object-cover rounded-md aspect-4/3 bg-red-100" />
                  <img className="object-cover rounded-md aspect-2/3 bg-red-100" />
                  <img className="object-cover rounded-md aspect-4/3 bg-red-100" />
                </div>
                <div className="w-3/5 flex flex-col gap-10">
                  <div className="flex flex-col gap-3">
                    <p className="font-semibold text-2xl ">Archery</p>
                    <p>
                      Outside of work and studies, you’ll easily find me at my local archery range, 
                      wielding my burgundy ATF-X and loosing arrows 70 meters downrange.
                      <br/><br/>
                      I’ve competed locally, earned medals, and am still chasing my dreams of competing internationally one day.
                    </p>
                  </div>
                  <img className="object-cover rounded-md aspect-4/3 bg-red-100" />
                  <img className="object-cover rounded-md aspect-square bg-red-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
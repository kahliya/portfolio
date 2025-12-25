import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <div className="flex p-6 gap-10">
      <div>KAHLIA-HOME</div>
      <div className="flex flex-auto gap-5">
        <NavLink to="/about">About me</NavLink>
        <NavLink to="/project">Blog</NavLink>
      </div>
      <div>Get in touch :)</div>
    </div>
  );
}

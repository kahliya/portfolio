import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <div className="flex gap-10">
      <div>KAHLIA-HOME</div>
      <div className="flex flex-auto gap-3">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/project">Project</NavLink>
      </div>
      <div>CONTACT ME :D</div>
    </div>
  );
}

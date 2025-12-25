import { NavLink } from "react-router";

import githubIcon from '../assets/icon_github.svg';
import linkedInIcon from '../assets/icon_linkedin.svg';
import mailIcon from '../assets/icon_mail.svg';

import '../styles/navbar.css';

export const Navbar = () => {
  return (
    <div className="flex items-center py-6 px-10 gap-10 font-medium">
      <div>KAHLIA-HOME</div>
      <div className="flex flex-auto gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About me</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
      <div className="flex items-center gap-5">
        <div>Get in touch :)</div>
        <img src={githubIcon} className="w-7" />
        <img src={linkedInIcon} className="w-7" />
        <img src={mailIcon} className="w-7" />
      </div>
    </div>
  );
}

import { NavLink, type NavLinkProps } from "react-router";

import GithubIcon from '../assets/icon_github.svg?react';
import LinkedInIcon from '../assets/icon_linkedin.svg?react';
import MailIcon from '../assets/icon_mail.svg?react';


export const Navbar = () => {
  const navLinkClassNames: NavLinkProps['className'] = ({ isActive }) => `text-slate-400 transition-colors duration-400 hover:text-zinc-800 ${isActive && "text-zinc-800 underline"}`;
  const iconLinkClassNames = `flex items-center justify-center rounded-full size-10 hover:bg-blue-50 transition-colors duration-400 text-slate-400 hover:text-zinc-800`

  return (
    <div className="flex items-center py-5 px-10 gap-10 font-medium">
      <div>KAHLIA-HOME</div>
      <div className="flex flex-auto gap-5">
        <NavLink to="/" className={navLinkClassNames}>Home</NavLink>
        <NavLink to="/about" className={navLinkClassNames}>About me</NavLink>
        <NavLink to="/blog" className={navLinkClassNames}>Blog</NavLink>
      </div>
      <div className="flex items-center gap-3">
        <div>Get in touch :)</div>
        <a className={iconLinkClassNames}>
          <GithubIcon className="w-6" />
        </a>
        <a className={iconLinkClassNames}>
          <LinkedInIcon className="w-6" />
        </a>
        <a className={iconLinkClassNames}>
          <MailIcon className="w-6" />
        </a>
      </div>
    </div>
  );
}

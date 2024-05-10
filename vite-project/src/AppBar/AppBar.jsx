import { NavLink } from "react-router-dom";
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AppBar = () => {
    return (
        <header className="css.header">
            <nav>
                <NavLink to='/' className={buildLinkClass}>
                    Home Page
                </NavLink>
                <NavLink to='/aboutUs' className={buildLinkClass}>
                    About Us
                </NavLink>
                <NavLink to='/animals' className={buildLinkClass}>
                    Animals
                </NavLink>
                <NavLink to='/donation' className={buildLinkClass}>
                    Donate
                </NavLink>
                <NavLink to='/contactUs' className={buildLinkClass}>
                    Contact
                </NavLink>
                <NavLink to='/faq' className={buildLinkClass}>
                    FAQ
                </NavLink>
            </nav>
        </header>
    );
};
export default AppBar;

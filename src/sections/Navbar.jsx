import React from "react";
import { navLinks } from "../constants/index.js";

const NavItem = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    < a href={href} className="nav-li_a" onClick={() => { }}>{name}</a>
                </li>
            ))}
        </ul>

    );
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80">
            <div className="max-w-7xl mx-auto">
                < div className="flex justify-between items-center py-5 mx-auto c-space" >
                    <a href="/" className="text-neutral-100 font-bold hover:text-yellow-600 transition-colors">
                        mseiser develops
                    </a>
                    <button onClick={toggleMenu} className="text-neutral-100 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle menu">
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6-h-6" />
                    </button>

                    <nav className="hidden sm:flex">
                        <NavItem />
                    </nav>
                </div >
            </div >

            {/* <-- Mobile Menu --> */}
            < div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'} }`}>
                <nav className="p-5">
                    <NavItem />
                </nav>
            </div >

        </header >
    );
}

export default Navbar
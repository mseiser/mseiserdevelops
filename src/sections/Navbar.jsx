import { IoHomeOutline, IoPersonCircleOutline, IoCodeSlashOutline, IoBriefcaseOutline } from 'react-icons/io5';
import Settingsbar from './Settingsbar';

const Navbar = () => {
    return (
        <div className="fixed bottom-0 z-[9999] left-1/2 p-4 transform -translate-x-1/2 flex justify-center space-x-5">
            <nav className="flex justify-center nav-div px-4 pt-2 pb-2" style={{ backgroundColor: "hsl(var(--background))" }}>
                <a
                    href="#hero"
                    className="text-text transform hover:scale-125 transition-all"
                >
                    <IoHomeOutline className="nav-icon" />
                </a>
                <a
                    href="#about"
                    className="text-text transform hover:scale-125 transition-all"
                >
                    <IoPersonCircleOutline className="nav-icon" />
                </a>
                <a
                    href="#techstack"
                    className="text-text transform hover:scale-125 transition-all"
                >
                    <IoCodeSlashOutline className="nav-icon" />
                </a>
                <a
                    href="#projects"
                    className="text-text transform hover:scale-125 transition-all"
                >
                    <IoBriefcaseOutline className="nav-icon" />
                </a>
            </nav>

            <div className="pt-1">
                {/* <Settingsbar /> */}
            </div>
        </div>
    );
};

export default Navbar;

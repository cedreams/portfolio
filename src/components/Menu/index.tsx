import Logo from "./logo";
import { Link } from "react-scroll";

export default function Menu() {
    return (
        <div className="menu-content">
            <Logo />
            <div className="menu-links">
                <Link smooth to="about" className="menu-link">About</Link>
                <Link smooth to="skills" className="menu-link">Skills</Link>
                <Link smooth to="education" className="menu-link">Education</Link>
                <Link smooth to="contact" className="menu-link contact">Contact</Link>
            </div>
        </div>
    );
}   
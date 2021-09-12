import Logo from "./logo";
import { Link } from "react-scroll";

export default function Menu() {
    return (
        <div className="menu-container">
            <Logo />
            <div className="menu-links">
                <Link smooth to="about" className="menu-link">About</Link>
                <Link smooth to="skills" className="menu-link">Skills</Link>
                <Link smooth to="contact" className="menu-link">Contact</Link>
            </div>
        </div>
    );
}
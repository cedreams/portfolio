import Logo from "./logo";

export default function Menu() {
    return (
        <div className="menu-container">
            <Logo />
            <div className="menu-links">
                <a href="#about" className="menu-link">About</a>
                <a href="#skills" className="menu-link">Skills</a>
                <a href="#projects" className="menu-link">Projects</a>
            </div>
        </div>
    );
}
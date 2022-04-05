import Logo from "./logo";
import { Link } from "react-scroll";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';

export default function Menu() {
    return (
        <div className="menu-content">
            <Logo />
            <div className="menu-links">
                <Link smooth to="about" className="menu-link"><InfoOutlinedIcon />About</Link>
                <Link smooth to="skills" className="menu-link"><HandymanOutlinedIcon />Skills</Link>
                {/* <Link smooth to="education" className="menu-link">Education</Link> */}
                <Link smooth to="contact" className="menu-link"><ContactSupportOutlinedIcon />Contact</Link>
            </div>
        </div>
    );
}   
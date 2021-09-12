import Menu from "../components/Menu";
import About from "../components/About";
import Skills from "../components/Skills";
import Fade from "react-awesome-reveal";
import fadeInUp from "../animations/fadeInUp";
import fadeInDown from "../animations/fadeInDown";

export default function Home() {
    return (
        <>
        <div className="main-container">
            <Fade keyframes={fadeInDown}>
                <Menu />
            </Fade>
            <Fade keyframes={fadeInUp} triggerOnce={true}>
                <About />
            </Fade>
        </div>
        <Skills/>
        </>
    );
}
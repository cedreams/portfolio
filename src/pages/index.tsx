import Menu from "../components/Menu";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Fade from "react-awesome-reveal";
import fadeInUp from "../animations/fadeInUp";
import fadeInDown from "../animations/fadeInDown";

export default function Home() {

    return (
        <>
            <div className="main-container">
                <Fade keyframes={fadeInDown} triggerOnce={true}>
                    <Menu />
                </Fade>
                <Fade keyframes={fadeInUp} triggerOnce={true}>
                    <About />
                </Fade>
            </div>
            <div className="custom-shape-divider-bottom-1645041154">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="bg-container">
                <div className="main-container">
                    <Skills />
                </div>
            </div>
            <div className="main-container">
                <Fade keyframes={fadeInUp} triggerOnce={true}>
                    <Education />
                </Fade>
            </div>
            <div className="bg-container">
                <div className="main-container">
                    <Fade keyframes={fadeInUp} triggerOnce={true} fraction={0.6}>
                        <Contact />
                    </Fade>
                </div>
            </div>
        </>
    );
}
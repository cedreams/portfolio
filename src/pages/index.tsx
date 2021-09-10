import Menu from "../components/Menu";
import About from "../components/About";
import Skills from "../components/Skills";
import Fade from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

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
    )
}
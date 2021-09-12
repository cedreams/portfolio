import Fade from "react-awesome-reveal";
import fadeInUp from "../animations/fadeInUp";

export default function Skills() {
    return (
        <div className="skills-container" id="skills">
            <div className="skills-content">
                <img className="skills-content-image"src="assets/images/undraw_programming_2svr.svg" />
                <div className="skills-body">
                    <Fade keyframes={fadeInUp}>
                        <div className="skills-body-title">Languages, frameworks &amp; tools</div>
                    </Fade>
                    
                        <div className="skills-body-list">
                            <ul>
                            <Fade keyframes={fadeInUp} triggerOnce={true} cascade={true} duration={100} fraction={0}>
                                <li ><img alt="html5" src="assets/images/icons/html5.svg"/><span className="label">HTML5</span></li>
                                <li ><img alt="css3" src="assets/images/icons/css3.svg"/><span className="label">CSS3</span></li>
                                <li ><img alt="javascript" src="assets/images/icons/javascript.svg"/> <span className="label">JavaScript</span></li>
                                <li ><img alt="jquery" src="assets/images/icons/jquery.svg"/> <span className="label">jQuery</span></li>
                                <li ><img alt="react" src="assets/images/icons/react.svg"/><span className="label">React</span></li>
                                <li ><img alt="php" src="assets/images/icons/php.svg"/><span className="label">PHP</span></li>
                                <li ><img alt="laravel" src="assets/images/icons/laravel.svg"/><span className="label">Laravel</span></li>
                                <li ><img alt="java" src="assets/images/icons/java.svg"/><span className="label">Java</span></li>
                                <li ><img alt="c" src="assets/images/icons/c.svg"/><span className="label">C</span></li>
                                <li ><img alt="c++" src="assets/images/icons/cplusplus.svg"/><span className="label">C++</span></li>
                                <li ><img alt="material ui" src="assets/images/icons/material-ui.svg"/><span className="label">Material UI</span></li>
                                <li ><img alt="bootstrap" src="assets/images/icons/bootstrap.svg"/><span className="label">Bootstrap</span></li>
                                <li ><img alt="mysql" src="assets/images/icons/mysql.svg"/><span className="label">Mysql</span></li>
                                <li ><img alt="git" src="assets/images/icons/git.svg"/><span className="label">Git</span></li>
                                <li ><img alt="webpack" src="assets/images/icons/webpack.svg"/><span className="label">Webpack</span></li>
                                <li ><img alt="linux" src="assets/images/icons/linux.svg"/><span className="label">Linux</span></li>
                            </Fade>
                            </ul>
                        </div>
                    
                </div>
            </div>
        </div>
    );
}
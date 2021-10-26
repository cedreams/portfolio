import { whileStatement } from "@babel/types";

export default function Contact() {
    return (
        <div id="contact" className="contact-content">
            <div className="contact-title title">Contact</div>

            <div className="contact-desc">
                Always available to discuss.<br />

                Pop me an email at&nbsp;
                <span className="mail">
                    <a style={{color: "white", textDecoration: "underline"}}href="mailto:hello@cedric.sh">
                        hello@cedric.sh
                    </a>
                </span> 
                &nbsp;or give me a shout on social media.
            </div>
            <div className="contact-item">
                <a href="https://github.com/cedream">
                    <img src="assets/images/icons/github.svg"/>
                    GitHub
                </a>
            </div>
            <div className="contact-item">
                <a href="https://www.linkedin.com/in/c%C3%A9dric-thonus-72451a1b8/">
                    <img src="assets/images/icons/linkedin.svg"/>
                    Linkedin
                </a>
            </div>
        </div>
    );
}
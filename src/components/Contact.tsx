export default function Contact() {
    return (
        <div id="contact" className="contact-content">
            <div className="contact-title title">Contact</div>

            <div className="contact-item">
                <a href="mailto:cedric@thonus.dev">
                    <img src="assets/images/icons/email.svg"/>
                    cedric@thonus.dev
                </a>
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
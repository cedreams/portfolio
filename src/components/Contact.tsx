export default function Contact() {
    return (
        <div id="contact" className="contact-content">
            <div className="contact-title title">Contact</div>

            <div className="contact-item">
                <img src="assets/images/icons/email.svg"/>
                cedric@thonus.dev
            </div>
            <div className="contact-item">
                <img src="assets/images/icons/github.svg"/>
                <a style={{
                  "textDecoration" : "none",
                  "color": "white"  
                }}
                    href="https://github.com/cedream">https://github.com/cedream</a>
            </div>
        </div>
    );
}
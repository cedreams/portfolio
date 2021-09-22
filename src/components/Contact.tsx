import React, {useState} from "react";

export default function Contact() {

    const [phone, setPhone] = useState<number>(0);

    function handleChange(event: any) {
        let dataIn = event.nativeEvent.data;
        let value = event.target.value;

        if((dataIn != null 
            && dataIn.match("[0-9]")
            && value.length <= 10) 
            || (dataIn == null 
                && value.length >= 1)) {
            setPhone(value);
        } 
    }

    function handleClick() {
        //TODO: submit phone number to api.
    }

    return (
        <div id="contact" className="contact-content">
            <div className="contact-title title">Contact</div>

            <div className="contact-item">
                <img src="assets/images/icons/email.svg"/>
                me@cedricthonus.be
            </div>
            <div className="contact-item">
                <img src="assets/images/icons/github.svg"/>
                <a style={{
                  "textDecoration" : "none",
                  "color": "white"  
                }}
                    href="https://github.com/cedream">https://github.com/cedream</a>
            </div>

            <div className="phone-section">
                <input type="text" onChange={handleChange} value={phone} className="phone-field" />
                <span onClick={handleClick} className="phone-submit">Call me</span>
            </div>
            <div className="phone-desc">Put your number and I'll try to call you back</div>

        </div>
    );
}
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
            setPhone(event.target.value);
        } 
    }

    function handleClick() {
        //TODO: submit phone number to api.
    }

    return (
        <div id="contact" className="contact-content">
            <div className="contact-title title">Contact</div>
            <div className="contact-desc"></div>
            <div className="contact-mail">me@cedricthonus.be</div>
            <div className="contact-github">https://github.com/cedream</div>

            <div className="phone-section">
                <input type="text" onChange={handleChange} value={phone} className="phone-field" />
                <span onClick={handleClick} className="phone-submit">Call me</span>
            </div>

        </div>
    );
}
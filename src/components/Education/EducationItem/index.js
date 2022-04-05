export default function({place, name, date}) {
    return (
        <>
            <div className="education-item">
                <div className="education-hole-gradhat">
                    <img src="assets/images/grad_hat.svg" />
                </div>
                <div className="education-item-place">
                    {place}
                </div>
                <div className="education-item-name">
                    {name}
                </div>
                <div className="education-item-date">
                    {date}
                </div>
            </div>
        </>
    );
}